// Nico Zucca, 1/2023

// Compilation command:
// g++ test.cpp -g -o test -l curl

#include "processBook.h"
#include <curl/curl.h>


// A test for the translation process before it gets integrated into the server
int main(int argc, char const *argv[])
{
    struct Dictionary dict; 
    load_dict(&dict, (char*)"dict.txt");
    process_pagefile((char*)"UnprocessedBooks/《三体》_qinkan.net/《三体》_qinkan.net/OEBPS/chapter0-2.html",(char*)"三体问题", (char*)"part0007", &dict);
}
