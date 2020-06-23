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