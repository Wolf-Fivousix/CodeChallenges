// Easy

// There is a robot starting at the position (0, 0), the origin, on a 2D plane. Given a sequence of its moves, judge if this robot ends up at (0, 0) after it completes its moves.

// You are given a string moves that represents the move sequence of the robot where moves[i] represents its ith move. Valid moves are 'R' (right), 'L' (left), 'U' (up), and 'D' (down).

// Return true if the robot returns to the origin after it finishes all of its moves, or false otherwise.

// Note: The way that the robot is "facing" is irrelevant. 'R' will always make the robot move to the right once, 'L' will always make it move left, etc. Also, assume that the magnitude of the robot's movement is the same for each move.

 

// Example 1:

// Input: moves = "UD"
// Output: true
// Explanation: The robot moves up once, and then down once. All moves have the same magnitude, so it ended up at the origin where it started. Therefore, we return true.
// Example 2:

// Input: moves = "LL"
// Output: false
// Explanation: The robot moves left twice. It ends up two "moves" to the left of the origin. We return false because it is not at the origin at the end of its moves.
 

// Constraints:

// 1 <= moves.length <= 2 * 104
// moves only contains the characters 'U', 'D', 'L' and 'R'.

/*
BRUTE FORCE:
Declare X and Y axis, both start at 0
Iterate through moves input
    Every 'R' = X + 1
    'L' = X - 1
    'U' = Y + 1
    'D' = Y - 1

Return check if X and Y are equal to 0

Linear Time Complexity O(n)
Linear Space Complexity O(n) - We are only using a couple more variables, but we are splitting the input into an array to be easier to work with



There's no way to NOT iterate through the whole input at least once, so we are pretty good from a efficiency stand point.

*/

/**
 * @param {string} moves
 * @return {boolean}
 */
function judgeCircle(moves) {
    let x = 0
    let y = 0
    moves.split('').forEach(move => {
        switch(move) {
            case 'R':
                ++x
                break
            case 'L':
                --x
                break
            case 'U':
                ++y
                break
            case 'D':
                --y
                break
            default:
                // do nothing
        }
    })

    return x === 0 && y === 0
};

// Runtime 7 ms Beats 53.33%
// Memory 52.17 MB Beats 23.30%