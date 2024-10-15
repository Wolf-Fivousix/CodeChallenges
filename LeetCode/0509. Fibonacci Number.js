// Easy
// The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

// F(0) = 0, F(1) = 1
// F(n) = F(n - 1) + F(n - 2), for n > 1.
// Given n, calculate F(n).

 

// Example 1:

// Input: n = 2
// Output: 1
// Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.
// Example 2:

// Input: n = 3
// Output: 2
// Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.
// Example 3:

// Input: n = 4
// Output: 3
// Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.
 

// Constraints:

// 0 <= n <= 30

/*
Brute Force:

The most straight forward is to just calculate F(n) by CALCULATING it.
Iterate N times keeping track of N-2, N-1 and N. (we are intentionally not using a map to keep memory constant)

Return the N value at the end.

Linear Time Complexity O(n) - since we iterate N times
Constant Space Complexity O(1) - we are only storing 2 variables
*/


/**
 * @param {number} n
 * @return {number}
 */
function fib(n) {
    if (n === 0) return 0
    if (n === 1) return 1

    let n_2 = 0
    let n_1 = 1
    for (let i = 2; i < n; ++i) {
        const sum = n_2 + n_1
        n_2 = n_1
        n_1 = sum
    }

    return n_2 + n_1
};

// Runtime 49 ms Beats 79.57%
// Memory 48.41 MB Beats 81.24%

// Not the most efficient, but as you can see, plenty efficient
// The problem with this solution becomes that, you most likely will want the same value calculated over and over and over.
// THEN this solution becomes completly ineficient. Since we have to re-calculate something we already did in the past.
// This can be from either a method that runs this over and over, or an input that is confirming calculations made by users.
// So, one way that we can make this much more efficient for repeating calculations, is to actually save any results already calculated in memory.
// And then calculate anything that doesn't yet exist.

const fibMap = {
    0: 0,
    1: 1,
}

function fibSave(n, fibMap) {
    if (fibMap[n] !== undefined) return fibMap[n]

    fibMap[n] = fibSave(n-2, fibMap) + fibSave(n-1, fibMap)
    
    return fibMap[n]
};

[
    0,
    1,
    2,
    3,
    4,
].forEach((input) => {
    console.log("F(" + input + "): " + fibSave(input, fibMap))
})
// console.log(fibMap)

// Runtime 52 ms Beats 69.06%
// Memory 49.11 MB Beats 7.85%