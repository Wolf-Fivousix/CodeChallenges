// Medium

// Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.

// Note that the same word in the dictionary may be reused multiple times in the segmentation.

 

// Example 1:

// Input: s = "leetcode", wordDict = ["leet","code"]
// Output: true
// Explanation: Return true because "leetcode" can be segmented as "leet code".
// Example 2:

// Input: s = "applepenapple", wordDict = ["apple","pen"]
// Output: true
// Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
// Note that you are allowed to reuse a dictionary word.
// Example 3:

// Input: s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
// Output: false
 

// Constraints:

// 1 <= s.length <= 300
// 1 <= wordDict.length <= 1000
// 1 <= wordDict[i].length <= 20
// s and wordDict[i] consist of only lowercase English letters.
// All the strings of wordDict are unique.

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */

/*
Brute Force:
Iterate through the Dictionary
    For each word, remove any matches from the string.
If the input has become "", we can return TRUE, otherwise, FALSE.
*/
function wordBreak(s, wordDict) {
    wordDict.forEach(word => {
        s = s.replace(new RegExp(word, "g"), "");
    });
    
    return !s.length;
};

// This doesn't work, because of some corner cases, like:
// "cars", [car, ca, rs].

// Working solution by ALVING! Yes, that Alvin! (a/A)
// Uses tabulation
// There are some ineficiencies with the slicing and "includes", but that's minor optimizations.

function wordBreak(s, wordDict) {
    const table = new Array(s.length + 1).fill(false);
    table[0] = true; // starting state
    
    for (let i = 0; i < table.length; ++i) {
        if (!table[i]) continue;
        
        for (let j = i + 1; j < table.length; ++j) {
            const word = s.slice(i, j);
            if (wordDict.includes(word)) table[j] = true;
        }
    }
    
    return table[table.length - 1];
};

// Runtime: 80 ms, faster than 90.83% of JavaScript online submissions for Word Break.
// Memory Usage: 40.3 MB, less than 68.72% of JavaScript online submissions for Word Break.