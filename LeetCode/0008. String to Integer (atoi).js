// Implement atoi which converts a string to an integer.

// The function first discards as many whitespace characters as necessary until the first non-whitespace character is found. Then, starting from this character, takes an optional initial plus or minus sign followed by as many numerical digits as possible, and interprets them as a numerical value.

// The string can contain additional characters after those that form the integral number, which are ignored and have no effect on the behavior of this function.

// If the first sequence of non-whitespace characters in str is not a valid integral number, or if no such sequence exists because either str is empty or it contains only whitespace characters, no conversion is performed.

// If no valid conversion could be performed, a zero value is returned.

// Note:

// Only the space character ' ' is considered as whitespace character.
// Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. If the numerical value is out of the range of representable values, INT_MAX (231 − 1) or INT_MIN (−231) is returned.
// Example 1:

// Input: "42"
// Output: 42
// Example 2:

// Input: "   -42"
// Output: -42
// Explanation: The first non-whitespace character is '-', which is the minus sign.
//              Then take as many numerical digits as possible, which gets 42.
// Example 3:

// Input: "4193 with words"
// Output: 4193
// Explanation: Conversion stops at digit '3' as the next character is not a numerical digit.
// Example 4:

// Input: "words and 987"
// Output: 0
// Explanation: The first non-whitespace character is 'w', which is not a numerical 
//              digit or a +/- sign. Therefore no valid conversion could be performed.
// Example 5:

// Input: "-91283472332"
// Output: -2147483648
// Explanation: The number "-91283472332" is out of the range of a 32-bit signed integer.
//              Thefore INT_MIN (−231) is returned.

/**
 * @param {string} str
 * @return {number}
 */
function myAtoi(str) {   
    const chars = {
        " ": true,
        "+": true,
        "-": true,
        "0": true,
        "1": true,
        "2": true,
        "3": true,
        "4": true,
        "5": true,
        "6": true,
        "7": true,
        "8": true,
        "9": true
    };
    
    const digits = {
        "0": true,
        "1": true,
        "2": true,
        "3": true,
        "4": true,
        "5": true,
        "6": true,
        "7": true,
        "8": true,
        "9": true
    }
    
    for (let i = 0; i < str.length; ++i) {
        const char = str[i];
        if (!chars[char]) return 0;
        else if (char !== " ") {
            if (char === "+" || char === "-") {
               const followUp = str[i+1];
               if (!digits[followUp]) return 0; 
            }
            else break;
        }
    }
    
    let number = str.match(/(\s+)?[+-]?\d+/);
    number = number ? number[0] : 0;
    // console.log(Number(number));
    
    if (-(2**31) < number && number < (2**31 - 1)) return number;
    return number < 0 ? -(2**31) : (2**31 -1);
    
    
};

// This is a working solution, but it does not pass the specs of Hacker Rank due to "+-2" having to be considered an invalid solution....
// The cases "+-2", "-   1345" forced me to have a separate hash for the digits.

myAtoi("42");
myAtoi("   -42");
myAtoi("  +word 1234");
myAtoi("+4193 with words");
myAtoi("words and 987");
myAtoi("-91283472332");
myAtoi("-912834723321654651654168");