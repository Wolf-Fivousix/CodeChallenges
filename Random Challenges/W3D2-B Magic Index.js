// W3D2 B
// The magic index of an array occurs when the element at that index is the same as the index itself. 
// More simply, the magic index is when array[i] === i. Write a recursive method, findMagicIndex, 
// that takes in an array and returns the index that is the magic index. 
// The method must take O(logN) time and O(logN) space.

// Constraints:

// The array is sorted
// The array may have multiple magic indices. If this is the case, return the leftmost occurance.
// The elements in the array don't have to be distinct
// The magic index doesn't always exist; return -1 if it doesn't exist
// The array may have negative values

// Examples: 
// a[i]  -4, -2, 2, 6, 6, 6, 6, 10
// i      0,  1, 2, 3, 4, 5, 6, 7
// Result: 2

// a[i]  -4 -2  1  6  6  6  6 10
//   i    0  1  2  3  4  5  6  7
// Result: 6

// a[i]  -4 -2  1  6  6  6  7 10
//   i    0  1  2  3  4  5  6  7
// Result: -1

// 0  1  2
// [1, 3, 4] => -1
// [0, 1, 1] => 0
// [10, 10, 10, 10, 10, 20, 20, 30, 40] => -1
// [0, 10, 10, 10, 10, 20, 20, 30, 40] => 0

// [0, 0, 0, 0, 0, 0, 0, 0, 1]
// [9, 9, 9, 9, ......................, 10]

// 9 size

// a[i]   1  6  6  6  6
//   i    2  3  4  5  6

// We know that if lowest value of input is higher than the SIZE of input, there is no answer.
// We know that if highest value of inpput is lower than 0, there is no answer.
// Until the current value is lower than 0, there is a chance to have 0 as answer.
// Until the current value is lower than SIZE of input, there is a chance to have the last element as answer.

function findMagicIndex(array, start, end) {
    if (end < start || start < 0 || end >= array.length)
      return -1;
  
    const mid = Math.floor((start + end) / 2);
 
    const leftEnd = Math.min(mid - 1, array[mid]);
    const leftResult = findMagicIndex(array, start, leftEnd);
  
    if (leftResult !== -1)
      return leftResult;

    if (mid === array[mid])
      return mid;

    const rightStart = Math.max(mid + 1, array[mid]);
    const rightResult = findMagicIndex(array, rightStart, end);
  
    if (rightResult !== -1)
      return rightResult;
  
    return -1;
}

const a = [0,1,3,4,5,6,6];
const b = [-4, -2, 1, 6, 6, 6, 6, 10];

console.log(findMagicIndex(a, 0, a.length - 1) === 0);
console.log(findMagicIndex(b, 0, b.length - 1) === 6);

// Couple notes about this solution:
// There should be a helper function to serve as interface.
// The variable naming is not great, can be better.
// I don't quite get what is the purpose of the left/right Ends... Why are we picking between Index and Value?

// Here's the catch: Because INDEX and VALUE need to be the same, that means that when the VALUE is inside a higher INDEX
// we know for sure (because data is sorted) that every INDEX greater than that value is no longer valid. Ex:
// index 12, value 6 => If the value is already at 6, that means that the closest index that could be a Magic Index is 6 itself.
// therefore we grab the MIN between the currentIndex and the currentValue.
// Same principle for the inverse, when the index is lower than the value.

// This is the core case for picking where to cut our indexes. Given, the worse case would be where all the index/value pairing is off by 1,
// meaning we'd have to check every single element once. Which makes me wonder if overcomplicating this solution from Linear to Logaritimic is worth it.