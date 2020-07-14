// Easy

// You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security system connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

// Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight without alerting the police.

 

// Example 1:

// Input: nums = [1,2,3,1]
// Output: 4
// Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
//              Total amount you can rob = 1 + 3 = 4.
// Example 2:

// Input: nums = [2,7,9,3,1]
// Output: 12
// Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
//              Total amount you can rob = 2 + 9 + 1 = 12.
 

// Constraints:

// 0 <= nums.length <= 100
// 0 <= nums[i] <= 400

/**
 * @param {number[]} nums
 * @return {number}
 */
function rob(nums) {
    let currentMax = 0;
    let previousMax = 0;
    
    for (let i = 0; i < nums.length; ++i) {
        const temp = currentMax;
        currentMax = Math.max(currentMax, previousMax + nums[i]);
        previousMax = temp;
    }
    
    return Math.max(currentMax, previousMax);
};

// Runtime: 64 ms, faster than 74.81% of JavaScript online submissions for House Robber.
// Memory Usage: 32.8 MB, less than 94.58% of JavaScript online submissions for House Robber.

// Linear Time Complexity and Constant Space Complexity.

// Here's the idea:
// We keep track of two variables: One that choose to rob the current house.
// One that did not rob the current house.
// When we move to the next house, we compare and say: "If I rob this house, would I be better of not robing the previous house?"
// If the answer is "yes", then we "unrob" the previous house and rob the current house. (Yeah, I know, magic)
// They key point is: We need to keep a record of these two houses in order to "not rob" the previous one IN CASE the current house
// would make us better of. But if the previous house loot was good enough, swapping between it and the current is not worth it.