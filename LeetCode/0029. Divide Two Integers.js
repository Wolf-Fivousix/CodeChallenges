// Medium

// Given two integers dividend and divisor, divide two integers without using multiplication, division and mod operator.

// Return the quotient after dividing dividend by divisor.

// The integer division should truncate toward zero, which means losing its fractional part. For example, truncate(8.345) = 8 and truncate(-2.7335) = -2.

// Example 1:

// Input: dividend = 10, divisor = 3
// Output: 3
// Explanation: 10/3 = truncate(3.33333..) = 3.
// Example 2:

// Input: dividend = 7, divisor = -3
// Output: -2
// Explanation: 7/-3 = truncate(-2.33333..) = -2.
// Note:

// Both dividend and divisor will be 32-bit signed integers.
// The divisor will never be 0.
// Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 231 − 1 when the division result overflows.

/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
function divide(dividend, divisor) {
    let negative = false;
    if (dividend < 0) {
        negative = true;
        dividend = -dividend;
    }
    if (divisor < 0) {
        negative = !negative;
        divisor = -divisor;
    }
    
    let quotient = 0;
    while (dividend - divisor >= 0) {
        ++quotient;
        dividend -= divisor;
    }
    
    if (!negative && quotient > 2**31 - 1) return 2**31 - 1;
    if (negative && quotient > 2**31) return -(2**31);
    
    return negative ? -quotient : quotient;
}

// Brute force solution.
// Does not execute within the time limits.

// Solution by The_Islander
// The algorithm is just the same as many other posts, double the divisor by shifting left 1 bit.

// But I still got TLE 3 times, the trick is: JavaScript bitwise op is for signed 32-bit, so

// while ((base << 1) <= dividend) {
// doesn't work. Because "base" overflows.

// while (base <= (dividend >> 1)) {
// works.

var divide = function(dividend, divisor) {
  if (divisor === 0) return 0;
  if (dividend === 0) return 0;
  if (dividend === -2147483648 && divisor === -1) return 2147483647;

  var isPositive = true;
  if (dividend > 0 !== divisor > 0) isPositive = false;

  divisor = Math.abs(divisor);
  dividend = Math.abs(dividend);

  var count = 1,
    result = 0,
    base = divisor;

  while (dividend >= divisor) {
    count = 1;
    base = divisor;
    while (base <= (dividend >> 1)) {
      base = base << 1;
      count = count << 1;
    }
    result += count;
    dividend -= base;
  }

  if (!isPositive) result = -result;
  return result;
};