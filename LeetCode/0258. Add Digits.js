// Easy

// Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.

// Example:

// Input: 38
// Output: 2 
// Explanation: The process is like: 3 + 8 = 11, 1 + 1 = 2. 
//              Since 2 has only one digit, return it.
// Follow up:
// Could you do it without any loop/recursion in O(1) runtime?

/**
 * @param {number} num
 * @return {number}
 */
function addDigits(num) {
    while (num > 9) num = sumDigits(num);
    
    return num;
}

function sumDigits(number) {
    let sum = 0;
    while (number > 0) {
        sum += number % 10;
        number = Math.floor(number / 10);
    }
    
    return sum;
}

// Runtime: 92 ms, faster than 56.79% of JavaScript online submissions for Add Digits.
// Memory Usage: 38.1 MB, less than 5.75% of JavaScript online submissions for Add Digits.
// "Linear" Time Complexity, although the run time does not quite grow with the input, like 111111 and 999.
// Constant Space Complexity.