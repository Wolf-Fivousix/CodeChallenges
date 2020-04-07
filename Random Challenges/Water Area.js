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
// This solution does NOT work. it only works if the pilars increase as we move inwards. See array1 example.
function waterArea1(array) {
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


const array1 = [0, 8, 0, 0, 5, 0, 0, 10, 0,  0,   1,  1,  0,  3];
const array2 = [0, 0, 0, 0, 3, 0, 0, 0];
const array3 = [1, 0, 3, 0, 5, 0, 0];
const array4 = [2, 0, 2];

// console.log(waterArea1([]) === 0);
// console.log(waterArea1(array1) === 48);
// console.log(waterArea1(array2) === 0);
// console.log(waterArea1(array3) === 4);
// console.log(waterArea1(array4) === 2);


// Ben's directed solution.
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

// My own words translation:
// Build two arrays: One has the maximum value for the left most element. The other the right most element.
// Iterate through the original array a 3rd time and grab the minimum between both arrays, minus the height of the current element.
// Add that water area.

// This solution is not bad, still linear time, but expensive with space 2x N. 
function waterArea2(array) {
  const leftWalls = [];
  let bigWall = 0;
  for (let i = 0; i < array.length; ++i) {
    if (array[i] > bigWall) bigWall = array[i];
    leftWalls.push(bigWall);
  }

  const rightWalls = [];
  bigWall = 0;
  for (let i = array.length - 1; i >= 0; --i) {
    if (array[i] > bigWall) bigWall = array[i];
    rightWalls.unshift(bigWall);
  }
  // console.log(leftWalls);
  // console.log(rightWalls);
  
  let water = 0;
  array.forEach((wall, index) => {
    water += Math.min(leftWalls[index], rightWalls[index]) - wall;
  });

  return water;
}

// console.log(waterArea2([]) === 0);
// console.log(waterArea2(array1) === 48);
// console.log(waterArea2(array2) === 0);
// console.log(waterArea2(array3) === 4);
// console.log(waterArea2(array4) === 2);

// Let's make it better by using only one array.
// We make the left heighest wall like before, and then come back and update it with the right heighest wall.
// That also saves us multiple calls to Math.min.
// Final is linear time (with 3xN) with linear space.
function waterArea3(array) {
  const maxHeight = [];
  let bigWall = 0;
  for (let i = 0; i < array.length; ++i) {
    if (array[i] > bigWall) bigWall = array[i];
    maxHeight.push(bigWall);
  }

  bigWall = array[array.length - 1];
  for (let i = maxHeight.length - 1; i >= 0; --i) {
    if (bigWall < array[i]) bigWall = array[i];
    if (bigWall < maxHeight[i]) maxHeight[i] = bigWall;
  }
  
  let water = 0;
  array.forEach((wall, index) => {
    water += maxHeight[index] - wall;
  });

  return water;
}

console.log(waterArea3([]) === 0);
console.log(waterArea3(array1) === 48);
console.log(waterArea3(array2) === 0);
console.log(waterArea3(array3) === 4);
console.log(waterArea3(array4) === 2);