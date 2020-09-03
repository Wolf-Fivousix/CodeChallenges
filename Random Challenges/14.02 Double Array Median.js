// Given two sorted arrays of equal length of integers, find the overall median of the two lists.
// median([1,2,6], [3,4,5]) == 3.5

// [1, 1, 1, 1, 5] == 1

// [1,2,3,4,5,6]

// define a empty array, merge
// define two pointers starting at 0.
// loop until one of the pointer run out of array range.
    // compare both elements and add the smallest to merge array.
    // move the pointer accordinly
// loop until the second pointer is out of range.
    // add each element to merge array.
// return the division of merge element at index array length and array lenght - 1.

function findMedian(array1, array2) {
    if (!array1.length) return 0;
    
    const merge = [];
    let index1 = 0;
    let index2 = 0;
    const arraySize = array1.length;
    
    while (index1 < arraySize && index2 < arraySize) {
        if (array1[index1] < array2[index2]) {
            merge.push(array1[index1]);
            ++index1;
        }
        else {
            merge.push(array2[index2]);
            ++index2;
        }
    }
    
    if (index1 < arraySize) {
        merge.push(array1[index1]);
        ++index1;
    }
    else {
        merge.push(array2[index2]);
        ++index2;
    }
    
    return (merge[arraySize - 1] + merge[arraySize]) / 2;
}

console.log(findMedian([1,2,3], [4,5,6]));
// console.log(findMedian([1,2,6], [3,4,5]));
// console.log(findMedian([1,1,1], [1,1,5]));