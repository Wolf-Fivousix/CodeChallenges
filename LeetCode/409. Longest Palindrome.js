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
// Take a look at the last solution (by gorkiy), for a more efficient approach.
function longestPalindrome(s) {
    const hash = {};
    for(let i = 0; i < s.length; ++i) {
        const char = s[i];
        if(hash[char]) ++hash[char];
        else hash[char] = 1;
    }
    
    let length = 0;
    const counters = Object.values(hash);
    counters.forEach(count => {
        if(count % 2 === 0 || length % 2 === 0) length += count;
        else length += count - 1;
    });
    
    return length;
};

// Runtime: 84 ms, faster than 76.88% of JavaScript online submissions for Longest Palindrome.
// Memory Usage: 39.5 MB, less than 86.19% of JavaScript online submissions for Longest Palindrome.

// Runtime: 88 ms, faster than 59.16% of JavaScript online submissions for Longest Palindrome.
// Memory Usage: 39.5 MB, less than 86.19% of JavaScript online submissions for Longest Palindrome.


// Solution by jdhp
// Interesting approach with a Set.
// Do remember that a set is iteractive and not constant access (implemented as a List), so worst case, this could become Polynomial O(N^2)
var longestPalindrome = function(s) {
    const set = new Set();
    let count = 0;
    
    for (const char of s) {
        if (set.has(char)) {
			count += 2;
            set.delete(char);
        } 
		else {
            set.add(char);
        }
    }

    return count + (set.size > 0 ? 1 : 0);
};
// Runtime: 80 ms, faster than 90.39% of JavaScript online submissions for Longest Palindrome.
// Memory Usage: 40.3 MB, less than 39.94% of JavaScript online submissions for Longest Palindrome.
// Runtime: 84 ms, faster than 76.88% of JavaScript online submissions for Longest Palindrome.
// Memory Usage: 39.9 MB, less than 73.27% of JavaScript online submissions for Longest Palindrome.

// Solution by gorkiy
// Only one loop.
var longestPalindrome = function(s) {
    let ans = 0;
    let keys = {};
    
    for (let char of s) {
      keys[char] = (keys[char] || 0) + 1;
      if (keys[char] % 2 == 0) ans += 2;
    }
    return s.length > ans ? ans + 1 : ans;
};

// Runtime: 84 ms, faster than 76.88% of JavaScript online submissions for Longest Palindrome.
// Memory Usage: 40.1 MB, less than 52.25% of JavaScript online submissions for Longest Palindrome.
// Runtime: 88 ms, faster than 59.16% of JavaScript online submissions for Longest Palindrome.
// Memory Usage: 40.1 MB, less than 61.26% of JavaScript online submissions for Longest Palindrome.

// No complexity difference, no runtime difference for the tests provided, but it is more efficient.