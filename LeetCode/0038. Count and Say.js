// The count-and-say sequence is the sequence of integers with the first five terms as following:

// 1.     1
// 2.     11
// 3.     21
// 4.     1211
// 5.     111221
// 6.     "312211"
// 1 is read off as "one 1" or 11.
// 11 is read off as "two 1s" or 21.
// 21 is read off as "one 2, then one 1" or 1211.

// Given an integer n where 1 ≤ n ≤ 30, generate the nth term of the count-and-say sequence. You can do so recursively, in other words from the previous member read off the digits, counting the number of digits in groups of the same digit.

// Note: Each term of the sequence of integers will be represented as a string.

 

// Example 1:

// Input: 1
// Output: "1"
// Explanation: This is the base case.
// Example 2:

// Input: 4
// Output: "1211"
// Explanation: For n = 3 the term was "21" in which we have two groups "2" and "1", "2" can be read as "12" which means frequency = 1 and value = 2, the same way "1" is read as "11", so the answer is the concatenation of "12" and "11" which is "1211".

/**
 * @param {number} n
 * @return {string}
 */
function countAndSay(n) {
    if (n === 1) return "1";
    
    let sequence = countAndSay(n - 1);
    const array = split(sequence);
    
    return array.map(el => String(el.length) + el[0]).join("");
    
};

function split(string) {
    const result = [];
    let buffer = "";
    
    for (let i = 0; i < string.length; ++i) {
        if (buffer.length && buffer[buffer.length - 1] === string[i]) {
            buffer += string[i];
        }
        else {
            if (buffer.length) result.push(buffer);
            buffer = string[i];
        }
    }
    
    if (buffer.length) result.push(buffer);
    
    return result;
}

// Runtime: 84 ms, faster than 13.97% of JavaScript online submissions for Count and Say.
// Memory Usage: 37.9 MB, less than 5.01% of JavaScript online submissions for Count and Say.

// This solution is very convoluted.
// I had a different idea of what the problem was supposed to do, until running the test cases.
// Looking at output for 6 I realized things were the option I thought it was not.... Hence I refactored the existing code.
// Turning into that ugly mess. Let's start over now.

