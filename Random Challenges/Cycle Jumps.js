/*
You're given an array of ints where each int represents a jump of its value in the array. For instance,
the int 2 represents a jump of two indicies foward in the array; the integer -3 represents a jump of
three indices backward in the array;
If a jump spills past the array's bounds, it wraps over to the other side. For isntance, a jump of -1
at index 0 brings us to the last index in the array. Similarly, a jump of 1 at the last index in the array
brings us to index 0.
Write a function that return a boolean representing whether the jumps in the array form a single cycle.
A single cycle occurs if, starting at any index in the array and following the jumps, every element in
the array is visited exactly once before landing back on the starting index.
Sample Input: array = [2, 3, 1, -4, -4, 2]
Sample Output: true
*/

// [1,1,-2] => true
// [0] => true
// [0, 1] => false
// [1,2,3,-1,1] => false

// check function
    // call cycle function, for every index in the array.


// check for cycle function
    // declare hash of indexes.
    // declare a current index starting with passed index.
    // loop until it breaks (follow the jumps until we find a visited index.)
        // if index is present, break loop.
        // else add index to our hash.
        // update index with the jump
    // if hash is as big as array. true return positive.
    // return a false.


function hasSingleCycle(array) {
    for (let i = 0; i < array.length; ++i) {
        if (!checkCycle(array, i)) return false;
    }

    return true;
}


function checkCycle(array, startIndex) {
    const visitedIndex = {};
    let currentIndex = startIndex;

    while (true) {
        if (visitedIndex[currentIndex]) break;

        visitedIndex[currentIndex] = true;
        currentIndex = currentIndex + array[currentIndex];
        currentIndex = currentIndex < 0 ? array.length + (currentIndex % array.length) : currentIndex % array.length;
    }

    return Object.keys(visitedIndex).length === array.length;
}
/*
input = [-11, 1, -2]
1
input = [1,1,-2]
i = 0
startIndex = 0
visitedIndex = {
    0: true,
    1: true,
    2: true
}
currentIndex = 0
*/
console.log(hasSingleCycle([2, 3, 1, -4, -4, 2]));
console.log(hasSingleCycle([1,2,3,-1,1]));

// This solution takes Polynomial Time and Linear Space.
// We can do better. By checking if the "end point" is the same as "start point", if we visit every point only once,
// and end up in the same spot. Then we have a full cycle. If we end up in a different index, then, even if we visited
// every node, we have not completed a full cycle.
