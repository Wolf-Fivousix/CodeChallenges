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

// Solution shared by Natalie.
function getMinimumMoves(arr) {
    // Write your code here
    let copy = [...arr]
    copy = copy.sort((a,b)=>a-b);
    let count =0;
    for(let i=0; i < arr.length;i++){
        if(arr[i] === copy[count])count++
    }
    return arr.length - count
}

// Let's build on top of that.
// What we need here if find the Longest Increasing Subsequence.
// We don't need the sequence itself, just it's length. There is a Medium Leet Code problem exactly like that: #0300.
// Let's use that to our advantage. I can't do the Log Linear solution myself as I write this, but knowing it is possible is important.
// Once we have that sequence, all we need is to return the difference between the input lenght and that length.
function getMinimumMoves(arr) {
    console.log("length: ", lengthOfLIS(arr));
    return arr.length - lengthOfLIS(arr);
}

var lengthOfLIS = function(nums) {
    
    if(!nums.length) return 0;
    
    // dynamic length because JavaScript is awesome like that :)
    // hence we don't need to track of the current running length of tails
    const tails = [];
    
    tails[0] = nums[0];
    
    for(let i = 1; i < nums.length; i++) {
        
        // replace current nums[i] with head if it's smaller
        if(nums[i] < tails[0]) {
            tails[0] = nums[i];     
        // if current nums[i] is bigger than the largest value we've recorded
        // we can extend our tails by current nums[i]
        } else if(nums[i] > tails[tails.length-1]) {
            tails.push(nums[i]);
        } else {
            // using binary search to find the insertion point of current nums[i]
            // return r because we're looking to replace index of tail that's greater than nums[i]
            let l = 0;
            let r = tails.length-1;
            while(l < r) {
                const mid = (l+r)/2 >> 0;
                if(tails[mid] >= nums[i]) {
                    r = mid
                } else {
                    l = mid + 1;
                }
            }
            tails[r] = nums[i];
        }
        
    }
    
    return tails.length;  
};

// Nop... It is not about the longest sequence either. Darn it.

console.log(getMinimumMoves([1,3,5,2]));
console.log(getMinimumMoves([3,2,1]));