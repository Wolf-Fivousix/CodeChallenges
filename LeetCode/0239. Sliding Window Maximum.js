// Hard

// You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.

// Return the max sliding window.

 

// Example 1:

// Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
// Output: [3,3,5,5,6,7]
// Explanation: 
// Window position                Max
// ---------------               -----
// [1  3  -1] -3  5  3  6  7       3
//  1 [3  -1  -3] 5  3  6  7       3
//  1  3 [-1  -3  5] 3  6  7       5
//  1  3  -1 [-3  5  3] 6  7       5
//  1  3  -1  -3 [5  3  6] 7       6
//  1  3  -1  -3  5 [3  6  7]      7
// Example 2:

// Input: nums = [1], k = 1
// Output: [1]
// Example 3:

// Input: nums = [1,-1], k = 1
// Output: [1,-1]
// Example 4:

// Input: nums = [9,11], k = 2
// Output: [11]
// Example 5:

// Input: nums = [4,-2], k = 2
// Output: [4]

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

/*
Brute Force:
It works, but exceeds the time limit for LeetCode.
*/
 function maxSlidingWindow(nums, x) {
    const maxArray = [];
    for (let i = 0; i + x <= nums.length; ++i) {
        maxArray.push(findMaxValueInSequence(nums, i, x));
    }
    
    return maxArray;
}

function findMaxValueInSequence(array, start, windowSize) {
    let maxValue = Number.NEGATIVE_INFINITY;
    for (let i = 0; i < windowSize; ++i) {
        maxValue = Math.max(maxValue, array[start + i]);
    }
    
    return maxValue;
}

// Solution by wanga2659
// https://leetcode.com/problems/sliding-window-maximum/discuss/871317/Clear-thinking-process-with-PICTURE-brute-force-to-mono-deque-pythonjavajavascript
var maxSlidingWindow = function(nums, k) {
    const q = [];  // stores *indices*
    const res = [];
    for (let i = 0; i < nums.length; i++) {
        while (q && nums[q[q.length - 1]] <= nums[i]) {
            q.pop();
        }
        q.push(i);
        // remove first element if it's outside the window
        if (q[0] === i - k) {
            q.shift();
        }
        // if window has k elements add to results (first k-1 windows have < k elements because we start from empty window and add 1 element each iteration)
        if (i >= k - 1) {
            res.push(nums[q[0]]);
        }
    }
    return res;    
}
// Runtime: 348 ms, faster than 76.59% of JavaScript online submissions for Sliding Window Maximum.
// Memory Usage: 67.9 MB, less than 85.33% of JavaScript online submissions for Sliding Window Maximum.