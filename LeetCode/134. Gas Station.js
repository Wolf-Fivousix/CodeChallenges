// Medium

// There are n gas stations along a circular route, where the amount of gas at the ith station is gas[i].

// You have a car with an unlimited gas tank and it costs cost[i] of gas to travel from the ith station to its next (i + 1)th station. You begin the journey with an empty tank at one of the gas stations.

// Given two integer arrays gas and cost, return the starting gas station's index if you can travel around the circuit once in the clockwise direction, otherwise return -1. If there exists a solution, it is guaranteed to be unique

 

// Example 1:

// Input: gas = [1,2,3,4,5], cost = [3,4,5,1,2]
// Output: 3
// Explanation:
// Start at station 3 (index 3) and fill up with 4 unit of gas. Your tank = 0 + 4 = 4
// Travel to station 4. Your tank = 4 - 1 + 5 = 8
// Travel to station 0. Your tank = 8 - 2 + 1 = 7
// Travel to station 1. Your tank = 7 - 3 + 2 = 6
// Travel to station 2. Your tank = 6 - 4 + 3 = 5
// Travel to station 3. The cost is 5. Your gas is just enough to travel back to station 3.
// Therefore, return 3 as the starting index.
// Example 2:

// Input: gas = [2,3,4], cost = [3,4,3]
// Output: -1
// Explanation:
// You can't start at station 0 or 1, as there is not enough gas to travel to the next station.
// Let's start at station 2 and fill up with 4 unit of gas. Your tank = 0 + 4 = 4
// Travel to station 0. Your tank = 4 - 3 + 2 = 3
// Travel to station 1. Your tank = 3 - 3 + 3 = 3
// You cannot travel back to station 2, as it requires 4 unit of gas but you only have 3.
// Therefore, you can't travel around the circuit once no matter where you start.
 

// Constraints:

// gas.length == n
// cost.length == n
// 1 <= n <= 104
// 0 <= gas[i], cost[i] <= 104

/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */

/*
Any point where gas is LOWER than cost, is not a valid starting point.

Approach 1 (Brute Force):
Scan the arrays for EVERY STARTIN POINT.
Iterate through those points until we find a valid answer or no answer.

Polynomial Time Complexity.
Linear Space Complexity.


The key here is the fuel and cost.
Once I "move" into one direction, I know that, from that point, I'll ALWAYS be able to move.
The problem happens when there is not enough fuel. These are the corner stones for our efficiency.

[-2, -2, -2, 3, 3] The difference between GAS and COST.
Any index with a NEGATIVE value is an invalid starting point.
Any index with 0 OR POSITIVE value is a valid starting point.

[-1, -1, -1...., 200] If I SUM everything and ends in 0+, then I know it can be circular.
As I scan through this difference array, anytime the SUM reaches -1 or less, "the run" has ended. Everything before it can be discarded.

Approach 2:
(All of these can be done in one pass, but I'll break down into multiple passes for clarity)
Calculate the "difference" array.
Check if the SUM of it is 0 or MORE, if it is not, there is no way to circle around the route, return -1.
Define totalSum as 0.
Define currentSum as 0.
Define startIndex as 0.

Iterate through diff array.
    Add current value to totalSum and currentSum.
    If currentSum dips bellow 0
        currentSum becomes 0
        startIndex becomes NEXT INDEX (current + 1)

Once we reach the end, we either have a valid startIndex or not (index greater than input length)
Return startIndex if lesser than input length.
Otherwise return -1.

Linear Time Complexity
Linear Space Complexity
    
Approach 3 (Optimal):
Instead of calculating the diff array first, we do it as we go. Only using the "totalSum" variable to keep track of things.

Linear Time Complexity
Constant Space Complexity

*/
function canCompleteCircuit(gas, cost) {
    
};