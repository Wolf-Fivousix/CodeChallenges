// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
// Note:

// All given inputs are in lowercase letters a-z.

/**
 * @param {string[]} strs
 * @return {string}
 */
function longestCommonPrefix(strs) {
    if (!strs.length) return "";
    
    let prefix = strs[0];
    
    for (let i = 1; i < strs.length; ++i) {
        prefix = compareWithPrefix(prefix, strs[i]);
        
        if (!prefix.length) return "";
    }
    
    return prefix;
};

function compareWithPrefix(prefix, word) {
    let commonLetters = "";
    
    for (let i = 0; i < prefix.length && i < word.length; ++i) {
        if (prefix[i] === word[i]) commonLetters += prefix[i];
        else break;
    }
    
    return commonLetters;
}

// Runtime: 72 ms, faster than 24.77% of JavaScript online submissions for Longest Common Prefix.
// Memory Usage: 38.4 MB, less than 6.25% of JavaScript online submissions for Longest Common Prefix.

// Time Complexity will be Linear, as the worst case would be having the same word, multiple times.
// That means that we will go through every single character in the input once.

// Space Complexity is much better, as we only store 2 strings, which will at most be as large as the largest
// word in the array. From there it shrinks.