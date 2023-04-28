/*
Easy:
You have a set of integers s, which originally contains all the numbers from 1 to n. Unfortunately, due to some error, one of the numbers in s got duplicated to another number in the set, which results in repetition of one number and loss of another number.

You are given an integer array nums representing the data status of this set after the error.

Find the number that occurs twice and the number that is missing and return them in the form of an array.

 

Example 1:

Input: nums = [1,2,2,4]
Output: [2,3]
Example 2:

Input: nums = [1,1]
Output: [1,2]
 

Constraints:

2 <= nums.length <= 104
1 <= nums[i] <= 104


There are 2 problems here:
1) Find the duplicate number.
2) Find the missing number.

Finding the duplicate, is trivial. We can simply count every ocurrance until we find a repeated one.
Linear (O(N)) time and space complexity. (Worse case being the last number, so we have to traverse the whole N set AND store a copy of all of them to count)

Now this solution DOES NOT work for finding a missing number. We need to, somehow, keep track of what SHOULD be the value, in order to identify that a number is missing, for example:
[2,3,4,4] -> [1,4]
We need to know that the first value was supposed to be 1.
We can solve this with a counter that starts at 1 and counts until N, and we compare each value in array.
OR
(Since the array is sorted), we can use the position of each value (from 0 to N-1) as the counter itself.
Linear (O(N)) time, but Constant (O(1) space, as we don't need to keep a counter of every entry, only the counter itself.

define result array as empty.
define counter at 1.
iterate through nums starting at 1 until it's length (for loop, as we need the counter)
    if the current value is GREATER than counter, means we found our MISSING value (counter)
        add counter to result array
        increase counter by 1
        if result array is length 2, return early
    if the current value is LOWER than counter, means we found our DUPLICATE value (current)
        add current to result array (unshift, as the order MATTERS)
        decrease counter by 1 (to compensate the duplication)
        if result array is length 2, return early (we duplicate the check because we want to avoid checking this condition every single time. Very small optimization that we can remove if we care more about DRY than efficiency)
add counter to result
return result.

[2,2] -> [1,2]
[1,1] -> [1,2]
[1,2,2,4] -> [2,3]

If order is not guaranteed, we gotta sort the array for this solution to work.
That will decrease it's efficiency and increase space complexity.
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
function findErrorNums(nums) {
    const sorted = nums.sort((a,b) => a - b);
    const result = [];
    let counter = 1;

    for (let i = 0; i < sorted.length; ++i, ++counter) {
        const currentValue = sorted[i];
        if (currentValue > counter) {
            result.push(counter);
            ++counter;
            if (result.length === 2) return result;
        }
        if (currentValue < counter) {
            result.unshift(currentValue);
            --counter;
            if (result.length === 2) return result;
        }
    }

    result.push(counter);
    return result;
}