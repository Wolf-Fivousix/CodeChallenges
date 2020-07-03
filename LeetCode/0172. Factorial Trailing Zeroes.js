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

//  1 => 1
//  2 => 2
//  3 => 6
//  4 => 24
//  5 => 120
//  6 => 720
//  7 => 5.040
//  8 => 40.320
//  9 => 362.880
// 10 => 3.628.800
// 11 => 39.916.800
// 12 => 479.001.600
// 13 => 518.918.400
// 14 => 7.264.857.600
// 15 => 108.972.864.000
// 16 => 1.743.565.824.000
// 17 => 29.640.619.008.000
// 18 => 533.531.142.144.000
// 19 => 10.137.091.700.736.000
// 20 => 202.741.834.014.720.000
// 21 => 4.257.578.514.309.120.000
// 22 => 93.666.727.314.800.640.000
// 23 => 2.154.334.728.240.414.720.000
// 24 => 51.704.033.477.769.953.280.000
// 25 => 1.292.600.836.944.248.832.000.000