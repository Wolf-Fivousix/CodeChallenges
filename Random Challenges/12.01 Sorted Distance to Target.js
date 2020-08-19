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
    
    while (result.length < input.length) {
        if (before > -1 && after < input.length && Math.abs(input[before] - target) <= Math.abs(input[after] - target)) {
            result.push(input[before]);
            --before;
        }
        else if (after < input.length) {
            result.push(input[after]);
            ++after;
        }
        else {
            result.push(input[before]);
            --before;
        }
    }
    
    return result;
}

function findIndexOf(input, target) {
    for (let i = 0; i < input.length; ++i) {
        if (input[i] >= target) return i;
    }
    
    return input.length;
}
