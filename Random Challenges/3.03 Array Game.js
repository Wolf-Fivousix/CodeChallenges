// Array Game

// Jessica has an array, numbers, consisting of n
// integers. She plays a game with this array where,
// in each move, she selects (n − 1) elements and
// increments their values by one. She wants to
// know the minimum number of moves required
// to make all of the array's elements equal.
// For example, if n = 5, and her array is [3, 4, 6, 6,
// 3], she chooses 4 of the 5 elements during each
// move and increments each of their values by
// one. Indexing begins at 1.
// Function Description
// Complete the function countMoves in the editor
// below. It must return a long integer denoting
// the minimum number of moves required to
// make elements equal.
// countMoves has the following parameter(s):
//     numbers[numbers[0],...numbers[n-1]]: an array
// of integers

// Iteration			Array   	    Unchanged element
// 0		[ 3,  4,  6,  6,  3]
// 1		[ 4,  5,  7,  6,  4]		4
// 2		[ 5,  6,  7,  7,  5]		3
// 3		[ 6,  7,  8,  7,  6]		4
// 4 		[ 7,  8,  8,  8,  7]		3
// 5		[ 8,  9,  9,  8,  8]		4
// 6		[ 9,  9, 10,  9,  9]		2
// 7		[10, 10, 10, 10, 10]		3

// Constraints
// 1 ≤ n ≤ 10 5
// 1 ≤ numbers[i] ≤ 10 6

/*
 * Complete the 'countMoves' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts INTEGER_ARRAY numbers as parameter.
 */
function countMoves(numbers) {
    let notEqual = true;
    let steps = 0;
    while (notEqual) {
        notEqual = false;
        let maxIndex = 0;
        for (let i = 0; i < numbers.length; ++i) {
            if (numbers[i] !== numbers[maxIndex]) {
                if (numbers[i] > numbers[maxIndex]) maxIndex = i;
                notEqual = true;
            }
        }
        if (notEqual) {
            numbers.forEach((element, i) => {
                if (i !== maxIndex) ++numbers[i];
            });
            ++steps;
        }
    }
    return steps;
}

// 10/25 cases
// Right now we have multiple N passes.
// The first time we look for the element that will not be changed.
// Then we do another pass increasing elements by 1.
// Repeat this process as many times as needed.

// Maybe identifying the second largest element and increasing everything by that amount could work? Like [1, 6666666666, 1]
// Although something like [1, 6666666, 6666665] would break that optimization.