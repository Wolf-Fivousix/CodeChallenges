// Easy

// Given two arrays, write a function to compute their intersection.

// Example 1:

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2]
// Example 2:

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [9,4]
// Note:

// Each element in the result must be unique.
// The result can be in any order.

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
function intersection(nums1, nums2) {
    const set1 = new Set(nums1);
    const result = [];
    
    for (let i = 0; i < nums2.length; ++i) {
        if (set1.has(nums2[i])) {
            result.push(nums2[i]);
            set1.delete(nums2[i]);
        }
    }
    
    return result;
}

// Runtime: 76 ms, faster than 58.42% of JavaScript online submissions for Intersection of Two Arrays.
// Memory Usage: 36.8 MB, less than 24.18% of JavaScript online submissions for Intersection of Two Arrays.

// Linear Time and Space Complexity, based on both inputs. So O(N + M);

// There are other ways to do this.
// Like we could sort the "look up" array, givin us a Log Linear solution with Linear memory based only on the
// unique elements. But the increase in complexity don't have that big of a pay off.