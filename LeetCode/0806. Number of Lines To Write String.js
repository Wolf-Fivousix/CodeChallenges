// Easy
// https://leetcode.com/problems/number-of-lines-to-write-string/

// You are given a string s of lowercase English letters and an array widths denoting how many pixels wide each lowercase English letter is. Specifically, widths[0] is the width of 'a', widths[1] is the width of 'b', and so on.

// You are trying to write s across several lines, where each line is no longer than 100 pixels. Starting at the beginning of s, write as many letters on the first line such that the total width does not exceed 100 pixels. Then, from where you stopped in s, continue writing as many letters as you can on the second line. Continue this process until you have written all of s.

// Return an array result of length 2 where:

// result[0] is the total number of lines.
// result[1] is the width of the last line in pixels.
 

// Example 1:

// Input: widths = [10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10], s = "abcdefghijklmnopqrstuvwxyz"
// Output: [3,60]
// Explanation: You can write s as follows:
// abcdefghij  // 100 pixels wide
// klmnopqrst  // 100 pixels wide
// uvwxyz      // 60 pixels wide
// There are a total of 3 lines, and the last line is 60 pixels wide.
// Example 2:

// Input: widths = [4,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10], s = "bbbcccdddaaa"
// Output: [2,4]
// Explanation: You can write s as follows:
// bbbcccdddaa  // 98 pixels wide
// a            // 4 pixels wide
// There are a total of 2 lines, and the last line is 4 pixels wide.
 

// Constraints:

// widths.length == 26
// 2 <= widths[i] <= 10
// 1 <= s.length <= 1000
// s contains only lowercase English letters.

/*
Write the method that will give us the index for each letter. We can call it LetterToIndex(letter)
    Given a letter, convert it to ASCII value
    Subtract the necessary number to get 'a' to start at 0.
    Return the resulting value.

define # of lines with 1
define currentLineWidth at 0.
Iterate through the string with a for loop
    current letter
    Get width for current letter
    if currentLineWidth + current Letter goes ABOVE 100
        increase lines by 1
        define currentLineWidth at 0
    Add currentLetter width to currentLineWidth

return array with 1st element #ofLines, 2nd element currentLineWidth.

Linear Runtime O(N) complexity.
Constant Space O(1) space.
*/

/**
 * @param {number[]} widths
 * @param {string} s
 * @return {number[]}
 */
function numberOfLines(widths, s) {
    let lineCount = 1;
    let currentLineWidth = 0;
    for (let i = 0; i < s.length; ++i) {
        const currentLetter = s[i];
        const letterWidth = widths[letterToIndex(currentLetter)];
        
        if (currentLineWidth + letterWidth > 100) {
            ++lineCount;
            currentLineWidth = 0;
        }

        currentLineWidth += letterWidth;
    }

    return [lineCount, currentLineWidth];
}

function letterToIndex(letter) {
    return letter.charCodeAt() - 97;
}

// Runtime
// 65 ms
// Beats
// 37.70%
// Memory
// 42.6 MB
// Beats
// 44.26%