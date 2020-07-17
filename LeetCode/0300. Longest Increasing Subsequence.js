// Medium

// Given an unsorted array of integers, find the length of longest increasing subsequence.

// Example:

// Input: [10,9,2,5,3,7,101,18]
// Output: 4 
// Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4. 
// Note:

// There may be more than one LIS combination, it is only necessary for you to return the length.
// Your algorithm should run in O(n2) complexity.
// Follow up: Could you improve it to O(n log n) time complexity?

// Input: []
// Output: 0
// Input: [2,2,3]
// Output: 2 ([2,3])
// Brute Force Approach.
// declare a empty result array.
// Iterate through the array.
    // Interate again, adding any numbers that are greater than my previous number.
// iterate through result array and find the length of the longest array.
// return the length of longest array.
function lengthOfLIS(nums) {
    const result = [];
    for (let i = 0; i < nums.length; ++i) {
        const sequence = [nums[i]];
        for (let j = i + 1; j < nums.length; ++j) {
            const maxValue = sequence[sequence.length - 1];
            // [2,3,5]
            // maxValue = 5
            if (nums[j] > maxValue) sequence.push(nums[j]);
        }
        result.push(sequence);
    }
    console.log(result);
    return result.reduce((maxLength, subArray) => Math.max(maxLength, subArray.length), 0);
}
// Input: [2,2,3]
// Output: 2 ([2,3])
/*
result = [[2, 3], [2, 3], [3]]
maxLength = 2
[[2, 3], 0 / 2
 [2, 3], 2 / 2
  [3]]  2 / 1
  => 2
[1,2,3,4,5]
[
    [1,2,3,4,5],
    [2,3,4,5],
    [3,4,5],
    [4,5],
    [5]
]
[2,3,10,5,6]
[1,2, 3,1,2]
 2,3,10,10,10
 2,3,5,5,6
// Input: [10,9,2,5,3,7,101,18]
// Output: 4 
[10,9,2,5,3,7,101,18]
2,2,2,3,3,7,18,18
2,3,7,18
[5,6,7,1,2]
 ^
1,1,1,1,2 => 1,2 (unshift)
5,6,7,7,7 => 5,6,7 (pushing)
[
    [2,3,10],
    [3,10],
    [10],
    [5,6],
    [6]
]
*/
// Polynomial for Time and Space Complexity.
