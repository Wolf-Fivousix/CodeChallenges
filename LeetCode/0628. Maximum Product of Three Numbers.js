// Easy
// https://leetcode.com/problems/maximum-product-of-three-numbers/

// Given an integer array nums, find three numbers whose product is maximum and return the maximum product.


// Example 1:

// Input: nums = [1,2,3]
// Output: 6
// Example 2:

// Input: nums = [1,2,3,4]
// Output: 24
// Example 3:

// Input: nums = [-1,-2,-3]
// Output: -6
 

// Constraints:

// 3 <= nums.length <= 104
// -1000 <= nums[i] <= 1000

/*
    Define 3 variables, all start at minus infinity.
        high
        medium
        low
    Iterate through the array
        for each element, cascade on the if else
        higher than high
            low takes medium
            medium takes high
            high takes element
        higher than medium
            low takes medium
            medium takes element
        higher than low
            low takes element

    return product of high * medium * low.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
function maximumProduct1(nums) {
    let high = Number.NEGATIVE_INFINITY;
    let medium = Number.NEGATIVE_INFINITY;
    let low = Number.NEGATIVE_INFINITY;
    nums.forEach(value => {
        if (value > high) {
            low = medium;
            medium = high;
            high = value;
        }
        else if (value > medium) {
            low = medium;
            medium = value;
        } else if (value > low) {
            low = value;
        }
    });

    return high * medium * low;
}
// This one fails with 2 negative numbers and at least one positive.
// The second most straight forward way is going to be to sort the input.

function maximumProduct2(nums) {
    const sortedInput = nums.sort((a, b) => a - b );
    const firstElement = sortedInput[0];
    const secondElement = sortedInput[1];
    const lastElement = sortedInput[sortedInput.length -1];
    if (firstElement < 0 && secondElement < 0 && lastElement > 0) return firstElement * secondElement * lastElement;

    return lastElement * sortedInput[sortedInput.length - 2] * sortedInput[sortedInput.length - 3];
}
// Missed another edge case!
// What if the negative values ARE NOT the biggest elements?? I need to consider it might be something like [-2, -1, 1, 5, 11] -> This should output 55, NOT 22.



console.log(maximumProduct2([1,2,3]))
console.log(maximumProduct2([1,2,3,4,5]))
console.log(maximumProduct2([-1,-2,-3]))
console.log(maximumProduct2([-100,-98,-1,2,3,4])) // => 39200
console.log(maximumProduct2([-1, 1, -2, 11, 5])) // => 55
