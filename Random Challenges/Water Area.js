// Find how much water can be poured into the area defined by an array of non-negative integers.
// Trailing 0's does not hold any water.

// currentHeight =     [0, 8, 0, 0, 5, 0, 0, 10, 0,  0,   1,  1,  0,  3]
// leftMax =           [0, 8, 8, 8, 8, 8, 8, 10, 10, 10,  10, 10, 10, 10]
// rightMax =          [10,10,10,10,10,10, 10,10,3,  3, 3, 3, 3, 3]
// currentArea =       [0, 0, 8, 8, 3, 8, 8, 0,  3,  3,  2,   2, 3,  0]

// area =         8  8  3  8  8      3  3  2  2  3
// output = 48

// [10, 10, 10, 0, 0, 5]

// [3, 0, 200, 0, 200, 0, 5]   // => 208

// [3, 1, 200, 0, 200, 0]

// 3, 1, 200

// left = 3
// right = 200
// h = 1  
// area = 0

// two pointers.
// one at 0, one at length - 1.
// Iterate through array, check each element, update pointers and add water to area.

function waterArea(array) {
  let leftWall = 0;
  let rightWall = array.length - 1;

  // Find a valid point for the pointers.
  while (leftWall < array.length && array[leftWall] < 1) {
    ++leftWall;
  }
  while (rightWall > 0 && array[rightWall] < 1) {
    --rightWall;
  }
  // console.log(left, right);

  let left = leftWall + 1;
  let right = rightWall - 1;
  let water = 0;

  // console.log(array);
  while(left < right) {
    let min = Math.min(array[leftWall], array[rightWall]);
    if (array[left] <= min) water += min - array[left];
    if (array[left] > array[leftWall]) leftWall = left;
    // console.log(array[left], min, water);
    ++left
    if (array[right] <= min) water += min - array[right];
    if (array[right] > array[rightWall]) rightWall = right;
    // console.log(array[right], min, water);
    --right;
  }
  
  return water;
}

// This solution does not work. it only works if the pilars increase as we move inwards. See array1 example.
const array1 = [0, 8, 0, 0, 5, 0, 0, 10, 0,  0,   1,  1,  0,  3];
const array2 = [0, 0, 0, 0, 3, 0, 0, 0];
const array3 = [1, 0, 3, 0, 5, 0, 0];
const array4 = [2, 0, 2];

console.log(waterArea([]) === 0);
console.log(waterArea(array1) === 48);
console.log(waterArea(array2) === 0);
console.log(waterArea(array3) === 4);
console.log(waterArea(array4) === 2);







// area at current index = Math.min(tallest left wall, tallest right wall) - value at current index
// create 2 arrays to store tallest left wall and tallest right wall
  // initialize an array of same length as input array, filled with 0 (call it leftMax)
  // initialize max left height to be 0
  // iterate through the array
    // current index in input array is current height
    // current index in leftMax is currentLeftMax
    // replace current index in leftMax with Math.max(current height, currentLeftMax)
  // comment: now we have an array of highest possible left wall at each index
  // we do the same for right wall
  // initialize an array of same length as input array, filled with 0 (call it rightMax)
  // iterate backwards
    // current indes in input array is current height
    // current inde4x in rightMax is currentRightMax
    // replace current index in rightMax with Math.max(current height, currentRightMax)
  // now we have an array of highest possible right wall at each index
// iterate throught input array
  // calculate water area
    // current water area = Math.min(leftMax[i], rightMax[i]) - input[i]
// return sum of area array