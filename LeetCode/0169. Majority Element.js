// Easy

// Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

// You may assume that the array is non-empty and the majority element always exist in the array.

// Example 1:

// Input: [3,2,3]
// Output: 3
// Example 2:

// Input: [2,2,1,1,1,2,2]
// Output: 2

/**
 * @param {number[]} nums
 * @return {number}
 */
function majorityElement(nums) {
    const hash = {};
    
    for (let i = 0; i < nums.length; ++i) {
        if (hash[nums[i]]) ++hash[nums[i]];
        else hash[nums[i]] = 1;
    }
    
    const keys = Object.keys(hash);
    let maxElement = null;
    let counter = Number.NEGATIVE_INFINITY;
    
    for (let i = 0; i < keys.length; ++i) {
        const key = keys[i];
        if (counter < hash[key]) {
            counter = hash[key];
            maxElement = key;
        }
    }
    
    return maxElement;
};

// Runtime: 76 ms, faster than 28.16% of JavaScript online submissions for Majority Element.
// Memory Usage: 38.4 MB, less than 14.34% of JavaScript online submissions for Majority Element.

// Linear Time and Space complexity.