// Easy

// There are numBottles water bottles that are initially full of water. You can exchange numExchange empty water bottles from the market with one full water bottle.

// The operation of drinking a full water bottle turns it into an empty bottle.

// Given the two integers numBottles and numExchange, return the maximum number of water bottles you can drink.

// Example 1:
// https://assets.leetcode.com/uploads/2020/07/01/sample_1_1875.png
// Input: numBottles = 9, numExchange = 3
// Output: 13
// Explanation: You can exchange 3 empty bottles to get 1 full water bottle.
// Number of water bottles you can drink: 9 + 3 + 1 = 13.

// Example 2:
// https://assets.leetcode.com/uploads/2020/07/01/sample_2_1875.png
// Input: numBottles = 15, numExchange = 4
// Output: 19
// Explanation: You can exchange 4 empty bottles to get 1 full water bottle. 
// Number of water bottles you can drink: 15 + 3 + 1 = 19.
 

// Constraints:

// 1 <= numBottles <= 100
// 2 <= numExchange <= 100

/*
BRUTE FORCE
While we have full bottles
    drink bottles / increase counter
    exchange bottles / recalculate full bottles

return the drink counter

Not very efficient, because we're looping over a computation, but it's straight forward and gets the job done.
Even though we're computing stuff on the fly, we're only using a few variables and our exchangeRate is 2+, meaning there's no chance of overflowing the integer.

Log Linear Time Complexity O(N Log N) - Because even at the smallest exchange rate, we'll be reducing our computation by 2 every time.
Constant Space Complexity O(1)


*/

/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
function numWaterBottles(numBottles, numExchange) {
    let drinkedBottles = 0
    let emptyBottles = 0
    let fullBottles = numBottles

    while (fullBottles > 0) {
        // Drink
        drinkedBottles += fullBottles
        emptyBottles += fullBottles

        // Exchange
        fullBottles = Math.floor(emptyBottles / numExchange)
        emptyBottles = emptyBottles % numExchange
    }

    return drinkedBottles
};

// Runtime 0 ms Beats 100.00%
// Memory 54.06 MB Beats 36.72%

// There's a mathematical way of calculating this.
// This solution has the Mathematical Derivation of who to get to that "numExchanges - 1" formula:
// https://leetcode.com/problems/water-bottles/solutions/7237679/closed-form-solution/?envType=daily-question&envId=2025-10-01