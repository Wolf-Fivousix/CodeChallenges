// A robotic chemical delivery system for a
// college chemistry laboratory has been
// configured to work using only one type
// of glass flask per day. For each
// chemical ordered, it will be filled to a
// mark that is at least equal to the
// volume ordered. There are multiple
// flasks available, each with markings at
// various levels. Given a list of order
// requirements and a list of flasks with
// their measurements, determine the
// single type of flask that will result in
// minimal waste. Waste is the sum
// of marking - requirement for each
// order. Return the zero-based index of
// the flask type chosen. If there are
// multiple answers, return the minimum
// index. If no flask will satisfy the
// constraints, return -1.
// Example
// n = 4 (number of orders)
// requirements = [4, 6, 6, 7]
// flaskTypes = 3
// markings = [[0, 3], [0, 5], [0, 7],
// [1, 6], [1, 8], [1, 9],
// [2, 3], [2, 5], [2, 6]]
// The markings array is a 2D array where
// the first element is the flask number
// and the second an available marking.
// In this case, the first type has markings
// at 3, 5 and 7. The second type has
// them at 6 , 8 and 9 , and the third type
// has markings at 3, 5 and 6.

// Using the first flask type, the losses are:
// 5 - 4 = 1, 7 - 6 = 1, 7 - 6 = 1, 7 - 7 = 0. 1 +
// 1 + 1 + 0 = 3 units wasted.
// Using the second flask type, losses are:
// 6 - 4 = 2, 6 - 6 = 0, 6 - 6 = 0, 8 - 7 = 1. 2 +
// 0 + 0 + 1 = 3 units wasted.

// The third flask type cannot be used
// because its maximum capacity is 6 and
// there is an order for 7.
// Two types of flasks can be used
// and 3 units will be lost. The lower index
// flask is at index 0 .
// NOTE: The markings 2D array will be
// given in order of the flasks, i.e ., the
// markings for the 0-index flask will be
// followed by markings of 1-index flask
// and so on. For each flask, the given
// markings will also be sorted in
// ascending order.
// Function Description
// Complete the function chooseFlask in
// the editor below.
// chooseFlask has the following
// parameter(s):
// int requirements[n]: the
// requirements for the orders
// int flaskTypes: the number of flask
// types
// int markings[totalMarks][2]: the first
// column signifies the index of the flask
// and second signifies one mark
// Returns:
// int: the index of the flask to choose
// or -1 if none will work
// Constraints
// 1 ≤ n ≤ 10 5
// 1 ≤ flaskTypes ≤ 10 4
// 1 ≤ totalMarks ≤ 10 5
// 1 ≤ requirements[i] ≤ 10 9 (where 0 ≤ i <
// n)
// 0 ≤ markings[i][0] < flaskTypes (where 0 ≤ i < total_marks)
// 0 ≤ markings[i][1] ≤ 10 9 (where 0 ≤ i < total_marks)

// Sample Case 0
// Sample Input For Custom Testing
// STDIN    Function
// -----    --------
// 2    →   requirements[] size n = 2
// 4    →   requirements = [4, 6]
// 6
// 2    →   flaskTypes = 2
// 5    →   markings[] size total_marks = 5
// 2    →   markings[][] size columns = 2 (always)
// 0 5  →   markings = [[0, 5], [0, 7], [0, 10], [1, 4], [1, 10]]
// 0 7
// 0 10
// 1 4
// 1 10

// Sample Output
// 0
// Explanation
// The first flask type has marks at 5,
// 7 and 10. The waste using that type
// is (5-4 + 7-6) = 2.
// The second flask type has markings
// at 4 and 10. The waste using that
// type is (4-4 + 10-6) = 4 . It is better to
// use the first flask type, index 0 .

// Sample Case 1
// Sample Input For Custom Testing

// STDIN    Function
// -----    --------
// 2    →   requirements[] size n = 2
// 10   →   requirements = [10, 15]
// 15    
// 3    →   flaskTypes = 3
// 6    →   markings[] size totalMarks = 6
// 2    →   markings[][] size columns = 2
// 0 11 →   markings = [[0, 11], [0, 20], [1, 11], [1, 17], [2, 12], [2, 16]]
// 0 20
// 1 11
// 1 17
// 2 12
// 2 16

// Sample Output
// 1

// Explanation
// The waste using the flask types are 6,
// 3 , and 3 respectively. The flask with
// minimum waste and minimum index
// is 1 .

/*
 * Complete the 'chooseFlask' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY requirements
 *  2. INTEGER flaskTypes
 *  3. 2D_INTEGER_ARRAY markings
 */

function chooseFlask(requirements, flaskTypes, markings) {
    let flasks = make2DArray(flaskTypes);
    markings.forEach(flask => flasks[flask[0]].push(flask[1]));

    const minMark = Math.min(...requirements);
    flasks = flasks.map(flask => filterOutOfRange(flask, minMark));

    const waste = flasks.map(flask => calculateWaste(flask, requirements));
    return minWasteIndex(waste);
}

function make2DArray(size) {
    const array = [];

    for (let i = 0; i < size; ++i) array.push([]);

    return array;
}

function filterOutOfRange(array, min) {
    return array.filter(element => element >= min);
}

function calculateWaste(markings, requirements) {
    let waste = 0;

    for (let i = 0; i < requirements.length; ++i) {
        let impossibleFlask = true;
        for (let j = 0; j < markings.length; ++j) {
            if (markings[j] < requirements[i]) continue;
            impossibleFlask = false;
            waste += markings[j] - requirements[i];
            break;
        }
        if (impossibleFlask) waste = Number.POSITIVE_INFINITY;
    }

    return waste;
}

function minWasteIndex(waste) {
    let minIndex = 0;

    for (let i = 1; i < waste.length; ++i) if (waste[i] < waste[minIndex]) minIndex = i;

    return minIndex;
}

// 12/12 Test Cases.