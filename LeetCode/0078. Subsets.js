// Medium

// Given an integer array nums of unique elements, return all possible subsets (the power set).

// The solution set must not contain duplicate subsets. Return the solution in any order.

// Example 1:

// Input: nums = [1,2,3]
// Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
// Example 2:

// Input: nums = [0]
// Output: [[],[0]]
 

// Constraints:

// 1 <= nums.length <= 10
// -10 <= nums[i] <= 10
// All the numbers of nums are unique.


/*
[]
_


0
_, 0

0 1
_, 0, 01, 1

0 1 2
_, 0, 01, 1, 2, 02, 012, 12

0 1 2 3
_, 0, 01, 1, 2, 02, 012, 12, 3, 03, 013, 13, 23, 023, 0123, 123


BRUTE FORCE:
Define existsingCombinations as an array with ONE empty array ( = [[]] )

Iterate through the array of elements
    Define newCombinations as empty array
    Iterate through the array of EXISTING answers, creating a combination with the current element
    Concat the new formation into the existing result.


return result array
*/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function subsets(nums) {
    const existingCombinations = [[]]

    for(const number of nums) {
        const newCombinations = []

        for(let i = 0; i < existingCombinations.length; ++i) {
            const newCombination = [...existingCombinations[i], number]
            newCombinations.push(newCombination)
        }

        existingCombinations.push(...newCombinations)
    }

    return existingCombinations
};

// Runtime 1 ms Beats 20.07%
// Memory 56.76 MB Beats 9.95%

