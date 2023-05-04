// Easy
// https://leetcode.com/problems/min-cost-climbing-stairs/

// You are given an integer array cost where cost[i] is the cost of ith step on a staircase. Once you pay the cost, you can either climb one or two steps.

// You can either start from the step with index 0, or the step with index 1.

// Return the minimum cost to reach the top of the floor.

 

// Example 1:

// Input: cost = [10,15,20]
// Output: 15
// Explanation: You will start at index 1.
// - Pay 15 and climb two steps to reach the top.
// The total cost is 15.
// Example 2:

// Input: cost = [1,100,1,1,1,100,1,1,100,1]
// Output: 6
// Explanation: You will start at index 0.
// - Pay 1 and climb two steps to reach index 2.
// - Pay 1 and climb two steps to reach index 4.
// - Pay 1 and climb two steps to reach index 6.
// - Pay 1 and climb one step to reach index 7.
// - Pay 1 and climb two steps to reach index 9.
// - Pay 1 and climb one step to reach the top.
// The total cost is 6.
 

// Constraints:

// 2 <= cost.length <= 1000
// 0 <= cost[i] <= 999

/*
Array always have at least 2 elements. Great
Cost will go from 0 to 999, so no worries about garbage input. Great!

1, 100, 100, 100, 1 ...
1, 1, 100, 666, 1 ...

Brute force solution: Just calculate every single permutation of the problem and find the one with the least cost.

Since the stack can go all the way to 1000 calls, we DO NOT want to do recursion, as that will blow the stack.
So we have to go iteractively!

[1, 2, 3] -> 2
[1, 2] -> 1

For the life of me I can't figure out  the "iteractive" method. So let's start with the recursive one and once the stack blows, it blows.
At least this might help me figure out how to converte recursion into iteration.

Given an array
    if array is empty, return "total cost". => TotalCost is an optional parameter that starts at 0 if not given.

    pick first element
    make a copy removing the 1st element from the array
    repeat the process until array is empty
    pick second elemnt
    make a copy removing both from array
    repeat the process until array is empty
*/

/**
 * @param {number[]} cost
 * @return {number}
 */
function minCostClimbingStairs(cost) {
    return calculateCost(cost);
};

function calculateCost(array, totalCost = 0) {
    if (array.length === 0) return totalCost;

    let minimumCost = Number.POSITIVE_INFINITY;
    for(i = 0; i < 2 && i < array.length; ++i) {
        const stepCost = array[i];
        const arrayCopy = array.slice(i + 1);
        totalCost += stepCost;
        const currentCost = calculateCost(arrayCopy, totalCost);
        if (minimumCost > currentCost) minimumCost = currentCost;
    }

    return minimumCost;
}

// This didn't work. It's missing that "second element" iteration, when it should finish with a value of 0, but instead it doesn't run
// because the array only has 1 element....

// This is the best iterative solution I found: https://leetcode.com/problems/min-cost-climbing-stairs/solutions/282648/easy-to-read-javascript-o-n-time-o-1-space-iterative/
var minCostClimbingStairs = function(cost) {
    /*
    Runtime: 64 ms, faster than 100.00% of JavaScript online submissions for Min Cost Climbing Stairs.
    Memory Usage: 34.9 MB, less than 60.61% of JavaScript online submissions for Min Cost Climbing Stairs.
    
    O(n) time, O(1) space
	
	- Bottom up strategy
	- Iterative
	- Memoization
	
	Trick: At index [i], you only need to know the min cost when stepping on [i - 1] and [i - 2]. This is a slight variation on fibonacci.
    */
    
    if (cost.length === 1) return 0;
    if (cost.length === 2) return Math.min(cost[0], cost[1]);
    
    let minCostTwoBefore = cost[0];
    let minCostOneBefore = cost[1];
    
    for (let n = 2; n < cost.length; n++) {
        const minCostAtCurrent = cost[n] + Math.min(minCostOneBefore, minCostTwoBefore);
        
        minCostTwoBefore = minCostOneBefore;
        minCostOneBefore = minCostAtCurrent;
    }
        
    return Math.min(minCostOneBefore, minCostTwoBefore);
};
