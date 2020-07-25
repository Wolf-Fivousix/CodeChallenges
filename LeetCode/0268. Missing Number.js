// Easy

// Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.

// Example 1:

// Input: [3,0,1]
// Output: 2
// Example 2:

// Input: [9,6,4,2,3,5,7,0,1]
// Output: 8
// Note:
// Your algorithm should run in linear runtime complexity. Could you implement it using only constant extra space complexity?

// I actually got this question on my first onsite.

/**
 * @param {number[]} nums
 * @return {number}
 */
function missingNumber(nums) {
    const sum = nums.reduce((sum, num) => sum + num, 0);
    let maxSum = 0;
    for (let i = 0; i <= nums.length; ++i) maxSum += i;
    
    return maxSum - sum;
}

// Linear Time Complexity.
// Constant Space Complexity.
// Runtime: 76 ms, faster than 75.41% of JavaScript online submissions for Missing Number.
// Memory Usage: 39.2 MB, less than 21.29% of JavaScript online submissions for Missing Number.

// Take a look at approach #4 for a mathematical way of doing this same process.

// Approach #3 Bit Manipulation [Accepted]
// Intuition

// We can harness the fact that XOR is its own inverse to find the missing element in linear time.

// Algorithm

// Because we know that nums contains nn numbers and that it is missing exactly one number on the range [0..n-1][0..n−1], we know that nn definitely replaces the missing number in nums. Therefore, if we initialize an integer to nn and XOR it with every index and value, we will be left with the missing number. Consider the following example (the values have been sorted for intuitive convenience, but need not be):

// Index	0	1	2	3
// Value	0	1	3	4
// \begin{aligned} missing &= 4 \wedge (0 \wedge 0) \wedge (1 \wedge 1) \wedge (2 \wedge 3) \wedge (3 \wedge 4) \\ &= (4 \wedge 4) \wedge (0 \wedge 0) \wedge (1 \wedge 1) \wedge (3 \wedge 3) \wedge 2 \\ &= 0 \wedge 0 \wedge 0 \wedge 0 \wedge 2 \\ &= 2 \end{aligned} 
// missing
// ​	
  
// =4∧(0∧0)∧(1∧1)∧(2∧3)∧(3∧4)
// =(4∧4)∧(0∧0)∧(1∧1)∧(3∧3)∧2
// =0∧0∧0∧0∧2
// =2
// ​	
// class Solution {
//     public int missingNumber(int[] nums) {
//         int missing = nums.length;
//         for (int i = 0; i < nums.length; i++) {
//             missing ^= i ^ nums[i];
//         }
//         return missing;
//     }
// }


// Complexity Analysis

// Time complexity : \mathcal{O}(n)O(n)

// Assuming that XOR is a constant-time operation, this algorithm does constant work on nn iterations, so the runtime is overall linear.

// Space complexity : \mathcal{O}(1)O(1)

// This algorithm allocates only constant additional space.

// Approach #4 Gauss' Formula [Accepted]
// Intuition

// One of the most well-known stories in mathematics is of a young Gauss, forced to find the sum of the first 100 natural numbers by a lazy teacher. Rather than add the numbers by hand, he deduced a closed-form expression for the sum, or so the story goes. You can see the formula below:

// \sum_{i=0}^{n}i = \frac{n(n+1)}{2}∑ 
// i=0
// n
// ​	
//  i= 
// 2
// n(n+1)
// ​	
// class Solution {
//     public int missingNumber(int[] nums) {
//         int expectedSum = nums.length*(nums.length + 1)/2;
//         int actualSum = 0;
//         for (int num : nums) actualSum += num;
//         return expectedSum - actualSum;
//     }
// }

// Algorithm

// We can compute the sum of nums in linear time, and by Gauss' formula, we can compute the sum of the first nn natural numbers in constant time. Therefore, the number that is missing is simply the result of Gauss' formula minus the sum of nums, as nums consists of the first nn natural numbers minus some number.


// Complexity Analysis

// Time complexity : \mathcal{O}(n)O(n)

// Although Gauss' formula can be computed in \mathcal{O}(1)O(1) time, summing nums costs us \mathcal{O}(n)O(n) time, so the algorithm is overall linear. Because we have no information about which number is missing, an adversary could always design an input for which any algorithm that examines fewer than nn numbers fails. Therefore, this solution is asymptotically optimal.

// Space complexity : \mathcal{O}(1)O(1)

// This approach only pushes a few integers around, so it has constant memory usage.