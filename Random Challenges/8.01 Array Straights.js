// array of numbers, all integers
// find if all elements are 3 of a kind.

// [7, 7, 7] => true

// [1, 7, 1, 7, 1, 7] => true

// [1, 7, 1, 7, 7] => false
// [7, 7, 7, 7, 7, 7] => false
// [] => true

// For some reason I deleted the code from here without realizing. =(

// Bruteforce approach is scanning the array multiple times.
// A more efficient solution is making a hash and counting all numbers.
    // Any value that does not have a multiple of 3 returns false early.
// As an early optimization we can return first by comparing if the array length is divisible by 3.
// If not, we know it will never have 3 of each element.

function threeOfKind(array) {
    if (array.length % 3) return false;

    const hash = {};
    array.forEach(value => hash[value] = ++hash[value] || 1);

    const values = Object.values(hash);

    return values.filter(count => count !== 3).length === 0;
}

console.log([], threeOfKind([]) === true);
console.log([7, 7, 7], threeOfKind([7, 7, 7]) === true);
console.log([1, 7, 7, 1, 7], threeOfKind([1, 7, 7, 1, 7]) === false);
console.log([1, 7, 1, 7, 1, 7], threeOfKind([1, 7, 1, 7, 1, 7]) === true);
console.log([7, 7, 7, 7, 7, 7], threeOfKind([7, 7, 7, 7, 7, 7]) === false);

// straight of size 5, duplicate values are allowed
// consecutive in value

// [6, 2, 3, 4, 5] => true

// [8, 4, 2, 3, 4, 5] => true

// [2, 3, 4, 4, 5, 5, 6, 6, 7, 8] => true
// [2, 3, 4, 5, 6, 7, 8]

// [2, 3, 4, 5, 6] [4, 5, 6, 7, 8]

// [2, 3, 4, 4, 5, 5, 6, 6, 7, 8]
// [2, 3, 4, 5, 6]
// =
// [4, 5, 6, 7, 8]
// [4, 5, 6, 7, 8]
// =
// [] => true
