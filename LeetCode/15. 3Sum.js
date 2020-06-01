// Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

// Note:

// The solution set must not contain duplicate triplets.

// Example:

// Given array nums = [-1, 0, 1, 2, -1, -4],

// A solution set is:
// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function threeSum(nums) {
    const results = [];
    
    for (let i = 0; i < nums.length - 2; ++i) {
        for (let j = i + 1; j < nums.length - 1; ++j) {
            for (let k = j + 1; k < nums.length; ++k) {
                if (nums[i] + nums[j] + nums[k] === 0) addUniqueArray(results, [nums[i], nums[j], nums[k]]);
            }
        }
    }
    
    return results;
};

function addUniqueArray(uniqueArray, arrayToAdd) {
    for (let i = 0; i < uniqueArray.length; ++i) {
        if (hasValues(uniqueArray[i], arrayToAdd)) return false;
    }
    
    uniqueArray.push(arrayToAdd);
    return true;
}

function hasValues(array, values) {
    const hash = {};
    array.forEach(number => {
        
        if (hash[number]) ++hash[number];
        else hash[number] = 1;
    });
    
    for (let i = 0; i < values.length; ++i) {
        if (hash[values[i]] !== undefined) {
            --hash[values[i]];
        }
        else return false;
    }
    
    return !Object.values(hash).filter(number => number !== 0).length;
}

// This solution works, but since it is a brute force approach (Polynomial O^3), it does not run within the time limit.
// How can we make it better?