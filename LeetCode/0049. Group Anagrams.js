// MEDIUM
// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
// Example 2:

// Input: strs = [""]
// Output: [[""]]
// Example 3:

// Input: strs = ["a"]
// Output: [["a"]]
 

// Constraints:

// 1 <= strs.length <= 104
// 0 <= strs[i].length <= 100
// strs[i] consists of lowercase English letters.

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
// Brute force:
// create an empty hash (we'll store our strings here)
// Traverse the input array,
//   for each element, sort string.
//   check hash for sorted string.
//      If element exists, add it to array value.
//      if it does not exist, create a new entry with that string and add a new array with the original string in it as value.

// O(N), as we are traversing the original array. We can't do better than this.
// For each element, we will convert to array, then sort the entry, join into a string, witch should be N + N*LogN + N for a quick sort implementation of String.sort().
// We'll then check the hash entry for the element and add it, this is Constant O(1)

// Time complexity of solution is O(N * (N + N * LogN + N)) => O(N2 + N2 * NLogN + N2) = Polynomial O(N2)
// Space Complexity Linear O(N), as we'll build a hash as big as the input. (Worst case would be 2 N, as we'll use sorted strings as keys, and we could have all different strings).



function groupAnagrams(strs) {
    const sortedHash = {};

    strs.forEach(word => {
        const sortedString = word.split("").sort().join("");
        sortedHash[sortedString] ? sortedHash[sortedString].push(word) : sortedHash[sortedString] = [word];
    });

    return Object.values(sortedHash);
};

// groupAnagrams(["eat","tea","tan","ate","nat","bat"]);

// Runtime: 128 ms, faster than 85.30% of JavaScript online submissions for Group Anagrams.
// Memory Usage: 49.5 MB, less than 78.20% of JavaScript online submissions for Group Anagrams.