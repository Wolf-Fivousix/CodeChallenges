// Easy

// Hercy wants to save money for his first car. He puts money in the Leetcode bank every day.

// He starts by putting in $1 on Monday, the first day. Every day from Tuesday to Sunday, he will put in $1 more than the day before. On every subsequent Monday, he will put in $1 more than the previous Monday.

// Given n, return the total amount of money he will have in the Leetcode bank at the end of the nth day.

 

// Example 1:

// Input: n = 4
// Output: 10
// Explanation: After the 4th day, the total is 1 + 2 + 3 + 4 = 10.
// Example 2:

// Input: n = 10
// Output: 37
// Explanation: After the 10th day, the total is (1 + 2 + 3 + 4 + 5 + 6 + 7) + (2 + 3 + 4) = 37. Notice that on the 2nd Monday, Hercy only puts in $2.
// Example 3:

// Input: n = 20
// Output: 96
// Explanation: After the 20th day, the total is (1 + 2 + 3 + 4 + 5 + 6 + 7) + (2 + 3 + 4 + 5 + 6 + 7 + 8) + (3 + 4 + 5 + 6 + 7 + 8) = 96.
 

// Constraints:

// 1 <= n <= 1000

/*
BRUTE FORCE - Simulation:
We will go from 1 to N and simulate the deposits.
We keep track of the monday deposit
Each time MOD 7 hits, we update monday deposit and repeat

Very low time efficiency, since give na single number we're making a lot of computation, like 100.000!
But given our upper limit of 1.000, this is not a problem.
Constant Space Complexity O(1) since we only use a few variables

*/

/**
 * @param {number} n
 * @return {number}
 */
function totalMoney(n) {
    let mondayDeposit = 1
    let totalDeposit = 1
    for (let day = 1; day < n; ++day) {
        const weekDay = day % 7
        if (weekDay === 0) ++mondayDeposit

        totalDeposit += mondayDeposit + weekDay
        // console.log(`Day ${weekDay} / totalDeposit ${totalDeposit}`)
    }

    return totalDeposit
};

// Runtime 0 ms Beats 100.00%
// Memory 54.31 MB Beats 32.08%

// Can we do better?
// Yeah! This is a simple mathematical function
/*
1,2,3,4,5,6,7 = 28
2,3,4,5,6,7,8 = 35
3,4,5,6,7,8,9 = 42
4,5,6,7,8,9,10 = 49
.
.
.
We start with 28
And every week we put in 7 more
So if we have 2 weeks, we'd put 28 + 35
If we have 4 weeks, 28 + 35 + 42 + 49
Etc...
We only need to manually calculate the fraction of a week, which is easy, since the beggining of the week start with that week. Eg: week 1 starts with 1. Week 57 starts with 57!
So now we can construct a mathematical formula:
X = How many full weeks we have
    This is N / 7
    28 + (28 + 1 x 7) + (28 + 2 x 7) ... 
    FORMULA - X * 28 + (SUM X - 1 * 7)
Y = How many individual days we have in the last week
    This is N % 7
    Simple 6 step loop, just like how we did it
    OR, since we already implemented the sum, we can use that!
    day 3 on week 57 - (57 + 0) + (57 + 1) + (57 + 2) (the + here is the SUM of Y - 1)
    FORMULA - Y * 57 + SUM Y - 1
*/


/**
 * @param {number} n
 * @return {number}
 */
function totalMoney(n) {
    const fullWeeks = Math.floor(n / 7)
    const singleDays = n % 7

    // console.log(`fullWeeks=${fullWeeks}`)
    // console.log(`singleDays=${singleDays}`)

    // console.log(`weeks = ${(fullWeeks * 28 + (sumOf(fullWeeks - 1) * 7))}`)
    // console.log(`days = ${singleDays * (fullWeeks + 1) + sumOf(singleDays - 1)}`)
    return (
        (fullWeeks * 28 + (sumOf(fullWeeks - 1) * 7)) +
        (singleDays * (fullWeeks + 1) + sumOf(singleDays - 1))
    )
};

function sumOf(x) {
    let sum = 0
    for (let i = 1; i <= x; ++i) {
        sum += i
    }

    return sum
}

// THERE WE GO! Now we have constant time and space complexities! =)