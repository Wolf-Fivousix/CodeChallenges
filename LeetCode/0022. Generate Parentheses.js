// Medium

// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

// For example, given n = 3, a solution set is:

// [
//   "((()))",
//   "(()())",
//   "(())()",
//   "()(())",
//   "()()()"
// ]

/**
 * @param {number} n
 * @return {string[]}
 */
function generateParenthesis(n) {
    if (n <= 0) return [""];

    const base = generateParenthesis(n - 1);
    const variations = new Set();

    for (let i = 0; i < base.length; ++i) {
        const currentVariation = base[i];
        for (let j = 0; j < currentVariation.length; ++j) {
            variations.add(currentVariation.slice(0, j) + "()" + currentVariation.slice(j));
        }
        variations.add(currentVariation + "()");
    }

    return Array.from(variations);
}

// Runtime: 76 ms, faster than 24.01% of JavaScript online submissions for Generate Parentheses.
// Memory Usage: 35.3 MB, less than 50.73% of JavaScript online submissions for Generate Parentheses.