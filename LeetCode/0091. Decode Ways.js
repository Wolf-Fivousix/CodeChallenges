// Medium

// A message containing letters from A-Z can be encoded into numbers using the following mapping:

// 'A' -> "1"
// 'B' -> "2"
// ...
// 'Z' -> "26"
// To decode an encoded message, all the digits must be grouped then mapped back into letters using the reverse of the mapping above (there may be multiple ways). For example, "11106" can be mapped into:

// "AAJF" with the grouping (1 1 10 6)
// "KJF" with the grouping (11 10 6)
// Note that the grouping (1 11 06) is invalid because "06" cannot be mapped into 'F' since "6" is different from "06".

// Given a string s containing only digits, return the number of ways to decode it.

// The answer is guaranteed to fit in a 32-bit integer.

 

// Example 1:

// Input: s = "12"
// Output: 2
// Explanation: "12" could be decoded as "AB" (1 2) or "L" (12).
// Example 2:

// Input: s = "226"
// Output: 3
// Explanation: "226" could be decoded as "BZ" (2 26), "VF" (22 6), or "BBF" (2 2 6).
// Example 3:

// Input: s = "0"
// Output: 0
// Explanation: There is no character that is mapped to a number starting with 0.
// The only valid mappings with 0 are 'J' -> "10" and 'T' -> "20", neither of which start with 0.
// Hence, there are no valid ways to decode this since all digits need to be mapped.
// Example 4:

// Input: s = "06"
// Output: 0
// Explanation: "06" cannot be mapped to "F" because of the leading zero ("6" is different from "06").
 

// Constraints:

// 1 <= s.length <= 100
// s contains only digits and may contain leading zero(s).

/**
 * @param {string} s
 * @return {number}
 */

/*
Convert string to an array (we'll be popping elements like a stack)
Define codings as 0
Define currentLetter as Empty String
Iterate "backwards" until array is empty.
    pop number from array and combine with currentLetter
    convert it to number
    if this number is greater or equal to 1 (one digit letter condition)
        add 1 to codings
        if this number is lesser or equal to 26
            add 1 to codings
    
    currentLetter receives the slice of 1 of current ("AA" => "A", and "B" => "B")
        whenever we have 2 letters, only the left most would remain.
        
return codings

Linear Time Complexity O(N) - once for array conversion, another for iteration
Linear Space Complexity O(N) - We are making an array the size of input.

1 - 1
12 - 2
    1 2
    12
123 - 3
    1 2 3
    12 3
    1 23
1234 - 5
    1 2 3 4
    12 3 4
    1 23 4
    1 2 34
    12 34
12345 - 8
    1 2 3 4 5
    12 3 4 5
        12 34 5
        12 3 45
    1 23 4 5
        1 23 45
    1 2 34 5
    1 2 3 45

This approach doesn't work. I'm "solving" the wrong problem.
*/
function numDecodings(s) {
    const input = s.split("");
    let codings = 0;
    let currentLetter = "";
    
    while (input.length) {
        currentLetter = input.pop() + currentLetter;
        const value = Number(currentLetter);
        
        if (value >= 1) ++codings;
        if (value >= 10 && value <= 26) ++codings;
        
        currentLetter = currentLetter.slice(0,1);
    }
    
    return codings;
};

// Solution by linfongi
function numDecodings(s) {
    if (s.length === 0) return 0;
  
    const N = s.length;
    const dp = Array(N+1).fill(0);
  
    dp[0] = 1;
    dp[1] = s[0] === '0' ? 0 : 1;
  
    for (let i = 2; i <= N; i++) {
      if (s[i-1] !== '0') {
        dp[i] += dp[i-1];
      }
      if (s[i-2] === '1' || s[i-2] === '2' && s[i-1] <= '6') {
        dp[i] += dp[i-2];
      }
    }
  
    return dp[N];
}