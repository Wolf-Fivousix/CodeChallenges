// Easy

// We are playing the Guess Game. The game is as follows:

// I pick a number from 1 to n. You have to guess which number I picked.

// Every time you guess wrong, I'll tell you whether the number is higher or lower.

// You call a pre-defined API guess(int num) which returns 3 possible results (-1, 1, or 0):

// -1 : My number is lower
//  1 : My number is higher
//  0 : Congrats! You got it!
// Example :

// Input: n = 10, pick = 6
// Output: 6

// This is basic binary search. The catch here is understanding the return for the API helper function.

/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
function guessNumber(n) {
    let start = 1;
    let end = n;
    let currentGuess = Math.floor((start + end) / 2);
    
    while (guess(currentGuess)) {
        if (guess(currentGuess) === -1) {
            end = currentGuess;
            currentGuess = Math.floor((start + end) / 2);
        }
        else {
            start = currentGuess + 1;
            currentGuess = Math.floor((start + end) / 2);
        }
    }
    
    return currentGuess;
}

// Runtime: 72 ms, faster than 55.48% of JavaScript online submissions for Guess Number Higher or Lower.
// Memory Usage: 36.9 MB, less than 5.15% of JavaScript online submissions for Guess Number Higher or Lower.