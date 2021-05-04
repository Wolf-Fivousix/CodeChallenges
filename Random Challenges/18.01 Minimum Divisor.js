// Minimum Divisor

// Coinbase = LeetCode 1283
// Given an array of integers, each element is to be divided by an integer so that the sum of
// the results is less than or equal to a threshold integer. Each non-integer result of division is
// rounded up before it is added to the sum. For example, 1/9 = 0.111... , round up to 1 .
// Determine the minimum divisor to make the sum less than or equal to the threshold.
// Example
// arr = [1, 5, 7]
// threshold = 8
// If the divisor is 1,  the results are arr' = [1, 5, 7]  which sums to 13 which is greater than the
// threshold 8. 
// If the divisor is 2 , the results are arr' = [1, 3, 4]  which sums to 8 which is equal to the threshold
// 8.
// The minimum divisor to make the sum less than or equal to the threshold is 2.
// Function Description
// Complete the function minimumDivisor in the editor below.
// minimumDivisor has the following parameter(s):
//      int arr[n]:  an array of integers
//      int threshold:  the maximum value of the sum
// Returns:
//      int: the minimum divisor
// Constraints
// 1 ≤ n ≤ 10 5
// n ≤ threshold ≤ 10 9
// 1 ≤ arr[i] ≤ 10 9 , 0 ≤ i < n


/*
 * Complete the 'minimumDivisor' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY arr
 *  2. INTEGER threshold
 */

function minimumDivisor(arr, threshold) {
    // Brute Force Approach:
    // Start the divider at 1 and increase through primes (or by one, to simplify, since we're doing brute force anyway)
        // divide every number and sum.
        // If we have a sum lesser or equal to the threshold, we can return this divider.
        // Otherwise, keep going.
    // 8/11, Good enough before optimization
    let divider = 1;
    let currentSum = arr.reduce((acc, value) => acc + value);
    while (threshold < currentSum) {
        ++divider;
        currentSum = arr.reduce((accumulator, value) => accumulator + Math.ceil(value / divider), 0);
    }
    
    return divider;

    // If I sum everything and then divide by the threshhold...
    // Nah, this works some of the times, but there're some edge cases it doesn't get.
    // const sum = arr.reduce((acc, value) => acc + value);
    // return Math.ceil(sum / threshold);
}