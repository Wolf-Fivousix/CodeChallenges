// Easy

// Given a binary string s, return the number of non-empty substrings that have the same number of 0's and 1's, and all the 0's and all the 1's in these substrings are grouped consecutively.

// Substrings that occur multiple times are counted the number of times they occur.

// Example 1:

// Input: s = "00110011"
// Output: 6
// Explanation: There are 6 substrings that have equal number of consecutive 1's and 0's: "0011", "01", "1100", "10", "0011", and "01".
// Notice that some of these substrings repeat and are counted the number of times they occur.
// Also, "00110011" is not a valid substring because all the 0's (and 1's) are not grouped together.
// Example 2:

// Input: s = "10101"
// Output: 4
// Explanation: There are 4 substrings: "10", "01", "10", "01" that have equal number of consecutive 1's and 0's.
 

// Constraints:

// 1 <= s.length <= 105
// s[i] is either '0' or '1'.

/*
BRUTE FORCE - Not the best approach, but this will work:

Define results as 0
Define firstCounter as 0
Define secondCounter as 1

Start at the 2nd index until the end of the string length
    If the PREVIOUS element is the same as CURRENT Element
        increase secondCounter
    Else
        increase results by PROCESS
        firstCounter receives secondCounter
        secondCounter becomes 1
increase results by PROCESS

Return results length


PROCESS 
    We don't care about what the string form is, only how many "combinations" we can generate
    And that depends on the smallest value of the 2 inputs (either 0's or 1's, again we don't care)
    Given the smallest of the two, we can generate that many combinations.

O(n) Linear Time Complexity - We iterate through the input once.
O(1) Constant Space Complexity - We only use a few variables to keep track of things.
*/

/**
 * @param {string} s
 * @return {number}
 */
function countBinarySubstrings(s) {
    let substringCombinations = 0
    let firstElementCounter = 0
    let secondElementCounter = 1

    for (let i = 1; i < s.length; ++i) {
        // Current character is the same as previous character
        if (s[i - 1] === s[i]) {
            ++secondElementCounter
        }
        else {
            // We don't care about what the string form is, only how many "combinations" we can generate
            // And that depends on the smallest value of the 2 inputs (either 0's or 1's, again we don't care)
            // Given the smallest of the two, we can generate that many combinations.
            // Eg: 000011 -> Math.min(4,2) -> We can only generate 2 substrings, "0011" and "01".
            substringCombinations += Math.min(firstElementCounter, secondElementCounter)
            firstElementCounter = secondElementCounter
            secondElementCounter = 1
        }
    }
    substringCombinations += Math.min(firstElementCounter, secondElementCounter)

    return substringCombinations
};

// Runtime 10  ms Beats 78.40%
// Memory 56.17 MB Beats 95.20%
