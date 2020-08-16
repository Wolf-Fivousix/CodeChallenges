// Growth in 2 Dimensions
// Start with an infinite two dimensional grid filled
// with zeros, indexed from  (1,1) at the bottom left
// corner with coordinates increasing toward the
// top and right. Given a series of coordinates (r, c) ,
// where  r  is the ending row and  c  is the ending
// column, add  1 to each element in the range from
// (1,1) to  (r, c)  inclusive. Once all coordinates are
// processed, determine how many cells contain
// the maximal value in the grid.
// Example
//
// https://hrcdn.net/s3_pub/istreet-assets/t1ZgB1I3uhh9ZBnDu_Dijw/growth_in_2_dimensions_example.svg
//
// upRight = ["1 4", "2 3", "4 1"]
// The two space-separated integers within each
// string represent  r  and  c  respectively. The
// following diagrams show each iteration starting
// at zero. The maximal value in the grid is  3,  and
// there is  1  occurrence at cell  (1, 1) .
// Initial Grid
// 0 0 0 0
// 0 0 0 0
// 0 0 0 0
// 0 0 0 0
// 1 2 3 4
// 1
// 2
// 3
// 4
// 0 0 0 0
// 0 0 0 0
// 0 0 0 0
// 1 1 1 1
// 1 2 3 4
// 1
// 2
// 3
// 4
// Step 0: r = 1, c = 4
// 0 0 0 0
// 0 0 0 0
// 1 1 1 0
// 2 2 2 1
// 1 2 3 4
// 1
// 2
// 3
// 4
// Step 1: r = 2, c = 3
// 1 0 0 0
// 1 0 0 0
// 2 1 1 0
// 3 2 2 1
// 1 2 3 4
// 1
// 2
// 3
// 4
// Step 2: r = 4, c = 1
// Function Description
// Complete the function  countMax in the editor
// below.
// countMax has the following parameter(s):
//  string upRight[n]:  an array of strings made of
// two space-separated integers,  r and  c .
// Return
//      long:  the number of occurrences of the final
// grid's maximal element
// Constraints
// 1 ≤ n ≤ 100
// 1 ≤ number of rows, number of columns ≤ 10 6
// Input Format for Custom Testing
// Sample Case 0
//
// https://hrcdn.net/s3_pub/istreet-assets/NUKwDH8-2WmLmvtOPlvMyg/growth_in_2_dimensions_sample_0.svg
//
// Sample Input
// STDIN    Function
// -----    --------
// 3    →    upRight[] size n = 3
// 2 3  →    upRight = ['2 3', '3 7', '4
// 3 7
// 4 1
// Sample Output
// 2
// Explanation
// Given  upRight = ["2 3", "3 7", "4 1"] :
// Initial Grid
// 0 0 0 0 0 0 0
// 0 0 0 0 0 0 0
// 0 0 0 0 0 0 0
// 0 0 0 0 0 0 0
// 1 2 3 4 5 6 7
// 1
// 2
// 3
// 4
// Step 0 : r = 2, c = 3
// 0 0 0 0 0 0 0
// 0 0 0 0 0 0 0
// 1 1 1 0 0 0 0
// 1 1 1 0 0 0 0
// 1 2 3 4 5 6 7
// 1
// 2
// 3
// 4
// Step 1: r = 3, c = 7
// 0 0 0 0 0 0 0
// 1 1 1 1 1 1 1
// 2 2 2 1 1 1 1
// 2 2 2 1 1 1 1
// 1 2 3 4 5 6 7
// 1
// 2
// 3
// 4
// Step 2: r = 4, c = 1
// 1 0 0 0 0 0 0
// 2 1 1 1 1 1 1
// 3 2 2 1 1 1 1
// 3 2 2 1 1 1 1
// 1 2 3 4 5 6 7
// The portion of the infinite grid corresponding to
// cells  (r, c) where  1 ≤ r ≤ 4 and 1 ≤ c ≤ 7
// After processing all  n = 3 coordinate pairs, the
// maximum value in any cell is  3 . Because there
// are two such cells with this maximal value,
// return  2 as the answer.

/*
 * Complete the 'countMax' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts STRING_ARRAY upRight as parameter.
 */

function countMax1(upRight) {
    // Scan the input once, find R and C.
    // Make the grid out of those values, filling it with 0's.
    // Because of the way we "normally" iterate through a matrix,
    // I'm going to flip the matrix upside down. So my 1,1 point is index 0,0.
    // If the actual matrix was a hard requirement, I would do the iteration backwards.

    // Interate through input.
        // Convert from String to R and C numbers.
        // Iterate through current R.
            // Iterate through current C.
                // Add 1 to current element.
    
    // Define highestValue starting at 0.
    // Define count starting at 0.
    // Scan the whole matrix.
        // If the element is higher than highestValue.
            // Update highestValue.
            // Update count to 1.
            // continue.
        // If the element is the same as highestValue, update count by 1.
        // otherwise we know the element is lower, don't do anything.

    // Return our count.

    let maxRow = 0;
    let maxColumn = 0;
    let ranges = [];
    upRight.forEach(range => {
        const [x, y] = range.split(" ").map(value => Number(value));
        if (x > maxRow) maxRow = x;
        if (y > maxColumn) maxColumn = y;
        ranges.push([x, y]);
    });

    const matrix = makeGrid(maxRow, maxColumn);

    calculateMatrix(matrix, ranges);

    return findHighestElementFrequency(matrix);
}

function makeGrid(row, column) {
    const matrix = [];
    for (let i = 0; i < row; ++i) {
        const newRow = new Array(column).fill(0);
        matrix.push(newRow);
    }

    return matrix;
}

function calculateMatrix(matrix, ranges) {
    ranges.forEach(range => {
        for (let row = 0; row < range[0]; ++row) {
            for (let column = 0; column < range[1]; ++column) {
                ++matrix[row][column];
            }
        }
    });
}

function findHighestElementFrequency(matrix) {
    let highestValue = 0;
    let count = 0;
    for (let row = 0; row < matrix.length; ++row) {
        for (let column = 0; column < matrix[row].length; ++column) {
            const current = matrix[row][column];

            if (highestValue < current) {
                highestValue = current;
                count = 1;
                continue;
            }
            if (highestValue === current) ++count;
        }
    }

    return count;
}

// 6/11 Test Cases.
// Right now it is failing when the heap explodes due to gigantic input.

function countMax2(upRight) {
    let maxRow = 0;
    let maxColumn = 0;
    let ranges = [];
    upRight.forEach(range => {
        const [x, y] = range.split(" ").map(value => Number(value));
        if (x > maxRow) maxRow = x;
        if (y > maxColumn) maxColumn = y;
        ranges.push([x, y]);
    });

    // Heap explodes, let's go back to the idea of calculating one point at a time.
    // Iterate through input once, find the max values that we going to use to do our total iteration.
    // Define highestValue starting at 0.
    // Define count starting at 0.
    // Iterate through the virtual "matrix".
        // For each "element", calculate what this position value would be.
            // Define value starting at 0.
            // Iterate through input (which we converted to nice Numbers)
                // If the current X, Y (currentElemnt) is inside this range. Increase value by 1.
            // Now repeat the logic for fidind the HighestValue.
            // If the element is higher than highestValue.
                // Update highestValue.
                // Update count to 1.
                // continue.
            // If the element is the same as highestValue, update count by 1.
            // otherwise we know the element is lower, don't do anything.

    let highestValue = 0;
    let count = 0;
    for (let row = 0; row < maxRow; ++row) {
        for (let column = 0; column < maxColumn; ++column) {
            let currentValue = 0;
            ranges.forEach(([x, y]) => {
                if (row < x && column < y) ++currentValue;
            });

            if (highestValue < currentValue) {
                highestValue = currentValue;
                count = 1;
                continue;
            }
            if (highestValue === currentValue) ++count;
        }
    }

    return count;
}

function countMax3(upRight) {
    let minRow = Number.POSITIVE_INFINITY;
    let minColumn = Number.POSITIVE_INFINITY;

    upRight.forEach(range => {
        const [x, y] = range.split(" ").map(value => Number(value));
        if (x < minRow) minRow = x;
        if (y < minColumn) minColumn = y;
    });

    return minRow * minColumn;
}

// This one does calculate the points without breaking the heap.
// But it takes Polynomial time, meaning it fails run time efficiency tests.
// 5/11 Test Cases passes.

const array1 = ["2 3", "3 7", "4 1"];
const array5 = [
"3384 4454",
"1918 1550",
"2708 2584",
"2441 3722",
"3679 4676",
"2104 1663",
"2619 2497",
"3390 2086",
"2141 2161",
"2368 2114",
"2537 4265",
"3289 4958",
"1491 3598",
"1111 1203",
"1878 4001",
"3567 4720",
"3004 2228",
"4930 3961",
"3452 4096",
"4787 3703",
"1292 2695",
"3772 1378",
"1857 1483",
"4412 4974",
"4064 2225",
"2987 2046",
"3639 2156",
"2929 4754",
"3756 2288",
"1240 2029",
"3548 1074",
"3145 4302",
"2254 3347",
"3541 3528",
"3763 1675",
"2111 4004",
"2361 1595",
"2983 4062",
"3295 4380",
"3277 2940",
"4841 4010",
"4043 4508",
"4336 4910",
"2352 4295",
"1312 4479",
"2239 2661",
"3111 4155",
"4667 4471",
"1426 3279",
"2248 1943",
"1530 1835",
"3590 4064",
"3502 2046",
"1870 4504",
"2559 1701",
"1482 2381",
"4134 3805",
"3609 2939",
"4610 1486",
"3434 1584",
"3149 1721",
"3356 3121",
"1433 2317",
"2575 1796",
"2803 2216",
"1080 2240",
"1872 4670",
"4465 3508",
"4715 3469",
"1872 3691",
"3279 2894",
"3004 3710",
"4345 1339",
"3562 1665",
"2647 4144",
"4575 1518",
"3593 4225",
"2526 3952",
"3222 4077",
"4173 4773",
"2445 1673",
"3096 1294",
"2272 3687",
"2020 1591",
"4169 1882",
"3253 3390",
"2706 4116",
"4045 2284",
"3310 2622",
"4115 3167",
"4641 3271",
"2910 3879",
"3391 2009",
"4001 1564",
"3528 2604",
"1128 1890",
"3435 1177",
"2180 4819",
"1580 4212",
"2174 3224",
];

// [ '2 3', '3 7', '4 1' ] =>2
// [ '18 29', '32 17', '34 9', '38 15', '36 22', '7 14', '5 100' ] => 45
// [ '97 91',
//   '58 58',
//   '92 91',
//   '60 87',
//   '69 82',
//   '70 83',
//   '73 62',
//   '84 68',
//   '68 96',
//   '85 55',
//   '88 76',
//   '90 92',
//   '91 54',
//   '80 87',
//   '73 95',
//   '91 95',
//   '85 79',
//   '92 81',
//   '89 96',
//   '76 63',
//   '59 83',
//   '96 83',
//   '71 89',
//   '61 82',
//   '71 87',
//   '68 96',
//   '98 81',
//   '69 100',
//   '91 96',
//   '62 100',
//   '61 65',
//   '96 77',
//   '78 74',
//   '51 93',
//   '61 58',
//   '51 82',
//   '76 98',
//   '63 70',
//   '76 96',
//   '64 59',
//   '67 73',
//   '90 83',
//   '71 64',
//   '53 75',
//   '59 94',
//   '53 55',
//   '78 66',
//   '98 75',
//   '68 68',
//   '91 95',
//   '54 83',
//   '55 84',
//   '67 52',
//   '60 70',
//   '57 60',
//   '52 63',
//   '54 72',
//   '99 56',
//   '88 87',
//   '69 84',
//   '96 95',
//   '81 78',
//   '86 83',
//   '84 60',
//   '88 98',
//   '57 83',
//   '79 55',
//   '70 63',
//   '83 92',
//   '79 64',
//   '57 94',
//   '83 50',
//   '52 66',
//   '94 92',
//   '51 55',
//   '66 65',
//   '53 93',
//   '91 76',
//   '62 86',
//   '95 81',
//   '62 54',
//   '81 51',
//   '67 62',
//   '70 85',
//   '78 77',
//   '79 68',
//   '62 64',
//   '94 56',
//   '89 83',
//   '63 76',
//   '67 65',
//   '87 98',
//   '56 77',
//   '71 64',
//   '81 92',
//   '75 51',
//   '96 88',
//   '87 68',
//   '98 58',
//   '62 68' ] => 2550


// 10100
// Debug output
// [ '199 154',
//   '110 191',
//   '154 133',
//   '193 135',
//   '198 137',
//   '193 147',
//   '181 139',
//   '144 105',
//   '165 182',
//   '129 168',
//   '102 185',
//   '144 144',
//   '200 123',
//   '113 159',
//   '160 115',
//   '102 195',
//   '106 150',
//   '169 173',
//   '174 190',
//   '188 154',
//   '166 167',
//   '126 178',
//   '163 137',
//   '167 180',
//   '117 164',
//   '152 180',
//   '159 137',
//   '106 139',
//   '185 115',
//   '178 149',
//   '175 197',
//   '118 116',
//   '142 197',
//   '157 187',
//   '104 101',
//   '120 176',
//   '121 154',
//   '165 119',
//   '113 180',
//   '180 180',
//   '123 195',
//   '152 185',
//   '170 106',
//   '181 155',
//   '138 187',
//   '199 152',
//   '101 107',
//   '141 157',
//   '160 100',
//   '165 140',
//   '188 118',
//   '111 181',
//   '156 196',
//   '156 134',
//   '136 158',
//   '105 187',
//   '148 194',
//   '142 193',
//   '147 102',
//   '199 176',
//   '157 100',
//   '157 155',
//   '200 138',
//   '182 158',
//   '200 148',
//   '130 119',
//   '135 181',
//   '134 152',
//   '143 165',
//   '113 102',
//   '138 200',
//   '152 183',
//   '175 106',
//   '113 103',
//   '195 127',
//   '106 132',
//   '103 143',
//   '164 157',
//   '153 139',
//   '126 153',
//   '112 110',
//   '186 140',
//   '156 171',
//   '188 136',
//   '122 195',
//   '127 134',
//   '157 165',
//   '109 199',
//   '163 153',
//   '104 103',
//   '163 111',
//   '146 133',
//   '119 190',
//   '176 157',
//   '185 132',
//   '190 155',
//   '194 133',
//   '163 163',
//   '151 190',
//   '169 151' ]

console.log(countMax3(array1) === 2);
console.log(countMax3(array5) === 1159920); // => 1159920