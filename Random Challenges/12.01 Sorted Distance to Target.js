// Given an array of sorted numbers (can be negative) and a target num
// return values of the original numbers sorted by the order of the distance between each number and the target num

// Ex) 

// I: [-20, -8, 0, 1, 2, 20], 3
// O: [2, 1, 0, -8, 20, -20]
// [0, -8, -20]

// I: [1,2], 5
// O: [2, 1]

// No empty input.

// [3,3], 4

// I: [-20, -8, 0, 1, 2, 4, 5, 20], 3
// O: [2, 4, 1, 5, 0, -8, 20, -20]
// [2, 4,  1, 5, 0, -8, -20, .....]

// Find the position (index) for our target inside the input array.
    // iterate through input and until we find a value that is greater than target.
    // return that index.
// Create two pointers. One is before index (index -  1), the second is after index (index).
// Define output array as empty array.
// While output lenght is lesser than input.
    // if before inside range AND after is inside range AND before distance lesser or equal after distance.
        // push before elemnt to output.
        // decrease before pointer.
    // else if after is inside range
        // push after to output.
        // increase after pointer.
// return our output array.

function sortedDistance(input, target) {
    let after = findIndexOf(input, target);
    let before = after - 1;
    const result = [];
    
    while (before > -1 && after < input.length) {
        if (Math.abs(input[before] - target) <= Math.abs(input[after] - target)) {
            result.push(input[before]);
            --before;
        }
        else {
            result.push(input[after]);
            ++after;
        }
    }

    // One of the pointers is out of range, keep building result with the one in range.
    while (result.length < input.length) {
        const i = before > -1 ? before : after;
        result.push(input[i]);
        before > -1 ? --before : ++after;
    }

    return result;
}

function findIndexOf(input, target) {
    let start = 0;
    let end = input.length - 1;

    while (start <= end) {
        let middle = Math.floor(start + ((end - start) / 2));

        if (input[middle] === target) return middle;
        if (input[middle] < target) {
            start = middle + 1;
        }
        else end = middle - 1;
    }

    return start;
}
// [-5, -2, -1, 2, 3, 4, 20] 3,

// I: [-20, -8, 0, 1, 2, 20], 3
// O: [2, 1, 0, -8, 20, -20]
// console.log(sortedDistance([1, 2], 5));
// console.log(sortedDistance([-20, -8, 0, 1, 2, 20], 3));
// console.log(sortedDistance([ -20, -8, -5, -2, -1, 0], 3));
// console.log(sortedDistance([ -20, -8, 0, 1, 2, 4, 20], 3));
console.log(findIndexOf([1, 2], 1));
console.log(findIndexOf([1, 2], 5));
console.log(findIndexOf([-20, -8, 0, 1, 2, 20], 3));
console.log(findIndexOf([-20, -8, 0, 1, 2, 3, 20], 3));
console.log(findIndexOf([-20, -8, -5, -2, -1, 0], 3));
console.log(findIndexOf([-20, -8, 0, 1, 2, 4, 20], -20));
console.log(findIndexOf([1, 2, 3, 4, 6, 7, 8], 0) === 0);
console.log(findIndexOf([0, 1, 2, 3, 4, 6, 7, 8], 0) === 0);
console.log(findIndexOf([0, 1, 2, 3, 4, 6, 7, 8], 5) === 5);
console.log(findIndexOf([0, 0, 0, 0, 0], 0));
// I: [ -20, -8, -5, -2, -1, 0], 3
// I: [ -20, -8, 0, 1, 2, 4, 20], 3