// Medium

// Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.

// Your algorithm's runtime complexity must be in the order of O(log n).

// If the target is not found in the array, return [-1, -1].

// Example 1:

// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]
// Example 2:

// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]
 

// Constraints:

// 0 <= nums.length <= 10^5
// -10^9 <= nums[i] <= 10^9
// nums is a non decreasing array.
// -10^9 <= target <= 10^9

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function searchRange(nums, target) {
    // Binary search for the value.
    // if not found, return -1,-1
    // if found, rangeSearch left and right.
        // from start to end, get mid value
        // if the mid is not the target, search right portion.
        // if the mid is the target, update min index and search left portion.
    let lowest = binarySearch(nums, target);
    let highest = lowest;
    if (lowest === -1) return [-1, -1];
    
    // Find lowest index.
    function lowLow() {
        let start = 0;
        let end = lowest;
        
        while (start < end) {
            const middle = Math.floor(start + ((end - start) / 2));
            if (nums[middle] === target) {
                lowest = middle;
                end = middle;
            }
            else start = middle + 1;
        }
        
        return start;
    }    
    
    function highHigh() {
        let start = highest;
        let end = nums.length - 1;
        
        while (start <= end) {
            const middle = Math.floor(start + ((end - start) / 2));
            if (nums[middle] === target) {
                highest = middle;
                start = middle + 1;
            }
            else end = middle - 1;
        }
        
        return start;
    }
    
    lowLow();
    highHigh();
    return [lowest, highest];
}

function binarySearch(array, target) {
    let start = 0;
    let end = array.length;
    
    while (start < end) {
        const middle = Math.floor(start + ((end - start) / 2));
        if (array[middle] === target) return middle;
        
        if (target < array[middle]) end = middle;
        else start = middle + 1;
    }
    
    return -1;
}

// "Bruteforce" approach, as bruteforce as a logarithmic can be.
// Runtime: 112 ms, faster than 7.01% of JavaScript online submissions for Find First and Last Position of Element in Sorted Array.
// Memory Usage: 37.3 MB, less than 8.70% of JavaScript online submissions for Find First and Last Position of Element in Sorted Array.