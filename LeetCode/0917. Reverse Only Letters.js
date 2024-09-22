// Easy

// Topics
// Companies
// Hint
// Given a string s, reverse the string according to the following rules:

// All the characters that are not English letters remain in the same position.
// All the English letters (lowercase or uppercase) should be reversed.
// Return s after reversing it.

 

// Example 1:

// Input: s = "ab-cd"
// Output: "dc-ba"
// Example 2:

// Input: s = "a-bC-dEf-ghIj"
// Output: "j-Ih-gfE-dCba"
// Example 3:

// Input: s = "Test1ng-Leet=code-Q!"
// Output: "Qedo1ct-eeLg=ntse-T!"
 

// Constraints:

// 1 <= s.length <= 100
// s consists of characters with ASCII values in the range [33, 122].
// s does not contain '\"' or '\\'.

/*
First approach, straight forward brute force:
We iterate through the input once, everytime we encounter one of the ASCII characters that needs to be replaced, we save it to an array
AND substitute the letter for a FLAG.

Then we iterate through it again, and anytime we find a flag, we substitute it by poping the last element from our saved array.

This will be Linear Time Complexity O(n) since we iterate through input twice.
And will be Linear Space Complexity O(n), since the saved array could be as big as the original one.

BUT THERE'S A CATCH HERE!
We can do smaller improvements, and the most important one here would be on STRING manipulation.
In JS Strings are IMMUTABLE, which means anytime we use something like String.replace() we would be creating an ENTIRE new string!!
To avoid that, we can simply convert the input string into an array of strings. We can do that at the start for a 3rd pass.
OR construct it as we iterate through the first pass.
Regardless, at the end we still need to construct the string back so there will be one more pass converting the array into string.

Now, if we want to be REALLY time efficient, and burn memory, then as we do our pass and construct the new array. We ALSO use a second pointer at the end
to swap elements.

As an exercise, let's implement both!

*/

/**
 * @param {string} s
 * @return {string}
 */
function reverseOnlyLettersOne(s) {
    const savedCharacters = []
    const reversedArray = []
    const swapFlag = "{"

    for (let i = 0; i < s.length; ++i) {
        const code = s.charCodeAt(i)
        if (code >= 65 && code <= 90 || code >= 97 && code <= 122) {
            savedCharacters.push(s[i])
            reversedArray.push(swapFlag)
        }
        else {
            reversedArray.push(s[i])
        }
    }

    for (let i = 0; i < reversedArray.length; ++i) {
        if (reversedArray[i] === swapFlag) reversedArray[i] = savedCharacters.pop()
    }

    return reversedArray.join("")
};

// Efficiency:
// Runtime 61 ms Beats 16.21%
// Memory 49.71 MB Beats 28.31%

// Version two, more optimal with 2 pointers
function reverseOnlyLettersTwo(s) {
    const reversedArray = new Array(s.length)
    let start = 0
    let finish = s.length - 1
    
    while (start <= finish) {
        // If start is NOT a swappable character, save character and move pointer.
        if (!(s.charCodeAt(start) >= 65 && s.charCodeAt(start) <= 90) && !(s.charCodeAt(start) >= 97 && s.charCodeAt(start) <= 122)) {
            reversedArray[start] = s[start]
            ++start
        }
        // If finish is not a Swappable character, save character and move pointer.
        if (!(s.charCodeAt(finish) >= 65 && s.charCodeAt(finish) <= 90) && !(s.charCodeAt(finish) >= 97 && s.charCodeAt(finish) <= 122)) {
            reversedArray[finish] = s[finish]
            --finish
        }
        // When both pointers are at something that needs to swap, swap the elements (save them to array), move the pointers.
        if (
            (s.charCodeAt(start) >= 65 && s.charCodeAt(start) <= 90 || s.charCodeAt(start) >= 97 && s.charCodeAt(start) <= 122) &&
            (s.charCodeAt(finish) >= 65 && s.charCodeAt(finish) <= 90 || s.charCodeAt(finish) >= 97 && s.charCodeAt(finish) <= 122)
        ) {
            reversedArray[start] = s[finish]
            reversedArray[finish] = s[start]
            ++start
            --finish
        }
    }

    return reversedArray.join("")
}

// Runtime 46 ms Beats 86.53%
// Memory 49.17 MB Beats 51.83%

// One way to increase redability is to extract the string comparison to a helper method, like:
function isEnglishLetter(char) {
    const code = char.charCodeAt(0)
    return code >= 65 && code <= 90 || code >= 97 && code <= 122
}

function reverseOnlyLetters(s) {
    const reversedArray = new Array(s.length)
    let start = 0
    let finish = s.length - 1
    
    while (start <= finish) {
        // If start is NOT a swappable character, save character and move pointer.
        if (!isEnglishLetter(s[start])) {
            reversedArray[start] = s[start]
            ++start
        }
        // If finish is not a Swappable character, save character and move pointer.
        if (!isEnglishLetter(s[finish])) {
            reversedArray[finish] = s[finish]
            --finish
        }
        // When both pointers are at something that needs to swap, swap the elements (save them to array), move the pointers.
        if (start < s.length && finish >= 0 && isEnglishLetter(s[start]) && isEnglishLetter(s[finish])) {
            reversedArray[start] = s[finish]
            reversedArray[finish] = s[start]
            ++start
            --finish
        }
    }

    return reversedArray.join("")
}