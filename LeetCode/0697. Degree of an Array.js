// Easy

// Given a non-empty array of non-negative integers nums, the degree of this array is defined as the maximum frequency of any one of its elements.

// Your task is to find the smallest possible length of a (contiguous) subarray of nums, that has the same degree as nums.

 

// Example 1:

// Input: nums = [1,2,2,3,1]
// Output: 2
// Explanation: 
// The input array has a degree of 2 because both elements 1 and 2 appear twice.
// Of the subarrays that have the same degree:
// [1, 2, 2, 3, 1], [1, 2, 2, 3], [2, 2, 3, 1], [1, 2, 2], [2, 2, 3], [2, 2]
// The shortest length is 2. So return 2.
// Example 2:

// Input: nums = [1,2,2,3,1,4,2]
// Output: 6
// Explanation: 
// The degree is 3 because the element 2 is repeated 3 times.
// So [2,2,3,1,4,2] is the shortest subarray, therefore returning 6.
 

// Constraints:

// nums.length will be between 1 and 50,000.
// nums[i] will be an integer between 0 and 49,999.

/*
First thing is having a way to determine what is the degree of the array.
getArrayDegree(array)
    - map and count each entry.
    - iterate through the values of the map and find the highest count.
        - We could have multiple values that match this criteria (same degree count), so let's return all of them.
    - return the elements (values) and it's degree.

Very interesting problem! I can see a few different ways of optimizing this based on the degree, the values, etc...
But let's start simple:

BRUTE FORCE:
- Find the element that corresponds to the highest degree.
- Find the first and last occurance of that element in the original array.
- Return that as the substring (everything else is unecessary).
-> This works great when we only have ONE biggest degree factor.

If we have MORE than one, than we just need to repeat the process for each element!
We save the smallest subarray in this iteration and return that in the end.

Eficiency:
Linear for both Time and Space complexity, BUT with the caviat that the worst case scenario we could have an array with every single element only happening once.
In that case we will get Polynomial Time complexity O(n^2), because of the getStartEndIndexes method.

/*

/**
 * @param {number[]} nums
 * @return {number}
 */
function findShortestSubArray(nums) {
    const elements = getElementsOfHighestDegree(nums);
    const startEndIndexes = getStartEndIndexes(nums, elements);
    const smallestLength = getSmallestDelta(startEndIndexes);

    return smallestLength 
};

function getElementsOfHighestDegree(nums) {
    const map = {};

    for(const element of nums) {
        if (map[element]) {
            map[element] += 1;
        }
        else {
            map[element] = 1;
        }
    }

    let elements = [];
    let highestDegree = 0;
    for (const [element, count] of Object.entries(map)) {
        if (count === highestDegree) {
            elements.push(Number(element));
        }
        if (count > highestDegree) {
            highestDegree = count
            elements = [Number(element)];
        }
    }

    return elements
}

function getStartEndIndexes(nums, elements) {
    const startEndIndexes = {}
    
    elements.forEach(element => {
        const firstIndex = nums.indexOf(element);
        const lastIndex = nums.lastIndexOf(element);
        startEndIndexes[element] = {
            firstIndex,
            lastIndex,
        }
    })

    return startEndIndexes;
}

function getSmallestDelta(startEndIndexes) {

    return Object.values(startEndIndexes).reduce((smallestLength, { firstIndex, lastIndex}) => {
        const delta = lastIndex - firstIndex + 1;

        if (delta < smallestLength) return delta
        
        return smallestLength
    }, Number.POSITIVE_INFINITY)
}

// Runtime 68 ms Beats 15.73%
// Memory 60.87 MB Beats 40.45%

// How to optmize:
// Iterate through the array once, for each element in there, record it's first and last occurance. (do NOT use the indexOf methods, as that will increase complexity)
// Now iterate through that map and find the smallest delta between first and last elements.