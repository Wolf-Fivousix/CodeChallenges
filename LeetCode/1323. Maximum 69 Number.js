// // Easy

// You are given a positive integer num consisting only of digits 6 and 9.

// Return the maximum number you can get by changing at most one digit (6 becomes 9, and 9 becomes 6).

 

// Example 1:

// Input: num = 9669
// Output: 9969
// Explanation: 
// Changing the first digit results in 6669.
// Changing the second digit results in 9969.
// Changing the third digit results in 9699.
// Changing the fourth digit results in 9666.
// The maximum number is 9969.
// Example 2:

// Input: num = 9996
// Output: 9999
// Explanation: Changing the last digit 6 to 9 results in the maximum number.
// Example 3:

// Input: num = 9999
// Output: 9999
// Explanation: It is better not to apply any change.
 

// Constraints:

// 1 <= num <= 104
// num consists of only 6 and 9 digits.

/*
BRUTE FORCE:
Convert into string
From left to right, iterate through the string
    if we find a 6, change it to a 9 and break the loop.

Return the number (converted from String)

Iterate once converting the number into string.
Iterate second looking for 6`s.
Convert from String to Number

O(n) Constant Time Complexity
O(n) Constant Space Complexkity

*/

/**
 * @param {number} num
 * @return {number}
 */
function maximum69Number(num) {
    return Number(String(num).replace("6","9"))
};

// Runtime 0 ms Beats 100.00%
// Memory 53.55 MB Beats 58.52%
