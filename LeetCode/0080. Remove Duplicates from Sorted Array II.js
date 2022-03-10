// Medium
// https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/

// Given an integer array nums sorted in non-decreasing order, remove some duplicates in-place such that each unique element appears at most twice. The relative order of the elements should be kept the same.

// Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

// Return k after placing the final result in the first k slots of nums.

// Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.

// Custom Judge:

// The judge will test your solution with the following code:

// int[] nums = [...]; // Input array
// int[] expectedNums = [...]; // The expected answer with correct length

// int k = removeDuplicates(nums); // Calls your implementation

// assert k == expectedNums.length;
// for (int i = 0; i < k; i++) {
//     assert nums[i] == expectedNums[i];
// }
// If all assertions pass, then your solution will be accepted.

 

// Example 1:

// Input: nums = [1,1,1,2,2,3]
// Output: 5, nums = [1,1,2,2,3,_]
// Explanation: Your function should return k = 5, with the first five elements of nums being 1, 1, 2, 2 and 3 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).
// Example 2:

// Input: nums = [0,0,1,1,1,1,2,3,3]
// Output: 7, nums = [0,0,1,1,2,3,3,_,_]
// Explanation: Your function should return k = 7, with the first seven elements of nums being 0, 0, 1, 1, 2, 3 and 3 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).
 

// Constraints:

// 1 <= nums.length <= 3 * 104
// -104 <= nums[i] <= 104
// nums is sorted in non-decreasing order.

/*
BRUCE FORCE way to do this:
"Bubble sort scan" the input for any element that shows up more than 2 times.
Whenever this element is found, we'll "bubble sort" all elements from that point towards the end of the array.
    (Basically we'll do in-place swaps from that point until the end of the array).
And then reduce the total lengh that we're scanning for (this will also be our K).

Return K.

OPTIMIZED Version
We scan through the input once.
Every time we find an element that has more than 2 ocurrences we'll mark that element as "X" or "null" or any kind of flag we want. (negative numbers won't work here, since we could have them as part of our input)
    (According to the restrictions, our negative numbers will only go to -10^4, so we could use a negative number to keep the "type" of the array consistent. But let's use NULL for easier vizualization)
Through this process, we also calculated K (aka duplicateValues) (we can save this for returning later)
Now we scan through the input another time WITH TWO POINTERS and every time we find a flag, we'll go into our "swap mode"
    Advance the second pointer until we find a non_flag value.
    Swap both values.
    Continue with the original scan loop
At the end of this process, we'll have a properly configured nums input and we can return K that we saved ealier.

This will be Constant in space (since we'll be using 3~4 variables to keep track of things)
and Constant Time, as we'll only scan our input twice! Pretty optimal. =)

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
function removeDuplicates(nums) {
    let duplicatedValues = 0;
    let currentValue = null;
    let currentOcurrances = 0;

    nums.forEach((num, index) => {
        if (currentValue !== num) {
            currentValue = num;
            currentOcurrances = 1;
        }
        else {
            if (currentOcurrances >= 2) {
                ++duplicatedValues;
                nums[index] = null;
            }
            ++currentOcurrances;
        }
    });

    // console.log(nums);
    
    for (let i = 0, forwardPointer = 0; i < nums.length - duplicatedValues; ++i, ++forwardPointer) {
        const currentNum = nums[i];
        if (currentNum === null) {
            forwardPointer = findNextNonNullValue(nums, forwardPointer);
            nums[i] = nums[forwardPointer];
            nums[forwardPointer] = null;
        }
    }

    console.log(nums);
    console.log("Answer is: ", nums.length - duplicatedValues);
    return nums.length - duplicatedValues;
};

function findNextNonNullValue(array, pointer) {
    if (array[pointer] !== null) return pointer;

    while (pointer < array.length && array[pointer] === null) {
        ++pointer;
    }

    return pointer;
}

removeDuplicates([1,1,1,2,2,3]);
removeDuplicates([0,0,1,1,1,1,2,3,3]);

// Runtime: 134 ms, faster than 12.22% of JavaScript online submissions for Remove Duplicates from Sorted Array II.
// Memory Usage: 44.2 MB, less than 47.54% of JavaScript online submissions for Remove Duplicates from Sorted Array II.

// Community Solution (in Java) by StefanPochmann
// Note that the "magic" here happens when we find the duplicated element 2 indexes forward.
// That's when we stop incrementing i and and the swapping of values starts to make sense.

// public int removeDuplicates(int[] nums) {
//     int i = 0;
//     for (int n : nums)
//         if (i < 2 || n > nums[i-2])
//             nums[i++] = n;
//     return i;
// }