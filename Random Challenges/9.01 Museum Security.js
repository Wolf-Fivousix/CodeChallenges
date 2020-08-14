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
    museumRows.forEach((museumRow) => {
        [rowIndex, columnIndex, room] = museumRow.split(' ');
        museum[parseInt(rowIndex)][parseInt(columnIndex)] = room;
    });
});