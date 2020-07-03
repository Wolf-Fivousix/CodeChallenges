// Easy

// Given an integer n, return the number of trailing zeroes in n!.

// Example 1:

// Input: 3
// Output: 0
// Explanation: 3! = 6, no trailing zero.
// Example 2:

// Input: 5
// Output: 1
// Explanation: 5! = 120, one trailing zero.
// Note: Your solution should be in logarithmic time complexity.

/**
 * @param {number} n
 * @return {number}
 */
function trailingZeroes(n) {
    let value = calculateFactorial(n);
    return countZeros(value);
}

function calculateFactorial(n) {
    let factorial = 1;
    
    for (let i = 1; i <= n; ++i) {
        factorial *= i;
    }
    
    return factorial;
}

function countZeros(value) {
    let counter = 0;
    
    while (value > 0) {
        const digit = value % 10;
        if (!digit) {
            ++counter;
            value = Math.floor(value / 10);
        }
        else break;
    }
    
    return counter;
}

// Right now this is failing 30!. Once JS overflows the integer to scientific notation
// I loose the reference to smaller digits.