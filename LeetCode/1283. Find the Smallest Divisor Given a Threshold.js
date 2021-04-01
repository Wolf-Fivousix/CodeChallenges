// Medium

// Given an array of integers nums and an integer threshold, we will choose a positive integer divisor, divide all the array by it, and sum the division's result. Find the smallest divisor such that the result mentioned above is less than or equal to threshold.

// Each result of the division is rounded to the nearest integer greater than or equal to that element. (For example: 7/3 = 3 and 10/2 = 5).

// It is guaranteed that there will be an answer.

 

// Example 1:

// Input: nums = [1,2,5,9], threshold = 6
// Output: 5
// Explanation: We can get a sum to 17 (1+2+5+9) if the divisor is 1. 
// If the divisor is 4 we can get a sum of 7 (1+1+2+3) and if the divisor is 5 the sum will be 5 (1+1+1+2). 
// Example 2:

// Input: nums = [44,22,33,11,1], threshold = 5
// Output: 44
// Example 3:

// Input: nums = [21212,10101,12121], threshold = 1000000
// Output: 1
// Example 4:

// Input: nums = [2,3,5,7,11], threshold = 11
// Output: 3
 

// Constraints:

// 1 <= nums.length <= 5 * 104
// 1 <= nums[i] <= 106
// nums.length <= threshold <= 106

/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */
 function smallestDivisor(nums, threshold) {
    let divider = 1;
    let currentSum = nums.reduce((acc, value) => acc + value);
    while (threshold < currentSum) {
        ++divider;
        currentSum = nums.reduce((accumulator, value) => accumulator + Math.ceil(value / divider), 0);
    }
    
    return divider;
};

// Solution by LeetCode - Using Binary Search
/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */
 function smallestDivisor(nums, threshold) {
    let left = 1;
    let right = maxValue(nums);
    
    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2);
        const sum = computeSum(nums, mid);
        
        if (sum > threshold) left = mid + 1;
        else right = mid - 1;
    }
    
    return left;
};

function computeSum(array, divider) {
    return array.reduce((accumulator, value) => accumulator + Math.ceil(value / divider), 0);
}

function maxValue(array) {
    return array.reduce((acc, value) => acc > value ? acc : value);
}

// Runtime: 144 ms, faster than 37.35% of JavaScript online submissions for Find the Smallest Divisor Given a Threshold.
// Memory Usage: 43.4 MB, less than 35.02% of JavaScript online submissions for Find the Smallest Divisor Given a Threshold.
// Runtime: 120 ms, faster than 54.09% of JavaScript online submissions for Find the Smallest Divisor Given a Threshold.
// Memory Usage: 42.5 MB, less than 68.48% of JavaScript online submissions for Find the Smallest Divisor Given a Threshold.

// Explanation:
// Approach 2: Math + Binary Search
// The idea is to perform binary search in limits 1, max(nums). This approach uses the idea that the maximum divisor to consider is max(nums). For this divisor and all greater numbers, the requested sum is equal to 2N2N, and hence there is no sense to consider greater divisors.

// Algorithm

// Implement function computeSum(x) which divides nums elements by x and then returns their sum.

// Initialize search limits: left = 1, right = max(nums) = nums[nums.length - 1].

// Perform binary search in boundaries from 1 to max(nums):

// While left <= right:

// Pick a pivot divisor in the middle: pivot = (left + right) / 2. To avoid overflow in Java, use the form pivot = left + ((right - left) >> 1) instead of straightforward expression above. Note, that there is no overflow in Python.

// Compute the requested sum for that pivot divisor: num = compute_sum(pivot).

// Compare num and the threshold:

// If num > threshold, continue to search on the right left = pivot + 1.

// Else continue to search on the left right = pivot - 1.

// At the end of loop, left > right, computeSum(right) > threshold and computeSum(left) <= threshold. Hence left is the smallest divisor for which the requested sum is less or equal to threshold. Return left.

