// Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

// Example 1:

// Input: "babad"
// Output: "bab"
// Note: "aba" is also a valid answer.
// Example 2:

// Input: "cbbd"
// Output: "bb"


/**
 * @param {string} s
 * @return {string}
 */
function longestPalindrome (s) {
    let longestSubstring = "";
    if (palindrome(s)) return s;
    
    for (let i = 0; i < s.length; ++i) {
        for (let j = i; j < s.length; ++j) {
            let substring = s.substring(i, j + 1);
            
            if (palindrome(substring) && longestSubstring.length < substring.length) {
                longestSubstring = substring;
            }
        }
    }
    
    return longestSubstring;    
};

function palindrome(word) {
    let left = 0;
    let right = word.length - 1;
    
    while (left < right) {
        if (word[left] !== word[right]) return false;
        ++left;
        --right;
    }
    
    return true;
}

// This is a Polynomial (N^3) solution. As the "palindrome" function itself is Linear and happens inside the double loop.
// Although not the most efficient, it is a Bruce Force solution.

// We can decrease the Time Complexy to N^2 by using a "step and grow" approach.
// This is the code in JAVA provided.
// public String longestPalindrome(String s) {
//     if (s == null || s.length() < 1) return "";
//     int start = 0, end = 0;
//     for (int i = 0; i < s.length(); i++) {
//         int len1 = expandAroundCenter(s, i, i);
//         int len2 = expandAroundCenter(s, i, i + 1);
//         int len = Math.max(len1, len2);
//         if (len > end - start) {
//             start = i - (len - 1) / 2;
//             end = i + len / 2;
//         }
//     }
//     return s.substring(start, end + 1);
// }

// private int expandAroundCenter(String s, int left, int right) {
//     int L = left, R = right;
//     while (L >= 0 && R < s.length() && s.charAt(L) == s.charAt(R)) {
//         L--;
//         R++;
//     }
//     return R - L - 1;
// }

// The key point here is steping into the string and, from each character, expanding outwards to find the biggest palindrome.
// We do it twice (len1 and len2) because "abba" is a palindrome as well, but it's center is doubled.

// The best way to do this is in Linear time. By using an algorithm called Manacher's Algorithm.
// It behaves somewhat similar to the above solution, but in a clever way.