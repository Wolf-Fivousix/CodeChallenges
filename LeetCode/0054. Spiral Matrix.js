// Medium

// Given an m x n matrix, return all elements of the matrix in spiral order.

 

// Example 1:
// https://assets.leetcode.com/uploads/2020/11/13/spiral1.jpg

// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [1,2,3,6,9,8,7,4,5]
// Example 2:
// https://assets.leetcode.com/uploads/2020/11/13/spiral.jpg

// Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
// Output: [1,2,3,4,8,12,11,10,9,5,6,7]
 

// Constraints:

// m == matrix.length
// n == matrix[i].length
// 1 <= m, n <= 10
// -100 <= matrix[i][j] <= 100

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */

/*
Using the regular nested increments wont't work. Because we need to update the "increment"
depending on where we are in the process

Think os indexes as ROW (i) and COLUMN (j)
ROW INCREMENT only changes when we hit START or END
COLUMN INCREMENT only changes when we hit START or END, as well
Whenever one of this points is hit, we are going to change the increment the same way.
    Both of them change the same way, but change at different points
    When ROW INCREMENT becomes 0 (we are iterating through a line) the COLUMN INCREMENT will either be +1 or -1
    On the same note, when we hit the START or END of a COLUMN, ROW INCREMENT becomes +1/-1 and COLUMN INCREMENT becomes 0.
    


0 0 0 0 
      1
      2
      0 0 0 0 1 1 1
      
(except the very start at 0,0,
don't update anything)
(or can start at -1)
update COLUMN START ======================= update ROW START
   ||                                         ||
   ||                                         ||
   ||                                         ||
update ROW END ======================= update COLUMN END

We always move in 4 distinct directions:    0, +1
                                            +1, 0
                                            0, -1
                                            -1, 0
                                            
At the "turn" points, we can "move to the next turn".
We can have the directions in an array [[0, 1], [1, 0], [0, -1], [-1, 0]]
Whenever we hit the "turn points" we move to the next step (increase INDEX of steps by 1 with MOD of 4)

ROW START AND COLUMN START -> ColumnStart +1 (we never want to come back to this column)
ROW START AND COLUMN END -> rowStart + 1    (we never want to come back to this row again)
ROW END AND COLUMN END -> columnEnd -1
ROW END AND COLUMN START -> rowEnd - 1

The last position, is all 4 conditions at the same time

Main loop is while rowStart <= rowEnd AND columnStart <= columnEnd

Linear Time Complexity (we need to visit all nodes)
Linear Space Complexity (We want to return all nodes in a single array)

*/
function spiralOrder(matrix) {
    // const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    const directions = {
        "right": [0, 1],
        "down": [1, 0],
        "left": [0, -1],
        "up": [-1, 0]
    }
    let rowStart = 0;
    let rowEnd = matrix.length - 1;
    let columnStart = -1;
    let columnEnd = matrix[0].length - 1;
    
    const result = [];
    let rowIndex = 0;
    let columnIndex = 0;
    let step = directions["right"];
    
    while (rowStart <= rowEnd || columnStart <= columnEnd) {
        console.log(result, " - ", rowIndex, columnIndex);
        const currentElement = matrix[rowIndex][columnIndex];
        result.push(currentElement);

        if (rowIndex === rowStart && columnIndex === columnStart) {
            step = directions["right"];
            --rowEnd;
        }
        if (rowIndex === rowStart && columnIndex === columnEnd) {
            step = directions["down"];
            ++columnStart;
        }
        if (rowIndex === rowEnd && columnIndex === columnEnd) {
            step = directions["left"];
            ++rowStart;
        }
        if (rowIndex === rowEnd && columnIndex === columnStart) {
            step = directions["up"];
            --columnEnd;
        }
        
        rowIndex += step[0];
        columnIndex += step[1];
    }
    
    return result;
};

// This was the correct logic, but the "if statements" is where I'll always get off by 1.
// Because for this to work I need every "if" check to be off by 1, but after the initial loop, they won't be.
// And if they all match, that means whenever one "end" of the matrix is reached, that counterStart/End will update
// Until it run out of bounds.

function spiralOrder(matrix) {
    let rowStart = 0;
    let rowEnd = matrix.length - 1;
    let columnStart = 0;
    let columnEnd = matrix[0].length - 1;
    
    const result = [];
    let rowIndex = 0;
    let columnIndex = 0;
    
    // One spiral loop
    while (rowStart <= rowEnd || columnStart <= columnEnd) {      
        while (columnIndex < columnEnd) {
            result.push(matrix[rowIndex][columnIndex]);
            ++columnIndex;
        }
        ++rowStart;
        
        while (rowIndex < rowEnd) {
            result.push(matrix[rowIndex][columnIndex]);
            ++rowIndex;
        }
        --columnEnd;
        
        while (columnStart < columnIndex) {
            result.push(matrix[rowIndex][columnIndex]);
            --columnIndex;
        }
        --rowEnd;
        
        while (rowStart < rowIndex) {
            result.push(matrix[rowIndex][columnIndex]);
            --rowIndex;
        }
        ++columnStart;
    }
    // If it is 2D Matrix, we need the "middle" element.
    if(matrix.length === matrix[0].length) result.push(matrix[rowIndex][columnIndex]);
    
    return result;
};
// This get's ALMOST there, except that it will fail for a 1x2 matrix like [[3], [2]].

// Community solution
// By qwl5004 (Java)

// public class Solution {
//     public List<Integer> spiralOrder(int[][] matrix) {
        
//         List<Integer> res = new ArrayList<Integer>();
        
//         if (matrix.length == 0) {
//             return res;
//         }
        
//         int rowBegin = 0;
//         int rowEnd = matrix.length-1;
//         int colBegin = 0;
//         int colEnd = matrix[0].length - 1;
        
//         while (rowBegin <= rowEnd && colBegin <= colEnd) {
//             // Traverse Right
//             for (int j = colBegin; j <= colEnd; j ++) {
//                 res.add(matrix[rowBegin][j]);
//             }
//             rowBegin++;
            
//             // Traverse Down
//             for (int j = rowBegin; j <= rowEnd; j ++) {
//                 res.add(matrix[j][colEnd]);
//             }
//             colEnd--;
            
//             if (rowBegin <= rowEnd) {
//                 // Traverse Left
//                 for (int j = colEnd; j >= colBegin; j --) {
//                     res.add(matrix[rowEnd][j]);
//                 }
//             }
//             rowEnd--;
            
//             if (colBegin <= colEnd) {
//                 // Traver Up
//                 for (int j = rowEnd; j >= rowBegin; j --) {
//                     res.add(matrix[j][colBegin]);
//                 }
//             }
//             colBegin ++;
//         }
        
//         return res;
//     }
// }