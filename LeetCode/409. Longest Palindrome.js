// Easy

// Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.

// Letters are case sensitive, for example, "Aa" is not considered a palindrome here.

 

// Example 1:

// Input: s = "abccccdd"
// Output: 7
// Explanation:
// One longest palindrome that can be built is "dccaccd", whose length is 7.
// Example 2:

// Input: s = "a"
// Output: 1
// Example 3:

// Input: s = "bb"
// Output: 2
 

// Constraints:

// 1 <= s.length <= 2000
// s consists of lowercase and/or uppercase English letters only.

/**
 * @param {string} s
 * @return {number}
 */

/*
To build the palindrome, I need to first know all the letters, so I'll have to scan through the input
Once I have a count of everything (using a hash table), I can iterate through the hash table and
"add" to my length any entry that has 2+ count.
    If EVEN, add as is.
    If ODD, check current value.
        If current value is EVEN, add count as is.
        Else current value is ODD (already have a "middle" point), then Mod by 2 and add that.

Worst case cenario would be a string that has NO repeating letters, abcdefg...
So we would iterate once counting, adding every entry to a hash table.
Then iterate through the hash table again.

Linear Time Complexity
Linear Space Complexity

Define empty hash table.
Iterate through string input, adding to hash table and updating the counter in case it exists.
Define length as 0.
Iterate through the hash VALUES (count).
    If counter is EVEN (num % 2 === 0), add as is.
    Else if
        Check if current LENGTH is EVEN
            Add counter as is.
        Else add the counter - 1.
Return length.
        
*/
function longestPalindrome(s) {
    
};