// Medium

// Given an array of positive integers nums and a positive integer target, return the minimal length of a contiguous subarray [numsl, numsl+1, ..., numsr-1, numsr] of which the sum is greater than or equal to target. If there is no such subarray, return 0 instead.

 

// Example 1:

// Input: target = 7, nums = [2,3,1,2,4,3]
// Output: 2
// Explanation: The subarray [4,3] has the minimal length under the problem constraint.
// Example 2:

// Input: target = 4, nums = [1,4,4]
// Output: 1
// Example 3:

// Input: target = 11, nums = [1,1,1,1,1,1,1,1]
// Output: 0
 

// Constraints:

// 1 <= target <= 109
// 1 <= nums.length <= 105
// 1 <= nums[i] <= 105

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */

// "Sliding Window" approach, that will "pop" elements out of the lenght as we encounter new values
// Linear Time Complexity
// Constant Space Complexity
 function minSubArrayLen(target, nums) {
    let sum = 0;
    let minLength = Number.POSITIVE_INFINITY;
    let currentLength = 0;
    
    for (let i = 0; i < nums.length; ++i) {
        const num = nums[i];
        sum += num;
        ++currentLength;
        
        if (sum >= target) {
            while (sum >= target) {
                const firstValue = nums[i - (currentLength - 1)];
                if (sum - firstValue >= target) {
                    sum -= firstValue;
                    --currentLength;
                }
                else break;
            }
            
            minLength = Math.min(minLength, currentLength);
        }
    }
    
    return minLength === Number.POSITIVE_INFINITY ? 0 : minLength;
};

// Runtime: 80 ms, faster than 71.41% of JavaScript online submissions for Minimum Size Subarray Sum.
// Memory Usage: 39.6 MB, less than 32.94% of JavaScript online submissions for Minimum Size Subarray Sum.

