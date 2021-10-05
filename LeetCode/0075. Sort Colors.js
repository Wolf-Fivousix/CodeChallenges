// Medium

// Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

// We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

// You must solve this problem without using the library's sort function.

 

// Example 1:

// Input: nums = [2,0,2,1,1,0]
// Output: [0,0,1,1,2,2]
// Example 2:

// Input: nums = [2,0,1]
// Output: [0,1,2]
// Example 3:

// Input: nums = [0]
// Output: [0]
// Example 4:

// Input: nums = [1]
// Output: [1]
 

// Constraints:

// n == nums.length
// 1 <= n <= 300
// nums[i] is 0, 1, or 2.
 

// Follow up: Could you come up with a one-pass algorithm using only constant extra space?
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// The problem here is actually not that hard.
// We could simply sort the numbers in ascending order and that would give us the result we want.
// BUT we are explicitly denied this approach AND we have to do this work IN-PLACE (meaning, no use of extra memory for another array)

// There is always at least ONE element in the array (we don't need to worry about empty inputs)

// BRUCE FORCE:
// Move through the array N times.
    // Each iteration, move the lowest found element to the initial position.
// This is basically Bubble Sort, N² time complexity, Constant Space complexity.
function sortColors(nums) {
    for (let i = 0; i < nums.length; ++i) {
        let start = nums[i];
        for (let j = i + 1; j < nums.length; ++j) {
            const current = nums[j];
            if(current < start) {
                swap(nums, i, j);
                start = nums[i];
            }
        }
    }
};

function swap(nums, start, end) {
    const temp = nums[start];
    nums[start] = nums[end];
    nums[end] = temp;
}

// Runtime: 86 ms, faster than 34.88% of JavaScript online submissions for Sort Colors.
// Memory Usage: 38.9 MB, less than 57.09% of JavaScript online submissions for Sort Colors.

// Cool. Let's make it better now.
// The follow up is "do in one pass using only constant space".
// That sounds like we could count the occurances for 0, 1 and 2's, and then reconstruct the array accordingly.
// The problem here is that to "reconstruct" would require a SECOND pass.
// BUT this still sounds MUCH MORE efficient than our Brute Force.
// Ending with Linear Time Complexity O(N) and Constant Space Complexity O(1)

function sortColors(nums) {
    const colors = countColors(nums);
    for (let i = 0; i < nums.length; ++i) {
        nums[i] = getColor(colors);
        updateColorCount(colors);
    }
};

function countColors(array) {
    let red = 0;
    let white = 0;
    let blue = 0;
    array.forEach(color => {
        switch(color) {
            case 0:
                ++red;
                break;
            case 1:
                ++white;
                break;
            case 2:
                ++blue;
                break;
            default:
                // do nothing
        }
    });

    return {red, white, blue};
}

function getColor(colors) {
    let currentColor = "";
    for (const [key, value] of Object.entries(colors)) {
        if (value > 0) {
            currentColor = key;
            break;
        }
    }
    switch (currentColor) {
        case "red":
            return 0;
        case "white":
            return 1;
        case "blue":
            return 2;
        default:
            throw new Error("Unhandled color");
    }
}

function updateColorCount(colors) {
    for (const [key, value] of Object.entries(colors)) {
        if (value > 0) {
            --colors[key];
            return;
        }
    }  
}

// Runtime: 80 ms, faster than 46.26% of JavaScript online submissions for Sort Colors.
// Memory Usage: 40.9 MB, less than 5.64% of JavaScript online submissions for Sort Colors.

// Solution based of michaeleliot
// Linear Time complexity and Constant Space Complexity.
function sortColors(nums) {
    let zeroIndex = 0;
    let twoIndex = nums.length - 1;
    for (let i = 0; i <= twoIndex; ++i) {
        const currentColor = nums[i];
        if (currentColor === 0) {
            swap(nums, zeroIndex, i);
            ++zeroIndex;
        }
        else if (currentColor === 2) {
            swap(nums, i, twoIndex);
            --twoIndex;
            --i;
        }
    }
};

function swap(nums, lesserValueIndex, biggerValueIndex) {
    [nums[lesserValueIndex], nums[biggerValueIndex]] = [nums[biggerValueIndex], nums[lesserValueIndex]];
}

// Runtime: 133 ms, faster than 6.98% of JavaScript online submissions for Sort Colors.
// Memory Usage: 39.8 MB, less than 23.66% of JavaScript online submissions for Sort Colors.

// And here's the old true for runtime efficiency: even though this code is "more efficient", the BruteForce approach
// was coded 10x quicker and STILL performs more effiently in actual run environment.