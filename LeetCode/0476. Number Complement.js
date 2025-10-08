// Easy

// The complement of an integer is the integer you get when you flip all the 0's to 1's and all the 1's to 0's in its binary representation.

// For example, The integer 5 is "101" in binary and its complement is "010" which is the integer 2.
// Given an integer num, return its complement. 

// Example 1:
// Input: num = 5
// Output: 2
// Explanation: The binary representation of 5 is 101 (no leading zero bits), and its complement is 010. So you need to output 2.

// Example 2:
// Input: num = 1
// Output: 0
// Explanation: The binary representation of 1 is 1 (no leading zero bits), and its complement is 0. So you need to output 0.
 

// Constraints:

// 1 <= num < 231
 

// Note: This question is the same as 1009: https://leetcode.com/problems/complement-of-base-10-integer/

/*
Convert Number into binary
we COULD flip every digit one by one, but that's not very efficient.
So what we'll do is XOR on 0
    Why? If we start with 101 and XOR 111, then anything that IS 1, becomes 0, and anything that is 0 becomes 1.
*/

/**
 * @param {number} num
 * @return {number}
 */
function findComplement(num) {
    // console.log(num.toString(2))
    // console.log(Number.MAX_SAFE_INTEGER.toString(2))
    // console.log((num ^ Number.MAX_SAFE_INTEGER).toString(2))

    // console.log(((2 ** num.toString(2).length) - 1).toString(2))
    const largestNumberMask = ((2 ** num.toString(2).length) - 1)
    const compliment = num ^ largestNumberMask

    // console.log(compliment)
    // console.log(compliment.toString(2))
    return compliment
};

// Runtime 0 ms Beats 100.00%
// Memory 54.10 MB Beats 39.38%


findComplement(5)
findComplement(1)