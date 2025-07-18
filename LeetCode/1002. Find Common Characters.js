// https://leetcode.com/problems/find-common-characters/?envType=problem-list-v2&envId=n6eqns8r

// Easy

// Given a string array words, return an array of all characters that show up in all strings within the words (including duplicates). You may return the answer in any order.

 

// Example 1:

// Input: words = ["bella","label","roller"]
// Output: ["e","l","l"]
// Example 2:

// Input: words = ["cool","lock","cook"]
// Output: ["c","o"]
 

// Constraints:

// 1 <= words.length <= 100
// 1 <= words[i].length <= 100
// words[i] consists of lowercase English letters.

/*
BRUTE FORCE (that is not that brute):
Get the first words and create a map of the letters and their count.
For each word in words (past the first)
    Create a new counter
    Iterate through the "set" counter.
        Any letter NOT found needs to be removed.
        Any letter with LOWER count needs to be updated.

At the end, transform the remaining object into an array. Each letter shows up as many times as it's counter.

O(n) Linear Time complexity, as we are iterating through every single word (and letter) only once.
O(1) Space Complexity is Constant, because although we're iterating through every single word, at worst case we have 26 characters. 26*N still N. And if we implement captalization, numbers or whatever, it will grow accordingly, but remain constant.

*/

/**
 * @param {string[]} words
 * @return {string[]}
 */
function commonChars(words) {
    const commonCharacters = mapCharacters(words[0])

    for (let i = 1; i < words.length; ++i) {
        const word = words[i]
        const currentWordMapping = mapCharacters(word)

        Object.keys(commonCharacters).forEach(character => {
            if (!currentWordMapping[character]) delete commonCharacters[character]
            if (currentWordMapping[character] < commonCharacters[character]) commonCharacters[character] = currentWordMapping[character]
            // Any character in currentWordMapping that is not part of commonCharacters is ignored.
        })

    }

    const resultArray = []
    for (const [character, quantity] of Object.entries(commonCharacters)) {
        for (let i = 1; i <= quantity; i++) {
            resultArray.push(character)
        }
    }

    return resultArray
};

function mapCharacters(word) {
    const map = {}
    word.split("").forEach(character => {
        if (map[character]) map[character] += 1
        else {
            map[character] = 1
        }
    });

    return map
}

// Runtime 30 ms Beats 16.19%
// Memory 64.24 MB Beats 8.99%

