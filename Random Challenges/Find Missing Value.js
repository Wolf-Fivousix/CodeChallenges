// Given an unsorted array of positive integers from 1 to 100, find the missing value in it.

function missingValue(numbers) {
    let totalSum = 0;
    for (let i = 1; i <= numbers.length + 1; ++i) {
        totalSum += i;
    }

    return totalSum - numbers.reduce((sum, v) => sum + v);
}

console.log(missingValue([1,2,3])); // => 4
console.log(missingValue([1,3,4])); // => 2
console.log(missingValue([5,1,4,3])); // => 2

// This approach solves the problem in O(N), but the larger the size of N the quicker we'll get to an integer overflow.
// Also uses very little memory.

function missingValue2(numbers) {
    const values = numbers.sort((a, b) => a - b);
    let counter = 1;
    
    for (let i = 0; i < values.length; ++i) {
        if (counter !== values[i]) return counter;
        ++counter;
    }

    return counter;
}

console.log(missingValue2([1,2,3])); // => 4
console.log(missingValue2([1,3,4])); // => 2
console.log(missingValue2([5,1,4,3])); // => 2

// This approach is a little slower, because of the sorting we going to have O(N log(N)) right out of the batch.
// But it also allows for an array length of up to the maximum limit of integers, which is probably more than enough to run out of heap memory than the number itself.