// Given an array of integers, you
// may perform certain operations in
// order to satisfy some constraints.
// The constraints are as follows:
// The first array element must be
// 1.
// For all other elements, the
// difference between adjacent
// integers must not be greater
// than 1. (In other words, for
// 1 ≤ i < n, arr[i] - arr[i-1] ≤ 1.)
// To accomplish this, you can
// perform the following operations:
// Rearrange the elements in any
// way.
// Reduce any element to any
// number that is at least 1.
// What is the maximum value that
// can be achieved for the final
// element of the array by following
// these operations and constraints?
// For example, let's say arr = [3, 1,
// 3, 4]. Here, you can subtract 1
// from the first element, making the
// array [2, 1, 3, 4]. Then, this can be
// arranged into [1, 2, 3, 4]. The final
// element's value is 4, which is the
// maximum value that can be
// achieved. Therefore, the answer is
// 4.
// Function Description
// Complete the function
// getMaxValue in the editor below.
// getMaxValue has the following
// parameter:

// 1/15 Test cases

// Test 0
// Input:  [ 1, 3, 2, 2 ]
// Repeats  [ 2 ]
// answerArray:  [ 1, 2, 3, 4 ]

// Test 1
// Input:  [ 3, 2, 3, 5 ]
// Repeats  [ 3 ]
// answerArray:  [ 1, 2, 3, 4 ]

// Test 2
// Input:  [ 15, 9, 1, 5, 15, 3, 3, 4, 6, 9 ]
// Repeats  [ 3, 9, 15 ]
// answerArray:  [ 1 ]

/*
 * Complete the 'getHeight' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */
// One of the constrains are for positive only numbers, so no need to worry about Negative values.
function getHeight(arr) {
    // For now I am going to assume there is always a number 1 to start our array correctly.
    // Sort the array.
    // Make empty array.
    // Iterate through the sorted array.
        // Take care of first element (for now, assume is 1).
        // compare Current Element to last element in Answer Array.
        // While Sorted Array length > Current INDEX (our current element) AND difference is great than 2
            // Pop the last element of array and reduce it until Answer Array, last element, +1.
    // Return Answer Array last Element value.

    // console.log("Input: ", arr);
    let sorted = arr.sort((a, b) => a - b);
    // console.log("Sorted: ", sorted);
    let answerArray = [];
    let repeats = getRepeats(sorted);
    // console.log("Repeats ", repeats);
    if (sorted[0] !== 1) {
        repeats.length ? repeats.shift() : sorted.pop();
        answerArray.push(1);
    }
    else {
        answerArray.push(sorted.shift());
    }

    for (let i = 0; i < sorted.length; ++i) {
        // console.log(answerArray, " --- ", sorted[i], " ---- ", repeats);

        if (sorted[i] - answerArray[answerArray.length - 1] <= 1) answerArray.push(sorted[i]);
        else {
            while (sorted.length >= i + 1 && sorted[i] - answerArray[answerArray.length - 1] > 1) {
                // There is a problem here. If the current value is heigher than the first element in the repeats, this would not work.
                // Let's flush the repeats until it matches the current value requirement.
                while (repeats.length && repeats[0] <= sorted[i]) repeats.shift();

                repeats.length ? repeats.shift() : sorted.pop();
                answerArray.push(answerArray[answerArray.length - 1] + 1);
            }
        }
    }
    // console.log("answerArray: ", answerArray);
    return answerArray[answerArray.length - 1];
}
function getRepeats(array) {
    let numbers = {};
    for (let i = 0; i < array.length; ++i) {
        const value = array[i];
        if (numbers[value]) ++numbers[value];
        else numbers[value] = 1;
    }
    const repeats = Object.keys(numbers).filter(v => numbers[v] > 1)
    let result = [];
    for (let i = 0; i < repeats.length; ++i) {
        result.push(...Array(numbers[repeats[i]] - 1).fill(Number(repeats[i])));
    }
    return result;
}

console.log(getHeight([ 1, 3, 2, 2 ]) === 3);
console.log(getHeight([ 3, 2, 3, 5 ]) === 4);
console.log(getHeight([ 15, 9, 1, 5, 15, 3, 3, 4, 6, 9 ]) === 10);

// This solution is clearly not concise, but is working for this simpler test cases.
// 4 / 15 Test Cases. Meaning even though it works on the more simple inputs. It is not passing edge cases.