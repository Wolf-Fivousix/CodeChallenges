// Easy

// Given two strings a and b, return the length of the longest uncommon subsequence between a and b. If no such uncommon subsequence exists, return -1.

// An uncommon subsequence between two strings is a string that is a 
// subsequence
//  of exactly one of them.

 

// Example 1:

// Input: a = "aba", b = "cdc"
// Output: 3
// Explanation: One longest uncommon subsequence is "aba" because "aba" is a subsequence of "aba" but not "cdc".
// Note that "cdc" is also a longest uncommon subsequence.
// Example 2:

// Input: a = "aaa", b = "bbb"
// Output: 3
// Explanation: The longest uncommon subsequences are "aaa" and "bbb".
// Example 3:

// Input: a = "aaa", b = "aaa"
// Output: -1
// Explanation: Every subsequence of string a is also a subsequence of string b. Similarly, every subsequence of string b is also a subsequence of string a. So the answer would be -1.
 

// Constraints:

// 1 <= a.length, b.length <= 100
// a and b consist of lower-case English letters.

/*
This is a VERY BADLY worded problem!
Took me forever to even understand what the hell this was trying to do. Specially since the examples given are not very good.
So after playing around with the test cases, let me re-word the problem:

What is the longest string that doesn't repeat itself?

This is because if the 2 strings are different, then the longest "uncommon subsequence" IS THE SEQUENCE ITSELF!
If we have "abc" and "abcdefzgawhatever". Then, OBVIOUSLY "abcdefzgawhatever" DOES NOT EXIST in "abc".
It does NOT matter, that "abc" is a substring of "abcdefzgawhatever", the two SEQUENCES are different!
So, once THAT is clear, the answer is basically: Unless both strings are the same, return the length of the longest one!

That's it!

*/

/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
function findLUSlength(a, b) {
    if (a === b) return -1
    
    return Math.max(a.length, b.length)
};

// Runtime 55 ms Beats 27.67%
// Memory 48.97 MB Beats 24.27%