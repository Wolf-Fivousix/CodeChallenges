// An ant on the floor can move in the 4 diagonal directions, which are defined from the point of view of a fixed aerial observer (the ant does not "turn").

// You are given the parameter moves: an array of integers, containing the ant steps. Calculate the euclidean distance between the starting position and the final position of the ant.
 
// Each step is a value between 0 and 3:
// 0: the ant moves one unit to the up and one unit to the right.
// 1: the ant moves one unit to the down and one unit to the right.
// 2: the ant moves one unit to the down and one unit to the left.
// 3: the ant moves one unit to the up and one unit to the left.
// +---+---+---+
// | 3 |   | 0 |
// +---+---+---+
// |   | A |   |
// +---+---+---+
// | 2 |   | 1 |
// +---+---+---+

// You must truncate the calculated euclidean distance and return an integer.
// Detailed example
// With this parameter :
 
// moves = [0, 3, 0, 0, 2, 0, 0]
 
// Horizontally, the ant moved 5 times to the right (the five 0s) and 2 times to the left (the 2 and the 3). So, it is 3 units to the right from its origin point.
 
// Vertically, the ant moved 6 times to the up (the five 0s and the 3) and one time down (the 2). So, it is 5 units to the up from its origin point.
 
// The euclidean distance is sqrt(3² + 5²) = 5.83
 
// After truncating, the value to return is 5.
// Implementation
// Function
// Implement the function computeDistance.
// Parameters
// moves (number[]): The moving steps of the ant.
// Return value
// distance (number): The truncated distance between the arrival and departure of the ant.
// Constraints
// 0 <= length(moves) <= 20
// 0 <= moves[] <= 3
// Available RAM: 512MB
// Timeout: 1 second

/**
 * @param {number[]} moves The moving steps of the ant.
 * @return {number} The truncated distance between the arrival and departure of the ant.
 */
function computeDistance(moves) {
    // Write your code here
    // To debug: console.error('Debug messages...');
    const counter = {
        0: 0,
        1: 0,
        2: 0,
        3: 0,
    }
    for (let move of moves) {
        ++counter[move]
    }

    
    const horizontal = counter[0] + counter[1] - counter[2] - counter[3]
    const vertical = counter[3] + counter[0] - counter[2] - counter[1]

    const euclidean = Math.sqrt(horizontal * horizontal + vertical * vertical)
    
    return Math.floor(euclidean)
}