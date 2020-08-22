// Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You may assume no duplicates in the array.

// Example 1:

// Input: [1,3,5,6], 5
// Output: 2
// Example 2:

// Input: [1,3,5,6], 2
// Output: 1
// Example 3:

// Input: [1,3,5,6], 7
// Output: 4
// Example 4:

// Input: [1,3,5,6], 0
// Output: 0

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    if (!nums.length) return 0;
    
    let middle = Math.floor(nums.length / 2);
    
    if (nums[middle] === target) return middle;
    
    if (target < nums[middle]) {
        return searchInsert(nums.slice(0, middle), target);
    }
    else {
        return middle + 1 + searchInsert(nums.slice(middle + 1), target);
    }
};

// This is basically a binary insert, except that when the target is not found, we need to return a valid index, instead of -1.
// That is achieved by simply returning 0 when the element is not found. Which would be the index desired.

// This community solution by "RT42" does not use recursion and array slicing:
var searchInsert = function(nums, target) {
    if(nums === null) {
        return -1;
    }
    
    left = 0;
    right = nums.length-1;
    while(left <= right) {
        mid = Math.floor((left+right)/2);
        if(nums[mid] === target) {
            return mid;
        }
        else if(target < nums[mid]) {
            right = mid - 1;
        }
        else{
            left = mid + 1;
        }
    }
    
    return left;
};

// Encountered this problem as a subset of another, so here goes my latest coding.
// Yes, it is almost the same as the above solution.
function searchInsert(nums, target) {
    let start = 0;
    let end = nums.length - 1;

    while (start <= end) {
        let middle = Math.floor(start + ((end - start) / 2));

        if (nums[middle] === target) return middle;
        if (nums[middle] < target) {
            start = middle + 1;
        }
        else end = middle - 1;
    }

    return start;
}
// Runtime: 76 ms, faster than 59.56% of JavaScript online submissions for Search Insert Position.
// Memory Usage: 37 MB, less than 20.44% of JavaScript online submissions for Search Insert Position.