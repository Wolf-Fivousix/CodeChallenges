// Medium

// Given an integer array nums that may contain duplicates, return all possible subsets (the power set).

// The solution set must not contain duplicate subsets. Return the solution in any order.

 

// Example 1:

// Input: nums = [1,2,2]
// Output: [[],[1],[1,2],[1,2,2],[2],[2,2]]
// Example 2:

// Input: nums = [0]
// Output: [[],[0]]
 

// Constraints:

// 1 <= nums.length <= 10
// -10 <= nums[i] <= 10

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

/*
We are going to combine every element with the existing elements as we iterate through the array.
We will have a map object that keeps track of uniqueness. If the same array already exists in it, it will be overwritten.
Set does not work here, because each array object would be a different object, thus the Set don't filter them for us.

*/
function subsetsWithDup(nums) {
    const sorted = nums.sort((a, b) => a - b);
    const results = [[]];
    sorted.forEach(number => {
        // console.log("#: ", number);
        // console.log(results);
        const size = results.length;
        for (let i = 0; i < size; ++i) {
            // console.log("i: ", i, " - ", results[i]);
            const newSubset = copyArray(results[i]);
            newSubset.push(number);
            if (!hasArray(results, newSubset)) results.push(newSubset);
            // console.log("After comparisson: ", results);
        }
    });
    
    return results;
};

function copyArray(original) {
    return original.map(el => el);
}

function hasArray(matrix, array) {
    for (let i = 0; i < matrix.length; ++i) {
        if (!isDifferentArray(matrix[i], array)) return true;
    }
    
    return false;
}

function isDifferentArray(array1, array2) {
    if (array1.length !== array2.length) return true;
    
    for (let i = 0; i < array1.length; ++i) {
        if (array1[i] !== array2[i]) return true;
    }
    
    return false;
}

// Runtime: 92 ms, faster than 36.04% of JavaScript online submissions for Subsets II.
// Memory Usage: 40.8 MB, less than 56.64% of JavaScript online submissions for Subsets II.
// Runtime: 84 ms, faster than 80.76% of JavaScript online submissions for Subsets II.
// Memory Usage: 40.8 MB, less than 56.64% of JavaScript online submissions for Subsets II.
// Runtime: 80 ms, faster than 92.68% of JavaScript online submissions for Subsets II.
// Memory Usage: 40.6 MB, less than 71.00% of JavaScript online submissions for Subsets II.

// Because there is no way to keep track of the array's in a set or a map, there is no choice but to 
// compare it every time we have a new array. That is a polynomial comparisson.
// Worst case, every single number is different, so even though we are comparing all arrays, they will never be 
// equal.
// We do this analysis inside a a loop for the elements inside result array. (2^N)
// Which we do inside of another loop of the nums array. (3^N)
// In reality, this might be even worse, because as "results" grow, so will grow the initial loop.
// And we grow in space as well...


// Exponential Time Complexity of O(N^3)
// Exponential Space Complexity 

// There might be a better way, by converting the array into a string of numbers, I could then use a hash table
// to see if it has showed up before. We'll be paying the cost of string conversion, but we would eliminate one loop.