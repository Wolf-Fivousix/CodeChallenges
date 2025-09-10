// Easy

// You are given an m x n binary matrix mat of 1's (representing soldiers) and 0's (representing civilians). The soldiers are positioned in front of the civilians. That is, all the 1's will appear to the left of all the 0's in each row.

// A row i is weaker than a row j if one of the following is true:

// The number of soldiers in row i is less than the number of soldiers in row j.
// Both rows have the same number of soldiers and i < j.
// Return the indices of the k weakest rows in the matrix ordered from weakest to strongest.

// Example 1:
// Input: mat = 
// [[1,1,0,0,0],
//  [1,1,1,1,0],
//  [1,0,0,0,0],
//  [1,1,0,0,0],
//  [1,1,1,1,1]], 
// k = 3
// Output: [2,0,3]
// Explanation: 
// The number of soldiers in each row is: 
// - Row 0: 2 
// - Row 1: 4 
// - Row 2: 1 
// - Row 3: 2 
// - Row 4: 5 
// The rows ordered from weakest to strongest are [2,0,3,1,4].

// Example 2:
// Input: mat = 
// [[1,0,0,0],
//  [1,1,1,1],
//  [1,0,0,0],
//  [1,0,0,0]], 
// k = 2
// Output: [0,2]
// Explanation: 
// The number of soldiers in each row is: 
// - Row 0: 1 
// - Row 1: 4 
// - Row 2: 1 
// - Row 3: 1 
// The rows ordered from weakest to strongest are [0,2,3,1].
 

// Constraints:

// m == mat.length
// n == mat[i].length
// 2 <= n, m <= 100
// 1 <= k <= m
// matrix[i][j] is either 0 or 1.

/*
BRUTE FORCE
Order the whole matrix by power ranking
Return a slice of K of this result

How do we order?
1 - Counting the number of soldiers in each row
2 - Based on INDEX (this only applies on ties between rows)

"Bubble sort" the ranking:
Go from LAST element to first.
Start with the HIGHEST soldier count and start ranking by M size (quantity of rows)
    Everytime we find the soldier count, add that counter in that array position
    decrease counter by 1
    Once we reach the start of the array, decrease the soldier count by 1 and repeat the process until we reach 0 (or keep a separate tracker of power rankings)

Not elegant nor efficient, but gets the job done.

Better approach:
The problem is that it is impossible to rank them without even knowing what their relative rankings are.
Which means that updating and re-updating all the rankings as we go would be inneficient.
FINDING the power level of each row is Linear. So this is fine.
ORDERING them can be done by sorting, which we can easly do in N Log N.
    How? Well, knowing the power level and their indexes, all we gotta do is write a custom sorting algorithm and let the sort do it's job.

Then we return the result in the format we want.
Log Linear O(N Log N) for Time Complexity
Linear O(N) for Space complexity - Our data array will be as big as M (as many rows as the matrix has)

This is actually very good! Optimizing further (considering it is even if possible) will be redudant, since from N Log N to N is a minor improvement.
*/

/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
function kWeakestRows(mat, k) {
    const rowPowers = new Array(mat.length)
    for (let i = 0; i < mat.length; ++i) {
        // let soldierCounter = 0
        // for (const person of mat[i]) {
        //     if (person === 1) ++soldierCounter
        //     else break // Small optimization, since when we encounter a 0, we are guaranteed to not have 1's anymore.
        // }
        rowPowers[i] = {
            index: i,
            // power: soldierCounter,
            power: binarySearchPower(mat[i]),
        }
    }

    // console.log(JSON.stringify(rowPowers))

    const rankingByPower = rowPowers.toSorted((a, b) => {
        if (a.power < b.power) return -1
        if (a.power > b.power) return 1
        return a.index < b.index ? -1 : 1
    })

    const result = []
    for (let i = 0; i < k; ++i) {
        result.push(rankingByPower[i].index)
    }

    return result
};

// Runtime 4 ms Beats 17.84%
// Memory 56.69 MB Beats 29.19%

// With the early return from soldier calculation
// Runtime 2 ms Beats 48.65%
// Memory 58.01 MB Beats 8.11%

// With binary search for the power
function binarySearchPower(array) {
    let left = 0
    let right = array.length - 1
    while (left <= right) {
        const middle = Math.floor(((right - left) / 2) + left)
        if (array[middle] === 1) left = middle + 1
        else right = middle - 1
    }

    return left
}

// Runtime 1 ms Beats 86.49%
// Memory 56.20 MB Beats 34.59%
// Improved in 1ms. Not that much compared to the early optimization of the linear scan.