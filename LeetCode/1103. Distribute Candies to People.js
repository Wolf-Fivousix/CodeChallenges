// Easy

// We distribute some number of candies, to a row of n = num_people people in the following way:

// We then give 1 candy to the first person, 2 candies to the second person, and so on until we give n candies to the last person.

// Then, we go back to the start of the row, giving n + 1 candies to the first person, n + 2 candies to the second person, and so on until we give 2 * n candies to the last person.

// This process repeats (with us giving one more candy each time, and moving to the start of the row after we reach the end) until we run out of candies.  The last person will receive all of our remaining candies (not necessarily one more than the previous gift).

// Return an array (of length num_people and sum candies) that represents the final distribution of candies.

 

// Example 1:

// Input: candies = 7, num_people = 4
// Output: [1,2,3,1]
// Explanation:
// On the first turn, ans[0] += 1, and the array is [1,0,0,0].
// On the second turn, ans[1] += 2, and the array is [1,2,0,0].
// On the third turn, ans[2] += 3, and the array is [1,2,3,0].
// On the fourth turn, ans[3] += 1 (because there is only one candy left), and the final array is [1,2,3,1].
// Example 2:

// Input: candies = 10, num_people = 3
// Output: [5,2,3]
// Explanation: 
// On the first turn, ans[0] += 1, and the array is [1,0,0].
// On the second turn, ans[1] += 2, and the array is [1,2,0].
// On the third turn, ans[2] += 3, and the array is [1,2,3].
// On the fourth turn, ans[0] += 4, and the final array is [5,2,3].
 

// Constraints:

// 1 <= candies <= 10^9
// 1 <= num_people <= 1000


/*
Fun stuff!

Brute Force:
The simplest and "human" way is to simply follow the instructions, as if we were doing it manually.
We have a "pool of candies" that we depleat every time we give candy to someone in the array.
Once the pool of candies is "0", we are done.

The number of iterations through N (our array) will depend on how many candies we have. That said, doesn't matter if it is 3xN or 100xN, that still linear. (with a caveat, that given enough CANDIES and a small enough N, this is not technically linear)
Time Complexity is Linear O(N)
Space Complexity is Linear O(N) as well, since we will construct the array to "distribute" the candies.


Formula Approach:
[1+0*N, 2+0*N, 3+0*N, 4+0*N]
[1+1*N, 2+1*N, 3+1*N, 4+1*N]
[1+2*N, 2+2*N, 3+2*N, 4+2*N]
[1+3*N, 2+3*N, 3+3*N, 4+3*N]

We know N, N is 4...
Sum of 4 is 4+3+2+1 = 10 ... This is a CONSTANT in each distribution pass.
We know the distribution for each pass, and we know N. Therefore we CAN calculate how many candies will be distributed at EACH pass.
[1+0*N, 2+0*N, 3+0*N, 4+0*N] = 10 + 0
[1+1*N, 2+1*N, 3+1*N, 4+1*N] = 10 + N^2 = 26
[1+2*N, 2+2*N, 3+2*N, 4+2*N] = 10 + 2*N^2 = 42
[1+3*N, 2+3*N, 3+3*N, 4+3*N] = 10 + 3*N^2 = 58

This is all great... But how do I actually tell how many candy each person will receive based on that? hmmm...... I still need to do a "final pass", which is what I was trying to avoid...

*/


/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
function distributeCandies(candies, num_people) {
    const candyDistribution = new Array(num_people).fill(0)
    let index = 0
    let candiesToBeGiven = 1

    while (candies) {
        candyDistribution[index] += candiesToBeGiven
        candies -= candiesToBeGiven
        ++candiesToBeGiven
        if (candies < 0) {
            candyDistribution[index] += candies
            candies = 0
        }
        ++index
        index = index % num_people
    }
    
    console.log(candyDistribution)
    return candyDistribution
};

distributeCandies(7, 4)

// Runtime 55 ms Beats 48.11%
// Memory 49.44 MB Beats 7.55%