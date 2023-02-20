// Nico Zucca, 12/2022

// Compilation command:
// g++ server.cpp -g -l curl -o server

#include <stdio.h>
#include <sys/socket.h>
#include <netinet/in.h>
#include <unistd.h>
#include <string>
#include <map>
#include <cstring>
#include <fcntl.h>
#include <stdlib.h>
#include <time.h>
#include "processBook.h"

// The port to host the server on.
// Default is 80, but this requires sudo
#define PORT 80
// The size of the receive buffer for receiving files.
// TODO should be dynamic
#define BUFFERSIZE 500000
// How long to wait before timing out when reading the header
#define HEADER_READ_TIMEOUT 0.01 //seconds

// An object that holds all the info contained in a HTTP header in an 
// accessible format.
struct http_header_main
{
    char* process;
    char* filepath;
    std::map<char*,char*> details;
};

// An object that holds the additional information from a post header
struct http_header_post
{
    char* boundary;
    char* content_type;
    char* file_name;
};

// A compare constructor for strings, allows me to use a char as a key in stdmap
// Source: https://stackoverflow.com/questions/4157687/using-char-as-a-key-in-stdmap
struct cmp_str
{
   bool operator()(char const *a, char const *b) const
   {
      return std::strcmp(a, b) < 0;
   }
};

// A map of Mime types, so I know what each file extension should be processed as.
// Source: https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types
std::map<char*,char*,cmp_str> contentTypeMap = 
    {{(char*)"aac",(char*)"audio/aac"},
    {(char*)"abw",(char*)"application/x-abiword"},
    {(char*)"arc",(char*)"application/x-freearc"},
    {(char*)"avif",(char*)"image/avif"},
    {(char*)"avi",(char*)"video/x-msvideo"},
    {(char*)"azw",(char*)"application/vnd.amazon.ebook"},
    {(char*)"bin",(char*)"application/octet-stream"},
    {(char*)"bmp",(char*)"image/bmp"},
    {(char*)"bz",(char*)"application/x-bzip"},
    {(char*)"bz2",(char*)"application/x-bzip2"},
    {(char*)"cda",(char*)"application/x-cdf"},
    {(char*)"csh",(char*)"application/x-csh"},
    {(char*)"css",(char*)"text/css"},
    {(char*)"csv",(char*)"text/csv"},
    {(char*)"doc",(char*)"application/msword"},
    {(char*)"docx",(char*)"application/vnd.openxmlformats-officedocument.wordprocessingml.document"},
    {(char*)"eot",(char*)"application/vnd.ms-fontobject"},
    {(char*)"epub",(char*)"application/epub+zip"},
    {(char*)"gz",(char*)"application/gzip"},
    {(char*)"gif",(char*)"image/gif"},
    {(char*)"htm",(char*)"text/html"},
    {(char*)"html",(char*)"text/html"},
    {(char*)"ico",(char*)"image/ico"}, //{(char*)"ico",(char*)"image/vnd.microsoft.icon"},
    {(char*)"ics",(char*)"text/calendar"},
    {(char*)"jar",(char*)"application/java-archive"},
    {(char*)"jpeg",(char*)"image/jpeg"},
    {(char*)"jpg",(char*)"image/jpeg"},
    {(char*)"js",(char*)"text/javascript"},
    {(char*)"json",(char*)"application/json"},
    {(char*)"jsonld",(char*)"application/ld+json"},
    {(char*)"mid",(char*)"audio/midi"},
    {(char*)"midi",(char*)"audio/midi"},
    {(char*)"mjs",(char*)"text/javascript"},
    {(char*)"mp3",(char*)"audio/mpeg"},
    {(char*)"mp4",(char*)"video/mp4"},
    {(char*)"mpeg",(char*)"video/mpeg"},
    {(char*)"mpkg",(char*)"application/vnd.apple.installer+xml"},
    {(char*)"odp",(char*)"application/vnd.oasis.opendocument.presentation"},
    {(char*)"ods",(char*)"application/vnd.oasis.opendocument.spreadsheet"},
    {(char*)"odt",(char*)"application/vnd.oasis.opendocument.text"},
    {(char*)"oga",(char*)"audio/ogg"},
    {(char*)"ogv",(char*)"video/ogg"},
    {(char*)"ogx",(char*)"application/ogg"},
    {(char*)"opus",(char*)"audio/opus"},
    {(char*)"otf",(char*)"font/otf"},
    {(char*)"png",(char*)"image/png"},
    {(char*)"pdf",(char*)"application/pdf"},
    {(char*)"php",(char*)"application/x-httpd-php"},
    {(char*)"ppt",(char*)"application/vnd.ms-powerpoint"},
    {(char*)"pptx",(char*)"application/vnd.openxmlformats-officedocument.presentationml.presentation"},
    {(char*)"rar",(char*)"application/vnd.rar"},
    {(char*)"rtf",(char*)"application/rtf"},
    {(char*)"sh",(char*)"application/x-sh"},
    {(char*)"svg",(char*)"image/svg+xml"},
    {(char*)"tar",(char*)"application/x-tar"},
    {(char*)"tif",(char*)"image/tiff"},
    {(char*)"tiff",(char*)"image/tiff"},
    {(char*)"ts",(char*)"video/mp2t"},
    {(char*)"ttf",(char*)"font/ttf"},
    {(char*)"txt",(char*)"text/plain"},
    {(char*)"vsd",(char*)"application/vnd.visio"},
    {(char*)"wav",(char*)"audio/wav"},
    {(char*)"weba",(char*)"audio/webm"},
    {(char*)"webm",(char*)"video/webm"},
    {(char*)"webp",(char*)"image/webp"},
    {(char*)"woff",(char*)"font/woff"},
    {(char*)"woff2",(char*)"font/woff2"},
    {(char*)"xhtml",(char*)"application/xhtml+xml"},
    {(char*)"xls",(char*)"application/vnd.ms-excel"},
    {(char*)"xlsx",(char*)"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"},
    {(char*)"xml",(char*)"application/xml"},
    {(char*)"xul",(char*)"application/vnd.mozilla.xul+xml"},
    {(char*)"zip",(char*)"application/zip"},
    {(char*)"3gp",(char*)"video/3gpp"},
    {(char*)"3g2",(char*)"video/3gpp2"},
    {(char*)"7z",(char*)"application/x-7z-compressed"}};


// Function declarations

int process_header_main(http_header_main** header, char** head);
int generate_header(char** outputHeader, http_header_main **header);
int send_file(int fd, char* filePath, char* header);
bool contains(char* w1, char* w2);
void copy_remove(char** dest, char** src, char rm);
int split_string(char*** dest, char** src, char *delim);
int flush_socket(int socket_fd);
int read_http_header_main(int fd, char ** buffer);
int process_header_post(http_header_post** header, char** buffer);
int read_till(int fd, char ** buffer, char* endStr, int bytes_to_read);
bool contains_buf(char* w1, int len, char* w2);

int main(int argc, char const *argv[])
{   
    //*************************************************************************
    //
    // Socket setup
    //
    // Source: https://www.geeksforgeeks.org/socket-programming-cc/
    // Source: https://pubs.opengroup.org/onlinepubs/000095399/functions/setsockopt.html
    // Source: https://pubs.opengroup.org/onlinepubs/009604499/functions/socket.html
    // Source: https://man7.org/linux/man-pages/man2/listen.2.html
    // Source: https://linux.die.net/man/2/fcntl
    //
    //*************************************************************************
    int server_fd, new_socket, valread;
    struct sockaddr_in address;
    int addrlen = sizeof(address);
    int opt_enable = 1;

    // Set the file descriptor
    if((server_fd = socket(AF_INET, SOCK_STREAM, 0)) < 0)
    {
        perror("Error setting socket file descriptor");
        exit(EXIT_FAILURE);
    }

    // Set the socket options
    if(setsockopt(server_fd, SOL_SOCKET, SO_REUSEADDR | SO_REUSEPORT, &opt_enable, sizeof(opt_enable)) < 0)
    {
        perror("Error setting socket options");
        exit(EXIT_FAILURE);
    }

    // Configure socket flags
    address.sin_family = AF_INET;
    address.sin_addr.s_addr = INADDR_ANY;
    address.sin_port = htons(PORT);

    // Attempt to bind
    if(bind(server_fd, (struct sockaddr *)&address, sizeof(address)) < 0)
    {
        perror("Error attempting to bind");
        close(server_fd);
        exit(EXIT_FAILURE);
    }

    // Configure to listen
    if(listen(server_fd, 10) < 0) // 10 clients in que
    {
        perror("Error attempting to configure listen");
        exit(EXIT_FAILURE);
    }

    //*************************************************************************
    //
    // Main Loop
    //
    // Source: https://man7.org/linux/man-pages/man2/read.2.html
    //
    //*************************************************************************
    while(1)
    {
        // Wait for a new connection and accept it
        printf("\nWaiting for connections...\n\n");
        if ((new_socket = accept(server_fd, (struct sockaddr *)&address, (socklen_t*)&addrlen))<0)
        {
            perror("Error attempting to accept incoming connection");
            exit(EXIT_FAILURE);
        }

        // Use fcntl to set non-blocking flags for read
        int flags = fcntl(new_socket, F_GETFL);
        fcntl(new_socket, F_SETFL, flags | O_NONBLOCK);
        printf("Connection accepted\n"); // DEBUG

        // Read something from the connecting device and store it in buffer.
        char * buffer = (char*)malloc((BUFFERSIZE+1)*sizeof(char));
        memset(buffer,'\0',BUFFERSIZE*sizeof(char));
        
        if(read_http_header_main(new_socket, &buffer) >= 0)
        {
            
            decode_URL(&buffer);

            // process the header file
            http_header_main * header = new http_header_main;
            process_header_main(&header, &buffer);

            // respond to request
            if(strcmp(header->process,"GET") == 0)
            {
                // Respond to a get request with the requested file.
                printf("Process GET\n"); // DEBUG
                
                char *outputHeader = (char*)malloc(500);
                generate_header(&outputHeader, &header);
                send_file(new_socket, header->filepath,outputHeader);
                free(outputHeader);
            }
            else if(strcmp(header->process,"POST") == 0)
            {
                // Respond to a get request with the requested file.
                // https://gist.github.com/antoineMoPa/e46a075d979c269fab8bb72a3de43bf2
                printf("Process POST\n"); // DEBUG
                memset(buffer,'\0',BUFFERSIZE*sizeof(char));
                if(read_http_header_main(new_socket, &buffer) >= 0)
                {
                    printf("Read success!\n");
                    http_header_post * header_post = new http_header_post;
                    process_header_post(&header_post, &buffer);
                    memset(buffer,'\0',BUFFERSIZE*sizeof(char));
                    int chars = read_till(new_socket,&buffer,header_post->boundary,20);
                    if(chars >= 0)
                    {
                        printf("Success!\n");
                        //printf("\'%s\'\n",buffer); //DEBUG
                        FILE* file;
                        file = fopen("test.txt", "w");
                        int chars_written = 0;
                        do
                        {
                            chars_written += fwrite(buffer, sizeof(char), chars, file);
                        } while (chars_written < chars);
                        fclose(file);
                    }

                }
            }
            free(header->process);
            free(header->filepath);
            delete(header);
        }
        
        free(buffer);
        flush_socket(new_socket);
        close(new_socket);
    }
    close(server_fd);
    return 0;
}

//*****************************************************************************
//
// Functions
//
//*****************************************************************************

// Process the given html header into useable variables
//
int process_header_main(http_header_main **header, char** head)
{
    //remove all /n, also copy string to new variable.
    char* headCopy = (char*) malloc(strlen(*head));
    copy_remove(&headCopy, &(*head), '\r');

    
    // Allocate mem for lines
    char** lines = (char**) malloc(strlen(headCopy) * sizeof(char*));
    for(int i = 0; i < strlen(headCopy); i++)
    {
        lines[i] = (char*)calloc(strlen(headCopy)+1,sizeof(char));
    }
    
    // Split char* by lines
    int lines_len = split_string(&lines, &headCopy, (char*)"\n");

    // process line 1
    char** words = (char**) malloc(strlen(lines[0]) * sizeof(char*));
    int words_len = 0;
    for(int i = 0; i < strlen(lines[0]); i++)
    {
        words_len++;
        words[i] = (char*)malloc(strlen(lines[0])*sizeof(char));
    }
    split_string(&words,&lines[0], (char*)" ");

    // Update header with line 1 data
    (*header)->process = (char*) calloc(strlen(words[0])+1,sizeof(char));
    strcpy((*header)->process,words[0]);
    if(strcmp(words[1],"/") == 0)
    {
        (*header)->filepath = (char*) calloc(11+2,sizeof(char));
        strcpy((*header)->filepath,(char*)"./home.html");
    }
    else
    {
        (*header)->filepath = (char*) calloc(strlen(words[1])+2,sizeof(char));
        strcpy((*header)->filepath,".");
        strcat((*header)->filepath,words[1]);
    }

    int line = 1;
    while(line <= lines_len)
    {
        // Filter empty lines and lines that don't conform
        if(contains(lines[line],(char*)":")) 
        {
            char** split = (char**) malloc(strlen(lines[line]) * sizeof(char*));
            for(int i = 0; i < strlen(lines[line]); i++)
            {
                split[i] = (char*)malloc(strlen(lines[line])*sizeof(char));
            }
            split_string(&split,&lines[line], (char*)":");

            (*header)->details[split[0]] = split[1];
            for(int i = 0; i < strlen(lines[line]); i++)
            {
                free(split[i]);
            }
            free(split);

        }
        line++;
    }
    
    // printf("Loc free 1\n");// DEBUG
    for (int i = 0; i < strlen(headCopy); i++)
    {
        free(lines[i]);
    }
    free(headCopy);
    for(int i = 0; i < words_len; i++)
    {
        free(words[i]);
    }
    free(words);
    free(lines);

    printf("Request type: %s \n", (*header)->process); //DEBUG
    printf("Request path: %s \n", (*header)->filepath); //DEBUG

    return 0;
}

// Generate an HTTP header based on a http_header_main object
int generate_header(char** outputHeader, http_header_main **header)
{
    //get the filetype of the requested file
    int i = strlen((*header)->filepath);
    while(i >= 0)
    {
        i--;
        if((*header)->filepath[i] == '.')
        {
            break;
        }
    }
    i++; // skip the .
    char file_ending[strlen((*header)->filepath)-i+1];
    int j = 0;
    while(i < strlen((*header)->filepath))
    {
        file_ending[j] = (*header)->filepath[i];
        i++;
        j++;
    }
    file_ending[j] = '\0';
    printf("Filetype: \'%s\'\n",file_ending);

    char* content = contentTypeMap.at(file_ending);
    printf("Content: \'%s\'\n",content);

    strcpy(*outputHeader,"HTTP/1.1 200 Ok\r\nContent-Type: ");
    strcat(*outputHeader, content);
    strcat(*outputHeader, "\r\n\r\n");
    return 0;
}

// Send a file in the current or any child directory to fd using the given 
// html header
//
// Source: https://www.geeksforgeeks.org/c-program-to-read-contents-of-whole-file/
//
int send_file(int fd, char* filePath, char* header)
{
    // Write the header
    write(fd, header, strlen(header));

    // Open the requested file, set buffer
    FILE* file;
    file = fopen(filePath, "r");
    if(file == NULL)
    {
        printf("File does not exist\n");
        return -1;
    }
    int bufSize = 20;
    char c[bufSize];

    // Write the contents of the file to the socket
    while(fgets(c, bufSize, file) != NULL)
    {
        write(fd, c, strlen(c));
    }  

    printf("Sent file: %s\n", filePath);

    // Close the file and return
    fclose(file);
    return 0;
}

// Returns true if w1 contains w2 within len chars
bool contains_buf(char* w1, int len, char* w2)
{
    int i=0;
    int j=0;
    while(i < len){
        if(w1[i] == w2[j])
        {
            int init = i;
            while (w1[i] == w2[j] && w2[j]!='\0')
            {
                j++;
                i++;
            }
            if(w2[j]=='\0'){
                return true;
            }
            j=0;
        }
        i++;
    }
    return false;
}

// Flush the socket
int flush_socket(int socket_fd)
{
    int result = shutdown(socket_fd, SHUT_RD);
    if (result == -1)
    {
        // handle error
        return -1;
    }

    return 0;
}

// Reads an http header from a socket, stops reading at \r\n\r\n.
// Includes a timeout
int read_http_header_main(int fd, char ** buffer)
{
    return read_till(fd, buffer, (char*)"\r\n\r\n", 1);
}

// Read from a file into buffer until endStr is found, or the process times 
// out. Reading bytes_to_read bytes at a time.
int read_till(int fd, char ** buffer, char* endStr, int bytes_to_read)
{ 
    int total_bytes_read = 0;
    int bytes_read;
    clock_t t;
    bool waiting = false;
    do
    {
        
        bytes_read = read( fd , (*buffer) + total_bytes_read, bytes_to_read);
        if(bytes_read > 0)
        {
            total_bytes_read += bytes_read;
            (*buffer)[total_bytes_read] = '\0';
            waiting = false;
        }
        else
        {
            if(bytes_read < 0)
            {
                printf("Error");
                printf("\'%d\'\r",errno);
            }
            if(waiting)
            {
                if((((double)(clock() - t))/CLOCKS_PER_SEC) > HEADER_READ_TIMEOUT)
                {
                    printf("\nTIMEOUT\n"); // DEBUG
                    break;
                }
            }
            else
            {
                waiting = true;
                t = clock();
            }
        }
    } while (!contains_buf((*buffer),total_bytes_read,endStr));
    if(waiting)
    {
        return -1;
    }
    return total_bytes_read;
}

// Process a string into a post header object
int process_header_post(http_header_post** header, char** buffer)
{
    char* bufferCopy = (char*) malloc(strlen(*buffer));
    copy_remove(&bufferCopy, &(*buffer), '\r');

    // Allocate mem for lines
    char** lines = (char**) malloc(strlen(bufferCopy) * sizeof(char*));
    for(int i = 0; i < strlen(bufferCopy); i++)
    {
        lines[i] = (char*)malloc(strlen(bufferCopy)*sizeof(char));
    }

    // Split char* by lines
    int lines_len = split_string(&lines, &bufferCopy,  (char*)"\n");

    (*header)->boundary = (char*) malloc(strlen(lines[0]));
    strcpy((*header)->boundary,lines[0]);
    printf("Boundary: \'%s\'\n",(*header)->boundary);  
    return 0;  
}