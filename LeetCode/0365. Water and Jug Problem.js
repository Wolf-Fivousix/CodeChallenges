// Medium

// You are given two jugs with capacities x liters and y liters. You have an infinite water supply. Return whether the total amount of water in both jugs may reach target using the following operations:

// Fill either jug completely with water.
// Completely empty either jug.
// Pour water from one jug into another until the receiving jug is full, or the transferring jug is empty.
 

// Example 1:

// Input: x = 3, y = 5, target = 4

// Output: true

// Explanation:

// Follow these steps to reach a total of 4 liters:

// Fill the 5-liter jug (0, 5).
// Pour from the 5-liter jug into the 3-liter jug, leaving 2 liters (3, 2).
// Empty the 3-liter jug (0, 2).
// Transfer the 2 liters from the 5-liter jug to the 3-liter jug (2, 0).
// Fill the 5-liter jug again (2, 5).
// Pour from the 5-liter jug into the 3-liter jug until the 3-liter jug is full. This leaves 4 liters in the 5-liter jug (3, 4).
// Empty the 3-liter jug. Now, you have exactly 4 liters in the 5-liter jug (0, 4).
// Reference: The Die Hard example.

// Example 2:

// Input: x = 2, y = 6, target = 5

// Output: false

// Example 3:

// Input: x = 1, y = 2, target = 3

// Output: true

// Explanation: Fill both jugs. The total amount of water in both jugs is equal to 3 now.

 

// Constraints:

// 1 <= x, y, target <= 103

/*
Few things for us to consider:
1) If target is greater than X + Y, it's impossible to reach it!
    This is a BASE case, and anything further assumes X + Y is either EQUAL or HIGHER than target.
2) If target is a multiple of X or Y, we can "empty and refill" one of the jugs to reach it.
3) If X and Y are EVEN, it is IMPOSSIBLE to get an ODD target.
4) Being a multiple of the DELTA between X and Y

*/

/**
 * @param {number} x
 * @param {number} y
 * @param {number} target
 * @return {boolean}
 */
function canMeasureWater(x, y, target) {
    if (target > x + y) return false
    if (x + y === target) return true
    if (target % x === 0 || target % y === 0) return true
    if (target % Math.abs(x - y) === 0) return true

    return false
};
// This solutions doesn't work.
// We need to apply dynamic programming to explore the graph of possibilities in this problem.

// Solution by Loginov Kirill
// function canMeasureWater(x, y, target) {
//     if (target > x + y) return false;

//     const stack = [[0, 0]];
//     const visited = new Set();

//     while (stack.length) {
//         const [a, b] = stack.pop();
//         const key = `${a},${b}`;

//         if (a + b === target) return true;
//         if (visited.has(key)) continue;
//         visited.add(key);

//         stack.push([x, b]);        // fill x
//         stack.push([a, y]);        // fill y
//         stack.push([0, b]);        // empty x
//         stack.push([a, 0]);        // empty y

//         const pourXtoY = Math.min(a, y - b);      <---- This is how much space is LEFT in Y! AKA The delta between Y (max capacity) and B (current state)
//         stack.push([a - pourXtoY, b + pourXtoY]);

//         const pourYtoX = Math.min(b, x - a);
//         stack.push([a + pourYtoX, b - pourYtoX]);
//     }

//     return false;
// }