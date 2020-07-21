// Easy

// Given two strings s and t, determine if they are isomorphic.

// Two strings are isomorphic if the characters in s can be replaced to get t.

// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character but a character may map to itself.

// Example 1:

// Input: s = "egg", t = "add"
// Output: true
// Example 2:

// Input: s = "foo", t = "bar"
// Output: false
// Example 3:

// Input: s = "paper", t = "title"
// Output: true
// Note:
// You may assume both s and t have the same length.

// we know they are the same length, that helps.
// the character may change, or not, but once it mutates, no other character can mutate to that
// specific character. Example: if A -> B then O -> B can NOT happen.

// declare a hash table that will keep track of what characters mutated to what.
// declare a hash set that will keep track of what characters were used.
// iterate through both, at the same time.
    // if the character from S has already been mutated (if the entry exists in hash table)
        // look up in our hash table for the mutated character.
        // Does it match the character in T?
        // If it does NOT, return false.
        // make the swap, and continue.
    // else (the character has NEVER been mutated)
        // look at the character in T. Is that character available to be swapped? (check our hash set)
        // if it is, swap, add the change to the hash table and hash set. And move on.
        // if not, return false, because it is not possible to convert S into T.

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isIsomorphic(s, t) {
	const mutation = {};
	const usedChars = new Set();

	for (let i = 0; i < s.length; ++i) {
		if (mutation[s[i]]) {
			if (mutation[s[i]] !== t[i]) return false;
        }
        else {
            if (usedChars.has(t[i])) return false;
            usedChars.add(t[i]);
            mutation[s[i]] = t[i];
        }
    }

    return true;
}

// Runtime: 92 ms, faster than 44.92% of JavaScript online submissions for Isomorphic Strings.
// Memory Usage: 38.5 MB, less than 41.62% of JavaScript online submissions for Isomorphic Strings.

// Linear Time Complexity. As we iterate through the string only once.
// Constant Space Complexity. Our mutation and usedChars will use at most 26 characters, no matter how long the string is.
// Or, if we consider Capitalization, numbers, and some symbols, a little over 70.