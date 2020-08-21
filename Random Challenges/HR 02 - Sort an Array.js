// Given an array of integers, any array element
// can be moved to the end in one  move .
// Determine the minimum number of moves
// required to sort the array, ascending.
// Example:
// arr = [5, 1, 3, 2]
// Move the value  arr[2] = 3  to the end to get  arr
// = [5, 1, 2, 3].
// Move  arr[0] = 5  to the end to achieve the
// sorted array,  arr = [1, 2, 3, 5].
// The minimum number of moves required to
// sort the array is 2.
// Function Description
// Complete the function  getMinimumMoves in
// the editor below.
// getMinimumMoves has the following
// parameter:
//    int   arr[n]:  an array of integers
// Returns:
//      int : the minimum number of moves needed
// to sort the array in ascending order
// Constraints
// 1 ≤ n ≤ 10 5
// 0 ≤ arr[i] ≤ 10 6
// array elements are distinct
// Input Format For Custom Testing
// Sample Case 0
// Sample Input For Custom Testing
// STDIN    Function
// -----    --------
// 3 → arr[] size n = 3
// 1 → arr = [1, 2, 3]
// 2
// 3
// Sample Output
// 0
// Explanation
//  arr = [1, 2, 3]
// The array is already sorted, so no moves are
// necessary.
// Sample Case 1
// Sample Input For Custom Testing
// STDIN    Function
// -----    --------
// 3 → arr[] size n = 3
// 1 → arr = [1, 3, 2]
// 3
// 2
// Sample Output
// 1
// Explanation
// arr = [1, 3, 2]
// Move the value  arr[1] = 3  to the end to get
// arr = [1, 2, 3].
// the minimum number of moves required to
// sort the array is 1.

function getMinimumMoves(arr) {
    let moves = 0;

    for (let i = 1; i < arr.length; ++i) {
        if (arr[i] < arr[i - 1]) ++moves;
    }

    return moves;
}
// 3/8 Test Cases.

// This logic is flawed, think of cases like:
// [1,3,5,2] which should output 2.
// [3,2,1] which should output 2.