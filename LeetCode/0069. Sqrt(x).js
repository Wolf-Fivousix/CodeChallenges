// Implement int sqrt(int x).

// Compute and return the square root of x, where x is guaranteed to be a non-negative integer.

// Since the return type is an integer, the decimal digits are truncated and only the integer part of the result is returned.

// Example 1:

// Input: 4
// Output: 2
// Example 2:

// Input: 8
// Output: 2
// Explanation: The square root of 8 is 2.82842..., and since 
//              the decimal part is truncated, 2 is returned.


/**
 * @param {number} x
 * @return {number}
 */
function mySqrt(x) {
    let value = 0;
    
    while (value * value < x) {
        if ((value + 1) * (value + 1) <= x) ++value;
        else break;
    }
    
    return value;
};

// Brute force approach.
// Runtime: 128 ms, faster than 11.47% of JavaScript online submissions for Sqrt(x).
// Memory Usage: 37.2 MB, less than 14.29% of JavaScript online submissions for Sqrt(x).

// Solution by zhangleirunning

var mySqrt = function(x) {
    let left = 0, right = x+1;
    while (left < right) {
        let mid = Math.floor((left+right)/2);
        if (mid*mid <= x) {
            left = mid+1;
        } else {
            right = mid;
        }
    }
    return left-1;
};
// The idea here is to divide the original value by 2, until we find a match.
// That drops the Time Complexity to Log Linear.