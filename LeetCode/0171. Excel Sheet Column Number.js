// Easy

// Given a column title as appear in an Excel sheet, return its corresponding column number.

// For example:

//     A -> 1
//     B -> 2
//     C -> 3
//     ...
//     Z -> 26
//     AA -> 27
//     AB -> 28 
//     ...
// Example 1:

// Input: "A"
// Output: 1
// Example 2:

// Input: "AB"
// Output: 28
// Example 3:

// Input: "ZY"
// Output: 701

/**
 * @param {string} s
 * @return {number}
 */
function titleToNumber(s) {
    let lastCharacterPointer = s.length - 1;
    let multiplier = 1;
    let column = 0;
    
    while(lastCharacterPointer > -1) {
        column += (s[lastCharacterPointer].charCodeAt() - 64) * multiplier;
        --lastCharacterPointer;
        multiplier *= 26;
    }
    
    return column;
};

// Runtime: 84 ms, faster than 53.71% of JavaScript online submissions for Excel Sheet Column Number.
// Memory Usage: 36.7 MB, less than 18.04% of JavaScript online submissions for Excel Sheet Column Number.

// Linear Time Complexity (as we need to iterate through the S input in order to calculate the answer).
// Constant Space Complexity.