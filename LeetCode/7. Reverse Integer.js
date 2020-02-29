// Given a 32-bit signed integer, reverse digits of an integer.

// Example 1:

// Input: 123
// Output: 321
// Example 2:

// Input: -123
// Output: -321
// Example 3:

// Input: 120
// Output: 21
// Note:
// Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

/**
 * @param {number} x
 * @return {number}
 */
let reverse = function(x) {
    const limit = 2**31 -1; // 2.147.483.647
    const overflowDigit = limit % 10;
    const overflowLimit = Math.floor(limit /10);
    const negative = x < 0;
    if (negative) x *= -1;
    
    let flipped = 0;
    
    while (x > 0) {
        if (flipped > overflowLimit) return 0;
        else if (flipped === overflowLimit && x > overflowDigit) return 0;
        
        flipped *= 10;
        flipped += x % 10;
        x = Math.floor(x / 10);        
    }
        
    return negative ? -flipped : flipped;
};