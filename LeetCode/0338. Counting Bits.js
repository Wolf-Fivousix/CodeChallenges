// Easy

// Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n), ans[i] is the number of 1's in the binary representation of i.

 

// Example 1:

// Input: n = 2
// Output: [0,1,1]
// Explanation:
// 0 --> 0
// 1 --> 1
// 2 --> 10
// Example 2:

// Input: n = 5
// Output: [0,1,1,2,1,2]
// Explanation:
// 0 --> 0
// 1 --> 1
// 2 --> 10
// 3 --> 11
// 4 --> 100
// 5 --> 101
 

// Constraints:

// 0 <= n <= 105
 

// Follow up:

// It is very easy to come up with a solution with a runtime of O(n log n). Can you do it in linear time O(n) and possibly in a single pass?
// Can you do it without using any built-in function (i.e., like __builtin_popcount in C++)?

/*
BRUTE FORCE:
Create an empty array of size N + 1
Iterate from 0 to N + 1
    For each value, convert the integer into binary
    Then count the 1's in it. (if a string, just iterate and count)
    assign array[i] the counter we just got.

return the result array

Log Linear Time and Space Complexity O(n log n) in the sense that the number we input makes time and memory increase
*/

/**
 * @param {number} n
 * @return {number[]}
 */
function countBits(n) {
    const bitCounter = new Array(n + 1)
    for (let i = 0; i <= n; ++i) {
            // We don't really need the ABS, since the constraints ensure the number is NOT negative. But better to keep best practices.
        const bitValue = Math.abs(i).toString(2)
        bitCounter[i] = countBitsIn(bitValue)
    }

    return bitCounter
};

function countBitsIn(value) {
    let bits = 0
    for (const char of value) {
        if (char === "1") ++bits
    }

    return bits
}

// Runtime 22 ms Beats 21.75%
// Memory 56.69 MB Beats 46.53%



// Bit manipulation for the optimal efficient solution:
// The idea here is to use the number of 1's in i >> 1 (i.e., i divided by 2) and the last bit in i to find the number of 1's in i.

// var countBits = function countBits(n) {
//     const ans = new Array(n + 1).fill(0);
//     for (let i = 1; i <= n; i++) {
//         ans[i] = ans[i >> 1] + (i & 1);
//     }
//     return ans;
// }