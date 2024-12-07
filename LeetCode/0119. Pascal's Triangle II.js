// Easy

// Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:
// https://upload.wikimedia.org/wikipedia/commons/0/0d/PascalTriangleAnimated2.gif


// Example 1:
// Input: rowIndex = 3
// Output: [1,3,3,1]

// Example 2:
// Input: rowIndex = 0
// Output: [1]

// Example 3:
// Input: rowIndex = 1
// Output: [1,1]

// Constraints:

// 0 <= rowIndex <= 33

// Follow up: Could you optimize your algorithm to use only O(rowIndex) extra space?


/*
BRUTE FORCE:
We calculate every single element, in every row, until we get the desired roll

This is tricker to determine runtime, but basically the larger the input value, the longer it will take.
Small increments in the input will result in large increases in the output, thus we can safely say this will be insanely inneficient, like Exponential Time Complexity
and Space Complexity as well, since we'll store the "previous" and "current" rows. (We don't have to, we only need the latest row in memory.)

This is a prime case for recursion, so we will do it multiple ways.
*/

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
function getRowRecursion(rowIndex) {
    if (rowIndex === 0) return [1]

    const previousRow = getRow(rowIndex - 1)
    const currentRow = new Array(rowIndex + 1)  // +1 to compensate for starting the count at row 0
    for (let i = 0; i < currentRow.length; ++i) {
        const sum = calculateSum(previousRow, i)
        // console.log("Sum is ", sum)
        currentRow[i] = sum
    }

    return currentRow
};

function calculateSum(previousRow, index) {
    // console.log(`calculateSum for i=${index} and previousRow={${previousRow}}`)
    if (index - 1 < 0) return previousRow[index]
    if (index >= previousRow.length) return previousRow[index - 1]

    return previousRow[index - 1] + previousRow[index]
}

// This was recursive version. Done withing 20min.
// Runtime 0 ms Beats 100.00%
// Memory 48.98 MB Beats 58.85%



[
    0,
    1,
    2,
    3
].forEach(input => {
    console.log(getRow(input))
})