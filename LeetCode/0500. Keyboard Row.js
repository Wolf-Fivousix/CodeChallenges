// Easy

// Given an array of strings words, return the words that can be typed using letters of the alphabet on only one row of American keyboard like the image below.

// Note that the strings are case-insensitive, both lowercased and uppercased of the same letter are treated as if they are at the same row.

// In the American keyboard:

// the first row consists of the characters "qwertyuiop",
// the second row consists of the characters "asdfghjkl", and
// the third row consists of the characters "zxcvbnm".

// https://assets.leetcode.com/uploads/2018/10/12/keyboard.png 

// Example 1:

// Input: words = ["Hello","Alaska","Dad","Peace"]

// Output: ["Alaska","Dad"]

// Explanation:

// Both "a" and "A" are in the 2nd row of the American keyboard due to case insensitivity.

// Example 2:

// Input: words = ["omk"]

// Output: []

// Example 3:

// Input: words = ["adsdf","sfd"]

// Output: ["adsdf","sfd"]

 

// Constraints:

// 1 <= words.length <= 20
// 1 <= words[i].length <= 100
// words[i] consists of English letters (both lowercase and uppercase). 

/*
BRUTE FORCE
Define result as []
Iterate through the input
    For each word, swap the letter by the "row" they are encountered
    We can also create a set of "3 rows" that tracks which rows have been used
    If the set size is 1, add this word to the result

return result
*/

/**
 * @param {string[]} words
 * @return {string[]}
 */
function findWords(words) {
    const keyboardRow = {
        "q": 1,
        "w": 1,
        "e": 1,
        "r": 1,
        "t": 1,
        "y": 1,
        "u": 1,
        "i": 1,
        "o": 1,
        "p": 1,

        "a": 2,
        "s": 2,
        "d": 2,
        "f": 2,
        "g": 2,
        "h": 2,
        "j": 2,
        "k": 2,
        "l": 2,

        "z": 3,
        "x": 3,
        "c": 3,
        "v": 3,
        "b": 3,
        "n": 3,
        "m": 3,
    }
    const result = []

    for (let word of words) {
        const wordSet = new Set([])
        const lowerCaseWord = word.toLocaleLowerCase()
        for (let character of lowerCaseWord) {
            wordSet.add(keyboardRow[character])
        }

        if (wordSet.size === 1) {
            result.push(word)
        }
    }

    return result
};

// Runtime 0 ms Beats 100.00%
// Memory 52.23 MB Beats 97.87%
// O(n) Linear Time Complexity, because we iterate through the words twice, one loop and another to make them lowercased.
// O(n) Constant Space Complexity, worst case scenario we'll output as much as the input.
