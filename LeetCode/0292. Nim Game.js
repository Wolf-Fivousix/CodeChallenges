// Easy

// You are playing the following Nim Game with your friend:

// Initially, there is a heap of stones on the table.
// You and your friend will alternate taking turns, and you go first.
// On each turn, the person whose turn it is will remove 1 to 3 stones from the heap.
// The one who removes the last stone is the winner.
// Given n, the number of stones in the heap, return true if you can win the game assuming both you and your friend play optimally, otherwise return false.

 

// Example 1:

// Input: n = 4
// Output: false
// Explanation: These are the possible outcomes:
// 1. You remove 1 stone. Your friend removes 3 stones, including the last stone. Your friend wins.
// 2. You remove 2 stones. Your friend removes 2 stones, including the last stone. Your friend wins.
// 3. You remove 3 stones. Your friend removes the last stone. Your friend wins.
// In all outcomes, your friend wins.
// Example 2:

// Input: n = 1
// Output: true
// Example 3:

// Input: n = 2
// Output: true
 

// Constraints:

// 1 <= n <= 231 - 1

/*
I go first, which means if there is 1 to 3 stones, I WIN.
If there are 4 stones, I loose, taking 1, 2 or 3 will leave 3- stones, which makes the other player wins.
If there are 5 stones, I can take 1, I win.
If there are 6 stones, I can take 2, I win.
If there are 7 stones, I can take 3, I win.
If there are 8 stones, 1, 2 or 3, I loose.
If there are 9 stones, if I take 1, I win.
If there are 10 stones, if I take 2, I win.
If there are 11 stones, if I take 3, I win.
If ther eare 12 stones, 1, 2 or 3, I loose.
So they KEY here, is getting the OTHER PLAYER to 4 stones. Then it doesn't matter how many stones they take, I'll always win.

The pattern here is that whenever it is MY turn, if it is a multiple of 4, I'm faded to loose, since the other player IS PLAYING OPTIMALLY.
And when it is MY turn, there is no MOVE that I can make, to make up for that, because the other player can always maintain the "4 stones removed per round" ratio.
Which will inevibitaly lead to my defeat.

Constant Time and Space complexity O(1)

*/

/**
 * @param {number} n
 * @return {boolean}
 */
function canWinNim(n) {
    return n % 4 !== 0
};

// Runtime 0 ms Beats 100.00%
// Memory 48.89 MB Beats 45.48%