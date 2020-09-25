// The definition of a palindrome is a string that is spelled
// the same both forward and backward. Examples of
// palindromes are: madam, aabbaa, and noon.
// Given a string s of size n, answer q queries. In each query
// there will be two integers lower and upper that represent
// the lower and upper lengths of substrings of s to
// consider.
// Determine the number of substrings present in the given
// string such that:
// 1. The length of the substring is between lower and
// upper, inclusive.
// 2. The substring is a palindrome.
// Example
// s = aa
// lower = [0, 1, 0]
// upper = [0, 1, 1]
// The palindromic substrings of the string aa are (a, a,
// aa) from indices (0-0), (1-1), and (0-1).
// Note: The substrings may match in value, but not in
// beginning and ending index.
// Therefore, in the example above, even though the first
// two values are both "a", the indices to obtain those
// values are different: [(0-0) vs (1-1)] so both are counted.
// Function Description
// Complete the howManyPalindromes function in the
// editor below. The function must return a long integer
// array denoting the answers for each query.
// howManyPalindromes has the following parameter(s):
//     s: The given string.
//     lower: An integer array, denoting the lower bound of
// substring length for each query.
//     upper: An integer array, denoting the upper bound of
// substring length for each query.

/*
 * Complete the 'howManyPalindromes' function below.
 *
 * The function is expected to return a LONG_INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. INTEGER_ARRAY lower
 *  3. INTEGER_ARRAY upper
 */

// Solution passes 8 of 13 test cases. Then times out.
// Needs further improvement.

function howManyPalindromes(s, lower, upper) {
    let palindromes = allPalindromes(s);
    let sizes = {};
    palindromes.forEach( pali => {
        let size = pali.length;
        if (sizes[size]) ++sizes[size];
        else sizes[size] = 1;
    });
    // console.log(palindromes);
    let results = [];
    for (let i = 0; i < lower.length; ++i) {
        let targetLength = lower[i];
        let total = 0;
        while (targetLength <= upper[i]) {
            // total += palindromes.filter( el => el.length === targetLength).length;
            if (sizes[targetLength]) total += sizes[targetLength];
            ++targetLength;
        }
        results.push(total);
    }
    return results;
}

function allPalindromes(word) {
    let palindromes = [];
    for (let i = 0; i < word.length; ++i) {
        for (let j = i; j < word.length; ++j) {
            const sub = word.slice(i, j + 1);
            if (isPalindrome(sub)) palindromes.push(sub);
        }
    }
    return palindromes;
}

function isPalindrome(word) {
    if (!word.length) return false;
    let left = 0;
    let right = word.length - 1;
    while (left < right) {
        if (word[left] !== word[right]) return false;
        ++left;
        --right;
    }
    return true;
}