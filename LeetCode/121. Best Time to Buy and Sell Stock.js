// Say you have an array for which the ith element is the price of a given stock on day i.

// If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.

// Note that you cannot sell a stock before you buy one.

// Example 1:

// Input: [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
//              Not 7-1 = 6, as selling price needs to be larger than buying price.
// Example 2:

// Input: [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transaction is done, i.e. max profit = 0.

/**
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit(prices) {
    const buyPrices = new Array(prices.length);
    
    let lowestPrice = Number.POSITIVE_INFINITY;
    for (let i = 0; i < prices.length; ++i) {
        if (prices[i] < lowestPrice) lowestPrice = prices[i];
        buyPrices[i] = lowestPrice;
    }
    
    let bestSpread = 0;
    for (let i = prices.length - 1; i >= 0; --i) {
        const currentSpread = prices[i] - buyPrices[i]
        if (currentSpread > bestSpread) bestSpread = currentSpread;
    }
    
    return bestSpread;
};

// Runtime: 80 ms, faster than 36.17% of JavaScript online submissions for Best Time to Buy and Sell Stock.
// Memory Usage: 37.1 MB, less than 7.41% of JavaScript online submissions for Best Time to Buy and Sell Stock.

// We're taking a very simple approach here. We move once through our input looking for the lowest price so far, and save it.
// Then we work backwards looking for the best spread (the difference between buy and sell prices).
// This is a Linear Time and Space Complexity.