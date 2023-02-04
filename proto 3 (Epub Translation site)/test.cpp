#include "processBook.h"



int main(int argc, char const *argv[])
{
    process_pagefile((char*)"UnprocessedBooks/《三体》_qinkan.net/《三体》_qinkan.net/OEBPS/chapter0-2.html",(char*)"三体问题", (char*)"part0007");
    process_pagefile((char*)"UnprocessedBooks/《三体》_qinkan.net/《三体》_qinkan.net/OEBPS/chapter0-2.html",(char*)"三体", (char*)"part0007");
    process_pagefile((char*)"UnprocessedBooks/《三体》_qinkan.net/《三体》_qinkan.net/OEBPS/chapter0-2.html",(char*)"三体", (char*)"part0008");
    // process_pagefile((char*)"test.txt",(char*)"三体问题", (char*)"part0007.txt");
}
