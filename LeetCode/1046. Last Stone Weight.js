// We have a collection of stones, each stone has a positive integer weight.

// Each turn, we choose the two heaviest stones and smash them together.  Suppose the stones have weights x and y with x <= y.  The result of this smash is:

// If x == y, both stones are totally destroyed;
// If x != y, the stone of weight x is totally destroyed, and the stone of weight y has new weight y-x.
// At the end, there is at most 1 stone left.  Return the weight of this stone (or 0 if there are no stones left.)

 

// Example 1:

// Input: [2,7,4,1,8,1]
// Output: 1
// Explanation: 
// We combine 7 and 8 to get 1 so the array converts to [2,4,1,1,1] then,
// we combine 2 and 4 to get 2 so the array converts to [2,1,1,1] then,
// we combine 2 and 1 to get 1 so the array converts to [1,1,1] then,
// we combine 1 and 1 to get 0 so the array converts to [1] then that's the value of last stone.
 

// Note:

// 1 <= stones.length <= 30
// 1 <= stones[i] <= 1000

/**
 * @param {number[]} stones
 * @return {number}
 */
function lastStoneWeight(weights) {
    if (!weights.length) return 0;
    
    weights = weights.sort((a, b) => a - b);

    while(weights.length > 1) {
        let big1 = weights.pop();
        const big2 = weights.pop();

        if (big1 !== big2) {
            big1 = big1 - big2;
            
            const newIndex = getInsertionIndex(weights, big1);
            weights = weights.slice(0, newIndex).concat([big1], weights.slice(newIndex));
        }
    }

    return weights.length ? weights[0] : 0;
}

function getInsertionIndex(array, value) {
    function indexOf(array, value, start, end) {
        if (start > end) return start;

        const middle = Math.floor((start + end) / 2);
        
        if (array[middle] === value) return middle;

        if (value < array[middle]) return indexOf(array, value, start, middle - 1);
        return indexOf(array, value, middle + 1, end);
    }

    return indexOf(array, value, 0, array.length - 1);
}

// Runtime: 64 ms, faster than 35.26% of JavaScript online submissions for Last Stone Weight.
// Memory Usage: 33.4 MB, less than 100.00% of JavaScript online submissions for Last Stone Weight.