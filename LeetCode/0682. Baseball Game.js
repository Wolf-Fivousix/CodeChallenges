// Easy

// You are keeping the scores for a baseball game with strange rules. At the beginning of the game, you start with an empty record.

// You are given a list of strings operations, where operations[i] is the ith operation you must apply to the record and is one of the following:

// An integer x.
// Record a new score of x.
// '+'.
// Record a new score that is the sum of the previous two scores.
// 'D'.
// Record a new score that is the double of the previous score.
// 'C'.
// Invalidate the previous score, removing it from the record.
// Return the sum of all the scores on the record after applying all the operations.

// The test cases are generated such that the answer and all intermediate calculations fit in a 32-bit integer and that all operations are valid.

 

// Example 1:

// Input: ops = ["5","2","C","D","+"]
// Output: 30
// Explanation:
// "5" - Add 5 to the record, record is now [5].
// "2" - Add 2 to the record, record is now [5, 2].
// "C" - Invalidate and remove the previous score, record is now [5].
// "D" - Add 2 * 5 = 10 to the record, record is now [5, 10].
// "+" - Add 5 + 10 = 15 to the record, record is now [5, 10, 15].
// The total sum is 5 + 10 + 15 = 30.
// Example 2:

// Input: ops = ["5","-2","4","C","D","9","+","+"]
// Output: 27
// Explanation:
// "5" - Add 5 to the record, record is now [5].
// "-2" - Add -2 to the record, record is now [5, -2].
// "4" - Add 4 to the record, record is now [5, -2, 4].
// "C" - Invalidate and remove the previous score, record is now [5, -2].
// "D" - Add 2 * -2 = -4 to the record, record is now [5, -2, -4].
// "9" - Add 9 to the record, record is now [5, -2, -4, 9].
// "+" - Add -4 + 9 = 5 to the record, record is now [5, -2, -4, 9, 5].
// "+" - Add 9 + 5 = 14 to the record, record is now [5, -2, -4, 9, 5, 14].
// The total sum is 5 + -2 + -4 + 9 + 5 + 14 = 27.
// Example 3:

// Input: ops = ["1","C"]
// Output: 0
// Explanation:
// "1" - Add 1 to the record, record is now [1].
// "C" - Invalidate and remove the previous score, record is now [].
// Since the record is empty, the total sum is 0.
 

// Constraints:

// 1 <= operations.length <= 1000
// operations[i] is "C", "D", "+", or a string representing an integer in the range [-3 * 104, 3 * 104].
// For operation "+", there will always be at least two previous scores on the record.
// For operations "C" and "D", there will always be at least one previous score on the record.

/*
Great that the constrains already cover the "+", "C" and "D" having operational records to work. So we don't need to worry about checking those cases.

Brute Force:
Start with empty results array.
Iterate through the operations input.
    If it is +, sum the last two entries (results.length and results.length - 1) and push it to results
    If it is C, pop the last entry
    If it is D, get the last entry (results.length), double it and push to results.
    anything else, just push the value into results

return the sum of results array.


Linear Time Complexity and Space Complexity. Since we iterate through all the input once and we can have a array as big as it.
(Potentially iterating through it twice, when calculating the sum)
*/


/**
 * @param {string[]} operations
 * @return {number}
 */
function calPoints(operations) {
    const result = []
    for (let i = 0; i < operations.length; ++i) {
        const entry = operations[i]
        switch (entry) {
            case "+":
                const lastTwoSum = result[result.length - 1] + result[result.length - 2]
                result.push(lastTwoSum)
                break
            case "C":
                result.pop()
                break
            case "D":
                const doubleLast = 2 * result[result.length - 1]
                result.push(doubleLast)
                break
            default:
                result.push(Number(entry))
        }
    }

    return result.reduce((value, accumulator) => value + accumulator, 0)
};

console.log("Test cases - Result / Expected");

[
    { operations: ["5","2","C","D","+"], result: 30 },
    { operations: ["5","-2","4","C","D","9","+","+"], result: 27 },
    { operations: ["1","C"], result: 0 },
].forEach(({ operations, result }) => {
    console.log(`[${calPoints(operations) === result}]: ${calPoints(operations)} === ${result}`)
});

// Runtime 46 ms Beats 94.82%
// Memory 49.30 MB Beats 79.96%
