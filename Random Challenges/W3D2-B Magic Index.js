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
// Until the current value is lower than SIZE of input, there is a chacne to have the last element as answer.