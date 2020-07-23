// Medium

// You are given coins of different denominations and a total amount of money. Write a function to compute the number of combinations that make up that amount. You may assume that you have infinite number of each kind of coin.

 

// Example 1:

// Input: amount = 5, coins = [1, 2, 5]
// Output: 4
// Explanation: there are four ways to make up the amount:
// 5=5
// 5=2+2+1
// 5=2+1+1+1
// 5=1+1+1+1+1
// Example 2:

// Input: amount = 3, coins = [2]
// Output: 0
// Explanation: the amount of 3 cannot be made up just with coins of 2.
// Example 3:

// Input: amount = 10, coins = [10] 
// Output: 1
 

// Note:

// You can assume that

// 0 <= amount <= 5000
// 1 <= coin <= 5000
// the number of coins is less than 500
// the answer is guaranteed to fit into signed 32-bit integer

/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
function change(amount, coins) {
    const ways = new Array(amount + 1).fill(0);
    ways[0] = 1;
    
    for (let coin of coins) {
        // console.log(coin);
        for (let change = coin; change <= amount; ++change) {
            // console.log("change", change);
            ways[change] += ways[change - coin];
        }
        // console.log(ways);
    }
    // console.log(ways);
    return ways[amount];
}

// Runtime: 84 ms, faster than 51.46% of JavaScript online submissions for Coin Change 2.
// Memory Usage: 36.6 MB, less than 91.11% of JavaScript online submissions for Coin Change 2.
// This solution was provided by Justin Lieu. (with my own naming alterations)

function change(amount, coins) {
    let possibilities = 0;
    
    while (coins.length) {
        const change = [];
        let amountLeft = amount;
        
        for (let i = coins.length - 1; i > -1; --i) {
            for (let j = 0; j < Math.floor(amountLeft / coins[i]); ++j) {
                change.push(coins[i]);
            }
            amountLeft %= coins[i];
        }

        console.log(coins, change);
        if (change.length) ++possibilities;
        coins.pop();
    }
    
    return possibilities;
}

// A variation that I thought it could work. It almost does, but it fails in considering
// when one coin can be swapped by a lower one, like 5, [1,2,5];