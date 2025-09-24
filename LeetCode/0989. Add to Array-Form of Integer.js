// Easy

// The array-form of an integer num is an array representing its digits in left to right order.

// For example, for num = 1321, the array form is [1,3,2,1].
// Given num, the array-form of an integer, and an integer k, return the array-form of the integer num + k.

 

// Example 1:

// Input: num = [1,2,0,0], k = 34
// Output: [1,2,3,4]
// Explanation: 1200 + 34 = 1234
// Example 2:

// Input: num = [2,7,4], k = 181
// Output: [4,5,5]
// Explanation: 274 + 181 = 455
// Example 3:

// Input: num = [2,1,5], k = 806
// Output: [1,0,2,1]
// Explanation: 215 + 806 = 1021
 

// Constraints:

// 1 <= num.length <= 104
// 0 <= num[i] <= 9
// num does not contain any leading zeros except for the zero itself.
// 1 <= k <= 104

/*
BRUTE FORCE:
We are going to avoid doing fancy optimizations and just convert the data to a format we can work by default.
Convert the num array input into a number
Add the numbers
convert the result into the array format and return

Constant Time, because doesn't matter how big our input is, we will continue to only use the same logic.
Linar Space O(n) - because the output requires as much or more memory than the input.
*/

/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
function addToArrayForm(num, k) {
    let sum = Number(num.join(""))
    sum += k
    return String(sum).split("").map(value => Number(value))
};

// Opsy! Wrong assumption here! num.length being lesser or equal to 10^4 means we can have a number with up to 10.000 digits!!
// That's WAAAY bigger than 10.000! So we are overflowing the integer.
// The simplest solution is to keep as is and implement BigInt instead of Number
function addToArrayForm(num, k) {
    let sum = BigInt(num.join(""))
    sum += BigInt(k)
    return String(sum).split("").map(value => Number(value))
};

// Runtime 16 ms Beats 44.81%
// Memory 60.76 MB Beats 77.83%


// If this is not an acceptable answer, than we will have to do simple math operations and manually update the array from right to left.
// But we also need to account for K being a longest number than the num array, eg: [0] and 123456789
/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
function addToArrayForm(num, k) {
    const toAdd = String(k).split("").map(el => Number(el))
    const longestNumber = num.length > toAdd.length ? num : toAdd
    const auxiliaryNumber = num.length > toAdd.length ? toAdd : num
    const sum = new Array(longestNumber.length)
    let carryOver = 0

    console.log(`longestNumber=${longestNumber}`)
    console.log(`auxiliaryNumber=${auxiliaryNumber}`)

    for (let i = longestNumber.length - 1; i >= 0; --i) {
        const reverseKIndex = i - (longestNumber.length) + (auxiliaryNumber.length)
        const kToAdd = reverseKIndex >= 0 ? auxiliaryNumber[reverseKIndex] : 0
        let currentDigit = longestNumber[i]
        currentDigit += kToAdd + carryOver

        console.log(`reverseKIndex=${reverseKIndex}`)
        console.log(`kToAdd=${kToAdd}`)
        console.log(`currentDigit=${currentDigit}`)

        sum[i] = currentDigit % 10
        carryOver = Math.floor(currentDigit / 10)
    }
    if (carryOver > 0) sum.unshift(carryOver)

    return sum
};

// Runtime 7 ms Beats 65.09%
// Memory 62.46 MB Beats 21.70%