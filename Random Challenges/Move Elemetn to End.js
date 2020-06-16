// Move Element To End
// You're given an array of integers and an integer. Write a function that moves all instances of that integer in the array to the end of the array and return the array.
// The function should perform this in place(i.e., it should mutate the input array) and doesn't need to maintain the order of the other integers.
// Sample:
// Input: array = [2, 1, 2, 2, 2, 3, 4, 2]
//        toMove = 2
// Output: [1, 3, 4, 2, 2, 2, 2, 2] // the numbers 1, 3, and 4 could be ordered differently

function moveElementToEnd(array, toMove) {
    let end = array.length - 1;
    let start = 0;

    while (array[end] === toMove) --end;

    while (start < end) {
        if (array[start] === toMove) {
            const temp = array[start];
            array[start] = array[end];
            array[end] = temp;
            --end;
        }
        ++start;
    }

    return array;
}

console.log(moveElementToEnd([2, 1, 2, 2, 2, 3, 4, 2], 2));