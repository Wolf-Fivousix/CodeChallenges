// Easy

// Given two strings s and goal, return true if and only if s can become goal after some number of shifts on s.

// A shift on s consists of moving the leftmost character of s to the rightmost position.

// For example, if s = "abcde", then it will be "bcdea" after one shift.
 

// Example 1:

// Input: s = "abcde", goal = "cdeab"
// Output: true
// Example 2:

// Input: s = "abcde", goal = "abced"
// Output: false
 

// Constraints:

// 1 <= s.length, goal.length <= 100
// s and goal consist of lowercase English letters.


/*
Brute Force:

Declare start indexes for both inputs, they start at 0
Since both strings are guaranteed to be the same length, iterate through until GOAL index reaches the end.
(That's because they will eitehr finish together OR GOAL will finish first (beucase we never reset goal, but we do reset the original string index))
    whenever the characters are DIFFERENT, return ORIGINAL index to start (0)
    otherwise, increase both counters.

AT THIS POINT - We HAVE iterated through the whole GOAL and if we HAD a match, then both indexes are fine.
If we DID NOT have a match, and ORIGINAL index is back at 0, that mean there WAS no match to begin with.

ONCE THE FIRST PASS IS DONE, THE GAME CHANGES
Now we want to iterate one more time, BUT THIS TIME we will NEVER reset the ORIGINAL INDEX.

IF ORIGINAL index is 0, return false - This means we did NOT find a match at all!
Iterate through S (until the end), starting at the ORIGINAL index until it reaches the end. (we are starting at 0 for GOAL, so no issues there. Again, both strings are the same length)
    If the characters are DIFFERENT, return false.
    Else, increase both indexes.

return true

This is a 2 pass approach, so we will have:
Linear Time Complexity O(n)
Constant Space Complexity O(1)


REAL BRUTE FORCE:
Now that I think about it, there was a "Brute forcer" approach:
Just shift the string by 1 character N (N = s.length) number of times and compare to GOAL.
    If they match, return true.

Return false at the end.

This would be Polynomial, as we are doing a kind of "buble sort" approach.
*/


/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
function rotateStringBRUTEFORCE(s, goal) {
    const potentialShifts = s.length;
    let shiftedInput = s;
    for (let i = 0; i < potentialShifts; ++i) {
        if (shiftedInput === goal) return true
        shiftedInput = shiftedInput.slice(1).concat(shiftedInput.slice(0,1))
    }

    return false
};

// Runtime 0 ms Beats 100.00%
// Memory 49.28 MB Beats 26.79%

function rotateString(s, goal) {
    if (s.length !== goal.length) return false  // My mistake, they are NOT guaranteed to be the same length. Now they are =)

    let originalIndex = 0
    let goalIndex = 0
    let lastMatch = 0
    while (goalIndex < goal.length) {
        if (s[originalIndex] !== goal[goalIndex]) {
            originalIndex = 0
            ++lastMatch
            goalIndex = lastMatch
        }
        else {
            if (originalIndex === 0) lastMatch = goalIndex
            ++originalIndex
            ++goalIndex
        }
    }

    if (originalIndex === 0) return false

    goalIndex = 0
    while (originalIndex < s.length) {
        if (s[originalIndex] !== goal[goalIndex]) return false
        ++originalIndex
        ++goalIndex
    }

    return true
};

// Runtime 0 ms Beats 100.00%
// Memory 48.95 MB Beats 52.21%

// The concatanation approach is brilliant though!!!
// Approach 2: Concatenation Check
// Intuition
// Instead of rotating the string and checking after each rotation, we can observe a relationship between s and goal. If goal can be formed by rotating s, it must be possible to find goal as a substring in some version of s.

// A clever way to exploit this is by concatenating s with itself. Why? Because this effectively creates a string that contains all possible rotations of s within it. For example, if s = "abcde", then s + s = "abcdeabcde". Notice how every possible rotation of s appears somewhere in this concatenated string.

// So, if goal can be obtained by rotating s, it must be a substring of s + s. To implement this, we simply check if goal is a substring of the concatenated string. If it is, we return true; otherwise, we return false.

// https://leetcode.com/problems/rotate-string/Figures/796/796_rotate.png

// Algorithm
// Check if the lengths of strings s and goal are different:

// If they are, return false because a rotation of s cannot match goal.
// Create a new string doubledString by concatenating s with itself.

// Use a string search method to find the substring goal within doubledString:

// If goal is found, check if this index is less than the length of doubledString.
// If it is, return true, indicating that goal is a valid rotation of s. Otherwise, return false.