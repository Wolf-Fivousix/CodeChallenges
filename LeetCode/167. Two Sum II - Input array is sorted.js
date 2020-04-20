// Given an array of integers that is already sorted in ascending order, find two numbers such that they add up to a specific target number.

// The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2.

// Note:

// Your returned answers (both index1 and index2) are not zero-based.
// You may assume that each input would have exactly one solution and you may not use the same element twice.
// Example:

// Input: numbers = [2,7,11,15], target = 9
// Output: [1,2]
// Explanation: The sum of 2 and 7 is 9. Therefore index1 = 1, index2 = 2.

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
function twoSum(numbers, target) {
    for (let i = 0; i < numbers.length - 1; ++i) {
        for (let j = i + 1; j < numbers.length; ++j) {
            if(numbers[i] + numbers[j] === target) return [i + 1, j + 1];
        }   
    }
    return null;
};

// This is a brute force approach, nothing fantastic, but gets the job done. Albeit poorly, Polynomial Time Complexity O(N^2)

// I think we can do better. How can we leverage the sorted array to our purposes?
// Yes! Let's do it in a naive way. We know that if I + J is greater than our Target, EVERYTHING after J will not hit our target.
// So we can stop our second loop earlier, achieving a much better run time.

function twoSum(numbers, target) {
    for (let i = 0; i < numbers.length - 1; ++i) {
        for (let j = i + 1; j < numbers.length && numbers[i] + numbers[j] <= target; ++j) {
            if(numbers[i] + numbers[j] === target) return [i + 1, j + 1];
        }   
    }
    return null;
};

// Now, that is nice, but in the worse case scenario, when our Target is high and the return values are at the very end of the array.
// It does not give as a performance improvement. It remains at Polynomial. Can we do better?
// Could we leverage a Binary Search to find the element we are looking for?
// Would that give us any improvement? Cerntainly! Even if we BS for every element, we would drop from N^2 to N Log N. A remarkable improvement!

// We have 2 limitations that needs to be taken into consideration for our Binary Search algorithm:
// The pair needs to have different indexes, like [2,3,4], 6. The answer is 2 and 4, not 3 and 3.
// We could do this:
function twoSum(numbers, target) {
    for (let i = 0; i < numbers.length - 1; ++i) {
        const second = binarySearch(numbers, target - numbers[i], i);
        if (second === -1) continue;
        
        return [i + 1, second + 1];
    }
};

function binarySearch(array, target, forbiddenIndex) {
    if (!array.length) return -1;
    const middle = Math.floor(array.length/2);
    
    if (array[middle] === target && middle !== forbiddenIndex) return middle;

    if (target < array[middle]) return binarySearch(array.slice(0, middle), target);
    else {
        const found = binarySearch(array.slice(middle + 1), target);
        return found === -1 ? -1 : middle + 1 + found;
    }
}

// But, because slicing the array would be inneficient, we have do it iteractively:

function binarySearch(array, target, forbiddenIndex) {
    let start = 0;
    let end = array.length - 1;

    while (start <= end) {
        const middle = Math.floor((start + end) / 2);
        const currentValue = array[middle];
        if (currentValue === target && middle !== forbiddenIndex) return middle;
        
        if (target < currentValue) end = middle - 1;
        else start = middle + 1;
    }
    
    return -1;
}