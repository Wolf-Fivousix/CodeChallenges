// Medium 

// According to Wikipedia's article: "The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970."

// The board is made up of an m x n grid of cells, where each cell has an initial state: live (represented by a 1) or dead (represented by a 0). Each cell interacts with its eight neighbors (horizontal, vertical, diagonal) using the following four rules (taken from the above Wikipedia article):

// Any live cell with fewer than two live neighbors dies as if caused by under-population.
// Any live cell with two or three live neighbors lives on to the next generation.
// Any live cell with more than three live neighbors dies, as if by over-population.
// Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
// The next state of the board is determined by applying the above rules simultaneously to every cell in the current state of the m x n grid board. In this process, births and deaths occur simultaneously.

// Given the current state of the board, update the board to reflect its next state.

// Note that you do not need to return anything.

// Example 1:
// https://assets.leetcode.com/uploads/2020/12/26/grid1.jpg
// Input: board = [[0,1,0],[0,0,1],[1,1,1],[0,0,0]]
// Output: [[0,0,0],[1,0,1],[0,1,1],[0,1,0]]

// Example 2:
// https://assets.leetcode.com/uploads/2020/12/26/grid2.jpg
// Input: board = [[1,1],[1,0]]
// Output: [[1,1],[1,1]]
 

// Constraints:

// m == board.length
// n == board[i].length
// 1 <= m, n <= 25
// board[i][j] is 0 or 1.
 

// Follow up:

// Could you solve it in-place? Remember that the board needs to be updated simultaneously: You cannot update some cells first and then use their updated values to update other cells.
// In this question, we represent the board using a 2D array. In principle, the board is infinite, which would cause problems when the active area encroaches upon the border of the array (i.e., live cells reach the border). How would you address these problems?

/*
First detail: All updates happen on a "copy" of the board based on the state of the board. So I CANNOT overwrite the cells in place.
    UNLESS, of course, I use flags to define the transitory state of the board, like 2 for a "dead goes live" and 3 for "live goes dead" state, and then do a second pass to update those 2/3's into 0/1's.
From the example given, we can assume that the "outside boundaries" of the board are all dead cells.

Create a copy of the matrix that will store the buffer
Iterate through the original board and update the buffer according to the rules.

We don't need to return the buffer, but we need to assign it to the board variable.


*/

/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
function gameOfLife(board) {
    // Copy of the board to receive the updates
    const newState = []
    for (i = 0; i < board.length; ++i) {
        newState.push(new Array(board[i].length))
    }

    for (let i = 0; i < board.length; ++i) {
        for (let j = 0; j < board[i].length; ++j) {
            // console.log(aliveNeighbors(i,j))
            const liveNeighbors = aliveNeighbors(i,j)
            switch (liveNeighbors) {
                case 2:
                    // If a cell is ALIVE or DEAD will ONLY matter, with 2 neighbors! If Alive, continue, if dead, remains dead.
                    // Do nothing!
                    newState[i][j] = board[i][j]
                    break
                case 3:
                    // 3 neighbors, dead or alive, becomes 1 (live or dead, doesn't matter)
                    newState[i][j] = 1
                    break
                default:
                    // Less than 2, more than 4 it becomes 0 (live or dead, doesn't matter)
                    newState[i][j] = 0
            }
        }
    }

    for (let i = 0; i < board.length; ++i) {
        for (let j = 0; j < board[i].length; ++j) {
            board[i][j] = newState[i][j]
        }
    }


    // The key logic check is HOW MANY neighbors are alive.
    function aliveNeighbors(x,y) {
        let aliveNeighbors = 0
        for (let i = x - 1; i <= x + 1; ++i) {
            for (let j = y - 1; j <= y + 1; ++j) {
                // Anything that falls OUTSIDE the boundaries of the array is considered DEAD (aka 0 in it).
                // We also do NOT count the cell itself, only it's neighbors.
                if (i >= 0 &&
                    i < board.length &&
                    j >= 0 &&
                    j < board[i].length &&
                    (i !== x || j !== y)
                ) {
                    // console.log(`${i},${j}=${board[i][j]}`)
                    if (board[i][j] === 1) {
                        ++aliveNeighbors
                    }
                }
            }
        }

        return aliveNeighbors
    }
};

// Runtime 0 ms Beats 100.00%
// Memory 53.84 MB Beats 77.58%

// So this solution works, BUT we are doing a LOT of repetitive work.
// Every single cell we check all the 8 neighbors over and over and over! That's a huge waste of computing effort!
// Ideally, what we CAN do is a type of "moving window", where we move through the matrix checking the neighbors.
    // Any live cells that "move out of window" deduct
    // Any live cells that "move in the window" increment
// But this is not THAT MUCH more efficient... Because 3 cells are moving OUT and 3 cells are moving IN.
// So in fact, we are only saving TWO cell checks by being a bit more cryptic... It is an improvement, but not significant... Hmmmm
