// Easy

// Given a string paragraph and a string array of the banned words banned, return the most frequent word that is not banned. It is guaranteed there is at least one word that is not banned, and that the answer is unique.
// The words in paragraph are case-insensitive and the answer should be returned in lowercase.
// Note that words can not contain punctuation symbols.


// Example 1:
// Input: paragraph = "Bob hit a ball, the hit BALL flew far after it was hit.", banned = ["hit"]
// Output: "ball"
// Explanation: 
// "hit" occurs 3 times, but it is a banned word.
// "ball" occurs twice (and no other word does), so it is the most frequent non-banned word in the paragraph. 
// Note that words in the paragraph are not case sensitive,
// that punctuation is ignored (even if adjacent to words, such as "ball,"), 
// and that "hit" isn't the answer even though it occurs more because it is banned.

// Example 2:
// Input: paragraph = "a.", banned = []
// Output: "a"
 

// Constraints:

// 1 <= paragraph.length <= 1000
// paragraph consists of English letters, space ' ', or one of the symbols: "!?',;.".
// 0 <= banned.length <= 100
// 1 <= banned[i].length <= 10
// banned[i] consists of only lowercase English letters.

/*
Since we have multiple kinds of special characters, we can't easily split the paragraph....
So I was thinking about doing a manual interation and construction of the words. BUT we can be a little less efficient and actually create what we want! And that's because the special characters ARE defined as "!?',;."!!
So'll do a pass and replace them all for a " ". Now our split works as expected.

Iterate through the split array,
    Use each word as the key of a hash map and count them

Delete all banned entries from the hash
Iterate through the hash map and find the highest counter

- We could optmize by having the counter take into account the banned words at the same time we keep track of the highest count, but it won't change the time complexity

So we have Linear Time and Space complexity O(N).
*/

/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
function mostCommonWord(paragraph, banned) {
    paragraph = paragraph.replaceAll("!", " ")
    paragraph = paragraph.replaceAll("?", " ")
    paragraph = paragraph.replaceAll("'", " ")
    paragraph = paragraph.replaceAll(",", " ")
    paragraph = paragraph.replaceAll(";", " ")
    paragraph = paragraph.replaceAll(".", " ")

    const wordCounter = {}

    const words = paragraph.split(" ")
    for (const word of words) {
        if (word.length === 0) continue

        const wordLowerCase = word.toLocaleLowerCase()

        if (wordCounter[wordLowerCase]) wordCounter[wordLowerCase] += 1
        else wordCounter[wordLowerCase] = 1
    }

    for (const word of banned) {
        delete wordCounter[word]
    }

    let mostFrequentWord = {
        word: "banana",
        count: 0,
    }
    for (const word of Object.keys(wordCounter)) {
        if (wordCounter[word] > mostFrequentWord.count) {
            mostFrequentWord = {
                word,
                count: wordCounter[word]
            }
        }
    }

    return mostFrequentWord.word
};

// Runtime 5 ms Beats 46.41%
// Memory 58.47 MB Beats 8.84%

