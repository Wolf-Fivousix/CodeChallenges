// Medium

// Given an m x n grid of characters board and a string word, return true if word exists in the grid.

// The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.


// Example 1:
// https://assets.leetcode.com/uploads/2020/11/04/word2.jpg
// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
// Output: true

// Example 2:
// https://assets.leetcode.com/uploads/2020/11/04/word-1.jpg
// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
// Output: true

// Example 3:
// https://assets.leetcode.com/uploads/2020/10/15/word3.jpg
// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
// Output: false

// Constraints:

// m == board.length
// n = board[i].length
// 1 <= m, n <= 6
// 1 <= word.length <= 15
// board and word consists of only lowercase and uppercase English letters.
 

// Follow up: Could you use search pruning to make your solution faster with a larger board?

/*
The problem is simple, but can be tricky. Let's leave the optimization for later and try to solve it the "dumb way".

BRUTE FORCE
Scan the matrix, from 0,0 and up.
Every time we find the first letter, we start our "depth search" of letters
    If we found the next letter, we keep going
    If we found the last one, we return true
    SINCE WE CANNOT RE-USE THE SAME LETTER, we also need to keep track of WHICH INDEXES were ALREADY used. And check those before "matching"
        We also can't have a set of arrays, like [0,0],[1,1], but we can do some conversion to "0,0","1,1"!

return false // Since we scanned the whole thing and didn't find a match.

Worst case scenario, we're giving a matrix AND a word that encompasses the "whole matrix - 1" every single time. So this is not very efficient.
Polynomial Time Complexity O(N^2)
Linear Space Complexity O(N) - Because we're keeping track of indexes for each letter. N = word
*/

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
function exist(board, word) {
    for (let row = 0; row < board.length; ++row) {
        for (let column = 0; column < board[row].length; ++column) {
            if (board[row][column] === word[0]) {
                // console.log(`Row: ${row} / Column: ${column}`)
                // const letterIndexes = new Set(`${row},${column},${1}`)

                // Depth For Search
                const stack = [[[row,column]]]
                while (stack.length) {
                    const currentPath = stack.pop()
                    console.log(currentPath)
                    // If the path size matches the word, then we found the word!
                    if (currentPath.length === word.length) return true

                    const [currentRow, currentColumn] = currentPath[currentPath.length - 1]
                    console.log(`Looking at ${board[currentRow][currentColumn]} -> and in search of ${word[currentPath.length]}`)
                    if (currentRow - 1 >= 0 && board[currentRow -1][currentColumn] === word[currentPath.length] && isCoordinatesUnvisited(currentPath, [currentRow - 1, currentColumn])) { stack.push([...currentPath, [currentRow - 1, currentColumn]]) }
                    if (currentColumn - 1 >= 0 && board[currentRow][currentColumn - 1] === word[currentPath.length] && isCoordinatesUnvisited(currentPath, [currentRow, currentColumn - 1])) { stack.push([...currentPath, [currentRow, currentColumn - 1]]) }
                    if (currentColumn + 1 < board[currentRow].length && board[currentRow][currentColumn + 1] === word[currentPath.length] && isCoordinatesUnvisited(currentPath, [currentRow, currentColumn + 1])) { stack.push([...currentPath, [currentRow, currentColumn + 1]]) }
                    if (currentRow + 1 < board.length && board[currentRow + 1][currentColumn] === word[currentPath.length] && isCoordinatesUnvisited(currentPath, [currentRow + 1, currentColumn])) { stack.push([...currentPath, [currentRow + 1, currentColumn]]) }
                    // A redability improvement is extracting "boundary check" and "valid letter" to helper methods.
                }
            }
        }
    }

    return false
};

function isCoordinatesUnvisited(path, coordinates) {
    const [newRow, newColumn] = coordinates

    for (const visitedCoordinates of path) {
        const [visitedRow, viisitedColumn] = visitedCoordinates
        if (visitedRow === newRow && viisitedColumn === newColumn) return false
    }

    return true
}

// Runtime 1035 ms Beats 20.39%
// Memory 72.72 MB Beats 5.56%

// Most other solutions are using recursion. Which I didn't want to.
// One re-curring idea is that in order to "track" if a node was visited, at each iteration it would modify the existing board letter to be something else, like "*".
// That way, there was no chance of the same letter being read a second time.
// At the end of that iteration, it would reverse the letter using the WORD, since it knew which letter it was looking for, it also knew which letter immediately before was erased.