// From an array of integers, Find maximum difference between two elements in the array where smaller element appears before the larger element
// The fucntion should also return found maximum difference between two elements and both element that produces the  maximum difference in an array
// arry = [ 2, 7, 9, 5, 1, 3, 5, 10 ]

// Iterate through the array.
// For each element, iterate again.
// If the second element is greater than the first, compare it's difference.
// If the difference is greater or equal than before.
// Save the index.
// Save the difference
// return in an array the difference, and the elements based on their indexes.

// [2, 5, 10] => [8, 2, 10]
// [5, 10, 1, 6] => [5, 1, 6]

function maxDifference(array) {
    let maxDif = 0;
    let smallIndex = 0;
    let bigIndex = 0;
    for (let i = 0; i < array.length - 1; ++i) {
        const currentElement = array[i];
        for (let j = i + 1; j < array.length; ++j) {
            const nextElement = array[j];
            if (nextElement > currentElement) {
                const difference = nextElement - currentElement;
                if (maxDif <= difference) {
                    maxDif = difference;
                    smallIndex = i;
                    bigIndex = j;
                }
            }
        }
    }
    return [maxDif, array[smallIndex], array[bigIndex];
}
// [2, 5, 10]
//           ^
// [ 2, 7, 9, 5, 1, 3, 5, 10 ] => [9, 1, 10]
//                                 ^
// maxDif = 9
// smallIndex = 4
// bigIndex = 7
// i = 
// j = 
// currentElement = 
// nextElement = 
// difference = 