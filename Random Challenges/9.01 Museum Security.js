// Suppose you've been asked to verify a
// museum's security is up to standard.
// You're given a floor plan with the positions of
// all guards and walls:

// 4 6
// 0 0 g
// 0 1 w
// 1 1 g
// 2 2 w
// 2 3 g

// The first line describes the dimensions of the
// museum, which is a m x n
// rectangle (in this case, 4 x 6). m and n are
// always greater than 0.
// Subsequent lines correspond to positions of
// guards (designated as "g") and
// walls (designated as "w"). For example, "0 0 g"
// designates there is a
// guard at (0, 0).
// Guards do not move, but can guard any line of
// rooms that are:
// directly to the north, east, south, or west of
// them
// unobstructed (i.e., there is no wall in between
// them)
// For example, the guard at (0, 0) can only guard
// (1, 0), (2, 0), and (3, 0).
// Whereas the guard at (2, 3) can guard (0, 3), (1,
// 3), (2, 4), (2, 5), and (3, 3).
// The above museum looks something like:
//   0 1 2 3 4 5
// 0 g w   -  
// 1 - g - - - -
// 2 - - w g - -
// 3 - -   -  
// Guarded rooms have been marked with a "-".
// Given a museum, please print your solution in
// the following format:

// false
// 0 2
// 0 4
// 0 5
// 3 2
// 3 4
// 3 5

// The first line should be "false" if the museum
// has unguarded rooms, and "true"
// if the museum has no unguarded rooms.
// If "false", subsequent lines should be
// coordinates of unguarded rooms.
// Unguarded rooms should be ordered in
// ascending order by (x, y).
// Some quick notes:
// For certain languages (e.g., Ruby) we've
// provided a helper method to load the
// museum. You do not need to use this method
// if don't want to.
// You will always be provided valid inputs.
// The museums will never be larger than 100 x 100.
// While not required, we'd prefer a solution
// that runs in time O(m n).

process.stdin.resume();
process.stdin.setEncoding("ascii");
var input = "";
var museum = [];
process.stdin.on("data", function (chunk) {
    input += chunk;
});
process.stdin.on("end", function () {
    // now we can read/parse input
    inputRows = input.split('\n');
    museumRows = inputRows.slice(1, inputRows.length);
    [ rows, columns ] = inputRows[0].split(' ').map(dimension => parseInt(dimension));
    museum = [...Array(rows)].map(row => Array(columns));
    const guards = [];
    museumRows.forEach((museumRow) => {
        [rowIndex, columnIndex, room] = museumRow.split(' ');
        museum[parseInt(rowIndex)][parseInt(columnIndex)] = room;
        if (room === "g") guards.push([parseInt(rowIndex), parseInt(columnIndex)]);
    });

    // console.log(guards);
    // Iterate through guards.
        // for each guard we are going to "expand" their "vision" until we reach a wall / limits of museum.
    // Iterate through museum and find any spot that is unguarded.
        // if unguarded, add to result.
    // return true if unguarded is empty.
    // return false + unguarded positions, if unguarded is not empty.

    guards.forEach(guard => {
        expandVision(guard, museum);
    });

    const unguarded = [];
    for (let i = 0; i < museum.length; ++i) {
        for (let j = 0; j < museum[i].length; ++j) {
            if (!museum[i][j]) unguarded.push([i, j]);
        }
    }

    console.log(unguarded.length ? "false" : "true");
    unguarded.forEach(spot => console.log(spot[0], spot[1]));
});

function expandVision(guard, museum) {
    const [x, y] = guard;
    // left to right.
    for (let i = y + 1; i < museum[x].length; ++i) {
        if (museum[x][i] === "w") break;
        museum[x][i] = "-";
    }
    // right to left.
    for (let i = y - 1; i > -1; --i) {
        if (museum[x][i] === "w") break;
        museum[x][i] = "-";
    }
    // upwards.
    for (let i = x - 1; i > -1; --i) {
        if (museum[i][y] === "w") break;
        museum[i][y] = "-";
    }
    // downwards.
    for (let i = x + 1; i < museum.length; ++i) {
        if (museum[i][y] === "w") break;
        museum[i][y] = "-";
    }
}
// This is a working soluiton, but not the most optimal.
// Let's see if we can make it a little better.
// 5 / 5 test cases.

// This is a working solution, but not the most optimal.
// Let's see if we can make it a little better.

// as we iterate through the matrix left top to bottom right, we will know if a guard has appeared on that line.
// Unfortunately, if we find a guard by the very end, we still have to do a second pass to update...
// on the other hand, we know, before we start, every single guard position.
// If we don't need to "find" the guards, we are as good as set from the first pass.
// I want a constant way of checking to see if any X or Y has a guard. (ignore walls for now).
    // I could do that with 2 sets, one for rows, one for columns. Any value inside there, is valid.
// let`s think about the wall. 
    // if I know there's a GUARD on this COLUMN or LINE, we check for a wall as well.
    // If there's none, no problem.
    // If there is one, I want to know, if it is between current point, and GUARD.
        // I know the wall is in between when
        // WALL is lesser than CURRENT POS AND GUARD is lesser than WALL.
        // OR 
        // CURRENT POS is lesser than WALL AND WALL is lesser than GUARD.
// The problem is that, for every iteration, I need to look up through guards and walls. That's starting to compound as bad as my previous "growing" solution.
// Right now I have a (Guards * (M + N) + MN) solution.

// Ignoring walls again.
// If I have one array "on top" and one array "on the side" to mark guards, I could say reliably where they are.

// What if I do 4 passes:
// first pass is about rows.
    // I have a flag that starts false.
    // if I find a guard, I change the flag to true.
    // if I find a wall, I change the flag to false.
    // This works one way. If I find a gaurd at the end of the row, with no walls, I want to go back and update.
    // repeat the process, but now from right to left.
// we repeat the process, but now for each column.

// Know I know for sure I have 4 * M * N, regardless of how many guards are there. Which could be a possible efficiency improvement.
// And then a 5th time to see any unguarded positions.