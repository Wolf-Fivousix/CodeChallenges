// Easy

// You are given a string s consisting only of uppercase English letters.

// You can apply some operations to this string where, in one operation, you can remove any occurrence of one of the substrings "AB" or "CD" from s.

// Return the minimum possible length of the resulting string that you can obtain.

// Note that the string concatenates after removing the substring and could produce new "AB" or "CD" substrings.

 

// Example 1:

// Input: s = "ABFCACDB"
// Output: 2
// Explanation: We can do the following operations:
// - Remove the substring "ABFCACDB", so s = "FCACDB".
// - Remove the substring "FCACDB", so s = "FCAB".
// - Remove the substring "FCAB", so s = "FC".
// So the resulting length of the string is 2.
// It can be shown that it is the minimum length that we can obtain.
// Example 2:

// Input: s = "ACBBD"
// Output: 5
// Explanation: We cannot do any operations on the string so the length remains the same.
 

// Constraints:

// 1 <= s.length <= 100
// s consists only of uppercase English letters.

/*
BRUTE FORCE:
Let's iterate through the string until we no longer find any "AB" or "CD" (different than -1)
Every time we find one, splice the string into a new one.

return the length of the resulting string

This is an Polynomial (2 / Quadratic) Time Complexity, as we are iterating over the string over and over and over, until the values are not longer found.
It is Linear in Space, since we have to create a new string every time we remove entries.
*/

/**
 * @param {string} s
 * @return {number}
 */
function minLength(s) {
    let resultString = s
    while (resultString.indexOf("AB") !== -1 || resultString.indexOf("CD") !== -1) {
        if (resultString.indexOf("AB") !== -1) {
            resultString = resultString.replaceAll("AB", "")
        }
        else {
            resultString = resultString.replaceAll("CD", "")
        }
    }

    return resultString.length
};

// Runtime 91 ms Beats 44.75%
// Memory 54.31 MB Beats 23.78%

// Linear Time Complexity approach is to convert the string into a stack. Like this:
/*
Approach 2: Stack
Intuition
In the string removal process, we face two choices for each character:

Keep the character if it does not form a removable pattern.
Remove it along with the previous character if it completes a pattern.
Using a stack simplifies this task. We push characters onto the stack as we read them and pop them off when we find a pattern.

We read the input string from left to right. For each character, we decide to either add it to the stack or remove a previous character. If the stack is not empty, we compare the current character with the top character on the stack. If they form "AB" or "CD," we pop the stack. We do not push the current character, thus removing both characters. If there is no pattern, we push the current character onto the stack.

After processing all characters, the remaining elements in the stack represent the minimum length of the string after all possible removals.

Algorithm
Initialize a stack to store the characters from the string.
Iterate over each character in the input string s. For each character currentChar:
If the stack is empty, push currentChar onto the stack and continue to the next character.
If the current character is 'B' and the top of the stack is 'A', remove the top element from the stack.
If the current character is 'D' and the top of the stack is 'C', remove the top element from the stack.
If neither of the above conditions is met, push currentChar onto the stack.
After processing all characters, return the size of the stack.
*/