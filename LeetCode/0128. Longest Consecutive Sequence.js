// Medium

// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

// You must write an algorithm that runs in O(n) time.

// Example 1:

// Input: nums = [100,4,200,1,3,2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
// Example 2:

// Input: nums = [0,3,7,2,5,8,4,6,0,1]
// Output: 9
// Example 3:

// Input: nums = [1,0,1,2]
// Output: 3
 

// Constraints:

// 0 <= nums.length <= 105
// -109 <= nums[i] <= 109

/*
Sorting is out of question, since the fastest sorting will be N Log N at best...

BRUTE FORCE:
Convert the array into a hash table.

Start from -10^9 and go towards 10^9
    At every number, count the sequence if it's present.
    If not, save the longest sequence so far IF it's greater than the existing one

return longest sequence

O(n) + the execution from -10^9 to 10^9
O(n) space, becase we'll duplicate the input as a hash.

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
function longestConsecutive(nums) {
    const numbersTable = createHashTable(nums)
    
    let longestSequence = 0
    let currentSequence = 0
    for (let number = -1000000000; number < 1000000001; ++number) {
        if (numbersTable[number]) {
            ++currentSequence
        }
        else {
            longestSequence = Math.max(longestSequence, currentSequence)
            currentSequence = 0
        }
    }

    return Math.max(longestSequence, currentSequence)
};

function createHashTable(nums) {
    const numbers = {}
    for (let number of nums) {
        numbers[number] = true
    }

    return numbers
}

// This solution exceeded the time limit... hmmmm


// Community solution
function longestConsecutive(nums) {
    const numbers = new Set(nums);
    let longestSequence = 0;

    // Find all the starting points and count the sequence.
    for (let n of numbers) {
        if (numbers.has(n - 1)) continue // There is a previous number, so this is NOT a starting point to count.

        let length = 1;

        while (numbers.has(n + length)) {
            length++;
        }

        longestSequence = Math.max(longestSequence, length);
    }

    return longestSequence;    
};

// Runtime 40 ms Beats 55.78%
// Memory 80.72 MB Beats 61.72%
