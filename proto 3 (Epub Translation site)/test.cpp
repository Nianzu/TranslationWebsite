#include "processBook.h"
#include <curl/curl.h>

// g++ test.cpp -g -o test -l curl

int main(int argc, char const *argv[])
{
    struct Dictionary dict; 
    load_dict(&dict, (char*)"dict.txt");
    process_pagefile((char*)"UnprocessedBooks/《三体》_qinkan.net/《三体》_qinkan.net/OEBPS/chapter0-2.html",(char*)"三体问题", (char*)"part0007", &dict);
    // process_pagefile((char*)"UnprocessedBooks/刘慈欣三大长篇代表作（《三体》《三体前传：球状闪电》《超新星纪元》，代表刘慈欣对宇宙和人生的终极思考！） (刘慈欣 [刘慈欣]) (z-lib.org)/刘慈欣三大长篇代表作（《三体》《三体前传：球状闪电》《超新星纪元》，代表刘慈欣对宇宙和人生的终极思考！） (刘慈欣 [刘慈欣]) (z-lib.org)/text/part0004.html",(char*)"三体问题", (char*)"part0004", &dict);
    
    // process_pagefile((char*)"UnprocessedBooks/《三体》_qinkan.net/《三体》_qinkan.net/OEBPS/chapter0-2.html",(char*)"三体", (char*)"part0007");
    // process_pagefile((char*)"UnprocessedBooks/《三体》_qinkan.net/《三体》_qinkan.net/OEBPS/chapter0-2.html",(char*)"三体", (char*)"part0008");
    // process_pagefile((char*)"test.txt",(char*)"三体问题", (char*)"part0007.txt");

    // CURL *curl = curl_easy_init();
    // if (curl)
    // {
    //     int decodelen;
    //     char *encoded = (char *)"./ProcessedBooks/%E4%B8%89%E4%BD%93%E9%97%AE%E9%A2%98/part0007.html";
    //     char *decoded = curl_easy_unescape(curl, encoded, strlen(encoded), &decodelen);
    //     if (decoded)
    //     {
    //         /* do not assume printf() works on the decoded data! */
    //         printf("Decoded: %s\n", decoded);
    //         /* ... */
    //         curl_free(decoded);
    //     }
    //     curl_easy_cleanup(curl);
    // }

}

// #include "translation.h"
// int main()
// {
//     struct Dictionary dict;   
//     struct Dictionary used_words;
//     load_dict(&dict, (char*)"dict.txt");
//     // char * translated = translate(&dict, (char*)"汪淼抬头望去，发现星空发生了不可思议的变化:群星竟然排成了一个严整的正方形阵列!但汪淼很快发现，这一片排成正方形的星星可能只是位于行星同步轨道上，银河系的星海成了后面一个暗淡的背景，这个正方形相对于背景有明显的运行。正方形阵列中，靠晨光一侧的星体亮度最高，发出的银光能在地面上投出人影，向后面亮度逐渐减弱。汪淼数了数，阵列的一边上有三十多颗星体，那么阵列中的星体总数是一千左右。这显然是由人造物构成的阵列成一个整体在群星的首景上缓缓移动，看上去充满了庄严的力量感。</p>",&used_words);
//     // char * translated = translate(&dict, (char*)"黑，对不起我不很好。",&used_words);
//     char * translated = translate(&dict, (char*)"我",&used_words);
//     printf("TRANSLATION:\'%s\'\n",translated);
//     free(translated);
//     // print_dict(dict);
//     print_dict(used_words);

//     return 0;
// }