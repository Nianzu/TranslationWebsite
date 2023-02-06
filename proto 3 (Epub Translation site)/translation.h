#include <iostream>
#include <fstream>
#include <unordered_map>
#include <vector>
#include <cstring>
#include <sstream>
#include "utilities.h"

struct Entry
{
    std::string traditional;
    std::string simplified;
    std::string pinyin;
    std::vector<std::string> glosses;
};

struct Dictionary
{
    // The dictionary
    std::unordered_map<std::string, Entry> entries;

    // Some meta-data to speed up translation
    int longest_word = 0;
};

void print_dict(Dictionary dic)
{
    // Print the meta-data
    printf("Longest word: %d\n", dic.longest_word);

    // Print the elements
    for (const auto &elem : dic.entries)
    {
        printf("%s\n", elem.first.c_str());
        printf("\tSimp: %s\n", elem.second.simplified.c_str());
        printf("\tTrad: %s\n", elem.second.traditional.c_str());
        printf("\tPin: %s\n", elem.second.pinyin.c_str());
        for (const auto &entry : elem.second.glosses)
        {

            printf("\t\tdef: %s\n",entry.c_str());
        }
    }
}

// https://stackoverflow.com/questions/4214314/get-a-substring-of-a-char
char* translate(Dictionary *dic, char* content, Dictionary *used_words)
{
    int search_size;
    char* output = (char*)calloc(1,sizeof(char));

    if(strlen(content) < (*dic).longest_word)
    {
        search_size = strlen(content);
    }
    else
    {
        search_size = (*dic).longest_word;
    }
    // printf("search_size %d\n",search_size); //DEBUG

    while(search_size >= 1)
    {
        char search_buf[search_size+1];
        for(int i =0 ; i <= strlen(content) - search_size; i++)
        {
            memcpy( search_buf, &content[i], search_size );
            search_buf[search_size] = '\0';
            if((*dic).entries.count(search_buf))
            {
                used_words->entries[search_buf] = (*dic).entries[search_buf];
                // printf("MATCH: \'%s\'\n",search_buf); // DEBUG
                char front_str[i+1] = "";
                memcpy( front_str, &content[0], i );
                front_str[i] = '\0';
                // printf("front_str: \'%s\'\n",front_str); // DEBUG
                char rear_str[strlen(content)-i-search_size+1] = "";
                memcpy( rear_str, &content[i+search_size], strlen(content)-i-search_size );
                rear_str[strlen(content)-i-search_size] = '\0';
                // printf("rear_str: \'%s\'\n",rear_str); // DEBUG
                char* temp = translate(dic,front_str, used_words);
                strcat_safe(&output,temp);
                free(temp);
                strcat_safe(&output,(char*)"<span>");
                strcat_safe(&output,search_buf);
                strcat_safe(&output,(char*)"</span>");
                temp = translate(dic,rear_str, used_words);
                strcat_safe(&output,temp);
                free(temp);
                // printf("Output: \'%s\'\n",output);
                return output;
            }
        }
        search_size--;
    }
    strcpy_safe(&output,content);
    return output;
}

std::string escape_string(const std::string &s) {
  std::string result;
  for (char c : s) {
    switch (c) {
      case '\\':
        result += "\\\\";
        break;
      case '"':
        result += "\\\"";
        break;
      default:
        result += c;
        break;
    }
  }
  return result;
}

void load_dict(Dictionary *dic, char* file_name)
{
    std::ifstream file(file_name);
    std::string line;

    printf("Loading dictionary.\n");

    while (std::getline(file, line))
    {
        // Skip comments
        if (line[0] == '#')
            continue;

        // Escape \ and "
        line = escape_string(line);

        // Find pinyin start and end indices
        size_t pinyin_start = line.find("[") + 1;
        size_t pinyin_end = line.find("]");
        size_t glosses_start = line.find("/", pinyin_end) + 1;
        size_t glosses_end = line.length()-1;

        // Extract traditional, simplified, and pinyin
        std::string traditional = line.substr(0, line.find(" "));
        std::string simplified = line.substr(line.find(" ") + 1, pinyin_start - line.find(" ") - 3);
        std::string pinyin = line.substr(pinyin_start, pinyin_end - pinyin_start);

        // Extract glosses
        std::vector<std::string> glosses;
        std::string glosses_str = line.substr(glosses_start, glosses_end - glosses_start);
        std::istringstream iss(glosses_str);
        std::string gloss;
        while (std::getline(iss, gloss, '/'))
        {
            glosses.push_back(gloss);
        }

        // Update longest word
        if((*dic).longest_word < traditional.length())
        {
            (*dic).longest_word = traditional.length();
            // printf("New longest word: %s %ld\n",traditional.c_str(),traditional.length()); // DEBUG
        }

        // Add entry to map
        Entry entry;
        entry.traditional = traditional;
        entry.simplified = simplified;
        entry.pinyin = pinyin;
        entry.glosses = glosses;
        (*dic).entries[traditional] = entry;
        (*dic).entries[simplified] = entry;
    }
    printf("Dictionary loaded.\n");
}
