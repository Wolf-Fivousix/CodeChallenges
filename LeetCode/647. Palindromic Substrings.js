// Medium

// Given a string, your task is to count how many palindromic substrings in this string.

// The substrings with different start indexes or end indexes are counted as different substrings even they consist of same characters.

// Example 1:

// Input: "abc"
// Output: 3
// Explanation: Three palindromic strings: "a", "b", "c".
 

// Example 2:

// Input: "aaa"
// Output: 6
// Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".
 

// Note:

// The input string length won't exceed 1000.

/**
 * @param {string} s
 * @return {number}
 */

/*
There are 3 different problems here:
1) Get all substrings of S.
2) Check if a string is a palindrome.
3) Count the same palindrome, as long as the indexes of the letters are different.


After a lot of thought, I dropped the "combinatory" idea and went with a Moving Window Scan.
declare counter at 0
Window size starts a 1
Loop until the window size becomes greater than the string length
    loop through the string, starting at 0, until (lesser or equal) INDEX + Window reaches the end of string length.
        check if the current word is a palindrome.
            DETAIL: This "window" method string scanning will have an efficiency drop when I "slice". Keep that in mind.
        increase the counter if it is.
return the counter

First loop is size N
    Second (inner) loop, will do a 1 indexed scan, so Size N again.
        Palindrome Check (2 pointer approach, linear again), another Size N.
Detail: Real complexity is not N^3, because when we palindrome check the whole string, our wnidow is already max size, 
so it only happens once. But going into this fine granular mathematics doesn't give us any benefits.

Polynomial Time Complexity O(N^3)
Linear Space Compelxity O(N) - Because we need to "slice" the string for our palindrome check

*/
function countSubstrings(s) {
    // console.log("a", isPalindrome("a"));
    // console.log("abc", isPalindrome("abc"));
    // console.log("aaa", isPalindrome("aaa"));
    // console.log("abcd".slice(1,2));
    // console.log("abcd".slice(2,4));
    // console.log("abcd".slice(0,4));
    let counter = 0;
    let window = 1;
    while (window <= s.length) {
        for (let i = 0; i + window <= s.length; ++i) {
            if (isPalindrome(s.slice(i, i + window))) ++counter;
        }
        ++window;
    }
    
    return counter;
};

function isPalindrome(word) {
    let start = 0;
    let end = word.length - 1;
    
    while (start <= end) {
        if (word[start] !== word[end]) return false;
        ++start;
        --end;
    }
    
    return true;
}

// Runtime: 528 ms, faster than 17.73% of JavaScript online submissions for Palindromic Substrings.
// Memory Usage: 44.6 MB, less than 40.60% of JavaScript online submissions for Palindromic Substrings.
// Runtime: 508 ms, faster than 18.13% of JavaScript online submissions for Palindromic Substrings.
// Memory Usage: 44.6 MB, less than 41.95% of JavaScript online submissions for Palindromic Substrings.