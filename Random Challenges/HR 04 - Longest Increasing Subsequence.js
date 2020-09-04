// A sub-sequence is a sequence that
// can be created by deleting zero or
// more elements from the original
// sequence while maintaining order.
// A sequence S is said to be increasing
// if every element in the sequence is
// greater than the previous element in
// that sequence, i.e for every element
// S[i+1] , S[i] < S[i+1]. Mathematically,
// for the sequence S = (S[1]...S[n-1]),
// S[i] < S[i+1] ∀ i ∈ [1, n-1] .
// You will be given an array of integers
// and must determine the length of
// the longest increasing subsequence.
// For example, your array s = [1, 2, 2, 3,
// 1, 6] . Two examples of strictly
// increasing subsequences of that
// array are (1,2), (1, 2, 3) . Note that the
// 2 cannot repeat in the second
// subsequence as 2 ≮ 2 . The longest
// increasing subsequence has a length
// of 4 : LIS = [1,2,3,6] .
// Function Description
// Complete the function findLIS in the
// editor below. The function must
// return the length of the longest
// increasing subsequence that can be
// created from the array.
// findLIS has the following
// parameter(s):
// s[s[0],...s[n-1]]: an array of
// integers

// Constraints:
// 1 ≤ n < 1000
// 1 ≤ s[i] ≤ 1000000

// Sample Case 0
// Sample Input 0
// Sample Case 0
// Sample Input 0
// STDIN
// -----
// 3
// →
// 1
// →
// 4
// 3
// Function Parameters
// -------------------
// s[] Size = 3
// s[] = [ 1,
// 4,
// 3 ]
// Sample Output 0
// 2
// Explanation 0
// Inputs are s=[1,4,3] . Increasing
// subsequences are [1,4] and [1,3] .
// The longest increasing sub-
// sequence has 2 elements.
// Sample Case 1
// Sample Input 1
// STDIN
// -----
// 5
// →
// 1
// →
// 4
// 5
// 2
// 6
// Function Parameters
// -------------------
// s[] Size = 5
// s = [1,4,5,2,6]
// Sample Output 1
// Inputs are s=[1,4,5,2,6] . Some
// increasing subsequences are
// [1,4,5,6], [4,5,6], [5,6] and [2,6] .
// The longest increasing sub-
// sequence has 4 elements.
// Sample Case 2
// Sample Input 2
// STDIN
// -----
// 4
// →
// 2
// →
// 3
// 3
// 5
// Function Parameters
// -------------------
// s[] Size = 4
// s[] = [ 2, 3, 3, 5

//     Sample Output
// 3
// Explanation
// Inputs are s=[2,3,3,5] . Increasing
// subsequences are [2,3,5], [2,3],
// [3,5] and [2,5].
// The longest increasing sub-
// sequence has 3 elements.

/*
 * Complete the function below.
 */
function findLIS(s) {
    if (!s.length) return 0;

    const sequence = [1];
    let maxLength = 1;

    for (let current = 1; current < s.length; ++current) {
        sequence.push(1);
        
        for (let previous = 0; previous < current; ++previous) {
            if (s[previous] < s[current]) {
                sequence[current] = Math.max(sequence[current], sequence[previous] + 1);
            }
        }
        maxLength = Math.max(maxLength, sequence[current]);
    }

    return maxLength;
}
// 8/8 Test Cases.