// Medium

// Given an array nums of n integers and an integer target, find three integers in nums such that the sum is closest to target. Return the sum of the three integers. You may assume that each input would have exactly one solution.

 

// Example 1:

// Input: nums = [-1,2,1,-4], target = 1
// Output: 2
// Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
 

// Constraints:

// 3 <= nums.length <= 10^3
// -10^3 <= nums[i] <= 10^3
// -10^4 <= target <= 10^4

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function threeSumClosest(nums, target) {
    let sum = Number.POSITIVE_INFINITY;
    for (let i = 0; i < nums.length; ++i) {
        for (let j = i + 1; j < nums.length; ++j) {
            for (let k = j + 1; k < nums.length; ++k) {
                const currentSum = nums[i] + nums[j] + nums[k];
                if (Math.abs(currentSum - target) < Math.abs(sum - target)) sum = currentSum;
            }
        }
    }
    
    return sum;
}

// Bruteforce approach.
// Polynomial (N ^ 3) Time Complexity.
// Constant Space Complexity.

// Runtime: 200 ms, faster than 12.98% of JavaScript online submissions for 3Sum Closest.
// Memory Usage: 37.3 MB, less than 23.17% of JavaScript online submissions for 3Sum Closest.

// Proposed solution N ^ 2
// Algorithm

// Initialize the minimum difference diff with a large value.
// Sort the input array nums.
// Iterate through the array:
// For the current position i, set lo to i + 1, and hi to the last index.
// While the lo pointer is smaller than hi:
// Set sum to nums[i] + nums[lo] + nums[hi].
// If the absolute difference between sum and target is smaller than the absolute value of diff:
// Set diff to target - sum.
// If sum is less than target, increment lo.
// Else, decrement hi.
// If diff is zero, break from the loop.
// Return the value of the closest triplet, which is target - diff.

// C++
// int threeSumClosest(vector<int>& nums, int target) {
//     int diff = INT_MAX, sz = nums.size();
//     sort(begin(nums), end(nums));
//     for (int i = 0; i < sz && diff != 0; ++i) {
//         int lo = i + 1, hi = sz - 1;
//         while (lo < hi) {
//             int sum = nums[i] + nums[lo] + nums[hi];
//             if (abs(target - sum) < abs(diff))
//                 diff = target - sum;
//             if (sum < target)
//                 ++lo;
//             else
//                 --hi;
//         }
//     }
//     return target - diff;
// }