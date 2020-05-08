// Alice and Bob work in a beautiful orchard. There are N apple trees in the orchard. The apple trees are arranged in a row and they are numbered from 1 to N.
// Alice is planning to collect all the apples from K consecutive trees and Bob is planning to collect all the apples from L consecutive trees. They want to choose two disjoint segments (one consisting of K trees for Alice and the other consisting of L trees for Bob) so as not to disturb each other. What is the maximum number of apples that they can collect?
// Write a function:
// function solution(A, K, L);
// that, given an array A consisting of N integers denoting the number of apples on each apple tree in the row, and integers K and L denoting, respectively, the number of trees that Alice and Bob can choose when collecting, returns the maximum number of apples that can be collected by them, or −1 if there are no such intervals.
// For example, given A = [6, 1, 4, 6, 3, 2, 7, 4], K = 3, L = 2, your function should return 24, because Alice can choose trees 3 to 5 and collect 4 + 6 + 3 = 13 apples, and Bob can choose trees 7 to 8 and collect 7 + 4 = 11 apples. Thus, they will collect 13 + 11 = 24 apples in total, and that is the maximum number that can be achieved.
// Given A = [10, 19, 15], K = 2, L = 2, your function should return −1, because it is not possible for Alice and Bob to choose two disjoint intervals.
// Assume that:
// N is an integer within the range [600]
// K and L are integers within the range [1..N − 1];
// each element of array A is an integer within the range [1..500].

// In your solution, focus on correctness. The performance of your solution will not be the focus of the assessment.

function solution(A, K, L) {
    if (A.length < K + L) return -1;
    let maxApples = 0;
    for (let i = 0, alice = K - 1; alice < A.length; ++i, ++alice) {
        const aliceApples = countApples(A, i, alice);
        // console.log("Alice: ", i, "--", alice, aliceApples);
        for (let j = 0, bob = L - 1; bob < A.length; ++j, ++bob) {
            if (bob < i || j > alice) {
              const bobApples = countApples(A, j, bob); 
            //   console.log(aliceApples, bobApples);
            //   console.log("Bob: ", j, "--", bob, bobApples);
              maxApples = Math.max(maxApples, aliceApples + bobApples);
            }
        }
    }
    return maxApples;
}
function countApples(array, start, end) {
    let apples = 0;
    for (let i = start; i <= end; ++i) {
        apples += array[i];
    }
    return apples;
}
// Optimized approach:
// The current solution takes a Polynomial approach in order to calculate the result.
// There is a better way that we can do this.
// By using more space and calculating all the max apple pics, we can find the optimal picks for both Alice and Bob.
// With that, we can then iterate through the new arrays finding the best sum between them, as long
// as the indexes of the picks satisfy the distance between ranges.
// function solution(A, K, L) {
//     if (A.length < K + L) return -1;
//     const allicePicks = [];
//     let appleCount = 0;
//     for (let i = 0; i < A.length; ++i) {
//         appleCount += A[i];
//         if (i - K >= 0) appleCount -= A[i - K];
//         allicePicks.push(appleCount);
//     }
//     const bobPicks = [];
//     appleCount = 0;
//     for (let i = 0; i < A.length; ++i) {
//         appleCount += A[i];
//         if (i - L >= 0) appleCount -= A[i - L];
//         bobPicks.push(appleCount);
//     }
//     console.log(allicePicks);
//     console.log(bobPicks);
//     const distance = Math.min(K, L);
//     let maxApples = 0;
//     for (let i = 0; i < allicePicks.length; ++i) {
//         for (let j = 0; j < bobPicks.length; ++j) {
//             if ()
//         }
//     }
// }