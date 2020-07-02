// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// 
// An input string is valid if:
// 
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Note that an empty string is also considered valid.
// 
// Example 1:
// 
// Input: "()"
// Output: true
// Example 2:
// 
// Input: "()[]{}"
// Output: true
// Example 3:
// 
// Input: "(]"
// Output: false
// Example 4:
// 
// Input: "([)]"
// Output: false
// Example 5:
// 
// Input: "{[]}"
// Output: true

var isValid = function(s) {
    if (s.length === 0) return true;
    const pair = {
        "(": ")",
        "{": "}",
        "[": "]"
    };
    
    let stack = [];
    stack.push(s[0]);
    for (let i = 1; i < s.length; ++i) {
        if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
            stack.push(s[i]);
        }
        else if (pair[stack.pop()] !== s[i]) return false;
    }
    
    return stack.length ? false : true;
};

/*
Second iteration through problem.

    initialize an empty stack (array)
    initialize a hash table with opening and closing brackets.
    whenever we find an opening bracket ( { [ we`re going to add to stack.
    whenever we find a closing brackt ) } ] we're pop our stack 
    AND compare to the current closing bracket.
        If they don't match, return false.
        
    return the OPPOSITE of the stack is empty. (array length)        

*/

function isValid(s) {
    const brackets = {
        ")": "(",
        "}": "{",
        "]": "["
    };
    
    const stack = [];
    
    for (let i = 0; i < s.length; ++i) {
        const currentCharacter = s[i];
        
        if (brackets[currentCharacter]) {
            const lastOpen = stack.pop();
            
            if (lastOpen !== brackets[currentCharacter]) return false;
        }
        else stack.push(currentCharacter);
    }
    
    return !stack.length;
};

// Runtime: 60 ms, faster than 77.31% of JavaScript online submissions for Valid Parentheses.
// Memory Usage: 33.6 MB, less than 93.56% of JavaScript online submissions for Valid Parentheses.