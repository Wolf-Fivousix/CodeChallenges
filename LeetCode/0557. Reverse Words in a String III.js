// Easy

// Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

 

// Example 1:

// Input: s = "Let's take LeetCode contest"
// Output: "s'teL ekat edoCteeL tsetnoc"
// Example 2:

// Input: s = "Mr Ding"
// Output: "rM gniD"
 

// Constraints:

// 1 <= s.length <= 5 * 104
// s contains printable ASCII characters.
// s does not contain any leading or trailing spaces.
// There is at least one word in s.
// All the words in s are separated by a single space.

/*
Bonus as this one is too easy
Brute Force:

Split the input into the white spaces.
Iterate through the resulting array, for each element
    Reverse the string (This can be done by either manually reversing each character, or simply converting into array, reversing and then joining on empty character)
Join all the elements on " " (space)

return result

We are looking for a quick brute force solution, not really efficient.
We will iterate 1 time to split 
We will iterate a 2nd time to converte each word into an array
3rd time to reverse it
4th time to join
5th time to join on spaces

5 N iterations, while using N space.

Linear Time and Space Complexity (not too shaby for a straight forward solution)
*/

/**
 * @param {string} s
 * @return {string}
 */
function reverseWords(s) {
    const noSpaces = s.split(" ")
    const reversedWords = noSpaces.map(string => string.split("").reverse().join(""))
    
    return reversedWords.join(" ")
};

[
    "Let's take LeetCode contest",
].forEach(input => {
    console.log(reverseWords(input))
})

// Runtime 67 ms Beats 47.12%
// Memory 54.22 MB Beats 97.21%

// See? Even a crappy "inneficient" straight forward solution can be very effective (memory wise, in this case).
