// Medium

// Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.

// If such arrangement is not possible, it must rearrange it as the lowest possible order (ie, sorted in ascending order).

// The replacement must be in-place and use only constant extra memory.

// Here are some examples. Inputs are in the left-hand column and its corresponding outputs are in the right-hand column.

// 1,2,3 → 1,3,2
// 3,2,1 → 1,2,3
// 1,1,5 → 1,5,1

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function nextPermutation(nums) {
    if (nums.length < 2) return;

    if (isNotSorted(nums)) {
        sortArrayInPlace(nums);
        return;
    }

    let highestValueIndex = nums.length - 1;
    for (let i = highestValueIndex - 1; i >= 0; --i) {
        if (nums[i] < nums[highestValueIndex]) {
            const temporary = nums[i];
            nums[i] = nums[highestValueIndex];
            nums[highestValueIndex] = temporary;
            return;
        }
    }

    console.log("there are no permutations possible");
    return;
}

function isNotSorted(array) {
    if (array.length < 2) return false;
    
    for (let i = 1; i < array.length; ++i) {
        if (array[i] < array[i - 1]) return true;
    }
    
    return false;
}

// Simple and inefficient bubble sorting.
function sortArrayInPlace(array) {
    for (let i = 0; i < array.length; ++i) {
        let highestValueIndex = 0;
        console.log(array);
        for (let j = 0; j < array.length - i; ++j) {
            if (array[highestValueIndex] < array[j]) {
                highestValueIndex = j;
            }
        }
        if (highestValueIndex !== array.length - i) {
            const temporary = array[highestValueIndex];
            array[highestValueIndex] = array[array.length - 1 - i];
            array[array.length - 1 - i] = temporary;
        }
    }
}
// Solution is not correct.
// [1, 3, 2] input should output [2, 1, 3].