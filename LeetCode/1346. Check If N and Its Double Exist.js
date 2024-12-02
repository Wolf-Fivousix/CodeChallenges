// Easy

// Given an array arr of integers, check if there exist two indices i and j such that :

// i != j
// 0 <= i, j < arr.length
// arr[i] == 2 * arr[j]
 

// Example 1:

// Input: arr = [10,2,5,3]
// Output: true
// Explanation: For i = 0 and j = 2, arr[i] == 10 == 2 * 5 == 2 * arr[j]
// Example 2:

// Input: arr = [3,1,7,11]
// Output: false
// Explanation: There is no i and j that satisfy the conditions.
 

// Constraints:

// 2 <= arr.length <= 500
// -103 <= arr[i] <= 103

/*
BRUTE FORCE:
For each index I, check every single other element in the array to see if we have the "half" complement of it.

This would be Polynomial in Time Complexity O(n^2) and Constant Space Complexity O(n)

BETTER:
Create a "halfComplement" object that we can access in constant time.
Iterate through the array.
    For each element, check if the halfComplement object has the corresponding half.
    If it does, return true.
    If it does not, add the existing value into halfComplement

return false (no complement was found)

Linear Time Complexity O(n)
Linear Space Complexity O(n) - Because we will get an object with as many elements as the array
*/

/**
 * @param {number[]} arr
 * @return {boolean}
 */
function checkIfExist(arr) {
    const halfComplement = {}
    for (let i = 0; i < arr.length; ++i) {
        const half = arr[i] / 2
        const double = arr[i] * 2
        if (halfComplement[half] || halfComplement[double]) return true
        halfComplement[arr[i]] = true
    }

    return false
};

// Runtime 7 ms Beats 6.61%
// Memory 50.98 MB Beats 32.52%