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

// Proposed solution. Seems like my idea of "if input is sorted, swap the last two elements" is not quite on the mark.
// Is more of a "find the number out of the order and swap it" kind of thing.
// Solution
// Approach 1: Brute Force
// Algorithm

// In this approach, we find out every possible permutation of list formed by the elements of the given array and find out the permutation which is just larger than the given one. But this one will be a very naive approach, since it requires us to find out every possible permutation which will take really long time and the implementation is complex. Thus, this approach is not acceptable at all. Hence, we move on directly to the correct approach.

// Complexity Analysis

// Time complexity : O(n!)O(n!). Total possible permutations is n!n!.
// Space complexity : O(n)O(n). Since an array will be used to store the permutations.

// Approach 2: Single Pass Approach
// Algorithm

// First, we observe that for any given sequence that is in descending order, no next larger permutation is possible. For example, no next permutation is possible for the following array:

// [9, 5, 4, 3, 1]
// We need to find the first pair of two successive numbers a[i]a[i] and a[i-1]a[i−1], from the right, which satisfy a[i] > a[i-1]a[i]>a[i−1]. Now, no rearrangements to the right of a[i-1]a[i−1] can create a larger permutation since that subarray consists of numbers in descending order. Thus, we need to rearrange the numbers to the right of a[i-1]a[i−1] including itself.

// Now, what kind of rearrangement will produce the next larger number? We want to create the permutation just larger than the current one. Therefore, we need to replace the number a[i-1]a[i−1] with the number which is just larger than itself among the numbers lying to its right section, say a[j]a[j].

//  Next Permutation 

// We swap the numbers a[i-1]a[i−1] and a[j]a[j]. We now have the correct number at index i-1i−1. But still the current permutation isn't the permutation that we are looking for. We need the smallest permutation that can be formed by using the numbers only to the right of a[i-1]a[i−1]. Therefore, we need to place those numbers in ascending order to get their smallest permutation.

// But, recall that while scanning the numbers from the right, we simply kept decrementing the index until we found the pair a[i]a[i] and a[i-1]a[i−1] where, a[i] > a[i-1]a[i]>a[i−1]. Thus, all numbers to the right of a[i-1]a[i−1] were already sorted in descending order. Furthermore, swapping a[i-1]a[i−1] and a[j]a[j] didn't change that order. Therefore, we simply need to reverse the numbers following a[i-1]a[i−1] to get the next smallest lexicographic permutation.

// The following animation will make things clearer:
// https://leetcode.com/media/original_images/31_Next_Permutation.gif

// public class Solution {
//     public void nextPermutation(int[] nums) {
//         int i = nums.length - 2;
//         while (i >= 0 && nums[i + 1] <= nums[i]) {
//             i--;
//         }
//         if (i >= 0) {
//             int j = nums.length - 1;
//             while (j >= 0 && nums[j] <= nums[i]) {
//                 j--;
//             }
//             swap(nums, i, j);
//         }
//         reverse(nums, i + 1);
//     }

//     private void reverse(int[] nums, int start) {
//         int i = start, j = nums.length - 1;
//         while (i < j) {
//             swap(nums, i, j);
//             i++;
//             j--;
//         }
//     }

//     private void swap(int[] nums, int i, int j) {
//         int temp = nums[i];
//         nums[i] = nums[j];
//         nums[j] = temp;
//     }
// }