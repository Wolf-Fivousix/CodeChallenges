// Easy

// Given two strings first and second, consider occurrences in some text of the form "first second third", where second comes immediately after first, and third comes immediately after second.

// Return an array of all the words third for each occurrence of "first second third".

 

// Example 1:

// Input: text = "alice is a good girl she is a good student", first = "a", second = "good"
// Output: ["girl","student"]
// Example 2:

// Input: text = "we will we will rock you", first = "we", second = "will"
// Output: ["we","rock"]
 

// Constraints:

// 1 <= text.length <= 1000
// text consists of lowercase English letters and spaces.
// All the words in text are separated by a single space.
// 1 <= first.length, second.length <= 10
// first and second consist of lowercase English letters.
// text will not have any leading or trailing spaces.

/*
Brute Force:
Break the TEXT into an array (split on the " ").
create empty results array.
Using a "running window" of 3 elements, iterate through it.
    if FIRST and SECOND match, add THIRD to a result array.
return results array.

Linear Time Complexity O(N) with 2 iterations (splitting and scanning)
Linear Space Complexity O(N) memory usage increases as input.

Alternative for no memory:
We could scan the text without saving it to an array, but that would make the logic a lot more complex.
Something like using String.indexOf()
We could also do a split using "FIRST SECOND", but that would use memory as well.
We could also use a Regex, but that is it's own beast.
*/

/**
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */
function findOcurrences(text, first, second) {
    const input = text.split(" ")
    const result = []

    for (let i = 0; i < input.length - 2; ++i) {
        if (
            input[i] === first &&
            input[i + 1] === second
        ) result.push(input[i + 2])
    }

    return result
};

// Runtime 48 ms Beats 75.58%
// Memory 49.18 MB Beats 8.14%