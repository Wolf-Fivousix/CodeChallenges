/*
 * Complete the 'minCost' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY cost as parameter.
 */

function minCost(cost) {
    let totalCost = 0;
    let previous_index = -1;
    cost.forEach( subArray => {
        let index = -2;
        let minValue = Number.POSITIVE_INFINITY;
        for (let i = 0; i < subArray.length; ++i) {
            console.log(subArray, ":  ", i, " - ", subArray[i], " --- ", minValue);
            if (subArray[i] < minValue && i !== previous_index) {
                index = i;
                minValue = subArray[i];
            }
        }
        console.log(index, " - ", minValue);
        previous_index = index;
        totalCost += minValue;
    });

    return totalCost;
}


// [
//     [1, 2, 2],
//     [2, 2, 1],
//     [2, 1, 2]
// ]
// Your Output (stdout)
// 5

// Wrong Answer
// Input (stdin)
// Download
// 2
// 3
// 1 10 20
// 2 100 100
// Your Output (stdout)
// 101
// Expected Output
// Download

// Wrong Answer
// Your Output (stdout)
// 467
// Debug output
// [ 12, 67, 10 ] ':  ' 0 ' - ' 12 ' --- ' Infinity
// [ 12, 67, 10 ] ':  ' 1 ' - ' 67 ' --- ' 12
// [ 12, 67, 10 ] ':  ' 2 ' - ' 10 ' --- ' 12
// 2 ' - ' 10
// [ 33, 79, 49 ] ':  ' 0 ' - ' 33 ' --- ' Infinity
// [ 33, 79, 49 ] ':  ' 1 ' - ' 79 ' --- ' 33
// [ 33, 79, 49 ] ':  ' 2 ' - ' 49 ' --- ' 33
// 0 ' - ' 33
// [ 79, 21, 67 ] ':  ' 0 ' - ' 79 ' --- ' Infinity
// [ 79, 21, 67 ] ':  ' 1 ' - ' 21 ' --- ' Infinity
// [ 79, 21, 67 ] ':  ' 2 ' - ' 67 ' --- ' 21
// 1 ' - ' 21
// [ 72, 93, 36 ] ':  ' 0 ' - ' 72 ' --- ' Infinity
// [ 72, 93, 36 ] ':  ' 1 ' - ' 93 ' --- ' 72
// [ 72, 93, 36 ] ':  ' 2 ' - ' 36 ' --- ' 72
// 2 ' - ' 36
// [ 85, 45, 28 ] ':  ' 0 ' - ' 85 ' --- ' Infinity
// [ 85, 45, 28 ] ':  ' 1 ' - ' 45 ' --- ' 85
// [ 85, 45, 28 ] ':  ' 2 ' - ' 28 ' --- ' 45
// 1 ' - ' 45
// [ 91, 94, 57 ] ':  ' 0 ' - ' 91 ' --- ' Infinity
// [ 91, 94, 57 ] ':  ' 1 ' - ' 94 ' --- ' 91
// [ 91, 94, 57 ] ':  ' 2 ' - ' 57 ' --- ' 91
// 2 ' - ' 57
// [ 1, 53, 8 ] ':  ' 0 ' - ' 1 ' --- ' Infinity
// [ 1, 53, 8 ] ':  ' 1 ' - ' 53 ' --- ' 1
// [ 1, 53, 8 ] ':  ' 2 ' - ' 8 ' --- ' 1
// 0 ' - ' 1
// [ 44, 68, 90 ] ':  ' 0 ' - ' 44 ' --- ' Infinity
// [ 44, 68, 90 ] ':  ' 1 ' - ' 68 ' --- ' Infinity
// [ 44, 68, 90 ] ':  ' 2 ' - ' 90 ' --- ' 68
// 1 ' - ' 68
// [ 24, 96, 30 ] ':  ' 0 ' - ' 24 ' --- ' Infinity
// [ 24, 96, 30 ] ':  ' 1 ' - ' 96 ' --- ' 24
// [ 24, 96, 30 ] ':  ' 2 ' - ' 30 ' --- ' 24
// 0 ' - ' 24
// [ 3, 22, 66 ] ':  ' 0 ' - ' 3 ' --- ' Infinity
// [ 3, 22, 66 ] ':  ' 1 ' - ' 22 ' --- ' Infinity
// [ 3, 22, 66 ] ':  ' 2 ' - ' 66 ' --- ' 22
// 1 ' - ' 22
// [ 49, 24, 1 ] ':  ' 0 ' - ' 49 ' --- ' Infinity
// [ 49, 24, 1 ] ':  ' 1 ' - ' 24 ' --- ' 49
// [ 49, 24, 1 ] ':  ' 2 ' - ' 1 ' --- ' 49
// 2 ' - ' 1
// [ 53, 77, 8 ] ':  ' 0 ' - ' 53 ' --- ' Infinity
// [ 53, 77, 8 ] ':  ' 1 ' - ' 77 ' --- ' 53
// [ 53, 77, 8 ] ':  ' 2 ' - ' 8 ' --- ' 53
// 0 ' - ' 53
// [ 28, 33, 98 ] ':  ' 0 ' - ' 28 ' --- ' Infinity
// [ 28, 33, 98 ] ':  ' 1 ' - ' 33 ' --- ' Infinity
// [ 28, 33, 98 ] ':  ' 2 ' - ' 98 ' --- ' 33
// 1 ' - ' 33
// [ 81, 35, 13 ] ':  ' 0 ' - ' 81 ' --- ' Infinity
// [ 81, 35, 13 ] ':  ' 1 ' - ' 35 ' --- ' 81
// [ 81, 35, 13 ] ':  ' 2 ' - ' 13 ' --- ' 81
// 2 ' - ' 13
// [ 65, 14, 63 ] ':  ' 0 ' - ' 65 ' --- ' Infinity
// [ 65, 14, 63 ] ':  ' 1 ' - ' 14 ' --- ' 65
// [ 65, 14, 63 ] ':  ' 2 ' - ' 63 ' --- ' 14
// 1 ' - ' 14
// [ 36, 25, 69 ] ':  ' 0 ' - ' 36 ' --- ' Infinity
// [ 36, 25, 69 ] ':  ' 1 ' - ' 25 ' --- ' 36
// [ 36, 25, 69 ] ':  ' 2 ' - ' 69 ' --- ' 36
// 0 ' - ' 36