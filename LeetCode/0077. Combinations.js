// Medium

// Given two integers n and k, return all possible combinations of k numbers out of the range [1, n].

// You may return the answer in any order.

 

// Example 1:

// Input: n = 4, k = 2
// Output:
// [
//   [2,4],
//   [3,4],
//   [2,3],
//   [1,2],
//   [1,3],
//   [1,4],
// ]
// Example 2:

// Input: n = 1, k = 1
// Output: [[1]]
 

// Constraints:

// 1 <= n <= 20
// 1 <= k <= n

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
/*
N = 4, K = 1 => [[1],[2],[3],[4]]

N = 4, K = 2 => [[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]

N = 4, K = 3 => [[1,2,3],[1,2,4],[1,3,4],[2,3,4]]

N = 4, K = 4 => [[1,2,3,4]]


Recursive version:
     
CALLER METHOD (N, K)

define initialArray, which is from 1 to N.
return RECURSIVE METHOD(initialArray, K);



RECURSIVE METHOD (ARRAY, K)
    if the array is empty OR K = 0, return [] (empty array)

    define empty result array.
    iterate through ARRAY
        for each element of this ARRAY, unshift it into result of RECURSIVE (SUB-ARRAY, K - 1) // SUB-ARRAY here is the same array, but only the elements forward. For now, we're creating new arrays, we don't care about efficiency.
    
    return result
*/

function combine(n, k) {
    const initialArray = [...Array(n).keys()].map((_, i) => i + 1);
    // console.log(elementCombiner(initialArray, k));
    return elementCombiner(initialArray, k);
};

function elementCombiner(array, size) {
    if(!array.length) return [];
    if(size <= 1) return array.map(el => [el]);
    
    
    const result = [];
    array.forEach((value, index) => {
        const newElement = elementCombiner(array.slice(index + 1), size - 1).map(subArray => [value, ...subArray]);
        result.push(...newElement);
    });
    return result;
}

combine(2, 1);
combine(4, 2);

// Very inneficient, Time Complexity is going to be ugly.
// We copy the array in multiple places by using .slice, so it's O(N) at best.
// We get inside "elementCombiner" at 3xN, not promising.
// Upon .forEach iteration, we have polynomial with O(N^2) + N (with the second mapping).
// But that same iteration will call itself recursively... So if my math sense is not failing, this will be N^N, Exponential.
// Space complexity will be as well, since we'll be making multiple copies of the array and holding it in memory.
// Runtime: 417 ms, faster than 8.60% of JavaScript online submissions for Combinations.
// Memory Usage: 69.4 MB, less than 5.04% of JavaScript online submissions for Combinations.