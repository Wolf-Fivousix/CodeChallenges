// Easy
// Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

// Note: For the purpose of this problem, we define empty string as valid palindrome.

// Example 1:

// Input: "A man, a plan, a canal: Panama"
// Output: true
// Example 2:

// Input: "race a car"
// Output: false

/**
 * @param {string} s
 * @return {boolean}
 */
function isPalindrome(s) {
    const letters = {
        "a": true,
        "b": true,
        "c": true,
        "d": true,
        "e": true,
        "f": true,
        "g": true,
        "h": true,
        "i": true,
        "j": true,
        "k": true,
        "l": true,
        "m": true,
        "n": true,
        "o": true,
        "p": true,
        "q": true,
        "r": true,
        "s": true,
        "t": true,
        "u": true,
        "v": true,
        "x": true,
        "z": true,
        "w": true,
        "y": true,
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
    let start = 0;
    let end = s.length - 1;

    while (start < end) {
        const right = s[start].toLowerCase(); 
        if (!letters[right]) {
            ++start;
            continue;
        }
        
        const left = s[end].toLowerCase()
        if (!letters[left]) {
            --end;
            continue;
        }
        
        if (right !== left) return false;
        else {
            ++start;
            --end;
        }
    }
    
    return true;
};

// Runtime: 88 ms, faster than 40.08% of JavaScript online submissions for Valid Palindrome.
// Memory Usage: 40.2 MB, less than 30.58% of JavaScript online submissions for Valid Palindrome.

// This solution avoids linear memory and multiple passes on the same input.
// We do so by directly comparing both sides of the string (case insensitive) that are valid inputs.
// If we find anything that doesn't match before the pointers cross, we know it is not a valid palindrome.
// Making it Linear Time Complexity and Constant Space Complexity.