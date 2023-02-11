
# Mandarin Navigator

![](/content/png/mandarin-navigator-high-resolution-color-logo-crop.png)

A website where users can upload Mandarin ebook files and get translations for all the words in real-time.

## Features

* Upload Mandarin ebook files in any format.
* Multiple translation options for all words in the ebook.
* Store books and reading history across devices.
* User-friendly interface.
* Convert between simplified and traditional character sets.

![](/content/Example_2023-02-05.png)

## Technologies

* Written in C and C++ using a custom backend based on socket.
* User-friendly interface built using HTML, CSS, and JavaScript.

## Getting Started

* Clone the repository.
* Compile the code using a C/C++ compiler.
* Launch the website by running the executable.
* Upload your ebook file and start reading.

## Translation Methodology

The current translation methodology is designed for speed and ease of implementation, at the cost of context sensitivity and accuracy. The system uses a dictionary of 121,366 common Chinese words in both traditional and simplified character sets, provided by [CC-CEDICT](https://cc-cedict.org/wiki/).

The algorithm works by breaking down each paragraph of the ebook into individual words. It starts by matching the longest word it can find to an entry in the dictionary. Then, it repeats this process for the remaining words on either side until the entire sentence has been translated or no further breakdown is possible.

This methodology offers several benefits, such as the ability to easily update the dictionary and ignore any non-Mandarin words or characters, such as punctuation. Additionally, by swapping the dictionary file, this methodology could theoretically be used to translate text in other logographic languages.

The primary assumption of this methodology is that longer words are more likely to be the intended meaning than shorter words.

Note: While this methodology is relatively simple, it may not always provide the most accurate or context-sensitive translations. However, it is a good starting point for further development and improvement.

## To-Do

### Server
* Double check all malloc sizes to ensure proper memory allocation.
* Fork a child process for each active connection to improve performance.
* Implement writing while reading to allow for larger ebook files.
* Implement protections against bad file types to ensure the stability of the application.
* Add file access security
* Implement accounts
* Implement duplicate detection
* Process on upload
* Trying to access a directory but not a file crashes the server

### Converter
* Investigate using [this method](https://dida.do/blog/how-to-extract-text-from-pdf) to extract text from PDF files.
* Allow users to click and get a translation of the individual character.
* Break long sections into multiple pages.
* Sanitize tags.
    * Remove pre-existing span tags.
    * Remove blank tags.
    * Remove content from within tags.
    * Process \<br\> tags as \<p\> tags.
* Convert between simplified and traditional character sets.

### html/css/js
* Add options menu
* Allow users to navigate between pages
* Allow users to click and get a translation of the individual character.
* Implement accounts
* Add home page that allows searching of available books.
* Make translation box resizing more intelligent.
![](/content/Qu_problem_example.png)
* Make scrollbar a fancy bottom one.

### Misc
* Cleanup and commenting pass

## Contributions

Contributions are always welcome. If you want to contribute to the project, please create a pull request.

## License

This project is not currently licensed, but I will look into adding a license at a later date.