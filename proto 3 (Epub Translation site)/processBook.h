#include <sys/types.h>
#include <sys/stat.h>
#include <unistd.h>
#include <stdio.h>
#include <stdlib.h>
#include <cstring>
#include "utilities.h"
#include "translation.h"

#define BASE_DIR "ProcessedBooks"
#define READ_BUFF_SIZE 20
#define WRITE_BUFF_SIZE 20
#define BOOK_CHUNK_SIZE 100

struct stat st = {0};

// TODO Filter pre-existing span tags
// TODO Treat <br> as a <p> tag
// TODO Sanitize other tags
// TODO not in this document, but properly display definitions
// TODO not in this document, but add a menu for adjustments
// TODO not in this document, but finish home page


// https://stackoverflow.com/questions/22949500/how-to-create-file-inside-a-directory-using-c  
int mkdir_dne(char* dir)
{
    if (stat(dir, &st) == -1) {
        mkdir(dir, 0700);
    }
    return 0;
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

int process_output_path(char ** output_path, char* bookDirName,char* outputFileName, char* file_ext)
{
    (*output_path) = (char*)malloc(sizeof(char) *(strlen(BASE_DIR) + 2 + strlen(bookDirName) + strlen(outputFileName)+1));
    strcpy_safe((output_path),(char*)BASE_DIR);
    mkdir_dne((*output_path));
    strcat_safe((output_path),(char*)"/");
    strcat_safe((output_path),bookDirName);
    mkdir_dne((*output_path));
    strcat_safe((output_path),(char*)"/");
    strcat_safe((output_path),outputFileName);
    strcat_safe((output_path),file_ext);
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

int cat_tail(char** _dst, char* outputFileName)
{
    char* temp;
    read_file(&temp,(char*)"Boilerplate/book_tail_a.txt");
    strcat_safe(_dst,temp);
    strcat_safe(_dst,outputFileName);
    strcat_safe(_dst,(char*)".js");
    read_file(&temp,(char*)"Boilerplate/book_tail_b.txt");
    strcat_safe(_dst,temp);
    free(temp);
    return 0;
}

int intelligent_formatter(char** src, char* book_title, char* page_title, Dictionary* dict, Dictionary* used_words)
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
            if(contains(temp,(char*)"<body"))
            {
                // printf("Enter body\n");
                free(temp);
                temp = (char*)calloc(strlen(*src)+1,sizeof(char));
                state = 1; // In body state
                sub_state = 0;
                j = 0;
                break;
            }
            temp[j] = (*src)[i];
            i++;
            j++;
            break;

        case 1: // In <body></body>, but not in anything else
            switch (sub_state)
            {
            case 0:               
                if(strcmp(&temp[j-1],">")==0)
                {
                    sub_state++;
                    free(temp);
                    temp = (char*)calloc(strlen(*src)+1,sizeof(char));
                    j = 0;
                }
                break;
            case 1:
                // Exit body block
                if(strcmp(&temp[j-7],"</body>")==0)
                {
                    // printf("Exit body\n");
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
                    // printf("Enter paragraph\n");
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
            }

        case 2: // In paragraph
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
                    // printf("Exit paragraph\n");
                    temp[j]  = '\0';           
                    char * translated = translate(dict, temp,used_words);
                    strcat_safe(&dest,translated);
                    // printf("content: \'%s\'\n",temp); //DEBUG
                    free(translated);
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

    cat_tail(&dest, page_title);

    //Copy and return
    strcpy_safe(src,dest);
    return 0;
}

int generate_script(char** _dst,Dictionary* used_words)
{
    char* temp;
    (*_dst) = (char*) malloc(0);

    read_file(&temp,(char*)"Boilerplate/script_header_a.txt");
    strcpy_safe(_dst,temp);
    bool first_entry = true;
    for (const auto &elem : (*used_words).entries)
    {
        if(!first_entry)
        {
            strcat_safe(_dst,(char*)",\n");
        }
        else
        {
            first_entry = false;
        }
        strcat_safe(_dst,(char*)"\"");
        strcat_safe(_dst,(char*)elem.first.c_str());
        strcat_safe(_dst,(char*)"\":\n{\"simp\":\"");
        strcat_safe(_dst,(char*)elem.second.simplified.c_str());
        strcat_safe(_dst,(char*)"\",\n\"trad\":\"");
        strcat_safe(_dst,(char*)elem.second.traditional.c_str());
        strcat_safe(_dst,(char*)"\",\n\"pinyin\":\"");
        strcat_safe(_dst,(char*)elem.second.pinyin.c_str());
        strcat_safe(_dst,(char*)"\",\n\"def\": [");
        bool first_def = true;
        for (const auto &entry : elem.second.glosses)
        {
            if(!first_def)
            {
                strcat_safe(_dst,(char*)",");
            }
            else
            {
                first_def = false;
            }
            strcat_safe(_dst,(char*)"\"");
            strcat_safe(_dst,(char*)entry.c_str());
            strcat_safe(_dst,(char*)"\"");
        }
        strcat_safe(_dst,(char*)"]\n}");
    }

    read_file(&temp,(char*)"Boilerplate/script_tail_a.txt");
    strcat_safe(_dst,temp);

    free(temp);
    return 0;
}

int process_pagefile(char* input_path,char* bookDirName, char* outputFileName, Dictionary* dict)
{  
    struct Dictionary used_words;
    char* output_path;
    char * output;
    
    // Generate .html file
    process_output_path(&output_path,bookDirName,outputFileName,(char*)".html");
    read_file(&output,input_path);
    intelligent_formatter(&output, bookDirName, outputFileName, dict, &used_words);
    // printf("\'%s\'\n",output);
    // print_dict(used_words);
    write_file(output_path,output);
    free(output);
    free(output_path);

    // Generate .js file
    process_output_path(&output_path,bookDirName,outputFileName,(char*)".js");
    generate_script(&output,&used_words);
    write_file(output_path,output);
    free(output);
    free(output_path);

    // Generate .css file
    process_output_path(&output_path,bookDirName,(char*)"style",(char*)".css");
    read_file(&output,(char*)"Boilerplate/style.css");
    write_file(output_path,output);
    free(output);
    free(output_path);
    
    // write the file!
    printf("Done\n"); // DEBUG
    return 0;
}