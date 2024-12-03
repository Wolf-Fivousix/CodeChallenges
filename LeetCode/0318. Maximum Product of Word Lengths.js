// Medium

// Given a string array words, return the maximum value of length(word[i]) * length(word[j]) where the two words do not share common letters. If no such two words exist, return 0.

// Example 1:

// Input: words = ["abcw","baz","foo","bar","xtfn","abcdef"]
// Output: 16
// Explanation: The two words can be "abcw", "xtfn".
// Example 2:

// Input: words = ["a","ab","abc","d","cd","bcd","abcd"]
// Output: 4
// Explanation: The two words can be "ab", "cd".
// Example 3:

// Input: words = ["a","aa","aaa","aaaa"]
// Output: 0
// Explanation: No such pair of words.
 

// Constraints:

// 2 <= words.length <= 1000
// 1 <= words[i].length <= 1000
// words[i] consists only of lowercase English letters.

/*
BRUTE FORCE:
For every element, iterate through the remaining array and combine with every other word that doesn't share letters
Keep track of the largest product and return it in the end.

Polynomial Time Complexity O(n^2)
Constant Space Complexity O(n)

Get's the job done, just not efficient.


BETTER:
Let's re-create the words array, but instead of words, we'll have a hash map with all the letters that are found within the word
We are doing this so that we don't have to re-iterate through every single word, again, every time we are checking if a word shares letters.

And then repeat the BRUTE FORCE approach, but using the hashed map array to check existing characters.

We coulnd't do better than the Polynomial Time Complexity O(n^2), but we improved a lot in the comparison of shared letters space.

*/

/**
 * @param {string[]} words
 * @return {number}
 */
function maxProduct(words) {
    let longestProduct = 0
    const wordsMapper = words.map(word => {
        const hashMap = {}
        for (const char of word) {
            hashMap[char] = true
        }
        return hashMap
    })
    
    for (let i = 0; i < words.length; ++i) {
        for (let j = i + 1; j < words.length; ++j) {
            const wordOne = words[i]
            const wordTwo = words[j]
            if (noSharedLetters(wordOne, wordsMapper[j])) {
                longestProduct = Math.max(wordOne.length * wordTwo.length, longestProduct)
            }
        }
    }

    return longestProduct
};

function noSharedLetters(wordOne, letterHash) {
    for (let i = 0; i < wordOne.length; ++i) {
        const letter = wordOne[i]
        if (letterHash[letter]) return false
    }

    return true
}

[
    [["abcw","baz","foo","bar","xtfn","abcdef"], 16],
    [["a","ab","abc","d","cd","bcd","abcd"], 4],
    [["a","aa","aaa","aaaa"], 0],
].forEach(([input, expectedResult]) => {
    console.log(`${maxProduct(input) === expectedResult ? "PASS" : "FAIL"} - ${maxProduct(input)} - ${input}`)
})

// Runtime 4046 ms Beats 16.28%
// Memory 72.38 MB Beats 6.56%