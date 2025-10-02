// Medium

// You are given two integers numBottles and numExchange.

// numBottles represents the number of full water bottles that you initially have. In one operation, you can perform one of the following operations:

// Drink any number of full water bottles turning them into empty bottles.
// Exchange numExchange empty bottles with one full water bottle. Then, increase numExchange by one.
// Note that you cannot exchange multiple batches of empty bottles for the same value of numExchange. For example, if numBottles == 3 and numExchange == 1, you cannot exchange 3 empty water bottles for 3 full bottles.

// Return the maximum number of water bottles you can drink.

// Example 1:
// https://assets.leetcode.com/uploads/2024/01/28/exampleone1.png
// Input: numBottles = 13, numExchange = 6
// Output: 15
// Explanation: The table above shows the number of full water bottles, empty water bottles, the value of numExchange, and the number of bottles drunk.

// Example 2:
// https://assets.leetcode.com/uploads/2024/01/28/example231.png
// Input: numBottles = 10, numExchange = 3
// Output: 13
// Explanation: The table above shows the number of full water bottles, empty water bottles, the value of numExchange, and the number of bottles drunk.
 

// Constraints:

// 1 <= numBottles <= 100 
// 1 <= numExchange <= 100

/*
Very similar to what we had in 1518 Water Bottles.
The logic remains the roughly the same, with the alteration that we update the exchangeRate at each exchange.

This is still O(N Log N) for Time complexity, since the exchange rate increases at every step.
This is still O(1) Space Complexity, because we only use a few variables.
*/

/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
function maxBottlesDrunk(numBottles, numExchange) {
    let exchangeRate = numExchange
    let drinkedBottles = 0
    let emptyBottles = 0
    let fullBottles = numBottles

    while (fullBottles) {
        // Drink
        drinkedBottles += fullBottles
        emptyBottles += fullBottles
        fullBottles = 0
        
        // Exchange
        while (emptyBottles >= exchangeRate) {
            emptyBottles -= exchangeRate
            ++fullBottles
            ++exchangeRate
        }
    }

    return drinkedBottles    
};

// Runtime 56 ms Beats 57.14%
// Memory 55.09 MB Beats 64.29%

// There IS a mathematical way of solving this.
// The Editorial has an explanation of how to do it.
// var maxBottlesDrunk = function (numBottles, numExchange) {
//     let a = 1;
//     let b = 2 * numExchange - 3;
//     let c = -2 * numBottles;
//     let delta = b * b - 4 * a * c;
//     let t = Math.ceil((-b + Math.sqrt(delta)) / (2 * a));
//     return numBottles + t - 1;
// };