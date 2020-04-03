// You are given a non-empy array of integers. Each element represents
// the maximum number of steps you can take forward.
// For example, if the element at index 1 is 3, you can go from index 1
// to index 2, 3, or 4. Write a function that returns the minimum number of jumps
// needed to reach the final index.
// Note that jumping from index i to index i + x always constitutes 1 jump,
// no matter how large x is.
// ex:
// input: [3, 4, 2, 1, 2, 3, 7, 1, 1, 1, 3]
// output: 4
// explanation: 
// 3 --> 2 --> 2 --> 7 --> 3 or 3 --> 4 --> 2 --> 7 --> 3, etc 
// -->


////////////////////////////////////////////////////////////////
//// Kevin proposed solution:
////////////////////////////////////////////////////////////////
// [1,0,1]
// [3, 2, 2, 1]
// [3, 4, 2, 1, 2, 3, 7, 1, 1, 1, 3]
//     ^
//        [         ] 
    
// take into account the current posisition of each number

// jumps = 0
// iterate through the array starting from idx = 0
//   iterate through all numbers within the range of i+arr[i] to i+1
//     check if value idx is last value
//     take largest number and add its index value to weigh choices
//     // 3 + 1 => 4, 2 + 2 => 4, 1 + 4 => 5
//     jumps += 1

function minJumps (arr){
  let jumps = 0;
  let largest = -Infinity;
  let i = 0;

  while (i < arr.length){
    const range = arr[i];

    for (let j = i + range; j > i; j--){

      if (j >= arr.length) return jumps + 1;

      if (arr[j] + j > largest){
        largest = arr[j];
        i += j;
      }
      jumps += 1;
    }
  }

  return jumps;
}

////////////////////////////////////////////////////////////////
//// My solution:
////////////////////////////////////////////////////////////////
// I'll consider that there are no negative nor 0's in the array.

// We start at the first element and move towards the last element.
// Start with 0 jumps.
// Start index at 0.
// Iterate through the array until the index is arr.length - 1 (last element).
    // Best move is unknown.
    // Iterate through the "window" provided by the value in the current index.
        // Find the best move option. (value + it's own index)
        // If the current best move hits the target (or pass it) we can return early with jumps + 1
    // Update the index with the best move.
    // Update Jumps +1.
// Return jumps.

function minJumpsMe(array) {
    let jumps = 0;
    let index = 0;
    while (index < array.length - 1) {
        let bestMove = index + 1; // Only because we know it is non-zero and non-negative.
        for (let i = index + 1; i <= index + array[index] && i < array.length; ++i) {
            if (array[i] + i > bestMove) bestMove = i;
            if (bestMove >= array.length - 1) return jumps + 1;
        }
        index = bestMove;
        ++jumps;
    }

    return jumps;
}

// [1,2,3,1,1] => 1>2, 2>3, 3>1     3 jumps.
// [3, 4, 2, 1, 2, 3, 7, 1, 1, 1, 3]    4 jumps.

console.log(minJumpsMe([1,2,3,1,1]) === 3);
console.log(minJumpsMe([3, 4, 2, 1, 2, 3, 7, 1, 1, 1, 3]) === 4);
console.log(minJumpsMe([15]) === 0);
console.log(minJumpsMe([15, 3]) === 1);