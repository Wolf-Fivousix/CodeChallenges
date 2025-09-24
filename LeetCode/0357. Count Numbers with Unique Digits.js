// Medium

// Given an integer n, return the count of all numbers with unique digits, x, where 0 <= x < 10n.

 

// Example 1:

// Input: n = 2
// Output: 91
// Explanation: The answer should be the total numbers in the range of 0 ≤ x < 100, excluding 11,22,33,44,55,66,77,88,99
// Example 2:

// Input: n = 0
// Output: 1
 

// Constraints:

// 0 <= n <= 8

/*
Define counter at 0
Iterate from 0 to the number we are given/computed
    If this number DOES NOT have repeated digits, increase counter by 1

return counter

Not great because we will do a lenghty iteration, BUT IT WORKS.


Now let's think about it mathematically
If we have ONE (1) digit, there are no repeats.
If we have TWO (2) digits, we'll have 9 repeats - 11, 22, 33, 44, 55...
If we have THREE (3) digits, we'll have 100 repeats - 101, 110, 111, 122, 133,
    So we have all the repats of 2 PLUS
    New 9 * (2) repeats, like 111, 122, 133... 311, 322,333... etc
    New 10 repeats, 100, 101, 202, 303..., 909
If we have FOUR (4) digits...
    All repeats of (3), 100 PLUS
    New 9 * (3) 1101, 1011, 1111, ... etc
    New 9 repeats - 1001, 1010, 1100, 
I'm not seeing a DEFINITE pattern here, although there seems to be a pattern.

Let's try a different approach...

0 - 0
1 - 1
2 - 10
3 - 11
4 - 100
5 - 101
6 - 110
7 - 111
8 - 1000
9 - 1001
10 - 1010
11 - 1011

Also not a valid approach.

Let's take a step back, then.
What does it MEAN to have a repeating number?
It means we'll use one of the 9 numbers again.
So if we DO NOT want a number to repeat, what happens once we use 1 number? The quantity of numbers we have also decrease by one.

So for 1 digit, we have 9 possible numbers to use.
For 2 digits, we have 9 * 8 VALID combinations (whatever number we used first, we won't use again)
For 3 digits, we have 9 * 8 * 7 VALID combinations... and so on.
The number of combinations being the N permutation.
*/

/**
 * @param {number} n
 * @return {number}
 */
function countNumbersWithUniqueDigits(n) {
    let uniqueDigitNumbers = 1
    const power = 10 ** n

    for (let number = 1; number < power; ++number) {
        if(isNumberDigitUnique(number)) ++uniqueDigitNumbers
    }

    return uniqueDigitNumbers
};

function isNumberDigitUnique(number) {
    const digitFlag = [
        0, // 0
        0, // 1
        0, // 2
        0, // 3
        0, // 4
        0, // 5
        0, // 6
        0, // 7
        0, // 8
        0, // 9
    ]

    let remainder = number
    while (remainder > 0) {
        const digit = remainder % 10
        
        if (digitFlag[digit]) return false // Digit has been found before

        ++digitFlag[digit]
        remainder = Math.floor(remainder / 10)
    }

    return true
}

// This works, BUT exceeds the time limit for the solution n = 8
// console.log(countNumbersWithUniqueDigits(8))

/**
 * @param {number} n
 * @return {number}
 */
function countNumbersWithUniqueDigits(n) {
    let sum = 9

    for (let i = 1; i < n; ++i) {
        sum *= (10 - i)
    }

    return sum + 1
};


// Still not working... Geeeeez >.< ...
// Here's a solution that works, by the community:
// var countNumbersWithUniqueDigits = function(n) {
//     if (n === 0) return 1;
//     if (n === 1) return 10;

//     let result = 10;
//     let current = 9;

//     for (let i = 2; i <= n; i++) {
//         current *= (10 - (i - 1));
//         result += current;
//     }

//     return result;
// };