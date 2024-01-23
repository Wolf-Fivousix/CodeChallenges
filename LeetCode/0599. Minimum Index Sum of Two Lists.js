// Easy
// https://leetcode.com/problems/minimum-index-sum-of-two-lists/

// Given two arrays of strings list1 and list2, find the common strings with the least index sum.

// A common string is a string that appeared in both list1 and list2.

// A common string with the least index sum is a common string such that if it appeared at list1[i] and list2[j] then i + j should be the minimum value among all the other common strings.

// Return all the common strings with the least index sum. Return the answer in any order.

 

// Example 1:

// Input: list1 = ["Shogun","Tapioca Express","Burger King","KFC"], list2 = ["Piatti","The Grill at Torrey Pines","Hungry Hunter Steakhouse","Shogun"]
// Output: ["Shogun"]
// Explanation: The only common string is "Shogun".
// Example 2:

// Input: list1 = ["Shogun","Tapioca Express","Burger King","KFC"], list2 = ["KFC","Shogun","Burger King"]
// Output: ["Shogun"]
// Explanation: The common string with the least index sum is "Shogun" with index sum = (0 + 1) = 1.
// Example 3:

// Input: list1 = ["happy","sad","good"], list2 = ["sad","happy","good"]
// Output: ["sad","happy"]
// Explanation: There are three common strings:
// "happy" with index sum = (0 + 1) = 1.
// "sad" with index sum = (1 + 0) = 1.
// "good" with index sum = (2 + 2) = 4.
// The strings with the least index sum are "sad" and "happy".
 

// Constraints:

// 1 <= list1.length, list2.length <= 1000
// 1 <= list1[i].length, list2[i].length <= 30
// list1[i] and list2[i] consist of spaces ' ' and English letters.
// All the strings of list1 are unique.
// All the strings of list2 are unique.
// There is at least a common string between list1 and list2.

/*

The constraints tell us that there is at least ONE match and that each string is unique in it's list. That eliminates a couple of edge cases.

First idea:
Convert one of the arrays into a Hash Table, giving constant access. Key is string, Value is the index.
Iterate through the remaining array, for each string, look up the hashtable. If the element is found, calculate the index sum.
Compare to existing index sum, if higher, do nothing.
Compare to existing index sum, if equal, add to result array.
Compare to existing index sum, if lower, reset result array, update existing index sum and save the element.

This will burn some memory and make runtime linear. Roughly efficient!

Second idea (in case we CANNOT use extra memory):
Is to bruteforce the solution. Double looped iteration in each array. Find common strings, calculate indexes similar to solution 1.

This would be Quadratic Time complexity but constant memory.
(if we want to be more accurate, it wouldn't be "quadratic", as each array is independent, so it would be N * M)

*/

/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
function findRestaurant (list1, list2) {
    const hashMap = convertArrayIntoHashMap(list2)
    let leastIndexSum = Number.POSITIVE_INFINITY
    let result = []

    for(let i = 0; i < list1.length; ++i) {
        const string = list1[i]
        // There was a little bug with "if (hashMap[string])" check. Which is that the FIRST element of the array is "0",
        // "0" reads as "false", so it was not catching the first entry of the hashMap.
        if (hashMap[string] !== undefined) {
            const indexSum = i + hashMap[string]

            if (indexSum === leastIndexSum) {
                result.push(string)
            }
            if (indexSum < leastIndexSum) {
                leastIndexSum = indexSum
                result = [string]
            }
        }
    }

    return result
};

function convertArrayIntoHashMap(array) {
    const hashMap = {}
    array.forEach((string, index) => {
        // Remember, each entry is unique, so we don't need to check it's existance.
        hashMap[string] = index
    })

    return hashMap
}

// Runtime
// 94ms
// Beats 46.75%of users with JavaScript
// Memory
// 51.52MB
// Beats 33.25%of users with JavaScript 