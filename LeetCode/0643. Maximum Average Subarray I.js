// Easy

// You are given an integer array nums consisting of n elements, and an integer k.

// Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10-5 will be accepted.

 

// Example 1:

// Input: nums = [1,12,-5,-6,50,3], k = 4
// Output: 12.75000
// Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75
// Example 2:

// Input: nums = [5], k = 1
// Output: 5.00000
 

// Constraints:

// n == nums.length
// 1 <= k <= n <= 105
// -104 <= nums[i] <= 104


/*
"BRUTE FORCE":
Keep an average counter
Would be to iterate through the array (length minus K)
    and at every position, calculate the average for the next K elements.
    if the average is higher than what we already have saved, update it.
Then just return the average saved.

Not incredibly efficient, gets the job done, but has the potential to be Polynomial O(n^2), which we don't like!


OPTIMAL APPROACH:
Let's iterate through the array only once!
With a "moving window" we'll keep track of the "running average" (and sum) and anytime we move the window, we update the values.
If we find a higher average, we save it (since we don't need to return the elements that comprise the calculation, that makes things easier)

Define a currentSum at 0
Define a best average at MINIMUM_INFINITY
Iterage from 0 to K in the array
    add all numbers to currentSum
Update the average by diving currentSum by K

Iterate through the rest of the array starting at K - 1 and going all the way to the end of the array (N).
    for FIRST index of the window (i - K), remove it from currentSum
    for LAST index of the window (i), add to currentSum
    calculate running average
    if is HIGHER than highestAverage, then update it.

return the highest average


Theoretically we COULD just use a single value, "runningAverage", BUT due to rounding we might get a unaccurate value, so let's use a sum. (we also not sure if all numbers will be integers)

Linear Time Complexity O(n)
Constant Space Complexity O(1)

*/



/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function findMaxAverage(nums, k) {
    let currentSum = 0
    let highestAverage = Number.NEGATIVE_INFINITY
    for (let i = 0; i < k; ++i) {
        currentSum += nums[i]
    }
    highestAverage = currentSum / k

    for (let i = k; i < nums.length; ++i) {
        
        const previousElement = nums[i - k]
        const newElement = nums[i]
        currentSum -= previousElement
        currentSum += newElement

        const runningAverage = currentSum / k
        if (runningAverage > highestAverage) highestAverage = runningAverage
    }

    return highestAverage
};

// Runtime 2 ms Beats 90.87%
// Memory 62.68 MB Beats 40.17%

// Improvement: We DON'T need the running average. We can simply use the sum and at the end return the division by K (average) of the highest sum.