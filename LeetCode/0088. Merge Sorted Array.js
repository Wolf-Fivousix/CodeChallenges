// Easy
// Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

// Note:

// The number of elements initialized in nums1 and nums2 are m and n respectively.
// You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold additional elements from nums2.
// Example:

// Input:
// nums1 = [1,2,3,0,0,0], m = 3
// nums2 = [2,5,6],       n = 3

// Output: [1,2,2,3,5,6]
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1, m, nums2, n) {
    let index1 = 0;
    let index2 = 0;
    
    while (m && n) {
        if (nums1[index1] <= nums2[index2]) {
            --m;
        }
        else {
            shiftByOne(nums1, index1, m);
            nums1[index1] = nums2[index2];
            ++index2;
            --n;
        }
        ++index1;
    }
    
    while (n > 0) {
        nums1[index1] = nums2[index2];
        ++index1;
        ++index2;
        --n;
    }
};

function shiftByOne(array, index, quantity) {
    while (quantity > 0) {
        const lastIndex = index + quantity;
        array[lastIndex] = array[lastIndex - 1];
        --quantity;
    }
}

// Runtime: 72 ms, faster than 25.81% of JavaScript online submissions for Merge Sorted Array.
// Memory Usage: 35.4 MB, less than 8.10% of JavaScript online submissions for Merge Sorted Array.

// Solution by tusizi
var merge = function (nums1, m, nums2, n) {
    var len = m + n;
    m--;
    n--;
    while (len--) {
        if (n < 0 || nums1[m] > nums2[n]) {
            nums1[len] = nums1[m--];
        } else {
            nums1[len] = nums2[n--];
        }
    }
};

// It avoids the shifting by working from right to left.
// The inline decrements can get a little confusing if you are not careful, but that's easily fixable if needed.
// This makes for Linear time complexity while using only 1 extra variable for Constant Space complexity.

// Runtime: 60 ms, faster than 59.12% of JavaScript online submissions for Merge Sorted Array.
// Memory Usage: 33.8 MB, less than 79.41% of JavaScript online submissions for Merge Sorted Array.