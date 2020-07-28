// Medium

// Determine if a 9x9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the 9 3x3 sub-boxes of the grid must contain the digits 1-9 without repetition.

// A partially filled sudoku which is valid.

// The Sudoku board could be partially filled, where empty cells are filled with the character '.'.

// Example 1:

// Input:
// [
//   ["5","3",".",".","7",".",".",".","."],
//   ["6",".",".","1","9","5",".",".","."],
//   [".","9","8",".",".",".",".","6","."],
//   ["8",".",".",".","6",".",".",".","3"],
//   ["4",".",".","8",".","3",".",".","1"],
//   ["7",".",".",".","2",".",".",".","6"],
//   [".","6",".",".",".",".","2","8","."],
//   [".",".",".","4","1","9",".",".","5"],
//   [".",".",".",".","8",".",".","7","9"]
// ]
// Output: true
// Example 2:

// Input:
// [
//   ["8","3",".",".","7",".",".",".","."],
//   ["6",".",".","1","9","5",".",".","."],
//   [".","9","8",".",".",".",".","6","."],
//   ["8",".",".",".","6",".",".",".","3"],
//   ["4",".",".","8",".","3",".",".","1"],
//   ["7",".",".",".","2",".",".",".","6"],
//   [".","6",".",".",".",".","2","8","."],
//   [".",".",".","4","1","9",".",".","5"],
//   [".",".",".",".","8",".",".","7","9"]
// ]
// Output: false
// Explanation: Same as Example 1, except with the 5 in the top left corner being 
//     modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.
// Note:

// A Sudoku board (partially filled) could be valid but is not necessarily solvable.
// Only the filled cells need to be validated according to the mentioned rules.
// The given board contain only digits 1-9 and the character '.'.
// The given board size is always 9x9.

/**
 * @param {character[][]} board
 * @return {boolean}
 */
function isValidSudoku(board) {
    // 3 N still Linear, let's crack it.
    // Validate rows.
    for (let i = 0; i < 9; ++i) {
        if (!validateRow(board[i])) return false;
    }
    // Validate Columns.
    for (let i = 0; i < 9; ++i) {
        if (!validateColumn(board, i)) return false;
    }
    // Validate grids.
    for (let row = 0; row < 9; row += 3) {
        for (let column = 0; column < 9; column += 3) {
            if (!validateGrid(board, row, column)) return false;   
        }
    }
    
    return true;
}

function validateRow(array) {
    const invalid = new Set();
    
    for (let i = 0; i < array.length; ++i) {
        if (array[i] === ".") continue;
        if (invalid.has(array[i])) return false;
        invalid.add(array[i]);
    }
    
    return true;
}

function validateColumn(board, column) {
    const invalid = new Set();
    
    for (let row = 0; row < 9; ++row) {
        const element = board[row][column];
        if (element === ".") continue;
        if (invalid.has(element)) return false;
        invalid.add(element);
    }
    
    return true;
}

function validateGrid(grid, row, column) {
    const invalid = new Set();
    // 3 rows. (row + i)
    for (let i = 0; i < 3; ++i) {
        // 3 columns. (column + j)
        for (let j = 0; j < 3; ++j) {
            const element = grid[row + i][column + j];
            if (element === ".") continue;
            if (invalid.has(element)) return false;
            invalid.add(element);
        }
    }
    
    return true;
}

// Runtime: 108 ms, faster than 42.92% of JavaScript online submissions for Valid Sudoku.
// Memory Usage: 38.8 MB, less than 82.73% of JavaScript online submissions for Valid Sudoku.

// Since iterating through the board 3 times is not any order of magnitude greater than once
// I went with a more intuitive approach. Uses less memory, since we only keep track of one
// set of 1-9 at a time. Not that it would be a big deal, 9x9 grid is pretty small memory size.

// Linear Time Complexity, based on traversing the board.
// Constant Time Complexity, if we take in consideration that the board will always be 9x9.
// Hence, we have hard coded our loops to iterate 9 times, making it constant.
// Constant Space Complexity.