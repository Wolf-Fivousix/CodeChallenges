// Medium

// Given a 0-indexed string s, permute s to get a new string t such that:

// All consonants remain in their original places. More formally, if there is an index i with 0 <= i < s.length such that s[i] is a consonant, then t[i] = s[i].
// The vowels must be sorted in the nondecreasing order of their ASCII values. More formally, for pairs of indices i, j with 0 <= i < j < s.length such that s[i] and s[j] are vowels, then t[i] must not have a higher ASCII value than t[j].
// Return the resulting string.

// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in lowercase or uppercase. Consonants comprise all letters that are not vowels.
 

// Example 1:
// Input: s = "lEetcOde"
// Output: "lEOtcede"
// Explanation: 'E', 'O', and 'e' are the vowels in s; 'l', 't', 'c', and 'd' are all consonants. The vowels are sorted according to their ASCII values, and the consonants remain in the same places.

// Example 2:
// Input: s = "lYmpH"
// Output: "lYmpH"
// Explanation: There are no vowels in s (all characters in s are consonants), so we return "lYmpH".

// Constraints:

// 1 <= s.length <= 105
// s consists only of letters of the English alphabet in uppercase and lowercase.

/*
We don't need to convert the string in an array, we just need to extract the vowels, order them, and then use them as needed.

BRUTE FORCE
Define empty array
Scan the string
    every vowel found is pushed into our array
sort the vowel array
Define a new empty array
Scan the string
    if it's a vowel, pick the first one from our array (unshift is fine, we're not looking for efficiency here) 
    otherwise, copy the consonant in the array

return a join of this resulting array

Log Linear O(N Log N) for Time Complexity (worst case it's a string of only vowels)
Linear O(N) Space Complexity - Same as above.
*/

/**
 * @param {string} s
 * @return {string}
 */
function sortVowels(s) {
    const vowels = []
    for (let i = 0; i < s.length; ++i) {
        const char = s[i]
        if (isVowel(char)) {
            vowels.push(char)
        }
    }

    const sortedVowels = vowels.toSorted() // Increasing order A < E < a < e
    const result = []
    let vowelPointer = 0
    for (let i = 0; i < s.length; ++i) {
        const char = s[i]
        if (isVowel(char)) {
            // Had to give up on the sortedVowels.shift() due to time execution constrains of test cases.
            result.push(sortedVowels[vowelPointer])
            ++vowelPointer
        }
        else {
            result.push(char)
        }
    }

    return result.join("")
};

function isVowel(character) {
    if (
        character === "A" ||
        character === "E" ||
        character === "I" ||
        character === "O" ||
        character === "U" ||
        character === "a" ||
        character === "e" ||
        character === "i" ||
        character === "o" ||
        character === "u"
    ) return true
    return false
}

// Runtime 61 ms Beats 90.53%
// Memory 72.68 MB Beats 30.53%