// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

// P   A   H   N
// A P L S I I G
// Y   I   R
// And then read line by line: "PAHNAPLSIIGYIR"

// Write the code that will take a string and make this conversion given a number of rows:

// string convert(string s, int numRows);
// Example 1:

// Input: s = "PAYPALISHIRING", numRows = 3
// Output: "PAHNAPLSIIGYIR"
// Example 2:

// Input: s = "PAYPALISHIRING", numRows = 4
// Output: "PINALSIGYAHRPI"
// Explanation:

// P     I    N
// A   L S  I G
// Y A   H R
// P     I

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */

// Initiall, wrong, logic.
// function convert(s, numRows) {
//     let result = "";
    
//     for (let i = 0; i < numRows; ++i) {
//         for (let j = i; j < s.length; j += numRows) {
//             result += s[j];
//         }
//     }
    
//     return result;
// };

function convert(s, numRows) {
    if (numRows <= 1) return s;
    
    let rows = new Array(numRows).fill("");
    let currentRow = 0;
    let zzRow = numRows - 2;
    let zigzag = false;
    
    for (let i = 0; i < s.length; ++i) {
        // If only 2 rows, do NOT zigzag.
        if (zigzag && numRows > 2) {
            rows[zzRow] += s[i];
            --zzRow;
            if (zzRow === 0) {
                zzRow = numRows - 2;
                zigzag = false;
            }
        }
        else {
            rows[currentRow] += s[i];
            ++currentRow;
            
            // All rows are filled, start zigzag pattern.
            if (currentRow === numRows) {
                currentRow = 0;
                zigzag = true;
            }
        }
    }
    
    return rows.reduce((acc, string) => acc += string, "");
};

// Runtime: 80 ms, faster than 92.59% of JavaScript online submissions for ZigZag Conversion.
// Memory Usage: 38.8 MB, less than 77.78% of JavaScript online submissions for ZigZag Conversion.

// Solution is Linear Time Complexity with Linear Space Complexity.

// Another way of solving it, somewhat verbose, here: https://leetcode.com/problems/zigzag-conversion/discuss/416860/5-Line-JavaScript-Solution