// Easy

// Given an array of integers arr, return true if we can partition the array into three non-empty parts with equal sums.

// Formally, we can partition the array if we can find indexes i + 1 < j with (arr[0] + arr[1] + ... + arr[i] == arr[i + 1] + arr[i + 2] + ... + arr[j - 1] == arr[j] + arr[j + 1] + ... + arr[arr.length - 1])

// Example 1:
// Input: arr = [0,2,1,-6,6,-7,9,1,2,0,1]
// Output: true
// Explanation: 0 + 2 + 1 = -6 + 6 - 7 + 9 + 1 = 2 + 0 + 1

// Example 2:
// Input: arr = [0,2,1,-6,6,7,9,-1,2,0,1]
// Output: false

// Example 3:
// Input: arr = [3,3,6,5,-2,2,5,1,-9,4]
// Output: true
// Explanation: 3 + 3 = 6 = 5 - 2 + 2 + 5 + 1 - 9 + 4
 

// Constraints:

// 3 <= arr.length <= 5 * 104
// -104 <= arr[i] <= 104


/*
First - The sum of everything needs to be a multiple of 3. Otherwise there's no way to divide it in 3 equal parts.
Second - The SIZES of the partiion do not need to be the same.
Third - We cannot ALTER THE ORDER of the elements!

We know the value we need to reach (sum / 3)
Then we start scanning the array from 0 up, until we get to that value
Then we continue there until we get the value again.
And then a third time.

If any of these fails, we know we cannot split the array.

define currentSum as 0
define splitPoints as an empty array
Iterate through the array
    count every element
    if it reaches the target sum
        push the index into the splitPoints array
        reset currentSum to 0

Return splitPoints have exactly 3 elements
*/


/**
 * @param {number[]} arr
 * @return {boolean}
 */
function canThreePartsEqualSum(arr) {
    const totalSum = arr.reduce((acc, value) => acc + value)
    if (totalSum % 3 !== 0) return false
    const target = (totalSum / 3)

    let currentSum = 0
    const splitPoints = []
    for (let i = 0; i < arr.length; ++i) {
        currentSum += arr[i]
        if (currentSum === target) {
            splitPoints.push(i)
            currentSum = 0
        }
    }

    return splitPoints.length > 2
};

// Runtime 4 ms Beats 35.80%
// Memory 61.35 MB Beats 24.69%
