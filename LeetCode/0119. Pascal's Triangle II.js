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

// Let's do iteratively now...

function getRowIteratively(rowIndex) {
    let previousRow = [1]
    let currentRowIndex = 0

    while (currentRowIndex < rowIndex) {
        // +1 because we start counting rows at 0 AND another +1 because the while loop enforces our rowIndex to be 1 less than what we want to return.
        const currentRow = new Array(currentRowIndex + 2)
        for (let i = 0; i < currentRow.length; ++i) {
            const sum = calculateSum(previousRow, i)
            currentRow[i] = sum
        }

        previousRow = currentRow
        ++currentRowIndex
    }

    return previousRow
};

function compareResult(array1, array2) {

    return array1.length === array2.length && array1.every((value, index) => value === array2[index])
}

// Runtime 1 ms Beats 32.62%
// Memory 49.02 MB Beats 48.56%

// Great!
// Now... Is there a way for us to cleaverly calculate the row, without having to calculate all the previous rows?
/*
There is ONE pattern that I see.... And that is:
 - Every X row has the value of those rows! Like Row 2 is = 1,2,1 ... Row 4 is 1,4,6,4,1 ... So this "1 and then row number" pattern holds... What about the following sandwitched row?

 I couldn't figure out the math behind it, but there IS a formula:

*/

function getRow(rowIndex) {
    const result = [1]
    let previousValue = 1
    for (let i = 1; i <= rowIndex; ++i) {
        const currentValue = (previousValue * (rowIndex - i + 1)) / i
        result.push(currentValue)
        previousValue = currentValue
    }

    return result
}

// Runtime 0 ms Beats 100.00%
// Memory 49.17 MB Beats 36.32%

[
    [0, [1]],
    [1,[1,1]],
    [2,[1,2,1]],
    [3, [1,3,3,1]],
    [4, [1,4,6,4,1]],
    [5, [1, 5, 10, 10, 5, 1 ]],
    [6, [1, 6, 15, 20, 15, 6,  1]],
    [7, [1, 7, 21, 35, 35, 21,  7,  1]],
    [8, [1, 8, 28, 56, 70, 56, 28,  8,  1]],
    [9, [1, 9, 36, 84, 126, 126, 84, 36,  9,   1]],
    [10, [1, 10, 45, 120, 210, 252, 210, 120, 45, 10, 1]]
].forEach(([input, result]) => {
    // const computed = getRowRecursion(input)
    const computed = getRow(input)
    console.log(`${compareResult(computed, result) ? "PASS" : "FAIL"} for input={${input}} - Expected result={${JSON.stringify(result)}} -> ${JSON.stringify(computed)}`)
})