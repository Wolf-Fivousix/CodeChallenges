// Medium

// You are given an integer array nums where the ith bag contains nums[i] balls. You are also given an integer maxOperations.

// You can perform the following operation at most maxOperations times:

// Take any bag of balls and divide it into two new bags with a positive number of balls.
// For example, a bag of 5 balls can become two new bags of 1 and 4 balls, or two new bags of 2 and 3 balls.
// Your penalty is the maximum number of balls in a bag. You want to minimize your penalty after the operations.

// Return the minimum possible penalty after performing the operations.

 

// Example 1:

// Input: nums = [9], maxOperations = 2
// Output: 3
// Explanation: 
// - Divide the bag with 9 balls into two bags of sizes 6 and 3. [9] -> [6,3].
// - Divide the bag with 6 balls into two bags of sizes 3 and 3. [6,3] -> [3,3,3].
// The bag with the most number of balls has 3 balls, so your penalty is 3 and you should return 3.
// Example 2:

// Input: nums = [2,4,8,2], maxOperations = 4
// Output: 2
// Explanation:
// - Divide the bag with 8 balls into two bags of sizes 4 and 4. [2,4,8,2] -> [2,4,4,4,2].
// - Divide the bag with 4 balls into two bags of sizes 2 and 2. [2,4,4,4,2] -> [2,2,2,4,4,2].
// - Divide the bag with 4 balls into two bags of sizes 2 and 2. [2,2,2,4,4,2] -> [2,2,2,2,2,4,2].
// - Divide the bag with 4 balls into two bags of sizes 2 and 2. [2,2,2,2,2,4,2] -> [2,2,2,2,2,2,2,2].
// The bag with the most number of balls has 2 balls, so your penalty is 2 an you should return 2.
// Example 3:

// Input: nums = [7,17], maxOperations = 2
// Output: 7
 

// Constraints:

// 1 <= nums.length <= 105
// 1 <= maxOperations, nums[i] <= 109

/**
 * @param {number[]} nums
 * @param {number} maxOperations
 * @return {number}
 */

// Thx to utkarsh915 code I was able to translate this into the Binary Search solution:
// https://leetcode.com/problems/minimum-limit-of-balls-in-a-bag/discuss/1064793/Binary-Search-or-with-Intuition-and-explanation

// Log Linear Time Complexity O (N * Log N)
// Constat Space Complexity
function minimumSize(nums, maxOperations) {
    let start = 1;
    let end = 1000000000; // Given by the problem constraints. If we couldn't figure this out, we could do a linear pass and grab the biggest value currently in the NUMS input.
    let minPenalty = end;
    while (start <= end) {
        const penalty = Math.floor(start + (end - start) / 2);  // Avoid integer overflow, penalty is the mid point for Binary Search.
        if (isPossible(nums, maxOperations, penalty)) {
            minPenalty = penalty;
            end = penalty - 1;
        }
        else start = penalty + 1;
    }
    
    return minPenalty;
}

function isPossible(nums, maxOperations, penalty) {
    let operationsUsed = 0;
    
    nums.forEach(num => {
        let operations = Math.floor(num / penalty);
        if (num % penalty === 0) --operations;
        operationsUsed += operations;
    });
    // Another way to write this (that is not as clear unless you know the math behind it):
    // nums.forEach(num => { operationsUsed += Math.floor((num - 1) / penalty)});
    
    return operationsUsed <= maxOperations;
}

// Online line method that does the exact same thing, but is a little harderd to read:
// function isPossible(nums, maxOperations, penalty) {
//     return nums.reduce((acc, num) => acc + Math.floor((num -1) / penalty), 0) <= maxOperations;
// }

// Runtime: 320 ms, faster than 8.04% of JavaScript online submissions for Minimum Limit of Balls in a Bag.
// Memory Usage: 50.1 MB, less than 48.21% of JavaScript online submissions for Minimum Limit of Balls in a Bag.
// Runtime: 292 ms, faster than 18.75% of JavaScript online submissions for Minimum Limit of Balls in a Bag.
// Memory Usage: 49.7 MB, less than 55.36% of JavaScript online submissions for Minimum Limit of Balls in a Bag.
// Runtime: 296 ms, faster than 18.75% of JavaScript online submissions for Minimum Limit of Balls in a Bag.
// Memory Usage: 49.2 MB, less than 70.54% of JavaScript online submissions for Minimum Limit of Balls in a Bag.

// Input [9], 2
// Expected 3

// Input [7, 17], 2
// Expected 7

// Input [17], 1
// Expected 8

// Input [431,922,158,60,192,14,788,146,788,775,772,792,68,143,376,375,877,516,595,82,56,704,160,403,713,504,67,332,26] , 80
// Output 174
// Expected 129

/*
WRONG SOLUTION!!! KEEPING THIS FOR FUTURE REFERENCE.

I can dive the bag however I want (No need to /2 all the time).
Because I'm operating on the highest values, I can sort the input so that
it is easy for me to pick the next element to be worked on.

Keeping the array sorted after every single operation will require
x * (N Log N). Which is not great, but let's just take that for the time being.
    // If I use "concat" I will have to traverse the array again to make the copy, so let's just "push".
Paying for this, I get: The biggest bag is always the last element.

Let's go with this approach. Not the most efficient, but it is very simple and will get the job done.

The problem here is when the number is ODD. For EVEN numbers, dividing by 2 is the best approach.
    If I have 2 or more operations, then "divide by three".
    Otherwise, go with the division by 2 appraoch.

Polynomial Time Complexity of O(N Log N ^ O), where N is the nums array and O is the maxOperations.
Linear Space Complexity O(N + O) where N is the nums array and O is the maxOperations by which it is going to grow.


Another option to save memory would be to keep track of all the keys in a set.
But that will add to time complexity of finding the biggest key.
*/
// function minimumSize(nums, maxOperations) {
//     if (!nums.length) return null;
//     let sorted = nums.sort((a, b) => a - b);
    
//     for (let cycle = maxOperations; 0 < cycle; --cycle) {
//         const max = sorted.pop();
//         const division = divide(max, maxOperations);
//         sorted.push(...division);
//         sorted = sorted.sort((a, b) => a - b);
//     }
    
//     return sorted[sorted.length - 1];
// };

// function divide(value, operations) {
//     if (value % 2 && operations >= 2) return [Math.floor(value / 3), 2 * Math.ceil(value / 3)];
//     if (value % 2) return [Math.floor(value / 2), Math.ceil(value / 2)];
    
//     return [value / 2, value / 2];
// }