// Given a non-empty array of integers, return the k most frequent elements.

// Example 1:

// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]
// Example 2:

// Input: nums = [1], k = 1
// Output: [1]
// Note:

// You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
// Your algorithm's time complexity must be better than O(n log n), where n is the array's size.
// It's guaranteed that the answer is unique, in other words the set of the top k frequent elements is unique.
// You can return the answer in any order.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
function topKFrequent(nums, k) {
    const counter = {};
    for (let i = 0; i < nums.length; ++i) {
        if (counter[nums[i]]) ++counter[nums[i]];
        else counter[nums[i]] = 1;
    }
    
    let result = [];
    for (let key in counter) {
        result.push([Number(key), counter[key]]);
    }
    
    result = result.sort((a,b) => b[1] - a[1]);
    result = result.map(pair => pair[0]);
    return result.slice(0, k);
}