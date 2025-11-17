// Easy

// Given an binary array nums and an integer k, return true if all 1's are at least k places away from each other, otherwise return false.

 

// Example 1:
// https://assets.leetcode.com/uploads/2020/04/15/sample_1_1791.png
// Input: nums = [1,0,0,0,1,0,0,1], k = 2
// Output: true
// Explanation: Each of the 1s are at least 2 places away from each other.

// Example 2:
// https://assets.leetcode.com/uploads/2020/04/15/sample_2_1791.png
// Input: nums = [1,0,0,1,0,1], k = 2
// Output: false
// Explanation: The second 1 and third 1 are only one apart from each other.
 

// Constraints:

// 1 <= nums.length <= 105
// 0 <= k <= nums.length
// nums[i] is 0 or 1

/*
Straight forward to be done in ONE pass:
Define our spacesBetweenOnes counter to start at K
Iterate through the array starting at 0
    If the element is 1, check that spacesBetweenOnes is K or higher.
        If it is NOT, then return false.
        If yes, reset counter to 0
    If it's a 0, increase the counter by 1

Return true

Linear O(N) Time Complexity
Constat O(1) Space Complexity
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
function kLengthApart(nums, k) {
    let spacesBetweenOnes = k

    for (let i = 0; i < nums.length; ++i) {
        if (nums[i] === 0) {
            ++spacesBetweenOnes
        }
        else {
            if (spacesBetweenOnes < k) return false

            spacesBetweenOnes = 0
        }
    }

    return true
};

// Runtime 0 ms Beats 100.00%
// Memory 62.46 MB Beats 33.85%