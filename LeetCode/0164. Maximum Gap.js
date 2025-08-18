// Medium

// Medium
// Topics
// premium lock icon
// Companies
// Given an integer array nums, return the maximum difference between two successive elements in its sorted form. If the array contains less than two elements, return 0.

// You must write an algorithm that runs in linear time and uses linear extra space.

// Example 1:

// Input: nums = [3,6,9,1]
// Output: 3
// Explanation: The sorted form of the array is [1,3,6,9], either (3,6) or (6,9) has the maximum difference 3.
// Example 2:

// Input: nums = [10]
// Output: 0
// Explanation: The array contains less than 2 elements, therefore return 0.
 

// Constraints:

// 1 <= nums.length <= 105
// 0 <= nums[i] <= 109

/*
BRUTE FORCE:
Sort the input, then scan it and record the delta between the current and previous element.

This doesn't work because sorting is n log n, and the problem wants it done in Linear time.


So we will construct a hash with all the elements, this will give us the sorted order in 2 N by using N space.
Then we scan doing the comparison and return the largest delta.

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
function maximumGap(nums) {
    const map = {}
    for(const number of nums) {
        map[number] = true
    }

    const sortedNumbers = Object.keys(map).map(el => Number(el))
    let maximumDelta = 0
    for (let i = 1; i < sortedNumbers.length; ++i) {
        maximumDelta = Math.max(maximumDelta, sortedNumbers[i] - sortedNumbers[i - 1])
    }

    return maximumDelta
};

// Runtime  159 ms Beats 27.27%
// Memory  86.54 MB Beats 26.86%

// The optimal answer uses Bucket/Radix sorting in order to achieve the same result.
// Of course, without knowing that, the next best solution (for JS) is this. Which is much more concise and understandable.