// Easy

// Given two strings s and t, check if s is a subsequence of t.

// A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

 

// Example 1:

// Input: s = "abc", t = "ahbgdc"
// Output: true
// Example 2:

// Input: s = "axc", t = "ahbgdc"
// Output: false
 

// Constraints:

// 0 <= s.length <= 100
// 0 <= t.length <= 104
// s and t consist only of lowercase English letters.

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 function isSubsequence(s, t) {
    pointerS = 0;
    pointerT = 0;
    
    while (pointerS < s.length) {
        if (pointerT >= t.length) return false;
        if (s[pointerS] === t[pointerT]) ++pointerS;
        
        ++pointerT;
    }
    
    return true;
};

// Runtime: 108 ms, faster than 5.06% of JavaScript online submissions for Is Subsequence.
// Memory Usage: 38.3 MB, less than 94.71% of JavaScript online submissions for Is Subsequence.