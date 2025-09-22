// Easy

// You are given an array nums consisting of positive integers.

// Return the total frequencies of elements in nums such that those elements all have the maximum frequency.

// The frequency of an element is the number of occurrences of that element in the array.

 

// Example 1:

// Input: nums = [1,2,2,3,1,4]
// Output: 4
// Explanation: The elements 1 and 2 have a frequency of 2 which is the maximum frequency in the array.
// So the number of elements in the array with maximum frequency is 4.
// Example 2:

// Input: nums = [1,2,3,4,5]
// Output: 5
// Explanation: All elements of the array have a frequency of 1 which is the maximum.
// So the number of elements in the array with maximum frequency is 5.
 

// Constraints:

// 1 <= nums.length <= 100
// 1 <= nums[i] <= 100

/*
BRUTE FORCE
Map the array into a frequency map counter
    Keeping track of the highest frequency
Reduce the map only to the highest frequency elements

Return the product of highest frequency * the reduced length

Linear Time Complexity O(N)
Linear Space Complexity O(N)
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
function maxFrequencyElements(nums) {
    const valueFrequency = {}
    let highestFrequency = 0

    for (const value of nums) {
        if (valueFrequency[value]) {
            ++valueFrequency[value]
        } else {
            valueFrequency[value] = 1
        }

        highestFrequency = Math.max(valueFrequency[value], highestFrequency)
    }

    const highestFrequencyEleemnts = Object.entries(valueFrequency).filter(([key, value]) => value === highestFrequency).map(([key, value]) => key)

    return highestFrequency * highestFrequencyEleemnts.length
};

// Runtime 3 ms Beats 34.82%
// Memory 57.03 MB Beats 50.61%

// Optimizing for a single pass
/**
 * @param {number[]} nums
 * @return {number}
 */
function maxFrequencyElements(nums) {
    const valueFrequency = {}
    let highestFrequency = 0
    let totalFrequencies = 0

    for (const value of nums) {
        if (valueFrequency[value]) {
            ++valueFrequency[value]
        } else {
            valueFrequency[value] = 1
        }

        if (valueFrequency[value] > highestFrequency) {
            highestFrequency = valueFrequency[value]
            totalFrequencies = valueFrequency[value]
        } else if (valueFrequency[value] === highestFrequency) {
            totalFrequencies += highestFrequency
        }
        // If valueFrequency[value] is lower than highestFrequency, we just ignore it
    }

    return totalFrequencies
};

// Runtime 1 ms Beats 89.47%
// Memory 57.26 MB Beats 44.94%
// Although still Linear Time Complexity, doing it in a single pass instead of 3 improved the efficiency by 2 ms.