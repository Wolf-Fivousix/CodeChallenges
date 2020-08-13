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

// Recommended solution is to use Ternary Search. I find the extra complexity would not be worth the overhead compared to Binary Search.
// Approach 3: Ternary Search
// Algorithm

// In Binary Search, we choose the middle element as the pivot in splitting. In Ternary Search, we choose two pivots (say m1m1 and m2m2) such that the given range is divided into three equal parts. If the required number numnum is less than m1m1 then we apply ternary search on the left segment of m1m1. If numnum lies between m1m1 and m2m2, we apply ternary search between m1m1 and m2m2. Otherwise we will search in the segment right to m2m2.
/* The guess API is defined in the parent class GuessGame.
   @param num, your guess
   @return -1 if my number is lower, 1 if my number is higher, otherwise return 0
      int guess(int num); */

// public class Solution extends GuessGame {
//     public int guessNumber(int n) {
//         int low = 1;
//         int high = n;
//         while (low <= high) {
//             int mid1 = low + (high - low) / 3;
//             int mid2 = high - (high - low) / 3;
//             int res1 = guess(mid1);
//             int res2 = guess(mid2);
//             if (res1 == 0)
//                 return mid1;
//             if (res2 == 0)
//                 return mid2;
//             else if (res1 < 0)
//                 high = mid1 - 1;
//             else if (res2 > 0)
//                 low = mid2 + 1;
//             else {
//                 low = mid1 + 1;
//                 high = mid2 - 1;
//             }
//         }
//         return -1;
//     }
// }

// Complexity Analysis

// Time complexity : O\big(\log_3 n \big)O(log 
// 3
// ​	
//  n). Ternary Search is used.
// Space complexity : O(1)O(1). No extra space is used.