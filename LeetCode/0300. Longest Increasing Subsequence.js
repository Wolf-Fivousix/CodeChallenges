// Medium

// Given an unsorted array of integers, find the length of longest increasing subsequence.

// Example:

// Input: [10,9,2,5,3,7,101,18]
// Output: 4 
// Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4. 
// Note:

// There may be more than one LIS combination, it is only necessary for you to return the length.
// Your algorithm should run in O(n2) complexity.
// Follow up: Could you improve it to O(n log n) time complexity?

// Input: []
// Output: 0
// Input: [2,2,3]
// Output: 2 ([2,3])
// Brute Force Approach.
// declare a empty result array.
// Iterate through the array.
    // Interate again, adding any numbers that are greater than my previous number.
// iterate through result array and find the length of the longest array.
// return the length of longest array.
function lengthOfLIS(nums) {
    const result = [];
    for (let i = 0; i < nums.length; ++i) {
        const sequence = [nums[i]];
        for (let j = i + 1; j < nums.length; ++j) {
            const maxValue = sequence[sequence.length - 1];
            // [2,3,5]
            // maxValue = 5
            if (nums[j] > maxValue) sequence.push(nums[j]);
        }
        result.push(sequence);
    }
    console.log(result);
    return result.reduce((maxLength, subArray) => Math.max(maxLength, subArray.length), 0);
}
// Input: [2,2,3]
// Output: 2 ([2,3])
/*
result = [[2, 3], [2, 3], [3]]
maxLength = 2
[[2, 3], 0 / 2
 [2, 3], 2 / 2
  [3]]  2 / 1
  => 2
[1,2,3,4,5]
[
    [1,2,3,4,5],
    [2,3,4,5],
    [3,4,5],
    [4,5],
    [5]
]
[2,3,10,5,6]
[1,2, 3,1,2]
 2,3,10,10,10
 2,3,5,5,6
// Input: [10,9,2,5,3,7,101,18]
// Output: 4 
[10,9,2,5,3,7,101,18]
2,2,2,3,3,7,18,18
2,3,7,18
[5,6,7,1,2]
 ^
1,1,1,1,2 => 1,2 (unshift)
5,6,7,7,7 => 5,6,7 (pushing)
[
    [2,3,10],
    [3,10],
    [10],
    [5,6],
    [6]
]
*/
// Polynomial for Time and Space Complexity.
function lengthOfLIS(nums) {
    if (!nums.length) return 0;
    const maxArray = [nums[0]];
    // [5,6,7,1,2]
    //         ^
    // [5, 6, 7, 7, 7]
    for (let i = 1; i < nums.length; ++i) {
        maxArray.push(Math.max(maxArray[maxArray.length - 1], nums[i]));
    }
    const minArray = [nums[nums.length - 1]];
    // [5,6,7,1,2]
    //  ^
    // [1,1,1,1,2]
    for (let i = nums.length - 2; i > -1; --i) {
        minArray.unshift(Math.min(minArray[0], nums[i]));
    }
    let maxLength = 1;
    for (let i = 1; i < maxArray.length; ++i) {
        if (maxArray[i] > maxArray[i - 1]) ++maxLength;
    }
    let minLength = 1;
    for (let i = 1; i < minArray.length; ++i) {
        if (minArray[i] > minArray[i - 1]) ++minLength;
    }
    console.log(maxArray);
    console.log(minArray);
    return Math.max(maxLength, minLength);
}
// console.log(lengthOfLIS([2,2,3])); // => 2
// console.log(lengthOfLIS([2,3,10,5,6])); // => 4
// console.log(lengthOfLIS([2,15,3,7,8,6,18])); // => 5


// Provided Solution Strategies
// Approach 1: Brute Force
// Algorithm

// The simplest approach is to try to find all increasing subsequences and then returning the maximum length of longest increasing subsequence. In order to do this, we make use of a recursive function \text{lengthofLIS}lengthofLIS which returns the length of the LIS possible from the current element(corresponding to curposcurpos) onwards(including the current element). Inside each function call, we consider two cases:

// The current element is larger than the previous element included in the LIS. In this case, we can include the current element in the LIS. Thus, we find out the length of the LIS obtained by including it. Further, we also find out the length of LIS possible by not including the current element in the LIS. The value returned by the current function call is, thus, the maximum out of the two lengths.

// The current element is smaller than the previous element included in the LIS. In this case, we can't include the current element in the LIS. Thus, we find out only the length of the LIS possible by not including the current element in the LIS, which is returned by the current function call.


// Complexity Analysis

// Time complexity : O(2^n)O(2n). Size of recursion tree will be 2^n2 n.

// Space complexity : O(n^2)O(n2). memomemo array of size n * nn∗n is used.

// Approach 2: Recursion with Memoization
// Algorithm

// In the previous approach, many recursive calls had to made again and again with the same parameters. This redundancy can be eliminated by storing the results obtained for a particular call in a 2-d memoization array memomemo. memo[i][j]memo[i][j] represents the length of the LIS possible using nums[i]nums[i] as the previous element considered to be included/not included in the LIS, with nums[j]nums[j] as the current element considered to be included/not included in the LIS. Here, numsnums represents the given array.


// Complexity Analysis

// Time complexity : O(n^2)O(n2). Size of recursion tree can go upto n^2n 2.

// Space complexity : O(n^2)O(n2). memomemo array of n*nn∗n is used.

// Approach 3: Dynamic Programming
// Algorithm

// This method relies on the fact that the longest increasing subsequence possible upto the i^{th}i th index in a given array is 
// independent of the elements coming later on in the array. Thus, if we know the length of the LIS upto i^{th}i 
// th index, we can figure out the length of the LIS possible by including the (i+1)^{th}(i+1) 
// th element based on the elements with indices jj such that 0 \leq j \leq (i + 1)0≤j≤(i+1).

// We make use of a dpdp array to store the required data. dp[i]dp[i] represents the length of the longest increasing subsequence possible considering the array elements upto the i^{th}i 
// th index only ,by necessarily including the i^{th}i 
// th element. In order to find out dp[i]dp[i], we need to try to append the current element(nums[i]nums[i]) in every possible increasing subsequences upto the (i-1)^{th}(i−1) 
// th index(including the (i-1)^{th}(i−1) 
// th index), such that the new sequence formed by adding the current element is also an increasing subsequence. Thus, we can easily determine dp[i]dp[i] using:

// dp[i] = \text{max}(dp[j]) + 1, \forall 0\leq j < idp[i]=max(dp[j])+1,∀0≤j<i

// At the end, the maximum out of all the dp[i]dp[i]'s to determine the final result.

// LIS_{length}= \text{max}(dp[i]), \forall 0\leq i < nLIS 
// length
// ​	
//  =max(dp[i]),∀0≤i<n

// The following animation illustrates the method:

// Current
// 1 / 23

// Complexity Analysis

// Time complexity : O(n^2)O(n2). Two loops of nn are there.

// Space complexity : O(n)O(n). dpdp array of size nn is used.

// Approach 4: Dynamic Programming with Binary Search
// Algorithm

// In this approach, we scan the array from left to right. We also make use of a dpdp array initialized with all 0's. This dpdp array is meant to store the increasing subsequence formed by including the currently encountered element. While traversing the numsnums array, we keep on filling the dpdp array with the elements encountered so far. For the element corresponding to the j^{th}j 
// th index (nums[j]nums[j]), we determine its correct position in the dpdp array(say i^{th}i 
// th index) by making use of Binary Search(which can be used since the dpdp array is storing increasing subsequence) and also insert it at the correct position. An important point to be noted is that for Binary Search, we consider only that portion of the dpdp array in which we have made the updates by inserting some elements at their correct positions(which remains always sorted). Thus, only the elements upto the i^{th}i 
// th index in the dpdp array can determine the position of the current element in it. Since, the element enters its correct position(ii) in an ascending order in the dpdp array, the subsequence formed so far in it is surely an increasing subsequence. Whenever this position index ii becomes equal to the length of the LIS formed so far(lenlen), it means, we need to update the lenlen as len = len + 1len=len+1.

// Note: dpdp array does not result in longest increasing subsequence, but length of dpdp array will give you length of LIS.

// Consider the example:

// input: [0, 8, 4, 12, 2]

// dp: [0]

// dp: [0, 8]

// dp: [0, 4]

// dp: [0, 4, 12]

// dp: [0 , 2, 12] which is not the longest increasing subsequence, but length of dpdp array results in length of Longest Increasing Subsequence.


// Note: Arrays.binarySearch() method returns index of the search key, if it is contained in the array, else it returns (-(insertion point) - 1). The insertion point is the point at which the key would be inserted into the array: the index of the first element greater than the key, or a.length if all elements in the array are less than the specified key.

// Complexity Analysis

// Time complexity : O(n\log n)O(nlogn). Binary search takes \log nlogn time and it is called nn times.

// Space complexity : O(n)O(n). dpdp array of size nn is used.


// My own notes.
/*
So, this is how the improved bruteforce solution (N^2) works:

We make an auxiliary array that will hold the length of the sequence up to that point.
The first element starts at 1, because the smallest sequence is always 1. (don't forget to return 0 at the start for empty input.)
For each point in the array, we will compare the current value with every other value before it.
    At each loop, we will keep track of the max length, wich starts at 0.
    Whenever we find a value that is lower, we will compare the length we had at that point with our current length. We do this by using our auxiliary arrray.
    This works becase we know, for a fact, that whatever length we had at a number that is LOWER than our current, we can improve by one.

    Once we loop ends, we save our current max length for the current element and move on.

At the end we return the best value found.
*/

// Solution by slkuo230 (N Log N)
var lengthOfLIS = function(nums) {
    
    if(!nums.length) return 0;
    
    // dynamic length because JavaScript is awesome like that :)
    // hence we don't need to track of the current running length of tails
    const tails = [];
    
    tails[0] = nums[0];
    
    for(let i = 1; i < nums.length; i++) {
        
        // replace current nums[i] with head if it's smaller
        if(nums[i] < tails[0]) {
            tails[0] = nums[i];     
        // if current nums[i] is bigger than the largest value we've recorded
        // we can extend our tails by current nums[i]
        } else if(nums[i] > tails[tails.length-1]) {
            tails.push(nums[i]);
        } else {
            // using binary search to find the insertion point of current nums[i]
            // return r because we're looking to replace index of tail that's greater than nums[i]
            let l = 0;
            let r = tails.length-1;
            while(l < r) {
                const mid = (l+r)/2 >> 0;
                if(tails[mid] >= nums[i]) {
                    r = mid
                } else {
                    l = mid + 1;
                }
            }
            tails[r] = nums[i];
        }
        
    }
    
    return tails.length;  
};
// https://leetcode.com/problems/longest-increasing-subsequence/discuss/223258/JavaScript-Binary-Search-Nlog(N)