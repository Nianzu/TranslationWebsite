#include <sys/types.h>
#include <sys/stat.h>
#include <unistd.h>
#include <stdio.h>
#include <stdlib.h>
#include <cstring>
#include "utilities.h"

#define BASE_DIR "ProcessedBooks"
#define READ_BUFF_SIZE 20
#define WRITE_BUFF_SIZE 20
#define BOOK_CHUNK_SIZE 100

struct stat st = {0};

// https://stackoverflow.com/questions/22949500/how-to-create-file-inside-a-directory-using-c  
int mkdir_dne(char* dir)
{
    if (stat(dir, &st) == -1) {
        mkdir(dir, 0700);
    }
    return 0;
}

void strcat_safe(char** _dst, char*_src)
{
    (*_dst) = (char*)realloc(*_dst,(strlen(*_dst) + strlen(_src) + 1)*sizeof(char));
    strcat((*_dst),_src);
}

void strcat_safe_old(char** _dst, char*_src)
{
    char* temp = (char*)calloc(strlen(_src) + strlen(*_dst)+1,sizeof(char));
    strcpy(temp,*_dst);
    strcat(temp,_src);
    free(*_dst);
    (*_dst) = (char*)calloc(strlen(temp)+1,sizeof(char));
    strcpy(*_dst,temp);
    free(temp);
}

void strcpy_safe(char** _dst, char*_src)
{
    free(*_dst);
    (*_dst) = (char*)calloc(strlen(_src) +1,sizeof(char));
    strcpy(*_dst,_src);
}

int get_file_size(char * filename)
{
    struct stat st;
    stat(filename, &st);
    return st.st_size;
}

int split_string(char*** dest, char** src, char* delim)
{
    int i = -1;
    int j = 0;
    int k = 0;
    // printf("Loc 3\n"); // DEBUG
    char processString[strlen(*src)];
    
    // printf("Loc 4\n");
    char* copy_s = (char*)calloc(strlen(*src)+1,sizeof(char));
    do
    {
        i++;
        //printf("Loc 5\n");
        strncpy(copy_s, &(*src)[i], strlen(delim));
        if(std::strcmp(copy_s,delim) == 0 || (*src)[i] == '\0')
        {
            // printf("Loc 6\n");// DEBUG
            processString[j] = '\0';
            // printf("Loc 7\n");// DEBUG
            strcpy((*dest)[k],processString);
            // printf("Loc 8\n");// DEBUG
            // printf("Out String:\'%s\'\n",processString);// DEBUG
            // printf("Comp String:\'%s\' Delim\'%s\'\n",copy_s, delim);// DEBUG
            j = 0;
            k++;
            i+=strlen(delim)-1;
        }
        else
        {
            // printf("Here\n"); //DEBUG
            processString[j] = (*src)[i];
            j++;
        }
    } while ((*src)[i] != '\0');
    free(copy_s);
    // Returns the number of elements now in dest
    return k;
}

int copy_remove(char** dest, char** src, char rm)
{
    int i = 0;
    int j = 0;
    while(i < strlen(*src))
    {
        
        if((*src)[i] == rm)
        {
            //printf("Removed\n"); //DEBUG
            j--;
        }
        else
        {
            // printf("%c\n",head[i]); // DEBUG
            (*dest)[j] = (*src)[i];
        }
        i++;
        j++;
    }
    (*dest)[j]  = '\0';
    return 0;
}

int process_output_path(char ** output_path, char* bookDirName,char* outputFileName)
{
    (*output_path) = (char*)malloc(sizeof(char) *(strlen(BASE_DIR) + 2 + strlen(bookDirName) + strlen(outputFileName)+1));
    strcpy_safe((output_path),(char*)BASE_DIR);
    mkdir_dne((*output_path));
    strcat_safe((output_path),(char*)"/");
    strcat_safe((output_path),bookDirName);
    mkdir_dne((*output_path));
    strcat_safe((output_path),(char*)"/");
    strcat_safe((output_path),outputFileName);
    strcat_safe((output_path),(char*)".html");
    // printf("output_path\'%s\'\n",output_path); //DEBUG
    return 0;
}

int read_file(char** output, char* file_path)
{
    FILE *file;
    char *buffer = NULL;
    (*output) = (char*)calloc(1,sizeof(char));
    size_t buffer_size = 0;
    size_t bytes_read;

    // Open file
    file = fopen(file_path, "r");
    if (!file) {
        fprintf(stderr, "Unable to open file %s", file_path);
        return 1;
    }

    // Read file contents into buffer
    while ((bytes_read = getline(&buffer, &buffer_size, file)) != -1) {
        // printf("buff:\'%s\'\n",buffer); //DEBUG
        strcat_safe(output,buffer);
    }
    // printf("str:\'%s\'\n",*output); //DEBUG

    fclose(file);
    return 0;
}

int write_file(char* output_path, char* content)
{
    FILE* file = fopen(output_path, "w");
    if(file == NULL)
    {
        printf("Error opening file!");
        return -1;
    }
    int chars_written = 0;
    do
    {
        chars_written += fwrite(content, sizeof(char), strlen(content), file);
    } while (chars_written < strlen(content));
    fclose(file);
    return 0;
}

char* generate_script_name(char* book_title, char* page_title)
{
    return (char*)"index.js";
}

int cat_header(char** _dst, char* book_title, char* page_title)
{
    char* temp;
    read_file(&temp,(char*)"Boilerplate/book_header_a.txt");
    strcat_safe(_dst,temp);
    strcat_safe(_dst,book_title);
    read_file(&temp,(char*)"Boilerplate/book_header_b.txt");
    strcat_safe(_dst,temp);
    strcat_safe(_dst,book_title);
    strcat_safe(_dst,(char*)" - ");
    strcat_safe(_dst,page_title);
    read_file(&temp,(char*)"Boilerplate/book_header_c.txt");
    strcat_safe(_dst,temp);
    free(temp);
    return 0;
}

int cat_tail(char** _dst, char* book_title, char* page_title)
{
    char* temp;
    read_file(&temp,(char*)"Boilerplate/book_tail_a.txt");
    strcat_safe(_dst,temp);
    strcat_safe(_dst,generate_script_name(book_title,page_title));
    read_file(&temp,(char*)"Boilerplate/book_tail_b.txt");
    strcat_safe(_dst,temp);
    free(temp);
    return 0;
}

int intelligent_formatter(char** src, char* book_title, char* page_title)
{
    int i = 0;
    int j = 0;
    char* dest = (char*)calloc(strlen(*src)+1,sizeof(char));
    char* temp = (char*)calloc(strlen(*src)+1,sizeof(char));

    int state = 0;
    int sub_state;
    
    cat_header(&dest, book_title, page_title);

    /*
    0 - Out of <body></body>
    1 - In <body></body>, but not in anything else
        2 - In <p> within body
    */
    while(i < strlen(*src))
    {
        switch (state)
        {
        case -1: //Exit state
            i = strlen(*src);
            break;
        case 0: // Out of <body></body>
            // Enter body block
            if(contains(temp,(char*)"<body>"))
            {
                printf("Enter body\n");
                free(temp);
                temp = (char*)calloc(strlen(*src)+1,sizeof(char));
                state = 1; // In body state
                j = 0;
                break;
            }
            temp[j] = (*src)[i];
            i++;
            j++;
            break;
        case 1: // In <body></body>, but not in anything else
            // Exit body block
            if(strcmp(&temp[j-7],"</body>")==0)
            {
                printf("Exit body\n");
                temp[j-7]  = '\0';
                strcat_safe(&dest,temp);
                free(temp);
                temp = (char*)calloc(strlen(*src)+1,sizeof(char));
                state = -1; // Exit state
                j = 0;
                break;
            }
            if(strcmp(&temp[j-2],"<p")==0)
            {
                printf("Enter paragraph\n");
                j -=2;
                temp[j]  = '\0';
                strcat_safe(&dest,temp);
                sub_state = 0;
                state = 2; //paragraph
            }
            temp[j] = (*src)[i];
            i++;
            j++;
            break;
        case 2:
            switch (sub_state)
            {
            case 0:
                if(strcmp(&temp[j-1],">")==0)
                {
                    sub_state++;
                    free(temp);
                    temp = (char*)calloc(strlen(*src)+1,sizeof(char));
                    j = 0;
                    strcat_safe(&dest,(char*)"<p class=\"spanText\">");
                }
                break;
            
            default:
                if(strcmp(&temp[j-4],"</p>")==0)
                {
                    printf("Exit paragraph\n");
                    temp[j]  = '\0';           
                    // printf("content: \'%s\'\n",temp); 
                    strcat_safe(&dest,temp);
                    free(temp);
                    j = 0;
                    temp = (char*)calloc(strlen(*src)+1,sizeof(char));
                    state = 1; // In body state
                }
                break;
            }
            // printf("h\n");
            temp[j] = (*src)[i];
            i++;
            j++;
            break;
        }
    }

    cat_tail(&dest, book_title, page_title);

    //Copy and return
    strcpy_safe(src,dest);
    return 0;
}

int process_pagefile(char* input_path,char* bookDirName, char* outputFileName)
{
    // check that the output dir exits and create a char* of the path.
    char* output_path;
    
    process_output_path(&output_path,bookDirName,outputFileName);
    
    // Read entire file into buffer
    char * book;
    read_file(&book,input_path);

    // Process book
    intelligent_formatter(&book, bookDirName, outputFileName);
    
    // write the file!
    write_file(output_path,book);
    free(output_path);
    free(book);
    printf("Done\n"); // DEBUG
    return 0;
}