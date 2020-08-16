// Growth in 2 Dimensions
// Start with an infinite two dimensional grid filled
// with zeros, indexed from  (1,1) at the bottom left
// corner with coordinates increasing toward the
// top and right. Given a series of coordinates (r, c) ,
// where  r  is the ending row and  c  is the ending
// column, add  1 to each element in the range from
// (1,1) to  (r, c)  inclusive. Once all coordinates are
// processed, determine how many cells contain
// the maximal value in the grid.
// Example
//
// https://hrcdn.net/s3_pub/istreet-assets/t1ZgB1I3uhh9ZBnDu_Dijw/growth_in_2_dimensions_example.svg
//
// upRight = ["1 4", "2 3", "4 1"]
// The two space-separated integers within each
// string represent  r  and  c  respectively. The
// following diagrams show each iteration starting
// at zero. The maximal value in the grid is  3,  and
// there is  1  occurrence at cell  (1, 1) .
// Initial Grid
// 0 0 0 0
// 0 0 0 0
// 0 0 0 0
// 0 0 0 0
// 1 2 3 4
// 1
// 2
// 3
// 4
// 0 0 0 0
// 0 0 0 0
// 0 0 0 0
// 1 1 1 1
// 1 2 3 4
// 1
// 2
// 3
// 4
// Step 0: r = 1, c = 4
// 0 0 0 0
// 0 0 0 0
// 1 1 1 0
// 2 2 2 1
// 1 2 3 4
// 1
// 2
// 3
// 4
// Step 1: r = 2, c = 3
// 1 0 0 0
// 1 0 0 0
// 2 1 1 0
// 3 2 2 1
// 1 2 3 4
// 1
// 2
// 3
// 4
// Step 2: r = 4, c = 1
// Function Description
// Complete the function  countMax in the editor
// below.
// countMax has the following parameter(s):
//  string upRight[n]:  an array of strings made of
// two space-separated integers,  r and  c .
// Return
//      long:  the number of occurrences of the final
// grid's maximal element
// Constraints
// 1 ≤ n ≤ 100
// 1 ≤ number of rows, number of columns ≤ 10 6
// Input Format for Custom Testing
// Sample Case 0
//
// https://hrcdn.net/s3_pub/istreet-assets/NUKwDH8-2WmLmvtOPlvMyg/growth_in_2_dimensions_sample_0.svg
//
// Sample Input
// STDIN    Function
// -----    --------
// 3    →    upRight[] size n = 3
// 2 3  →    upRight = ['2 3', '3 7', '4
// 3 7
// 4 1
// Sample Output
// 2
// Explanation
// Given  upRight = ["2 3", "3 7", "4 1"] :
// Initial Grid
// 0 0 0 0 0 0 0
// 0 0 0 0 0 0 0
// 0 0 0 0 0 0 0
// 0 0 0 0 0 0 0
// 1 2 3 4 5 6 7
// 1
// 2
// 3
// 4
// Step 0 : r = 2, c = 3
// 0 0 0 0 0 0 0
// 0 0 0 0 0 0 0
// 1 1 1 0 0 0 0
// 1 1 1 0 0 0 0
// 1 2 3 4 5 6 7
// 1
// 2
// 3
// 4
// Step 1: r = 3, c = 7
// 0 0 0 0 0 0 0
// 1 1 1 1 1 1 1
// 2 2 2 1 1 1 1
// 2 2 2 1 1 1 1
// 1 2 3 4 5 6 7
// 1
// 2
// 3
// 4
// Step 2: r = 4, c = 1
// 1 0 0 0 0 0 0
// 2 1 1 1 1 1 1
// 3 2 2 1 1 1 1
// 3 2 2 1 1 1 1
// 1 2 3 4 5 6 7
// The portion of the infinite grid corresponding to
// cells  (r, c) where  1 ≤ r ≤ 4 and 1 ≤ c ≤ 7
// After processing all  n = 3 coordinate pairs, the
// maximum value in any cell is  3 . Because there
// are two such cells with this maximal value,
// return  2 as the answer.

/*
 * Complete the 'countMax' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts STRING_ARRAY upRight as parameter.
 */

function countMax1(upRight) {
    // Scan the input once, find R and C.
    // Make the grid out of those values, filling it with 0's.
    // Because of the way we "normally" iterate through a matrix,
    // I'm going to flip the matrix upside down. So my 1,1 point is index 0,0.
    // If the actual matrix was a hard requirement, I would do the iteration backwards.

    // Interate through input.
        // Convert from String to R and C numbers.
        // Iterate through current R.
            // Iterate through current C.
                // Add 1 to current element.
    
    // Define highestValue starting at 0.
    // Define count starting at 0.
    // Scan the whole matrix.
        // If the element is higher than highestValue.
            // Update highestValue.
            // Update count to 1.
            // continue.
        // If the element is the same as highestValue, update count by 1.
        // otherwise we know the element is lower, don't do anything.

    // Return our count.

    let maxRow = 0;
    let maxColumn = 0;
    let ranges = [];
    upRight.forEach(range => {
        const [x, y] = range.split(" ").map(value => Number(value));
        if (x > maxRow) maxRow = x;
        if (y > maxColumn) maxColumn = y;
        ranges.push([x, y]);
    });

    const matrix = makeGrid(maxRow, maxColumn);

    calculateMatrix(matrix, ranges);

    return findHighestElementFrequency(matrix);
}

function makeGrid(row, column) {
    const matrix = [];
    for (let i = 0; i < row; ++i) {
        const newRow = new Array(column).fill(0);
        matrix.push(newRow);
    }

    return matrix;
}

function calculateMatrix(matrix, ranges) {
    ranges.forEach(range => {
        for (let row = 0; row < range[0]; ++row) {
            for (let column = 0; column < range[1]; ++column) {
                ++matrix[row][column];
            }
        }
    });
}

function findHighestElementFrequency(matrix) {
    let highestValue = 0;
    let count = 0;
    for (let row = 0; row < matrix.length; ++row) {
        for (let column = 0; column < matrix[row].length; ++column) {
            const current = matrix[row][column];

            if (highestValue < current) {
                highestValue = current;
                count = 1;
                continue;
            }
            if (highestValue === current) ++count;
        }
    }

    return count;
}

// 6/11 Test Cases.
// Right now it is failing when the heap explodes due to gigantic input.

function countMax2(upRight) {
    let maxRow = 0;
    let maxColumn = 0;
    let ranges = [];
    upRight.forEach(range => {
        const [x, y] = range.split(" ").map(value => Number(value));
        if (x > maxRow) maxRow = x;
        if (y > maxColumn) maxColumn = y;
        ranges.push([x, y]);
    });

    // Heap explodes, let's go back to the idea of calculating one point at a time.
    // Iterate through input once, find the max values that we going to use to do our total iteration.
    // Define highestValue starting at 0.
    // Define count starting at 0.
    // Iterate through the virtual "matrix".
        // For each "element", calculate what this position value would be.
            // Define value starting at 0.
            // Iterate through input (which we converted to nice Numbers)
                // If the current X, Y (currentElemnt) is inside this range. Increase value by 1.
            // Now repeat the logic for fidind the HighestValue.
            // If the element is higher than highestValue.
                // Update highestValue.
                // Update count to 1.
                // continue.
            // If the element is the same as highestValue, update count by 1.
            // otherwise we know the element is lower, don't do anything.

    let highestValue = 0;
    let count = 0;
    for (let row = 0; row < maxRow; ++row) {
        for (let column = 0; column < maxColumn; ++column) {
            let currentValue = 0;
            ranges.forEach(([x, y]) => {
                if (row < x && column < y) ++currentValue;
            });

            if (highestValue < currentValue) {
                highestValue = currentValue;
                count = 1;
                continue;
            }
            if (highestValue === currentValue) ++count;
        }
    }

    return count;
}