// Easy

// Given a positive integer, return its corresponding column title as appear in an Excel sheet.

// For example:

//     1 -> A
//     2 -> B
//     3 -> C
//     ...
//     26 -> Z
//     27 -> AA
//     28 -> AB 
//     ...
// Example 1:

// Input: 1
// Output: "A"
// Example 2:

// Input: 28
// Output: "AB"
// Example 3:

// Input: 701
// Output: "ZY"

/**
 * @param {number} n
 * @return {string}
 */
function convertToTitle(n) {
    let title = "";
    
    while (n > 0) {
        const code = n % 26 ? n % 26 : 26;
        const char = String.fromCharCode(code + 64);
        
        title = char + title;
        n = Math.floor((n - code) / 26);
    }
    
    return title;
};

// Runtime: 68 ms, faster than 31.22% of JavaScript online submissions for Excel Sheet Column Title.
// Memory Usage: 33.1 MB, less than 78.52% of JavaScript online submissions for Excel Sheet Column Title.

// Solution by Valaamm
// var convertToTitle = function(n) {
//     let result = '';
//     while (n > 0) {
//         result = String.fromCharCode(64 + ( (n % 26) || 26) ) + result;
//         n = Math.ceil( n / 26) - 1;
//     };
//     return result;
// };

// Solution by achandel
// var convertToTitle = function(n) {
//     let title = '';
//     // loop until n > 0
//     while(n > 0) {
//         // decrement n by 1 (to deal with number divisible by 26)
// 			n--;
//         // mod n by 26 and append corresponding char (one previous char) into result string
// 			title += String.fromCharCode(65 + (n % 26));
//         // divide n by 26 and reset that value as n
// 			n = parseInt(n / 26);
//     }
//     // return reversed result string (i.e. title)
// 		return title.split('').reverse().join('');
    
// };

