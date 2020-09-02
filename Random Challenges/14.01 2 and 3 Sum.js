// [2, 1, 5, 7] sum = 8
// 2 numbers match the sum.
// numbers are distinct.
// no 0 in the array.

// []

// [1,2] sum = 5
// => false

// define a empty set
// iterate through the input array
    // look in the set for the difference between sum and element.
        // if in the set, return true.
        // if not in set, add element.
// return false

function findSum(array, targetSum) {
    const seenValues = new Set();
    
    for (let i = 0; i < array.length; ++i) {
        const compliment = targetSum - array[i];
        if (seenValues.has(compliment)) return true;
        else seenValues.add(array[i]);
    }
    
    return false;
}
// Linear Time Complexity
// Linear Space Complexity

console.log(findSum([2, 1, 5, 7], 8)); // true
console.log(findSum([1,2], 5)); // false
console.log(findSum([1,2,3,4,5,6,7], 12)); // true
console.log(findSum([2,4,5,7], 8)); // false


// How can we move this solution into a 3Sum instead of 2Sum?
// iterate through the input array.
    // for each element, we caculate the difference between sum and current element.
        // use our "findSum" function to look for the 2 values that match that difference.
        // if return true, then we have a match.
// return false.