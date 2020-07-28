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

function combinationSum(candidates, target) {
    const result = [];
    
    for (let i = 0; i < candidates.length; ++i) {
        combineElements([candidates[i]], i, target - candidates[i]);
    }
    
    return result;
    
    
    function combineElements(currentArray, startIndex, target) {
        if (target < 0) return;
        if (target === 0) {
            result.push(currentArray);
            return;
        }
        
        for (let i = startIndex; i < candidates.length; ++i) {
            combineElements(currentArray.concat(candidates[i]), i, target - candidates[i]);
        }
    }
}

// I'm using a closure here in order to not pass in a 4th argument to the recursive function.
// Runtime: 200 ms, faster than 8.19% of JavaScript online submissions for Combination Sum.
// Memory Usage: 42.8 MB, less than 20.02% of JavaScript online submissions for Combination Sum.

// We are doing a Polynomial Time Complexity. Trying every single possible combination.
// We are also making multiple copies of arrays in order to calculate all that, so Polynomial Space Complexity as well.

// Solution by lifongi
function combinationSum2(candidates, target) {
    candidates.sort((a, b) => a - b);
    var buffer = [];
    var result = [];
    search(0, target);
    return result;
  
    function search(startIdx, target) {
      if (target === 0) return result.push(buffer.slice());
      if (target < 0) return;
      if (startIdx === candidates.length) return;
      buffer.push(candidates[startIdx]);
      search(startIdx, target - candidates[startIdx]);
      buffer.pop();
      search(startIdx + 1, target);
    }
  }