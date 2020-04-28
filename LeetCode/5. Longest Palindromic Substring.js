// Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

// Example 1:

// Input: "babad"
// Output: "bab"
// Note: "aba" is also a valid answer.
// Example 2:

// Input: "cbbd"
// Output: "bb"


/**
 * @param {string} s
 * @return {string}
 */
function longestPalindrome (s) {
    let longestSubstring = "";
    if (palindrome(s)) return s;
    
    for (let i = 0; i < s.length; ++i) {
        for (let j = i; j < s.length; ++j) {
            let substring = s.substring(i, j + 1);
            
            if (palindrome(substring) && longestSubstring.length < substring.length) {
                longestSubstring = substring;
            }
        }
    }
    
    return longestSubstring;    
};

function palindrome(word) {
    let left = 0;
    let right = word.length - 1;
    
    while (left < right) {
        if (word[left] !== word[right]) return false;
        ++left;
        --right;
    }
    
    return true;
}

// This is a Polynomial (N^3) solution. As the "palindrome" function itself is Linear and happens inside the double loop.
// Although not the most efficient, it is a Bruce Force solution.

