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
    let column = 0;

    for (let i = s.length - 1, power = 0; i > -1; --i, ++power) {
        column += (s.charCodeAt(i) - 64) * (26 ** power);
    }
    
    return column;
};

// Runtime: 84 ms, faster than 53.71% of JavaScript online submissions for Excel Sheet Column Number.
// Memory Usage: 36.6 MB, less than 21.99% of JavaScript online submissions for Excel Sheet Column Number.

// Linear Time Complexity (as we need to iterate through the S input in order to calculate the answer).
// Constant Space Complexity.

// There's another ways of writing the loop:
// var titleToNumber = function(s) {
//     let columnNumber = 0;
//     for(let i = 0; i < s.length; i++){
//         let char = s[(s.length - 1) - i];
        
//         columnNumber += Math.pow(26, i) * (char.charCodeAt(0) - 64);
        
//     } 
//     return columnNumber;
// };

// var titleToNumber = function(s) {
//      var r = 0;
//      var len = s.length;
//      for (var i = 0; i < len; i++) {
//          r += (Math.pow(26, (len - i - 1)) * (s.charCodeAt(i) - 64));
//      }
//      return r;
//  };