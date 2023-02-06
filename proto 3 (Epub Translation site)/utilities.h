#include <curl/curl.h>

#ifndef utilities
#define utilities

/* All the stuff you want in the header file goes between the #define and the #endif */

// Check if w2 is contained in w1
//
//https://stackoverflow.com/questions/27090069/check-if-a-string-of-type-char-contains-another-string
//
bool contains(char* w1, char* w2)
{
    int i=0;
    int j=0;
    while(w1[i]!='\0'){
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

// https://curl.se/libcurl/c/curl_easy_unescape.html
int decode_URL(char** url)
{
    CURL *curl = curl_easy_init();
    if (curl)
    {
        int decode_len;
        char *decoded = curl_easy_unescape(curl, *url, strlen(*url), &decode_len);
        if (decoded)
        {
            *url = (char*)realloc(*url,(strlen(decoded)+1)*sizeof(char));
            strcpy(*url,decoded);
            // printf("Decoded: %s\n", decoded); //DEBUG
            curl_free(decoded);
            curl_easy_cleanup(curl);
            return 0;
        }
        curl_easy_cleanup(curl);
        return 1;
    }
    return -1;
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

#endif