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
//// Kevin proposed solution:
////////////////////////////////////////////////////////////////