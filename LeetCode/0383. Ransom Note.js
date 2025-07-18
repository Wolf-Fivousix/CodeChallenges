// Easy

// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

// Each letter in magazine can only be used once in ransomNote.

 

// Example 1:

// Input: ransomNote = "a", magazine = "b"
// Output: false
// Example 2:

// Input: ransomNote = "aa", magazine = "ab"
// Output: false
// Example 3:

// Input: ransomNote = "aa", magazine = "aab"
// Output: true
 

// Constraints:

// 1 <= ransomNote.length, magazine.length <= 105
// ransomNote and magazine consist of lowercase English letters.

/*
BRUTE FORCE:
Convert both inputs into hash tables with counts of each letter
Iterate through ransomNote keys
    If the key doesn't exist or the value for key (letter) is lower than the Magazine Counter, return false.

If that passed, we have enough leters, return true

Linear Time Complexity O(n), as we have to iterate through the inputs once.
Constant Space Complexity O(1), we'll use two objects of 26 characters

*/


/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
function canConstruct(ransomNote, magazine) {
  const ransomHash = createWordHash(ransomNote)
  const magazineHash = createWordHash(magazine)  

  for (let [letter, count] of Object.keys(ransomHash)) {
    if (!magazineHash[letter] || magazineHash[letter] < ransomHash[letter]) return false
  }

  return true
};

function createWordHash(word) {
    const hash = {}
    // Iterating manually to avoid having to split the string into an array and doing another pass
    for (let i = 0; i < word.length; ++i) {
        const character = word[i]
        if (hash[character]) hash[character] += 1
        else hash[character] = 1
    }

    return hash
}

// Runtime 15 ms Beats 73.69%
// Memory 57.26 MB Beats 72.54%
