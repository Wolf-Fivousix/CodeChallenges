// Your company is designing a dam to be
// built across a stream to create a small
// lake. To reduce materials cost, it will be
// made of one or more concrete walls with
// mud packed in between them.
// Determine the maximum height of the
// mud segments in the dam with the
// following restrictions:
// One unit width of the gap between walls
// will contain one  segment  of packed mud
// The height of mud in a segment cannot
// exceed  1  unit more than an adjacent
// wall or mud segment.
// Given the placement of a number of
// walls and their heights, determine the
// maximum height of a mud segment that
// can be built. If no mud segment can be
// built, return  0.
// Example
// wallPositions = [1, 2, 4, 7]
// wallHeights = [4, 6, 8, 11]

// https://s3.amazonaws.com/istreet-assets/oIYDq0I__epEH0HGHxHM8A/Dam%20design%20Example.svg

// There is no space between the first two
// walls.
// Between positions  2  and  4 , there is one
// unit open for mud. Heights of the
// surrounding walls are  6  and  8 , so the
// maximum height of mud is  6 + 1 = 7.
// Between positions  4  and  7  there are two
// units. The heights of surrounding walls
// are  8  and  11.
// The maximum height mud segment
// next to the wall of height  8  is  9.
// The maximum height mud next to a
// mud segment of height  9  is  10.
// Overall, mud segment heights are  7,
// 9  and  10 , and the maximum height is  10.
// Function Description
// Complete the function  maxHeight in the
// editor below.
// maxHeight has the following
// parameter(s):
//     int  wallPositions[n]:  an array of
// integers
//     int  wallHeights[n]:  an array of integers
// Returns:
//     int: the maximum height mud segment
// that can be build
// Constraints
// 1 < n ≤ 10 5
// 1 ≤ wallPositions[i], wallHeights[i] ≤ 10 9
// (where 0 ≤ i < n)
// Input Format For Custom Testing
// Sample Case 0
// STDIN    Function
// -----    --------
// 3    →   wallPositions[] size n = 3
// 1    →   wallPositions = [1, 3, 7]
// 3
// 7
// 3    →   wallHeights[] size n = 3
// 4    →   wallHeights = [4, 3, 3]
// 3
// 3
// Sample Input For Custom Testing
// Sample Output
// 5
// Explanation

// https://s3.amazonaws.com/istreet-assets/tlZH_YM-Kjg6h18252oSEg/Dam%20design%201.svg

// 4 4
// 3
// 4
// 5
// 4
// 3
// Mud segments
// Wall segments
// The  wallPositions = [1, 3, 7]  and
// wallHeights = [4, 3, 3].  There can be a
// segment of height  4  at position
// 2  supported by walls of heights  4  and
// 3.  Between positions  3  and  7 , there
// can be a segment of height  4  at
// positions  4  and  6.  Between them, a
// segment can be built of height  5  at
// position  5.
// Sample Case 1
// STDIN    Function
// -----    --------
// 2    →   wallPositions[] size n = 2
// 1    →   wallPositions = [1, 10]
// 10
// 2    →   wallHeights[] size n = 2
// 1    →   wallHeights = [1, 5]
// 5
// Sample Input For Custom Testing
// Sample Output
// 7
// Explanation

// https://s3.amazonaws.com/istreet-assets/zjkEq7FswiJh5-r3w9r_kw/Dam%20design%202.svg

// 1
// 2
// 3
// 4
// 5
// 6
// 7 7
// 6
// 5
// Mud segments
// Wall segments
// The  wallPositions = [1, 10]  and
// wallHeights = [1, 5].  The heights of the
// mud segments from positions  2
// through  9 are  [2, 3, 4, 5, 6, 7, 7, 6].

// Assume that the array always have a starting and ending concrete wall.
function maxHeight(wallPositions, wallHeights) {
    const dam = new Array(wallPositions[wallPositions.length - 1]);
    const walls = {};
    for (let i = 0; i < wallPositions.length; ++i) {
        walls[wallPositions[i] - 1] = wallHeights[i];
    }
    
    let currentWall = 0;
    for (let i = 0; i < dam.length; ++i) {
        if (walls[i]) {
            currentWall = walls[i];
            dam[i] = currentWall;
        }
        else dam[i] = ++currentWall;
    }

    let maxMud = 0;
    for (let i = dam.length - 1; i > -1; --i) {
        if (walls[i]) currentWall = walls[i];
        else {
            dam[i] = Math.min(dam[i], ++currentWall);
            if (dam[i] > maxMud) maxMud = dam[i];
        }
    }
    
    return maxMud;
}
// 11/15 Test Cases. Heap out of memory for the array.

function maxHeight(wallPositions, wallHeights) {
    // Define maxMud as 0.
    // iterate throught the positions array.
        // find the distance between them - 1 (distance 1 means no distance).
        // distance is our budget.

        // Start from the min pillar.
        // Start building pillars until we reach the max height of the two pillars + 1.
        // Once we reach the height of max pillar + 1, we have a cost of 2 to build a new mudWall.
        // Keep building walls until budge runs out.

        // update maxMud with current mudWall height.
    
    // return our maxMud wall.
    let maxMud = 0;

    for (let i = 1; i < wallPositions.length; ++i) {
        let budget = wallPositions[i] - wallPositions[i - 1] - 1;
        let cost = 1;
        const minPillar = Math.min(wallHeights[i], wallHeights[i - 1]);
        const maxPillar = Math.max(wallHeights[i], wallHeights[i - 1]);
        if (budget) maxMud = minPillar;

        while (budget - cost >= 0) {
            ++maxMud;
            budget -= cost;
            if (maxMud === maxPillar + 1) cost = 2;
        }
    }

    return maxMud;
}

const wP2 = [ 8, 8, 9, 8, 8, 11 ];
const wH2 = [ 7, 12, 16, 22, 26, 29 ];
// Expected output 11.
const wP5 = [ 54,
    8,
    32,
    32,
    31,
    15,
    35,
    10,
    39,
    11,
    26,
    47,
    46,
    44,
    16,
    51,
    23,
    21,
    41,
    7,
    16,
    30,
    17,
    30,
    58,
    12,
    18,
    27,
    25,
    48,
    43,
    15,
    33,
    51,
    21,
    43,
    8,
    57,
    51,
    56,
    7,
    13,
    19,
    16,
    46,
    56,
    16,
    31,
    46,
    51,
    42,
    50,
    10,
    40,
    42,
    8,
    57,
    56,
    57,
    15 ];
const wH5 = [ 5,
    11,
    12,
    13,
    19,
    29,
    31,
    36,
    39,
    40,
    42,
    43,
    45,
    46,
    49,
    51,
    52,
    53,
    54,
    55,
    58,
    62,
    63,
    65,
    66,
    68,
    69,
    72,
    75,
    80,
    82,
    83,
    84,
    87,
    90,
    91,
    92,
    104,
    105,
    107,
    113,
    115,
    118,
    119,
    123,
    128,
    129,
    130,
    132,
    134,
    135,
    141,
    145,
    146,
    148,
    157,
    158,
    159,
    169,
    171 ];
// Expected output 61.

console.log(maxHeight(wP2, wH2)); // 11
console.log(maxHeight(wP5, wH5)); // 61