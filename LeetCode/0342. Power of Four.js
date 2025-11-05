// Easy

// Given an integer n, return true if it is a power of four. Otherwise, return false.

// An integer n is a power of four, if there exists an integer x such that n == 4x.

 

// Example 1:

// Input: n = 16
// Output: true
// Example 2:

// Input: n = 5
// Output: false
// Example 3:

// Input: n = 1
// Output: true
 

// Constraints:

// -231 <= n <= 231 - 1
 

// Follow up: Could you solve it without loops/recursion?

/*
BRUTE FORCE:
Starting at 0, calculate all the powers of 4 until we either match the number or we go over/under it.
    (remember to handle the integer limit)
    (remember that for ODD exponents the numbers can be negative as well)


*/


/**
 * @param {number} n
 * @return {boolean}
 */
function isPowerOfFour(n) {
    let exponent = 0
    let value = Math.pow(4, exponent)
    const positiveInput = Math.abs(n)
    while (value <= positiveInput) {
        if (value === positiveInput) break

        ++exponent
        value = Math.pow(4, exponent)
    }

    if (
        n < 0 && Math.pow(4, -exponent) === n ||
        Math.pow(4, exponent) === n
    ) return true

    return false
};

// Runtime 2 ms Beats 21.23%
// Memory 52.60 MB Beats 52.45%

// Math is great and can make the solution much simpler! Check the community solutions for an example:
function isPowerOfFourMath(n) {
    return n > 0 && Math.log2(n)%2 === 0;
}