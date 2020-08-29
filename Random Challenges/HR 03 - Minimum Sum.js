// 5. Minimum Sum
// Given an array of integers, perform some
// number  k  of operations. Each operation consists
// of removing an element from the array, dividing
// it by 2 and inserting the ceiling of that result
// back into the array. Minimize the sum of the
// elements in the final array.
// Example:
// nums = [10, 20, 7] 
// k = 4 
//                           
// Pick    Pick/2    Ceiling         Result
//  Initial array                           [10, 20, 7]
// 7           3.5            4            [ 10, 20, 4]
// 10        5                5               [5, 20, 4]
// 20        10            10               [5, 10, 4]
// 10        5                5                [5, 5, 4]
// The sum of the final array is  5 + 5 + 4 = 14,  and
// that sum is minimal.
// Function Description
// Complete the function  minSum in the editor
// below.
// minSum has the following parameters:
//      int nums[n]:  an array of integers, indexed  0 to
// n-1
//      int k:  an integer
// Returns
//      int:  the minimum sum of the array after
// k  steps
// Constraints
// 1 ≤ n ≤ 10 5
// 1 ≤ num[i] ≤ 10 4 ( where 0 ≤ i < n)
// 1 ≤ k ≤ 10^6

// Sample Case 0
// Sample Input For Custom Testing
// STDIN    Function
// -----    --------
// 1    →   nums[] size n = 1
// 2    →   nums = [2]
// 1    →   k = 1
// Sample Output
// 1
// Explanation
// In the first operation, the number  2 is reduced
// to  1.
// Sample Case 1
// Sample Input For Custom Testing
// STDIN    Function
// -----    --------
// 2    →   nums[] size n = 2
// 2    →   nums = [2, 3]
// 3
// 1    →   k = 1
// Sample Output
// 4
// Explanation
// In the first operation, either of the numbers
// may be reduced.
// If the number  2 gets reduced to  1 , the sum of
// the array is  4 .
// If the number 3 gets reduced to  2 ( 3 divided by
// 2 equals  1.5, ceil(1.5) = 2 ), the sum of the array
// is  4 .
// The minimum sum of the array after one
// operation is  4.


/*
 * Complete the 'minSum' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY num
 *  2. INTEGER k
 */

function minSum(num, k) {
    // iterate K times.
        // Search for the max value in the array and get it's index. (operating on the given input)
        // Perform the division on the index.
    // return the sum of the resulting array.

    for (let i = 0; i < k; ++i) {
        const maxIndex = findMaxIndex(num);
        num[maxIndex] = Math.ceil(num[maxIndex] / 2);
    }

    return num.reduce((sum, value) => sum + value, 0);
}

function findMaxIndex(numbers) {
    if (!numbers.length) return -1;
    let maxIndex = 0;

    for (let i = 0; i < numbers.length; ++i) {
        if (numbers[i] > numbers[maxIndex]) maxIndex = i;
    }

    return maxIndex;
}

// 6/12 Test Cases - Last 6 tests fail due to efficiency.


// Convert from array into a hash (we need constant access and write times)
    // keep track of the highest key (values)
    // values are how many times the element appears.

// Iterate K number of times
    // While the "maxKey" is invalid, decrement.
    // Get tha number (if it was the last in the hash (value count of 1) delete it.)
    // Make the division and add back into the hash.

// Iterate through the hash and calculate the sum.
// Return the sum.
function minSum(num, k) {
    const hash = hashMe(num);
    let maxKey = Math.max(...num);
    
    for (let i = 0; i < k; ++i) {
        while (!hash[maxKey]) --maxKey;
        if (hash[maxKey] === 1) delete hash[maxKey];
        else --hash[maxKey];

        const division = Math.ceil(maxKey / 2);

        if (hash[division]) ++hash[division];
        else hash[division] = 1;
    }

    let sum = 0;
    for (const value in hash) sum += value * hash[value];

    return sum;
}

function hashMe(array) {
    const hash = {};
    array.forEach(value => {
        if (hash[value]) ++hash[value];
        else hash[value] = 1;
    });

    return hash;
}

// 12/12 Test Cases

// Polynomial Time Complexity, O (K * DISTANCE) where K is given and Distance is the gap between the smallest and greatest value.
// Linear Space Complexity, as we build the hash possibly as big as the array input.

const array1 = [2];
const k1 = 1; // 1

const array2 = [2,3];
const k2 = 1; // 4

const array3 = [
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
];
const k3 = 500; // 100

console.log(minSum(array1, k1) === 1);
console.log(minSum(array2, k2) === 4);
console.log(minSum(array3, k3) === 100);