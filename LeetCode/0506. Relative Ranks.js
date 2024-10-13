// Easy

// You are given an integer array score of size n, where score[i] is the score of the ith athlete in a competition. All the scores are guaranteed to be unique.

// The athletes are placed based on their scores, where the 1st place athlete has the highest score, the 2nd place athlete has the 2nd highest score, and so on. The placement of each athlete determines their rank:

// The 1st place athlete's rank is "Gold Medal".
// The 2nd place athlete's rank is "Silver Medal".
// The 3rd place athlete's rank is "Bronze Medal".
// For the 4th place to the nth place athlete, their rank is their placement number (i.e., the xth place athlete's rank is "x").
// Return an array answer of size n where answer[i] is the rank of the ith athlete.

 

// Example 1:

// Input: score = [5,4,3,2,1]
// Output: ["Gold Medal","Silver Medal","Bronze Medal","4","5"]
// Explanation: The placements are [1st, 2nd, 3rd, 4th, 5th].
// Example 2:

// Input: score = [10,3,8,9,4]
// Output: ["Gold Medal","5","Bronze Medal","Silver Medal","4"]
// Explanation: The placements are [1st, 5th, 3rd, 2nd, 4th].

 

// Constraints:

// n == score.length
// 1 <= n <= 104
// 0 <= score[i] <= 106
// All the values in score are unique.


/*
So, since all the scores are unique, we will use those as a key to map into the ranking.
We HAVE TO read every single value at least once, in order to order them.
But we can't just "order" the input, we also need to save the original position.
So we will map the score to position (in the array).

Then all we need to do is output they Key/Value pairs (the output comes in increasing order by default, even if it doesn't, we can simply sort it if needed.)
Iterate through all Key/Value pairs (use a for index)
    for the position "value" we add Key in it's place.
    and when we reach the last 3 elements, substitute the rank from 3, 2, 1 into Brozen Medal, Silver Medal, Gold Medal.

return the new array.

We do 1 pass to construct the mapping
We do a 2nd pass to get the values array
We do a 3rd pass to construct the result

Linear Time and Space Complexities O(n)
*/

/**
 * @param {number[]} score
 * @return {string[]}
 */
function findRelativeRanks(scores) {
    const totalRanks = scores.length
    const scoreToIndexMapping = createScoreIndexMapping(scores)
    const ascendingScores = Object.values(scoreToIndexMapping)
    const rankings = new Array(totalRanks)

    for (let i = 0; i < ascendingScores.length; ++i) {
        const index = ascendingScores[i]

        if (i === totalRanks - 3) rankings[index] = "Bronze Medal"
        else if (i === totalRanks - 2) rankings[index] = "Silver Medal"
        else if (i === totalRanks - 1) rankings[index] = "Gold Medal"
        else rankings[index] = `${totalRanks - i}`
    }

    return rankings
};

function createScoreIndexMapping(score) {
    const map = {}
    score.forEach((el, i) => map[el] = i)

    return map
}

[
    [10,5,4,3,2,1],
].forEach((input) => {
    console.log(findRelativeRanks(input))
})

// Runtime 43 ms Beats 100.00%
// Memory 52.23 MB Beats 76.97%
