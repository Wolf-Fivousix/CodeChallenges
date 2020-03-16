// Backend Programming Challange
// ========================================
// Find the length of the smallest array from an array given as a string input containing sub arrays of integers

// This solution takes in a 2DArray and finds the array with the smallest SUM value.
function smallestArray(numbersArray) {
    let smallestIndex = -1;
    let smallestSum = Number.POSITIVE_INFINITY;
    for (let i = 0; i < numbersArray.length; ++i) {
        const currentSum = numbersArray[i].reduce((sum, value) => sum += value, 0);
        if (smallestSum > currentSum) {
            smallestIndex = i;
            smallestSum = currentSum;
        }
    }
    return numbersArray[smallestIndex];
}

// This solution correctly takes a 2DArray and finds the smallest one.
// After coming back to this I realized that the input also comes as a string. so I need an extra step in parsing the input and converting it into a proper 2D Array.
function smallestArray(numbersArray) {
    let smallestLength = Number.POSITIVE_INFINITY;
    for (let i = 0; i < numbersArray.length; ++i) {
        const currentLength = numbersArray[i].length;
        if (smallestLength > currentLength) {
            smallestLength = currentLength;
        }
    }
    return smallestLength;
}

const array = [[1,2,3], [4,5,6], [-12,-3,100], [1]];
console.log(smallestArray(array));

function convertToArray(string) {
    // let number = "";
    // let finalArray = [];
    // let array = [];
    // let original = string.split("");
    // for (let i = 0; i < original.length; ++i) {
    //     console.log(i, Number(original[i]), `- ${original[i]}`)
    //     if (original[i] === ",") {
    //         array.push(Number(number));
    //         number = "";
    //     }
    //     else if (original[i] === "]") {
    //         finalArray.push(array);
    //         array = []
    //     }
    //     else if (Number(original[i])) {
    //         number += original[i];
    //     };
    // }
    // console.log(finalArray);
    // console.log(string.match(/\[.+\]/g));
}
console.log(convertToArray("[[1,2,3], [4,5,6], [-12,-3,100], []]"));