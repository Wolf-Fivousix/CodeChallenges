/*
Given an array of distinct positive ints representing coin denominations and a single non-negative int n
representing a target amount of money, write a function that returns the numbers of ways to make change
for that target amount using the given coin denominations.
 
Note that an unlimited amount of coins is at your disposal.
 
Input: n=6 denoms = [1,5]
Output: 2 // 1x1 + 1x5 and 6x1
*/

// input array (of coins) will be sorted in increasing order.
// 0	[1,5,10,25…]
// 1?

// 1	[1,5,10]
// 1

// 2	[1,5,10]
// 1,1

// 2	[1,2]
// 1,1
// 2


// 0 => 1

// 6-5 => 1
// 1

// 6-1 => 5
// 5
// 1,1,1,1,

// 6 	[1, 5]
// 1,5	1,1,1,1,1,1

// 5	[1,5]
// 5	1,1,1,1,1

// 10	[1,5]
// 5,5	5,5,1,1,1,1,1	5,1,1,1,1,1,1,1,11,1,1,1	1,1,1,1,1,1,1,1….

// 11 	[1,5]
// 5,5,1
// 5,1,1,1,1,1,1
// 1,1,1,1,1,1,1,1,1,1,1,1

// 11-5 => 6
// 11-1 => 10


// 25	[1,5,10,25]
// 25
// 10,10,5
// 10,10,1,1,1,1,1
// 10,5,5,5
// 10,5,5,1,1,1,1,1
// .
// .
// .
// 5,5,5,5,5
// 5,5,5,5,1,1,1,1,1
// .
// .
// .


// base case when N is equal 0. Then return 1

// smaller answer = ?????????
// ??????

// return answer

// n = 4	denom = 1,2
// [1,1,2,3, 3+2 ,0]
// 22
// 211
// 1111

// Answer by Justin Lieu
function numberOfWaysToMakeChange(n, denoms) {
 // Write your code here.
 let ways = new Array(n+1).fill(0);
 ways[0] = 1;
 for (let denom of denoms){
   for (let amount = 1; amount < n + 1; amount++){
     if (denom <= amount){
       ways[amount] += ways[amount - denom];
     }
   }
 }
 return ways[n];
}