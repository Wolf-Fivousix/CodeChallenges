// Medium

// Given a string s, a k duplicate removal consists of choosing k adjacent and equal letters from s and removing them causing the left and the right side of the deleted substring to concatenate together.

// We repeatedly make k duplicate removals on s until we no longer can.

// Return the final string after all such duplicate removals have been made.

// It is guaranteed that the answer is unique.

 

// Example 1:

// Input: s = "abcd", k = 2
// Output: "abcd"
// Explanation: There's nothing to delete.
// Example 2:

// Input: s = "deeedbbcccbdaa", k = 3
// Output: "aa"
// Explanation: 
// First delete "eee" and "ccc", get "ddbbbdaa"
// Then delete "bbb", get "dddaa"
// Finally delete "ddd", get "aa"
// Example 3:

// Input: s = "pbbcggttciiippooaais", k = 2
// Output: "ps"
 

// Constraints:

// 1 <= s.length <= 10^5
// 2 <= k <= 10^4
// s only contains lower case English letters.

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
function removeDuplicates(s, k) {
    let newString = s;
    while (duplicate(newString, k)) newString = removeDuplicate(newString, k);
    
    return newString;
}

function duplicate(string, k) {
    if (!string.length || string.length < k) return false;
    
    let count = 1;
    let currentLetter = string[0];
    
    for (let i = 1; i < string.length; ++i) {
        if (string[i] === currentLetter) {
            ++count;
        }
        else {
            count = 1;
            currentLetter = string[i];
        }
        if (count === k) return true;
    }
    
    return false;
}

function removeDuplicate(string, k) {
    let count = 1;
    let currentLetter = string[0];
    
    for (let i = 1; i < string.length; ++i) {
        if (string[i] === currentLetter) {
            ++count;
        }
        else {
            count = 1;
            currentLetter = string[i];
        }
        if (count === k) return string.slice(0, i + 1 - k) + string.slice(i + 1);
    }
}

// Runtime: 92 ms, faster than 57.89% of JavaScript online submissions for Remove All Adjacent Duplicates in String II.
// Memory Usage: 40 MB, less than 66.85% of JavaScript online submissions for Remove All Adjacent Duplicates in String II.