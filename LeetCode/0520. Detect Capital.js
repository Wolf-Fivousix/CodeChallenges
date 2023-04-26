/*
We define the usage of capitals in a word to be right when one of the following cases holds:

All letters in this word are capitals, like "USA".
All letters in this word are not capitals, like "leetcode".
Only the first letter in this word is capital, like "Google".
Given a string word, return true if the usage of capitals in it is right.

 

Example 1:

Input: word = "USA"
Output: true
Example 2:

Input: word = "FlaG"
Output: false
 

Constraints:

1 <= word.length <= 100
word consists of lowercase and uppercase English letters.
*/

/**
 * @param {string} word
 * @return {boolean}
 */
function detectCapitalUse(word) {
    let firstCapital = false;
    let capitalCount = 0;
    
    for (let i = 0; i < word.length; ++i) {
        const letter = word[i];
        const capital = word[i].toUpperCase();

        if (i === 0 && letter === capital) {
            firstCapital = true;
        }

        if (letter === capital) {
            capitalCount += 1;
        }
    }
    
    return capitalCount === word.length || capitalCount === 0 || firstCapital && capitalCount === 1;
};