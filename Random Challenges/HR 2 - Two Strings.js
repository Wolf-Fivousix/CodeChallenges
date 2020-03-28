// Given two arrays of strings, determine whether
// corresponding elements contain a common substring.
// For example, if array a = [ab,cd,ef] and array b = [af, ee,
// ef], we make the following decisions:
// i a[i] b[i] Common Result
// 0 ab af a YES
// 1 cd ee NO
// 2 ef ef ef YES
// For each test, print your result on a new line, either YES if
// there is a common substring, or NO.
// Function Description
// Complete the function commonSubstring in the editor
// below. For each a[i], b[i] pair, the function must print YES
// if they share a common substring, or NO on a new line.
// commonSubstring has the following parameter(s):
//     a[a[0],...a[n-1]]: an array of strings
//     b[b[0],...b[n-1]]: an array of strings
// Constraints
// All the strings consist of lowercase English letters only,
// ascii[a-z].
// |a| = |b|
// 1 ≤ |a|, |b| ≤ 10 3
// 1 ≤ |a[i]|, |b[i]| ≤ 10 4
// Input Format for Custom Testing
// Sample Case 0
// Sample Input 1
// 2
// hello
// hi
// 2
// world
// bye

/*
 * Complete the 'commonSubstring' function below.
 *
 * The function accepts following parameters:
 *  1. STRING_ARRAY a
 *  2. STRING_ARRAY b
 */
function commonSubstring(a, b) {
    for (let i = 0; i < a.length; ++i) {
        compareStrings(a[i], b[i]) ? console.log("YES") : console.log("NO");
    }
}
function compareStrings(a, b) {
    const letters = b.split("");
    for (let i = 0; i < letters.length; ++i) {
        if (a.includes(letters[i])) return true;
    }
    return false;
}