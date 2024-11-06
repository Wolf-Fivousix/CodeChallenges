// Medium

// You are given a 0-indexed array of positive integers nums.

// In one operation, you can swap any two adjacent elements if they have the same number of 
// set bits. You are allowed to do this operation any number of times (including zero).

// Set Bits - A set bit refers to a bit in the binary representation of a number that has a value of 1.

// Return true if you can sort the array, else return false.

 

// Example 1:

// Input: nums = [8,4,2,30,15]
// Output: true
// Explanation: Let's look at the binary representation of every element. The numbers 2, 4, and 8 have one set bit each with binary representation "10", "100", and "1000" respectively. The numbers 15 and 30 have four set bits each with binary representation "1111" and "11110".
// We can sort the array using 4 operations:
// - Swap nums[0] with nums[1]. This operation is valid because 8 and 4 have one set bit each. The array becomes [4,8,2,30,15].
// - Swap nums[1] with nums[2]. This operation is valid because 8 and 2 have one set bit each. The array becomes [4,2,8,30,15].
// - Swap nums[0] with nums[1]. This operation is valid because 4 and 2 have one set bit each. The array becomes [2,4,8,30,15].
// - Swap nums[3] with nums[4]. This operation is valid because 30 and 15 have four set bits each. The array becomes [2,4,8,15,30].
// The array has become sorted, hence we return true.
// Note that there may be other sequences of operations which also sort the array.
// Example 2:

// Input: nums = [1,2,3,4,5]
// Output: true
// Explanation: The array is already sorted, hence we return true.
// Example 3:

// Input: nums = [3,16,8,4,2]
// Output: false
// Explanation: It can be shown that it is not possible to sort the input array using any number of operations.
 

// Constraints:

// 1 <= nums.length <= 100
// 1 <= nums[i] <= 28


/*
We don't actually need to SORT the input, we just need to know if it can be sorted.
By definition of the "set bit", the input is essentiall a "multitude of windows" that share the same bit.
If 2 adjacent numbers do have different amounts of set bits, then ALL NUMBERS in their respective windows will ALSO have the same number of bits.
Thus it is impossible to sort them if they are already not sorted.

So, first thing is to find the "start" and "end" indexes of each "window"
    Each window is defined by sharing the same set bits
    Note - We CAN have 2 windows with the same number of set bits, but they are NOT adjacent, like [2, 0, 0, 0, 2] -> We have 3 windows here

Then we just need to figure out the LOWEST and HIGHEST values in each window.
    (We could do this at the first pass, but for simplicity, we'll just do a second pass in order to re-construct these results)

At this point we can compare the HIGH value of one window with the LOW value of the next. And if any of them are inverted (HIGH value is higher than the LOWEST next value)
Then this array is impossible to be sorted (after all, we will never be able to swap those 2 numbers, since they have different set bits)

1 pass to find out all the windows
2 pass to find the LOW's and HIGH's
3 "pass" to compare all the HIGH's/LOW's (I consider it a pass because we could have a worst case scenario in which each element in the array is it's own window!)

Time Complexity - Linear O(n)
Space Complexity - Linear O(1) (Linear because in the worse case scenario (each element is it's own window) we'll have an "array" worth of variables)


STEP 1 - Find out the windows.
    Declare empty array of "windowIndexes"
    Iterate through original array (start at index 1)
        If the previous element bit's are DIFFERENT from current element, push INDEX-1 to windowIndexes
    Push array.length-1 to windowIndexes (to account for the last window)

STEP 2 - Find LOW's and HIGH's
    Helper method: findLowAndHigh - Given an array, a start index, and an end index. Return the lowest and highest values

    Declare empty hash map of indexes - call it "windows"
    Iterate through windowIndexes
        For each window, find the "window start" based on the previous index (0 if index is 0) and save the following object:
        [index]: { low: number, high: number }

STEP 3 - Compare
    Iterate through windowIndexes one more time (start at index 1 - If there is only one window, array is sortable).
        if index-1 HIGH is HIGHER than index LOW, return false

    return true


This solution would NEED a early check if the input would be empty. But the constrains protects us from that.
*/


/**
 * @param {number[]} nums
 * @return {boolean}
 */
function canSortArray(nums) {
    const windowIndexes = []
    for (let i = 1; i < nums.length; ++i) {
        if (isSetBitsDifferent(nums[i - 1], nums[i])) windowIndexes.push(i - 1)
    }
    windowIndexes.push(nums.length - 1)

    const windows = {}
    windowIndexes.forEach((windowIndex, index) => {
        const start = index ? windowIndexes[index - 1] + 1 : 0
        const end = windowIndex

        windows[windowIndex] = findLowAndHigh(nums, start, end)
    })


    for (let i = 1; i < windowIndexes.length; ++i) {
        const previousWindowIndex = windowIndexes[i - 1]
        const currentWindowIndex = windowIndexes[i]
        if (windows[previousWindowIndex].high > windows[currentWindowIndex].low) return false
    }
    
    return true
};

function isSetBitsDifferent(number1, number2) {
    const bits1 = (number1 >>> 0).toString(2);
    const bits2 = (number2 >>> 0).toString(2);
    const bitCount1 = bits1.split("1").length
    const bitCount2 = bits2.split("1").length

    return bitCount1 !== bitCount2
}

function findLowAndHigh(array, startIndex, endIndex) {
    let low = Number.POSITIVE_INFINITY
    let high = Number.NEGATIVE_INFINITY
    for (let i = startIndex; i <= endIndex; ++i) {
        const value = array[i]

        if (value < low) low = value
        if (value > high) high = value
    }

    return { low, high }
}

[
    [8,4,2,30,15], // true
    [1,2,3,4,5], // true
    [3,16,8,4,2], // false
].forEach(input => {
    console.log(canSortArray(input))
})

// Runtime 28 ms Beats 100.00%
// Memory 57.24 MB Beats 15.79%