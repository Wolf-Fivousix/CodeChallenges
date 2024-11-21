// Easy

// International Morse Code defines a standard encoding where each letter is mapped to a series of dots and dashes, as follows:

// 'a' maps to ".-",
// 'b' maps to "-...",
// 'c' maps to "-.-.", and so on.
// For convenience, the full table for the 26 letters of the English alphabet is given below:

// [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
// Given an array of strings words where each word can be written as a concatenation of the Morse code of each letter.

// For example, "cab" can be written as "-.-..--...", which is the concatenation of "-.-.", ".-", and "-...". We will call such a concatenation the transformation of a word.
// Return the number of different transformations among all words we have.

 

// Example 1:

// Input: words = ["gin","zen","gig","msg"]
// Output: 2
// Explanation: The transformation of each word is:
// "gin" -> "--...-."
// "zen" -> "--...-."
// "gig" -> "--...--."
// "msg" -> "--...--."
// There are 2 different transformations: "--...-." and "--...--.".
// Example 2:

// Input: words = ["a"]
// Output: 1
 

// Constraints:

// 1 <= words.length <= 100
// 1 <= words[i].length <= 12
// words[i] consists of lowercase English letters.

/*
BRUTE FORCE:
Transform every word into morse code.
Iterate through the array and store every word in a hash table, so that we have unique entries. (This can be done in the same step above)

Return the length of keys for the hash table

Linear Time Complexity O(n) - We are iterating through the input at worse case, twice.
Linear Space Complexity O(n) - We are creating 2 entries based on input

Converting Word into Morse:
    Iterate through the string
        For each character, get the corresponding index (char code - 97)
    Look up the morse Code alphabet with that index and create a new string.
    We can just push all the entries to an array and then join everything in the end
*/

/**
 * @param {string[]} words
 * @return {number}
 */
function uniqueMorseRepresentations(words) {
    const uniqueMorseWords = {}
    words.forEach(word => {
        const morseWord = convertWordIntoMorseCode(word)
        uniqueMorseWords[morseWord] = true
    })

    return Object.keys(uniqueMorseWords).length
};

function convertWordIntoMorseCode(word) {
    const morseAlphabet = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
    const morseWord = []

    for (const i in word) {
        const morseIndex = word.charCodeAt(i) - 97
        morseWord.push(morseAlphabet[morseIndex])
    }

    return morseWord.join("")
}

// Runtime 14 ms Beats 5.38%
// Memory 54.30 MB Beats 7.41%


[
    [["gin","zen","gig","msg"], 2],
    [["a"], 1],
    [["banana"], 1],
].forEach(input => {
    console.log(`${uniqueMorseRepresentations(input[0]) === input[1] ? "PASS" : "FAIL"} - Case: ${input[0]}`)
})