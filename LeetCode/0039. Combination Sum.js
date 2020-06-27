// Medium

// Given a set of candidate numbers (candidates) (without duplicates) and a target number (target), find all unique combinations in candidates where the candidate numbers sums to target.

// The same repeated number may be chosen from candidates unlimited number of times.

// Note:

// All numbers (including target) will be positive integers.
// The solution set must not contain duplicate combinations.
// Example 1:

// Input: candidates = [2,3,6,7], target = 7,
// A solution set is:
// [
//   [7],
//   [2,2,3]
// ]
// Example 2:

// Input: candidates = [2,3,5], target = 8,
// A solution set is:
// [
//   [2,2,2,2],
//   [2,3,3],
//   [3,5]
// ]

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
function combinationSum(candidates, target) {
    const result = [];

    for (let i = candidates.length - 1; i > -1; --i) {
        const currentAnswer = [candidates[i]];
        let value = target - candidates[i];

        if (value < 0) continue;
        if (value === 0) {
            result.push(currentAnswer);
            continue;
        }

        let j = i;
        while (j > -1) {
            const sum = value - candidates[j];
            console.log(currentAnswer, candidates[j], sum);
            if (sum < 0) {
                --j;
                continue;
            }

            currentAnswer.push(candidates[j]);
            if (sum === 0) {
                result.push(currentAnswer);
                currentAnswer.pop();
                --j;
            }
            else {
                value = sum;
            }
        }
    }

    return result;
};

// Right now the problem is that when the currentAnswer resets, so does I.
// Look at output for [2,3,7], target 7.