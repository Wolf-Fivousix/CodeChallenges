// Easy

// You are given a string s and an integer k. Encrypt the string using the following algorithm:

// For each character c in s, replace c with the kth character after c in the string (in a cyclic manner).
// Return the encrypted string.

 

// Example 1:

// Input: s = "dart", k = 3

// Output: "tdar"

// Explanation:

// For i = 0, the 3rd character after 'd' is 't'.
// For i = 1, the 3rd character after 'a' is 'd'.
// For i = 2, the 3rd character after 'r' is 'a'.
// For i = 3, the 3rd character after 't' is 'r'.
// Example 2:

// Input: s = "aaa", k = 1

// Output: "aaa"

// Explanation:

// As all the characters are the same, the encrypted string will also be the same.

 

// Constraints:

// 1 <= s.length <= 100
// 1 <= k <= 104
// s consists only of lowercase English letters.


/*
Brute Force:
You would just swap according to the given K (making sure to update K for the length of the string with a MOD).
But this is VERY dumb.

Why? Because all this algorithm does is SHIFT the characters of the string by K!
dog k1
ogd

dog k2
gdo

dog k3
dog

So we DON'T need to iterate through the whole thing, swapping as we go. We can simply cut and concat the string.
find the shift value by modding the K by string length (so if K is bigger than the string, we get a smaller number)
"unshift" K elements and attach them to the end
A better way to say this is, SLICE the STRING at the index K and concat it back at the end.


Time Complexity is Constant Time Complexity O(N) due to the 3 slices.
Space Complexity is Constant O(N), due to memory we use to store the slices we create on the fly.
*/


/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
function getEncryptedString(s, k) {
    const shiftValue = k % s.length
    if (shiftValue === 0) return s

    const shiftedString = s.slice(0, shiftValue)
    return s.slice(shiftValue).concat(shiftedString)
};

// Runtime 59 ms Beats 71.06%
// Memory 49.29 MB Beats 99.63%


[
    ["dog", 1],
    ["dog", 2],
    ["dog", 3],
].forEach(([string, k]) => {
    console.log(getEncryptedString(string, k))
})