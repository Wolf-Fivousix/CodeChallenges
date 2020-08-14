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

    // I'm going with my second approach here, for a simple reason:
    // I have the guarantee that it will only run 5 M * N times (Linear Complexity on M * N), compared to
    // (Guards * M+N) * M * N from my first submission. In a case with a lot of guards, that would be bad.
    // That said, maybe the simplicity of the first approach that was coded within 30min is something that
    // the team might consider worth looking at, so I left it as a comment at the end.

// Logic
    // We're going to have 5 passes total.
    // 1-2 passes are about rows, 3-4 about columns. They all do the same:
        // I have a "watch" flag that starts false.
        // if I find a guard, I change the flag to true.
        // if I find a wall, I change the flag to false.
        // Update the position based on the "watch" flag.
    // 5th pass is to pick any position that was not filled.
        // Technically we can do this on the 4th pass, but for clarity of code, I opted for a 5th pass.

    matrixPasses(museum);

    const unguarded = [];
    for (let i = 0; i < museum.length; ++i) {
        for (let j = 0; j < museum[i].length; ++j) {
            if (!museum[i][j]) unguarded.push([i, j]);
        }
    }

    console.log(unguarded.length ? "false" : "true");
    unguarded.forEach(spot => console.log(spot[0], spot[1]));
});

function matrixPasses(museum) {
    // 1st pass, left to right.
    for (let i = 0; i < museum.length; ++i) {
        let watch = false;
        for (let j = 0; j < museum[i].length; ++j) {
            watch = updateLocation(watch, museum, i, j);
        }
    }
    // 2nd pass, right to left.
    for (let i = 0; i < museum.length; ++i) {
        let watch = false;
        for (let j = museum[i].length - 1; j > -1; --j) {
            watch = updateLocation(watch, museum, i, j);
        }
    }
    // 3rd pass, downward.
    for (let column = 0; column < museum[0].length; ++column) {
        let watch = false;
        for (let row = 0; row < museum.length; ++row) {
            watch = updateLocation(watch, museum, row, column);
        }
    }
    // 4th pass, upward.
    for (let column = museum[0].length - 1; column > -1; --column) {
        let watch = false;
        for (let row = museum.length - 1; row > -1; --row) {
            watch = updateLocation(watch, museum, row, column);
        }
    }
}

function updateLocation(watch, museum, x, y) {
    if (museum[x][y] === "g") return true;
    if (museum[x][y] === "w") watch = false;
    if (watch) museum[x][y] = "-";

    return watch;
}




//////////////////////////////////////////////////////////////
// First submission.
//////////////////////////////////////////////////////////////
/*
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
*/