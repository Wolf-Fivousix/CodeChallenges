// Easy

// Given an array nums of n integers and an integer k, determine whether there exist two adjacent subarrays of length k such that both subarrays are strictly increasing. Specifically, check if there are two subarrays starting at indices a and b (a < b), where:

// Both subarrays nums[a..a + k - 1] and nums[b..b + k - 1] are strictly increasing.
// The subarrays must be adjacent, meaning b = a + k.
// Return true if it is possible to find two such subarrays, and false otherwise.


// Example 1:
// Input: nums = [2,5,7,8,9,2,3,4,3,1], k = 3

// Output: true

// Explanation:

// The subarray starting at index 2 is [7, 8, 9], which is strictly increasing.
// The subarray starting at index 5 is [2, 3, 4], which is also strictly increasing.
// These two subarrays are adjacent, so the result is true.

// Example 2:
// Input: nums = [1,2,3,4,4,4,4,5,6,7], k = 5

// Output: false

 

// Constraints:

// 2 <= nums.length <= 100
// 1 < 2 * k <= nums.length
// -1000 <= nums[i] <= 1000

/*
BRUTE FORCE:
Create array of same size, fill everything with FALSE
increasing counter starts at 1 (after all, we have 1 element)
Iterate through the array (start at element 1) and check if the element is increasing.
    If it is, increment the counter by 1
        if we have K+ in the counter, updated TRUE in the array
    else
        reset counter to 1

At this point we have an array with FALSE/TRUE to any place where we have a increasing sequence of at least K elements.

Now we iterate once again, starting at K, and check if BOTH indexes (i and i + k) have TRUE
    If they do, then that's 2 adjacent sequences

If no sequence was found then return false.
*/




/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
function hasIncreasingSubarrays(nums, k) {
    // We're guaranteed at least 2 elements, if K is 1, there's no "sequence" to increase. Everything is a valid sequence.
    if (k === 1) return true
    
    const increasingSequences = new Array(nums.length).fill(false)
    let increasingCounter = 1

    for (let i = 1; i < nums.length; ++i) {
        if (nums[i] > nums[i - 1]) {
            ++increasingCounter
            if (increasingCounter >= k) increasingSequences[i] = true
        }
        else increasingCounter = 1
    }

    // console.log(increasingSequences)

    for (let i = k; i < nums.length; ++i) {
        if (increasingSequences[i] && increasingSequences[i - k]) return true
    }

    return false
};

// Runtime 58 ms Beats 61.02%
// Memory 57.97 MB Beats 49.15%

