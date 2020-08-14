// # Run-length encoding

// Implement [Run-length encoding][1] for ASCII text strings.

// ## Task

// 1. Write code to pass all tests.  
// 2. Follow the instructions below in order to successfully complete this task.

// ## Task Details

// ### Introduction
// You’ve just joined the team of one of the world's most advanced digitization companies. Due to the limitations of the software used by the company all scanned documents are uploaded to the cloud server and then compressed. This results in extended wait times for customers and increased costs. In order to improve customer satisfaction and reduce costs write a script that will compress the images before they are uploaded. Your script will employ a method known as Run-length encoding.

// ### Problem Statement
// Implement the function `run_length_encode` that accepts a string of characters
// as input and returns a compressed string of characters. The compression process
// should follow this recipe: if the character **X** appears more than once in a
// row, replace all consecutive occurrences with a single instance of **XN** where
// **N** is the count of occurrences and **X** is the character being repeated. For
// example:
// - `WWWABC` should be replaced with `W3ABC`.
// - `WWWWBBWWWWW` should be replaced with `W4B2W5`.

// Implement the function `run_length_decode` that accepts a compressed string of
// characters and returns it in its uncompressed form. Replace every instance of
// **XN** with the character **X** multiplied **N** times. For example:
// -  `W3ABC` should be replaced with `WWWABC`.
// -  `W4B2W5` should be replaced with `WWWWBBWWWWW`.

// Ensure that the following sentence is always valid:
// `str == run_length_decode(run_length_encode(str))`

// ## Hints

// You can assume that the uncompressed string contains no decimal digits.

// [1]: https://en.wikipedia.org/wiki/Run-length_encoding

#include "rle.hpp"
#include <iostream>
#include <cstring>

std::string run_length_encode(const std::string& in)
{
    // Very simple logic here:
    // Define result as empty string.
    // Define counter as 0.
    // Define previousCharacter as empty string.
    // Iterate through the string.
        // If the current character is the same as previous character, just increase counter.
        // Otherwise, we want to add the counter to result (if greater than 1)
            // Add the currentCharacter.
            // Update counter to 1.
    // Once the loop ends, we need to check one more time to see if we have anything left in
    // our "buffer" which would be our counter here.
    // If the counter is greater than 1, add that to the result.
    // Return encoded string.

    char * input = new char [in.size() + 1];
    strcpy(input, in.c_str());

    std::string result ("");
    char previousCharacter = '\0';
    int counter = 0;
    
    for (int i = 0; i < in.size(); ++i)
    {
        if (previousCharacter == input[i])
        {
            ++counter;    
        }
        else
        {
            if (counter > 1) result.append(std::to_string(counter));
            result.push_back(input[i]);
            counter = 1;
            previousCharacter = input[i];
        }
        
    }
    if (counter > 1) result.append(std::to_string(counter));

    return result;
}


std::string run_length_decode(const std::string& in)
{
    // Decompression is even simpler. The catch is numbers greater than 9.
    // Define result as empty string.
    // Define value as empty string.
    // Iterate through input string.
        // If we find a number (0-9), add it to our "number" variable.
        // Else, is a character:
            // Convert value from string to a number. (empty string means 0)
            // Add the last character input value number of times.
            // Add the current character.
            // Reset the value to empty.

    // Once loop ends, check if value has anything. If it does, repeat the adding logic.
    // Return decoded string.
}
