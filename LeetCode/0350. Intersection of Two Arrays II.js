// Easy

// Given two arrays, write a function to compute their intersection.

// Example 1:

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]
// Example 2:

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [4,9]
// Note:

// Each element in the result should appear as many times as it shows in both arrays.
// The result can be in any order.
// Follow up:

// What if the given array is already sorted? How would you optimize your algorithm?
// What if nums1's size is small compared to nums2's size? Which algorithm is better?
// What if elements of nums2 are stored on disk, and the memory is limited such that you cannot load all elements into the memory at once?

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
function intersect (nums1, nums2) {
    const counter = {};
    for (let i = 0; i < nums1.length; ++i) {
        if (counter[nums1[i]]) ++counter[nums1[i]];
        else counter[nums1[i]] = 1;
    }
    
    const result = [];
    
    for (let i = 0; i < nums2.length; ++i) {
        if (counter[nums2[i]]) {
            result.push(nums2[i]);
            --counter[nums2[i]];
            if (counter[nums2[i]] === 0) delete counter[nums2[i]];
        }
    }
    
    return result;
}

// Linear Time and Space complexity, based on both inputs, so O(N1 + N2)
// Runtime: 120 ms, faster than 9.78% of JavaScript online submissions for Intersection of Two Arrays II.
// Memory Usage: 37.1 MB, less than 45.76% of JavaScript online submissions for Intersection of Two Arrays II.

// If we sort the inputs we can reduce the memory footprint by the cost of some efficiency.