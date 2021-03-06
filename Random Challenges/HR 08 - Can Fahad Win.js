// Fahad is taking part in a maze competition. Initially,
// Fahad will stand in the top-left corner of the maze. The
// maze is a 2-D grid consisting of some blocked
// (represented as '#') and unblocked (represented as '.')
// cells. It is guaranteed that Fahad is standing in an
// unblocked cell. It is also guaranteed that the bottom-
// right cell is unblocked. Each cell of the maze is
// connected with it's right, left, top and bottom cells (if
// those cells exist). It takes 1 second to move from a cell
// to its adjacent cell. If Fahad can reach the bottom-right
// corner of the maze within k seconds he wins. Determine
// whether he can win. If he can, return the string Fahad
// wins. Otherwise, return the string Better luck next
// time.
// For example, given the maze:
// ..##
// #.##
// #...
// it will take Fahad 5 seconds to reach the bottom right
// corner. As long as k >= 5, Fahad wins.
// Function Description
// Complete the function canWin in the editor below. The
// function must return one of two strings: either Fahad
// wins or Better luck next time.
// canWin has the following parameter(s):
//     numbers[numbers[0],...numbers[n-1]]: an array of
// integers
// Constraints
// 1 ≤ r ≤ 500
// 0 ≤ k ≤ 10 6
// Sample Case 0
// Sample Input For Custom Testing
// 2
// ..
// ..
// 3
// Sample Output
// Fahad wins
// Explanation
// The maze has 2 rows and 2 columns and the time
// within which Fahad needs to reach the bottom-right
// cell is 3 seconds. He starts from the top-left cell and
// he can either move to the top-right unblocked cell or
// bottom-left unblocked cell then to the bottom-right
// cell. It takes him 2 seconds to reach the bottom-right
// cell on either path. Thus, he reaches the bottom-right
// cell within the 3 seconds allowed.
// Sample Case 1
// Sample Input For Custom Testing
// 2
// .#
// #.
// 2
// Sample Output
// Better luck next time
// Explanation
// The maze has 2 rows and 2 columns and the time
// within which Fahad needs to reach the bottom-right
// cell is 2 seconds. He can neither move to the top-right
// cell nor to the bottom-left cell and so he cannot reach
// the bottom-right cell, regardless of the time
// constraint.
// 2:39


/*
 * Complete the 'canWin' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING_ARRAY maze
 *  2. INTEGER k
 */
function canWin(maze, k) {
    if ((maze.length - 1) * 2 > k) return "Better luck next time";

    const escapeTime = timeToEscape(maze);
    
    return escapeTime <= k ? "Fahad wins" : "Better luck next time";
}

function timeToEscape(maze) {
    const endPosition = [maze.length - 1, maze.length - 1];
    
    // Build the visited array.
    const visited = [];
    for (let i = 0; i < maze.length; ++i) {
        visited.push(new Array(maze.length).fill(false));
    }

    // While there are unvisited spots, look for the exit.
    const unvisited = [[0,0]];
    let time = 0;
    while (unvisited.length) {
        const currentPosition = unvisited.shift();
        if (currentPosition[0] === endPosition[0] && currentPosition[1] === endPosition[1]) return time;
        // console.log("currentPosition: ", currentPosition);
        visited[currentPosition[0]][currentPosition[1]] = true;
        // Now, this here is the problem. This is NOT giving me an accurate time to escape, but the number
        // of total possible positions Fahad can be at the maze. But it does solve a smaller subset:
        // Where there IS a solution, he will find it.
        ++time;

        // Find the connections.
        const connectedPaths = connections(maze, currentPosition);
        // console.log("connectedPaths: ", connectedPaths);
        // Add the ones that have NOT been visited.
        connectedPaths.forEach(position => {
            if (!visited[position[0]][position[1]]) unvisited.push(position);
        });
    }

    // Fahad ran out of options and did not reach exit.
    return Number.POSITIVE_INFINITY;
}
function connections(maze, position) {
    const moves = [];
    // top
    if(position[0] - 1 >= 0 && maze[position[0] - 1][position[1]] === ".") moves.push([position[0] - 1, position[1]]);
    // left
    if(position[1] - 1 >= 0 && maze[position[0]][position[1] - 1] === ".") moves.push([position[0], position[1] - 1]);
    // right
    if(position[1] + 1 < maze.length && maze[position[0]][position[1] + 1] === ".") moves.push([position[0], position[1] + 1]);
    // bottom
    if(position[0] + 1 < maze.length && maze[position[0] + 1][position[1]] === ".") moves.push([position[0] + 1, position[1]]);

    return moves;
}

const a = [
    [".", "."],
    [".","."]
];
console.log(canWin(a, 3) === "Fahad wins");

const b = [
    ["."]
];
console.log(canWin(b, 1) === "Fahad wins");

const c = [
    [".", "#"],
    ["#", "."]
];
console.log(canWin(c, 2) === "Better luck next time");

// 8 Test Cases

// This solution is not 100% accurate due to the pathfinding algorithm.
// That said, it DOES find a solution with some degree of time. It does NOT find the best solution.
// It does somewhat efficiently, without moving towards the same spots, by using more memory and keeping track of visited locations.

// Next step here would be to refactor the pathfinding algorithm to check for the most optimal path.

// Solution by Aaron Shapiro.

function canWin(maze, k) {
  const steps = [];
  noOfStepsToTarget(maze, 0, 0, 0, steps);
  const min = Math.min(...steps)
  if (steps.length == 0) {
    console.log("Better luck next time")
  } else {
    if (min > k) {
      console.log("Better luck next time")
    } else {
      console.log("Fahad wins")
    }
  }
}

function noOfStepsToTarget(maze, row, col, count = 0, steps) {
  let rowThreshold = maze.length - 1;
  let colThreshold = maze[0].length - 1;
  if (row < 0 || row > rowThreshold || col < 0 || col > colThreshold) {
    return;
  }
  if ( maze[row][col] != '.' ) {
    return;
  }
  if ( row == rowThreshold && col == colThreshold ) {
    steps.push(count)
    return;
  }
  maze[row][col] = '#';
  count++;
  noOfStepsToTarget(maze, row + 1, col, count, steps)
  noOfStepsToTarget(maze, row - 1, col, count, steps)
  noOfStepsToTarget(maze, row , col + 1, count, steps)
  noOfStepsToTarget(maze, row , col - 1, count, steps)
}