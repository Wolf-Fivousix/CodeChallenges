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
// So the problem here is this:
// If there is ONE or THREE negative values in the list of "largest values", then I want to find another positive value (if it exists)
// I can keep a list of the three largest positives. (on top of the already existing largest values)
// Math.abs()

function maximumProduct3(nums) {
    let high = 0;
    let medium = 0;
    let low = 0;
    const positiveValues = [];
    nums.forEach(value => {
        // Absolute values
        if (Math.abs(value) > Math.abs(high)) {
            low = medium;
            medium = high;
            high = value;
        }
        else if (Math.abs(value) > Math.abs(medium)) {
            low = medium;
            medium = value;
        } else if (Math.abs(value) > Math.abs(low)) {
            low = value;
        }

        // Positive values
        if (positiveValues.length < 3 && value > 0) positiveValues.unshift(value);
        if (value > positiveValues[0]) positiveValues.unshift(value);
        // console.log("Current: ", value, " - ", low, medium, high);
    });

    if (countNegatives(high, medium, low) === 1 && positiveValues.length > 2 || countNegatives(high, medium, low) === 3 && positiveValues.length > 0) {
        // console.log(low, medium, high);
        if (low < 0) low = positiveValues[3 - countNegatives(high, medium, low)];
        else if (medium < 0) medium =positiveValues[3 - countNegatives(high, medium, low)];
        else high = positiveValues[3 - countNegatives(high, medium, low)];
    }

    return high * medium * low;
}

function countNegatives(a, b, c) {
    let negativeValues = 0;
    if (a < 0) ++negativeValues;
    if (b < 0) ++negativeValues;
    if (c < 0) ++negativeValues;

    return negativeValues;
}

// We don't HAVE to figure out the negatives or positives. With only 6 values, we can simply compute the product FOR ALL COMBINATIONS.
// And then return the highest one! Done!

// For this method we do need to sort the array. Which makes
// Time complexity to Log Linear O(N log (n))
// Space complexity to Linear O(N) - for storing the same input in memory.

function maximumProduct4(nums) {
    const sorted = nums.sort((a, b) => a - b);
    const positiveValues = sorted.slice(-3);
    const negativeValues = sorted.slice(0,3);
    while (positiveValues.length > 0 && positiveValues[0] < 0) positiveValues.shift();
    while (negativeValues.length > 0 && negativeValues[negativeValues.length - 1] > 0) negativeValues.pop();

    // Only negative values, we want the least negative values.
    if (!positiveValues.length) return sorted.slice(-3).reduce((sum, value) => sum * value);

    const possibleCombinations = negativeValues.concat(positiveValues);
    const stack = [];
    let startPointer = 0;
    let midPointer = 1;
    let finalPointer = 2;
    let maxProduct = Number.NEGATIVE_INFINITY;
    while (startPointer <= possibleCombinations.length - 3) {
        switch (stack.length) {
            case 0:
                stack.push(possibleCombinations[startPointer]);
            case 1:
                stack.push(possibleCombinations[midPointer]);
                continue;
            default:
                stack.push(possibleCombinations[finalPointer])
                ++finalPointer;
        }
        const product = stack.reduce((sum, value) => sum * value);
        // console.log("Product of ", stack, " is = ", product);

        maxProduct = product > maxProduct ? product : maxProduct;

        stack.pop();
        // finalPointer is out of bounds
        if (finalPointer > possibleCombinations.length - 1) {
            stack.pop();
            ++midPointer;
            finalPointer = midPointer + 1;
        }
        // midPointer is out of bounds
        if (midPointer > possibleCombinations.length - 2) {
            stack.pop();
            ++startPointer;
            midPointer = startPointer + 1;
            finalPointer = midPointer + 1;
        }
    }

    return maxProduct;
}


console.log(maximumProduct4([1,2,3]) === 6, " - ", maximumProduct4([1,2,3]))
console.log(maximumProduct4([1,2,3,4,5]) === 60, " - ", maximumProduct4([1,2,3,4,5]))
console.log(maximumProduct4([-1,-2,-3]) === -6, " - ", maximumProduct4([-1,-2,-3]))
console.log(maximumProduct4([-1,-2,-3,-4]) === -6, " - ", maximumProduct4([-1,-2,-3,-4]))
console.log(maximumProduct4([-100,-98,-1,2,3,4]) === 39200, " - ", maximumProduct4([-100,-98,-1,2,3,4]))
console.log(maximumProduct4([-1, 1, -2, 11, 5]) === 55, " - ", maximumProduct4([-1, 1, -2, 11, 5]))
console.log(maximumProduct4([-8,-7,-2,10,20]) === 1120, " - ", maximumProduct4([-8,-7,-2,10,20]))

// Runtime
// 110 ms
// Beats
// 66.54%
// Memory
// 46.9 MB
// Beats
// 43.35%

// The solution was much simpler than what I did!
// I should have also made the bruteforce approach from the start!

// Approach 1: Brute Force
// The simplest solution is to consider every triplet out of the given numsnumsnums array and check their product and find out the maximum product out of them.

// Complexity Analysis

// Time complexity : O(n3)O(n^3)O(n 
// 3
//  ). We need to consider every triplet from numsnumsnums array of length nnn.

// Space complexity : O(1)O(1)O(1). Constant extra space is used.



// Approach 2: Using Sorting
// Algorithm

// Another solution could be to sort the given numsnumsnums array(in ascending order) and find out the product of the last three numbers.

// But, we can note that this product will be maximum only if all the numbers in numsnumsnums array are positive. But, in the given problem statement, negative elements could exist as well.

// Thus, it could also be possible that two negative numbers lying at the left extreme end could also contribute to lead to a larger product if the third number in the triplet being considered is the largest positive number in the numsnumsnums array.

// Thus, either the product nums[0]×nums[1]×nums[n−1]nums[0] \times nums[1] \times nums[n-1]nums[0]×nums[1]×nums[n−1] or nums[n−3]×nums[n−2]×nums[n−1]nums[n-3] \times nums[n-2] \times nums[n-1]nums[n−3]×nums[n−2]×nums[n−1] will give the required result. Thus, we need to find the larger one from out of these values.

// public class Solution {
//     public int maximumProduct(int[] nums) {
//         Arrays.sort(nums);
//         return Math.max(nums[0] * nums[1] * nums[nums.length - 1], nums[nums.length - 1] * nums[nums.length - 2] * nums[nums.length - 3]);
//     }
// }

// Complexity Analysis

// Time complexity : O(nlog⁡n)O\big(n\log n\big)O(nlogn). Sorting the numsnumsnums array takes nlog⁡nn\log nnlogn time.

// Space complexity : O(log⁡n)O(\log n)O(logn). Sorting takes O(log⁡n)O(\log n)O(logn) space.

// Approach 3: Single Scan
// Algorithm

// We need not necessarily sort the given numsnumsnums array to find the maximum product. Instead, we can only find the required 2 smallest values(min1min1min1 and min2min2min2) and the three largest values(max1,max2,max3max1, max2, max3max1,max2,max3) in the numsnumsnums array, by iterating over the numsnumsnums array only once.

// At the end, again we can find out the larger value out of min1×min2×max1min1 \times min2 \times max1min1×min2×max1 and max1×max2×max3max1 \times max2 \times max3max1×max2×max3 to find the required maximum product.
// public class Solution {
//     public int maximumProduct(int[] nums) {
//         int min1 = Integer.MAX_VALUE, min2 = Integer.MAX_VALUE;
//         int max1 = Integer.MIN_VALUE, max2 = Integer.MIN_VALUE, max3 = Integer.MIN_VALUE;
//         for (int n: nums) {
//             if (n <= min1) {
//                 min2 = min1;
//                 min1 = n;
//             } else if (n <= min2) {     // n lies between min1 and min2
//                 min2 = n;
//             }
//             if (n >= max1) {            // n is greater than max1, max2 and max3
//                 max3 = max2;
//                 max2 = max1;
//                 max1 = n;
//             } else if (n >= max2) {     // n lies betweeen max1 and max2
//                 max3 = max2;
//                 max2 = n;
//             } else if (n >= max3) {     // n lies betwen max2 and max3
//                 max3 = n;
//             }
//         }
//         return Math.max(min1 * min2 * max1, max1 * max2 * max3);
//     }
// }
// Complexity Analysis
// Time complexity : O(n)O(n)O(n). Only one iteration over the numsnumsnums array of length nnn is required.
// Space complexity : O(1)O(1)O(1). Constant extra space is used.