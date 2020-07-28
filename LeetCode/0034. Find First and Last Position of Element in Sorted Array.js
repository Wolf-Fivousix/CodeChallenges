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

// Proposed solution
// The idea is similar to what I have done, but the logic is a little different.

// Approach 2: Binary Search
// Intuition

// Because the array is sorted, we can use binary search to locate the left and rightmost indices.

// Algorithm

// The overall algorithm works fairly similarly to the linear scan approach, except for the subroutine used to find the left and rightmost indices themselves. Here, we use a modified binary search to search a sorted array, with a few minor adjustments. First, because we are locating the leftmost (or rightmost) index containing target (rather than returning true iff we find target), the algorithm does not terminate as soon as we find a match. Instead, we continue to search until lo == hi and they contain some index at which target can be found.

// The other change is the introduction of the left parameter, which is a boolean indicating what to do in the event that target == nums[mid]; if left is true, then we "recurse" on the left subarray on ties. Otherwise, we go right. To see why this is correct, consider the situation where we find target at index i. The leftmost target cannot occur at any index greater than i, so we never need to consider the right subarray. The same argument applies to the rightmost index.

// The first animation below shows the process for finding the leftmost index, and the second shows the process for finding the index right of the rightmost index.

// Current
// 11 / 11
// Current
// 10 / 10

// Complexity Analysis

// Time complexity : O(\log_{10}(n))O(log 
// 10
// ​	
//  (n))

// Because binary search cuts the search space roughly in half on each iteration, there can be at most \lceil \log_{10}(n) \rceil⌈log 
// 10
// ​	
//  (n)⌉ iterations. Binary search is invoked twice, so the overall complexity is logarithmic.

// Space complexity : O(1)O(1)

// All work is done in place, so the overall memory usage is constant.

// class Solution {
//     // returns leftmost (or rightmost) index at which `target` should be
//     // inserted in sorted array `nums` via binary search.
//     private int extremeInsertionIndex(int[] nums, int target, boolean left) {
//         int lo = 0;
//         int hi = nums.length;

//         while (lo < hi) {
//             int mid = (lo + hi) / 2;
//             if (nums[mid] > target || (left && target == nums[mid])) {
//                 hi = mid;
//             }
//             else {
//                 lo = mid+1;
//             }
//         }

//         return lo;
//     }

//     public int[] searchRange(int[] nums, int target) {
//         int[] targetRange = {-1, -1};

//         int leftIdx = extremeInsertionIndex(nums, target, true);

//         // assert that `leftIdx` is within the array bounds and that `target`
//         // is actually in `nums`.
//         if (leftIdx == nums.length || nums[leftIdx] != target) {
//             return targetRange;
//         }

//         targetRange[0] = leftIdx;
//         targetRange[1] = extremeInsertionIndex(nums, target, false)-1;

//         return targetRange;
//     }
// }