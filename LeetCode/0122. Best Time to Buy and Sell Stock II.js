// Say you have an array prices for which the ith element is the price of a given stock on day i.

// Design an algorithm to find the maximum profit. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times).

// Note: You may not engage in multiple transactions at the same time (i.e., you must sell the stock before you buy again).

// Example 1:

// Input: [7,1,5,3,6,4]
// Output: 7
// Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
//              Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
// Example 2:

// Input: [1,2,3,4,5]
// Output: 4
// Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
//              Note that you cannot buy on day 1, buy on day 2 and sell them later, as you are
//              engaging multiple transactions at the same time. You must sell before buying again.
// Example 3:

// Input: [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transaction is done, i.e. max profit = 0.
 

// Constraints:

// 1 <= prices.length <= 3 * 10 ^ 4
// 0 <= prices[i] <= 10 ^ 4

/**
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit(prices) {
    let maxProfit = 0;
    let buy = prices[0];
    let sell = buy;
    
    for (let i = 1; i < prices.length; ++i) {
        if (sell <= prices[i]) sell = prices[i];
        else {
            maxProfit += sell - buy;
            buy = prices[i];
            sell = buy;
        }
    }
    maxProfit += sell - buy;

    return maxProfit;
};

// Runtime: 64 ms, faster than 53.43% of JavaScript online submissions for Best Time to Buy and Sell Stock II.
// Memory Usage: 37.3 MB, less than 7.44% of JavaScript online submissions for Best Time to Buy and Sell Stock II.

// Proposed solution.
// class Solution {
//     public int maxProfit(int[] prices) {
//         int maxprofit = 0;
//         for (int i = 1; i < prices.length; i++) {
//             if (prices[i] > prices[i - 1])
//                 maxprofit += prices[i] - prices[i - 1];
//         }
//         return maxprofit;
//     }
// }

// This solution is similar to mine. But in here we do a transaction whenever there is profit. And just keep talling the profits.
// If there is no profit to be made, we don't make a transaction.