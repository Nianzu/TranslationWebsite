#include "processBook.h"
#include <curl/curl.h>

// g++ test.cpp -g -o test -l curl

int main(int argc, char const *argv[])
{
    // process_pagefile((char*)"UnprocessedBooks/《三体》_qinkan.net/《三体》_qinkan.net/OEBPS/chapter0-2.html",(char*)"三体问题", (char*)"part0007");
    // process_pagefile((char*)"UnprocessedBooks/《三体》_qinkan.net/《三体》_qinkan.net/OEBPS/chapter0-2.html",(char*)"三体", (char*)"part0007");
    // process_pagefile((char*)"UnprocessedBooks/《三体》_qinkan.net/《三体》_qinkan.net/OEBPS/chapter0-2.html",(char*)"三体", (char*)"part0008");
    // process_pagefile((char*)"test.txt",(char*)"三体问题", (char*)"part0007.txt");
    CURL *curl = curl_easy_init();
    if (curl)
    {
        int decodelen;
        char *encoded = (char *)"./ProcessedBooks/%E4%B8%89%E4%BD%93%E9%97%AE%E9%A2%98/part0007.html";
        char *decoded = curl_easy_unescape(curl, encoded, strlen(encoded), &decodelen);
        if (decoded)
        {
            /* do not assume printf() works on the decoded data! */
            printf("Decoded: %s\n", decoded);
            /* ... */
            curl_free(decoded);
        }
        curl_easy_cleanup(curl);
    }
}
