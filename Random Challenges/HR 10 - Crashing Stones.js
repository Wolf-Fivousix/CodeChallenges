// Each day a quarry-worker is given a pile of
// stones and told to reduce the larger stones
// into smaller ones. The worker must smash the
// stones together to reduce them, and is told to
// always pick up the largest two stones and
// smashe them together. If the stones are of
// equal weight, they both disintegrate entirely. If
// one is larger, the smaller one is disintegrated
// and the larger one is reduced by the weight of
// the smaller one. Eventually, there is either one
// stone left that cannot be broken, or all of the
// stones have been smashed. Determine the
// weight of the last stone, or return 0 if there is
// none.
// Example
// weights = [1,2,3,6,7,7].
// The worker always starts with the two largest
// stones. In this case, the two largest stones
// have equal weights of 7 so they both
// disintegrate when smashed. Next the worker
// smashes weights 3 and 6. The smaller one is
// destroyed and the larger weighs 6 - 3 = 3
// units. Then, weights 3 and 2 are smashed
// together, which leaves a stone of weight 1.
// This is smashed with the last remaining stone
// of weight 1. There are no stones left, so the
// remaining stone weight is 0.
// Function Description
// Complete the function lastStoneWeight in the
// editor below. The function must return an
// integer that denotes the weight of the last
// stone, or 0 if all stones shattered into dust.
// lastStoneWeight has the following
// parameter(s):
//    int weights[n]: an array of integers
// indicating the weights of each stone

function lastStoneWeight(weights) {
    if (!weights.length) return 0;

    weights = weights.sort((a, b) => a - b);

    while(weights.length > 1) {
        let big1 = weights.pop();
        const big2 = weights.pop();

        if (big1 !== big2) {
            big1 = big1 < big2 ? big2 - big1 : big1 - big2;
            weights.push(big1);

            if (weights.length > 1 && weights[weights.length - 1] < weights[weights.length - 2]) {
                weights = weights.sort((a, b) => a - b);
            }

            // Naive O(N) insert.
            // naiveInsert(weights, big1);

            // Binary Insert.
            getInsertionIndex(weights, big1);
        }
    }
    return weights.length ? weights[0] : 0;
}

function getInsertionIndex(array, value) {
    function insert(array, value, start, end) {
        // console.log(array, " -- ", start, end);
        if (start > end) return start;

        const middle = Math.floor((start + end) / 2);
        // console.log(middle);
        if (array[middle] === value) return middle;

        if (value < array[middle]) return insert(array, value, start, middle - 1);
        return insert(array, value, middle + 1, end);
    }

    return insert(array, value, 0, array.length - 1);
}

function naiveInsert(array, value) {
    if (!array.length) return array.push(value);

    for (let i = 0; i < array.length; ++i) {
        if (value < array[i]) {
            let temp = array.slice(0, i + 1);
            temp.push(value);
            temp.push(...array.slice(i));
            array = temp;
            return;
        }
    }

    array.push(value);
    return;
}
// 7/11 test cases - Need to make the sorting efficiency issue.


// 9/11 Test Cases by Stanley Traub.
var lastStoneWeight = function (stones) {
    if (stones.length < 2) return stones;
    while (stones.length > 1) {
        let index1 = stones.indexOf(Math.max(...stones));
        let stone1 = stones.splice(index1, 1);
        let index2 = stones.indexOf(Math.max(...stones));
        let stone2 = stones.splice(index2, 1);
        stones.push(stone1 - stone2);
    }
    return stones;
};

const a = [1,2,3,4,5];
console.log(getInsertionIndex(a, -1));
console.log(getInsertionIndex(a, 3));
console.log(getInsertionIndex(a, 6));