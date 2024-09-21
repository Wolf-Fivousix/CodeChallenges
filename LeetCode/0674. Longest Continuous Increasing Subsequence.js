// Easy
// Given an unsorted array of integers nums, return the length of the longest continuous increasing subsequence (i.e. subarray). The subsequence must be strictly increasing.

// A continuous increasing subsequence is defined by two indices l and r (l < r) such that it is [nums[l], nums[l + 1], ..., nums[r - 1], nums[r]] and for each l <= i < r, nums[i] < nums[i + 1].


// Example 1:

// Input: nums = [1,3,5,4,7]
// Output: 3
// Explanation: The longest continuous increasing subsequence is [1,3,5] with length 3.
// Even though [1,3,5,7] is an increasing subsequence, it is not continuous as elements 5 and 7 are separated by element
// 4.
// Example 2:

// Input: nums = [2,2,2,2,2]
// Output: 1
// Explanation: The longest continuous increasing subsequence is [2] with length 1. Note that it must be strictly
// increasing.
 

// Constraints:

// 1 <= nums.length <= 104
// -109 <= nums[i] <= 109


// longestSequence starts at 0
// currentSequence starts at 0 

// Compare longest to current.

// Traverse the array once
// if the previous element is inside the boundaries of the array (0 or more) and is equal or higher than current 
//     compare currentSequence to Longest -> If current is longer, save it to longest
//     reset currentSequence back to 1
// else we increase currentSequence by 1.

// once traversal is done, compare it again.

// return the longestSequence.

// Runs at linear time O(n)
// Uses constant memory O(1)

/**
 * @param {number[]} nums
 * @return {number}
 */
function findLengthOfLCIS(nums) {
    let longestSequence = 0
    let currentSequence = 0
    const computeSequence = () => {
        if (currentSequence > longestSequence) longestSequence = currentSequence
        currentSequence = 1
    }

    for (let i = 0; i < nums.length; ++i) {
        const currentNumber = nums[i]
        if (i - 1 >= 0 && nums[i - 1] >= currentNumber) computeSequence()
        else ++currentSequence
    }

    computeSequence()
    
    return longestSequence;
};

// Runtime 63 ms Beats 15.67%
// Memory 49.76 MB Beats 40.00%