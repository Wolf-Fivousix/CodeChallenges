// Given a string, find the length of the longest substring without repeating characters.

// Example 1:

// Input: "abcabcbb"
// Output: 3 
// Explanation: The answer is "abc", with the length of 3. 
// Example 2:

// Input: "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3. 
//              Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

/**
 * @param {string} s
 * @return {number}
 */
let lengthOfLongestSubstring = function(s) {
    let maxSub = 0;
    let counter = 0;
    let letters = [];
    s.split("").forEach( l => {
        if (letters.includes(l)) {
            if (maxSub < counter) maxSub = counter;
            while (letters[0] !== l) {
                letters.shift();
                --counter;
            }
            letters.shift();
            --counter;
        }
        letters.push(l);
        ++counter;
    });
    
    return Math.max(maxSub, counter);
};

// A very efficient (time wise) solution from the community:
// The key here is the nested for loop. It checks for repeated characters and when it finds it, moves the loop starting point forward. That`s "K".
// This way, the second nested loop only runs for the most recent unique string. It is pretty much what my solution does.
let lengthOfLongestSubstring = function(s) {
    var k = 0;
    var maxLength = 0;
    for(i = 0; i < s.length; i++) {
        for (j = k; j < i; j++) {
            if (s[i] === s[j]) {
                k = j + 1;
                break;
            }
        }
        if (i - k + 1 > maxLength) {
            maxLength = i - k + 1;
        }
    }
    return maxLength;
}
