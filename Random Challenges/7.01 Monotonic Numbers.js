// You are given an array of integers arr. Your task is to construct an array of integers of length arr.length - 2, where the ith 
// element is equal to 1 if arr[i], arr[i + 1], and arr[i + 2] are monotonic, otherwise 0.

// Return the resulting array of integers.

// Note: a, b, and c are considered monotonic, if the values are strictly increasing (a < b < c) or strictly decreasing (a > b > c).

// Example

// For arr = [1, 2, 1, -4, 5, 10], the output should be checkMonotonicity(arr) = [0, 1, 0, 1].

// output[0] = 0 because arr[0], arr[1], and arr[2] aren't monotonic (1 < 2 > 1).
// output[1] = 1 because arr[1], arr[2], and arr[3] are monotonic (2 > 1 > -4).
// output[2] = 0 because arr[2], arr[3], and arr[4] aren't monotonic (1 > -4 < 5).
// output[3] = 1 because arr[3], arr[4], and arr[5] are monotonic (-4 < 5 < 10).
// For arr = [10, 10, 10, 10, 10], the output should be checkMonotonicity(arr) = [0, 0, 0].

// Since all elements of arr are the same (not strictly increasing or strictly decreasing), all three sets of consecutive
//  elements of arr aren't monotonic.

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] array.integer arr

// An array of integers.

// Guaranteed constraints:
// 3 = arr.length = 1000,
// -109 = arr[i] = 109.

// [output] array.integer

// Return an array of 0s and 1s where the ith element represents whether arr[i], arr[i + 1], and arr[i + 2] are monotonic.

function checkMonotonicity(arr) {
    const result = [];
    
    for (let i = 0; i < arr.length - 2; ++i) {
        if (arr[i] < arr[i + 1] && arr[i + 1] < arr[i + 2]
            || arr[i] > arr[i + 1] && arr[i + 1] > arr[i + 2]) result.push(1);
        else result.push(0);
    }
    
    return result;
}
