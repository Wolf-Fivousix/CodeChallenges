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

// First we need to find the smallest value in the sequence. That is how many elements we DO NOT need to move.
// Then we repeat the process from that point forward, until we reach the end of the array.
// At this point we have the size of the smallest sequence inside the array. Everything else needs to be moved.
function getMinimumMoves(arr) {
    let start = 0;
    let counter = 0;
    while (start < arr.length) {
        for (let i = start; i < arr.length; ++i) {
            if (arr[i] < arr[start]) start = i;
        }
        ++counter;
        ++start;
    }

    return arr.length - counter;
}

// Not a great solution, but get's the job done.
// Polynomial Time Complexity.
// Constant Space Complexity.


// Solution shared by Natalie.
function getMinimumMoves2(arr) {
    let copy = [...arr]
    copy = copy.sort((a,b)=>a-b);
    let count =0;
    for(let i=0; i < arr.length;i++){
        if(arr[i] === copy[count])count++
    }
    return arr.length - count
}

// This solution is great on time complexity, Log Linear.
// But is Linear in Space.

console.log(getMinimumMoves([5,1,3,2]) === 2);
console.log(getMinimumMoves([1,2,3]) === 0);
console.log(getMinimumMoves([1,3,2]) === 1);
console.log(getMinimumMoves([1,3,5,2]) === 2);
console.log(getMinimumMoves([3,2,1]) === 2);