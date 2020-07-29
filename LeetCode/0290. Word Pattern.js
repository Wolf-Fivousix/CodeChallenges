// Easy

// Given a pattern and a string str, find if str follows the same pattern.

// Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in str.

// Example 1:

// Input: pattern = "abba", str = "dog cat cat dog"
// Output: true
// Example 2:

// Input:pattern = "abba", str = "dog cat cat fish"
// Output: false
// Example 3:

// Input: pattern = "aaaa", str = "dog cat cat dog"
// Output: false
// Example 4:

// Input: pattern = "abba", str = "dog dog dog dog"
// Output: false
// Notes:
// You may assume pattern contains only lowercase letters, and str contains lowercase letters that may be separated by a single space.

/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */

// Split the string into an array separated by white spaces.
// if the length is different than the legth of pattern, return false.

// For the pattern string, we need to know which characters map
// to which indexes. That's important for our comparsion later.
// We can iterate through the pattern once and hash table it's
// character to the indexes found.

// With that information we can now iterate through every key.
    // in every key, we iterate through every index.
        // We then theck if the string has the same word in all those positions.
        // if not, we return false early.

// Once this process is complete, the pattern is true.


function wordPattern(pattern, str) {

}