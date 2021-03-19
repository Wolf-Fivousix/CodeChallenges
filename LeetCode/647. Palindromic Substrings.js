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