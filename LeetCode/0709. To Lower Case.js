// Easy

// Given a string s, return the string after replacing every uppercase letter with the same lowercase letter.

 

// Example 1:

// Input: s = "Hello"
// Output: "hello"
// Example 2:

// Input: s = "here"
// Output: "here"
// Example 3:

// Input: s = "LOVELY"
// Output: "lovely"
 

// Constraints:

// 1 <= s.length <= 100
// s consists of printable ASCII characters.

/*
BRUTE FORCE:
Convert input into array
Iterate
    Lowercase all characters (although this IS the method we are implementing)
    (or For any character that is between ASCII 101 and 132, increase in +32)
return the join on ""

This is Linear in Time and Space Complexity O(n)

*/


/**
 * @param {string} s
 * @return {string}
 */
function toLowerCase(s) {
    // This works, but we don't want to use the built in library.
    // return s.split("").map(letter => letter.toLowerCase()).join("")

    return s.split("").map(letter => makeLowerCase(letter)).join("")
};

function makeLowerCase(character) {
    const code = character.charCodeAt(0)
    if (code >= 65 && code <= 90) return String.fromCharCode(code + 32)

    return character
}

// Runtime 1 ms Beats 8.51%
// Memory 48.80 MB Beats 62.91%
