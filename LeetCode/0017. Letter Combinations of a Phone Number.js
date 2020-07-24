// Medium

// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent.

// A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.



// Example:

// Input: "23"
// Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
// Note:

// Although the above answer is in lexicographical order, your answer could be in any order you want.

/**
 * @param {string} digits
 * @return {string[]}
 */
function letterCombinations(digits) {
    if (!digits.length) return [];
    
    const hash = {
        2: ["a", "b", "c"],
        3: ["d", "e", "f"],
        4: ["g", "h", "i"],
        5: ["j", "k", "l"],
        6: ["m", "n", "o"],
        7: ["p", "q", "r", "s"],
        8: ["t", "u", "v"],
        9: ["w", "x", "y", "z"]
    }
    
    let result = [""];
    
    for (let i = 0; i < digits.length; ++i) {
        const digit = digits[i];
        const newCombinations = [];
        for (let j = 0; j < result.length; ++j) {
            for (let k = 0; k < hash[digit].length; ++k) {
                const letter = hash[digit][k];
                newCombinations.push(result[j] + letter);
            }
        }
        
        result = newCombinations;
    }
    
    return result;
}

// Because we want to output every single possible combination, there's no way to escape the combinatory approach.
// Runtime: 76 ms, faster than 36.57% of JavaScript online submissions for Letter Combinations of a Phone Number.
// Memory Usage: 36.5 MB, less than 5.10% of JavaScript online submissions for Letter Combinations of a Phone Number.

// Factorial Time and Space Complexity, since the length of the loops we run are attached to the size of our input.