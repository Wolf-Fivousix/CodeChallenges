// Easy

// The next greater element of some element x in an array is the first greater element that is to the right of x in the same array.

// You are given two distinct 0-indexed integer arrays nums1 and nums2, where nums1 is a subset of nums2.

// For each 0 <= i < nums1.length, find the index j such that nums1[i] == nums2[j] and determine the next greater element of nums2[j] in nums2. If there is no next greater element, then the answer for this query is -1.

// Return an array ans of length nums1.length such that ans[i] is the next greater element as described above.

 

// Example 1:

// Input: nums1 = [4,1,2], nums2 = [1,3,4,2]
// Output: [-1,3,-1]
// Explanation: The next greater element for each value of nums1 is as follows:
// - 4 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.
// - 1 is underlined in nums2 = [1,3,4,2]. The next greater element is 3.
// - 2 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.
// Example 2:

// Input: nums1 = [2,4], nums2 = [1,2,3,4]
// Output: [3,-1]
// Explanation: The next greater element for each value of nums1 is as follows:
// - 2 is underlined in nums2 = [1,2,3,4]. The next greater element is 3.
// - 4 is underlined in nums2 = [1,2,3,4]. There is no next greater element, so the answer is -1.
 

// Constraints:

// 1 <= nums1.length <= nums2.length <= 1000
// 0 <= nums1[i], nums2[i] <= 104
// All integers in nums1 and nums2 are unique.
// All the integers of nums1 also appear in nums2.
 

// Follow up: Could you find an O(nums1.length + nums2.length) solution?

/*

The description is overly complicated for a very simple thing. What a pain! Let me fix it for you:
Given an array1, which is a subset of unique elements found in array2, find the closest greater value to the right of it.

So, ideally we want to be able to have constant access all elements in Array2, so we avoid iterating through it like crazy. For that we can create a HashMap.
But even with the starting index, we have to navigate to the right in order to find the next greater element. Which, for a sorted decreasing array, is NEVER. Which kills our efficiency gains. (not in reality, but theoretically, yes)
    Which means this could be a not so good optmization.

Solution 1) Brute Force
For each element in Array1
    Find the same element in Array2
    Keep going right from it until you find the next greater value.
    If found, replace element in Array1 with it.
    If not found, replace element in Array1 with -1.
Return modified Array1 (or a copy of it, if we don't want to change the original)

Quadratic time complexity and Linear Space Complexity (we can decrease to constant space if we modify nums1 array in place)

Solution 2) Optimal
This is WILD! So, the only way to do this in Linear time is to iterate through the bigger array only ONCE.
And through the iteration, we need to figure out what greater values will match with what numbers!
How could we possibly do that!? I tell you how: With a Stack!
We start the iteration by placing one value in our initial stack (we have the guarantee that there is at least one value in the array).
Then we iterate through the array.
    If we find a smaller element, we push it into the stack.
    If we find a GREATER element, we save the popped value as a Key to a HashMap and save the CURRENT ELEMENT as it's value. That is the ANSWER we want.
    If there is another number left in the stack, repeat the comparison until the stack is empty or the value at the top of it is not smaller than the current element.
    Push current element to the top of the stack.
Once iteration is over, anything left in the Stack is popped and paired with a value of "-1".

Then we iterate through Nums1, look the HashMap for the answer and just return it!

*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
function nextGreaterElement(nums1, nums2) {
    const result = []

    nums1.forEach((element) => {
        let nextGreaterElement = -1
        let foundElement = false
        for (let i = 0; i < nums2.length; ++i) {
            if (nums2[i] === element) {
                foundElement = true
            }
            if (foundElement && nums2[i] > element) {
                nextGreaterElement = nums2[i]
                break
            }
        }

        result.push(nextGreaterElement)
    })

    return result
};

// Solution 1
// Runtime 64ms Beats 33.64%of users with JavaScript
// Memory 42.11MB Beats 97.20%of users with JavaScript

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
function nextGreaterElement(nums1, nums2) {
    const hashTable = constructAnswerHashMapFromArray(nums2)
    
    return nums1.map(element => hashTable[element])
};

function constructAnswerHashMapFromArray(array) {
    const stack = [array[0]]
    const hashMap = {}

    for (let i = 1; i < array.length; ++i) {
        const element = array[i]
        let topStack = stack.pop()

        while (element > topStack) {
            hashMap[topStack] = element
            topStack = stack.pop()
            if (topStack === undefined) break
        }

        if (topStack !== undefined) stack.push(topStack)
        stack.push(element)
    }

    while (stack.length) {
        const element = stack.pop()
        hashMap[element] = -1
    }

    return hashMap
}

// Solution 2
// Runtime 55ms Beats 76.27%of users with JavaScript
// Memory 44.62MB Beats 17.29%of users with JavaScript