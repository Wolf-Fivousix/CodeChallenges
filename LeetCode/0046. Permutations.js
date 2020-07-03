// Medium

// Given a collection of distinct integers, return all possible permutations.

// Example:

// Input: [1,2,3]
// Output:
// [
//   [1,2,3],
//   [1,3,2],
//   [2,1,3],
//   [2,3,1],
//   [3,1,2],
//   [3,2,1]
// ]
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function permute(nums) {
    if (nums.length === 1) return [nums];
   
   const base = permute(nums.slice(1));
   const result = [];

   for (let i = 0; i < base.length; ++i) {
       const currentArray = base[i];
       
       for (let j = 0; j <= currentArray.length; ++j) {
               result.push(
                   currentArray.slice(0, j)
                   .concat(nums[0],
                   currentArray.slice(j))
               );
           }
       }

   return result;
};

// Since we do want all possible permutations, there is no way to escape the growth of the result.
// Factorial Time and Space Complexity.

// Runtime: 108 ms, faster than 15.26% of JavaScript online submissions for Permutations.
// Memory Usage: 39.4 MB, less than 31.51% of JavaScript online submissions for Permutations.
