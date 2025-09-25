// Easy

// Given two strings s and goal, return true if you can swap two letters in s so the result is equal to goal, otherwise, return false.

// Swapping letters is defined as taking two indices i and j (0-indexed) such that i != j and swapping the characters at s[i] and s[j].

// For example, swapping at indices 0 and 2 in "abcd" results in "cbad".
 

// Example 1:

// Input: s = "ab", goal = "ba"
// Output: true
// Explanation: You can swap s[0] = 'a' and s[1] = 'b' to get "ba", which is equal to goal.
// Example 2:

// Input: s = "ab", goal = "ab"
// Output: false
// Explanation: The only letters you can swap are s[0] = 'a' and s[1] = 'b', which results in "ba" != goal.
// Example 3:

// Input: s = "aa", goal = "aa"
// Output: true
// Explanation: You can swap s[0] = 'a' and s[1] = 'a' to get "aa", which is equal to goal.
 

// Constraints:

// 1 <= s.length, goal.length <= 2 * 104
// s and goal consist of lowercase letters.

/*
From the get go we know that string and goal need to have the same length, otherwise it's impossible to make it.
We also know that we HAVE TO swap something, meaning if String and Goal are equal, then it's impossible - ACTUALY NO, because "aa" CAN be swapped to "aa"

BRUTE FORCE
Would be doing every single possible swap (buble swap) and then comparing every single string to the Goal to check if we have a match.
Polynomial Time Complexity O(n^2)
Linear Space Complexity O(n) - We don't need to store all the results, we can compute one result, use it and then move on.


Better approach:
Since we can only do ONE swap to achieve Goal, the strings NEED to be equal up to 2 differences.
Meaning: If we have 3+ characters that differ between them, then it's impossible.
Let's leverage that.

Define differentCharacters to 0
We start a linear scan of the strings, from 0 to length
    If the characters are different, increase the differentCharacters by 1
    If we reach 3 we can return early with a false result

If we have 0 
If we have 2, we can swap them, no problem
    banana
    abnana
    bnnaaa
    bbnanb

-> This won't work how we want. Let's use a 2 pointer approach

2 Pointer Approach:
Scan left to right until we find a different character
Schan right to left (and pointer HAS to be bigger than the first pointer) until we find a different character
    if pointer1 character is NOT the same as pointer2 goal character
    or
    if pointer2 character is NOT the same as pointer1 goal character
    then return false, because the swap is invalid.

continue comparing the characters until the pointers cross
then we are safe to return true

Linear Time Complexity O(N) - we do a single scan of the input
Constant Space Complexity O(1) - since we only use a few variables
*/

/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
function buddyStrings(s, goal) {
    if (s.length !== goal.length) return false

    // Find first different character
    let leftPointer = 0
    while (leftPointer < s.length) {
        if (s[leftPointer] !== goal[leftPointer]) break
        ++leftPointer
    }

    // Find the last different character
    let rightPointer = s.length - 1
    while (rightPointer >= 0 && rightPointer > leftPointer) {
        if (s[rightPointer] !== goal[rightPointer]) break
        --rightPointer
    }

    // If the strings are the same, then leftPointer is s.length and rightPointer is s.length - 1
    if (leftPointer > rightPointer) {
        // Do we have a repeated character to swap?
        if (hasRepeatCharacter(s)) return true
    }

    // Check that the letters that differ ARE A VALID SWAP
    // console.log(leftPointer)
    // console.log(rightPointer)
    // console.log(s[leftPointer] !== goal[rightPointer])
    // console.log(s[rightPointer] !== goal[leftPointer])
    if (s[leftPointer] !== goal[rightPointer] || s[rightPointer] !== goal[leftPointer]) return false

    // Ensure there are no other invalid characters in the string
    ++leftPointer
    --rightPointer
    while (leftPointer <= rightPointer) {
        if (s[leftPointer] !== goal[leftPointer] || s[rightPointer] !== goal[rightPointer]) return false
        ++leftPointer
        --rightPointer
    }

    return true
};

function hasRepeatCharacter(string) {
    const characters = new Array(26).fill(0)
    // a is 97
    for (let i = 0; i < string.length; ++i) {
        const charCode = string.charCodeAt(i) - 97
        if (characters[charCode]) return true // 2 of the same characters
        else characters[charCode] = 1
    }

    return false
}

// Runtime 3 ms Beats 59.88%
// Memory 55.52 MB Beats 82.10%

// The idea and implementation are very similar, but this is a much more concise solution (by Control The Narrative):
// var buddyStrings = function(A, B) {
//     if(A.length != B.length) return false;
//     const diff = [];
    
//     for(let i = 0; i < A.length; i++) {
//         if(A[i] != B[i]) diff.push(i);
//         if(diff.length > 2) return false;
//     }
//     if(!diff.length) return A.length != [...new Set(A)].length;
//     const [i, j] = diff; 
//     return A[i] == B[j] && B[i] == A[j];
// };