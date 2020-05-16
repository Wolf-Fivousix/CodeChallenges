// A construction company is building a new
// neighborhood, and they are currently working on the
// design. Each house will be built using one of three
// main materials (e.g., wood, brick, or concrete), but no
// side-by-side houses can be made of the same
// material. Because each house will be of varying size
// and complexity, the cost of the materials for each
// house varies. Given the cost of using each material
// for each house, what is the minimum cost needed to
// complete the neighborhood?
// For example, let's say there are n = 3 houses to be
// built. Also, cost = [[1, 2, 3], [1, 2, 3], [3, 3, 1]], denoting
// the cost of materials for each of the 3 houses. The
// minimum cost to build all the houses is 4, as seen
// below:
// For the first house, the cheapest material is the first
// one, which costs 1. For the second house, the
// materials cost the same as with the first house, but
// the same material can't be used because the houses
// are side by side. The next best option is the second
// material, which costs 2. Finally, the cheapest material
// for the third house is the third material, which costs
// 1. Therefore, the total cost to build all the houses is 1
// + 2 + 1 = 4.
// Function Description
// Complete the function minCost in the editor below.
// minCost has the following parameter:
//  int cost[n][3]: a 2-dimensional array of integers
// where cost[i][j] denotes the cost of using the j th
// material on the i th house
// Returns:
//     int: the minimum cost to build all the houses in
// the neighborhood
// Constraints
// 1 ≤ n ≤ 100
// 0 ≤ cost[i][j] ≤ 100
// Input Format For Custom Testing
// Sample Case 0
// Sample Input For Custom Testing
// STDIN    Function
// -----    --------
// 3    => n = 3
// 3    => number of columns in cost = 3
// 1 2 2 => cost = [[1, 2, 2], [2, 2, 1],
// 2 2 1
// 2 1 2
// Sample Output
// 3
// Explanation
// Here, it is possible to select the cheapest material
// for each house because it is different for each
// house. The cost will be 1 for the first house, 1 for
// the second house, and 1 for the third house,
// giving a total cost of 3.
// Sample Input For Custom Testing
// STDIN    Function
// -----    --------
// 3    => n = 3
// 3   => number of columns in cost = 3
// 1 2 2 => cost = [[1, 2, 2], [2, 3, 3],
// 2 3 3
// 3 3 1
// Sample Output
// 5
// Explanation
// One optimal solution is to choose the first material
// for the first house (which costs 1), the second
// material for the second house (which costs 3), and
// the third material for the third house (which costs
// 1), giving a total cost of 3. Note that even though
// the first material is cheaper for the second house,
// it can't be used because the first house, which is
// next-door, is already using that material.

/*
 * Complete the 'minCost' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY cost as parameter.
 */
function minCost(cost) {
    const materials = [];
    let previousMaterialIndex = -1;

    cost.forEach(house => {
        previousMaterialIndex = getMaterialIndex(house, previousMaterialIndex);
        materials.push(previousMaterialIndex);
    });

    // console.log(materials);
    return materials.reduce((acc, material, index) => acc + cost[index][material], 0);
    // let totalCost = 0;
    // materials.forEach((materialIndex, i) => {
    //     console.log(cost[i][materialIndex]);
    //     totalCost+= cost[i][materialIndex];
    // });
    // return totalCost;
}

function getMaterialIndex(cost, forbiddenIndex) {
    let material = forbiddenIndex !== 0 ? 0 : 1;
    
    for (let i = 0; i < cost.length; ++i) {
        if (forbiddenIndex !== i && cost[i] < cost[material]) material = i;
    }

    return material;
}

//   2/13 test cases.
// This solution gets a result, but is failing to consider all possible cases in order to get the optimal solution.
// Let's burn memory and do the Brute Force approach.

function minCost(cost) {
    const materials = [];

    cost[0].forEach((materialCost, index) => {
        let totalCost = materialCost;

        function expandCost(houseIndex, forbiddenIndex) {
            if (houseIndex >= cost.length) {
                materials.push(totalCost);
            }
            else {
                for (let i = 0; i < cost[houseIndex].length; ++i) {
                    totalCost += cost[houseIndex][i];
                    if (i !== forbiddenIndex) expandCost(houseIndex + 1, i);
                    totalCost -= cost[houseIndex][i];
                }
            }
        }

        expandCost(1, index);
    });

    // console.log(materials);
    return materials.sort((a, b) => a - b)[0];   
}

// Now this is more like a working solution! Unfortunately this expands memory to such a degree (Polynomial) that the heap runs out of memory.
// But it does find the best solution where N is not too big.
// Currenty it runs Test cases 1 to 6. Test case 7 will run out of memory.
// 6/13 Test Cases.
// The logic here works.... Now, how can I change this to NOT use this much memory?


const test1 = [ [ 1, 2, 2 ], [ 2, 2, 1 ], [ 2, 1, 2 ] ];
// => 3
const test2 = [ [ 1, 2, 2 ], [ 2, 3, 3 ], [ 3, 3, 1 ] ];
// => 5
const test3 = [ [ 1, 10, 20 ], [ 2, 100, 100 ] ];
// => 12
const test4 = [ [ 49, 73, 58 ],
  [ 30, 72, 44 ],
  [ 78, 23, 9 ],
  [ 40, 65, 92 ],
  [ 42, 87, 3 ],
  [ 27, 29, 40 ],
  [ 12, 3, 69 ],
  [ 9, 57, 60 ],
  [ 33, 99, 78 ],
  [ 16, 35, 97 ] ];

const test5 = [ [ 12, 67, 10 ],
  [ 33, 79, 49 ],
  [ 79, 21, 67 ],
  [ 72, 93, 36 ],
  [ 85, 45, 28 ],
  [ 91, 94, 57 ],
  [ 1, 53, 8 ],
  [ 44, 68, 90 ],
  [ 24, 96, 30 ],
  [ 3, 22, 66 ],
  [ 49, 24, 1 ],
  [ 53, 77, 8 ],
  [ 28, 33, 98 ],
  [ 81, 35, 13 ],
  [ 65, 14, 63 ],
  [ 36, 25, 69 ] ];

const test6 = [ [ 94, 29, 1 ],
  [ 17, 95, 5 ],
  [ 4, 51, 98 ],
  [ 88, 23, 5 ],
  [ 82, 52, 66 ],
  [ 16, 37, 38 ],
  [ 44, 1, 97 ],
  [ 71, 28, 37 ],
  [ 58, 77, 97 ],
  [ 94, 4, 9 ],
  [ 31, 45, 75 ],
  [ 35, 98, 42 ],
  [ 99, 68, 12 ],
  [ 60, 57, 94 ],
  [ 8, 95, 68 ],
  [ 13, 30, 6 ],
  [ 62, 42, 65 ],
  [ 82, 52, 67 ],
  [ 21, 95, 12 ],
  [ 71, 1, 90 ],
  [ 31, 38, 57 ] ];

const test7 = [ [ 90, 40, 79 ],
  [ 35, 6, 72 ],
  [ 98, 95, 19 ],
  [ 54, 23, 89 ],
  [ 60, 5, 26 ],
  [ 23, 6, 13 ],
  [ 70, 38, 94 ],
  [ 20, 44, 66 ],
  [ 34, 26, 94 ],
  [ 63, 38, 44 ],
  [ 90, 50, 59 ],
  [ 23, 47, 85 ],
  [ 17, 72, 39 ],
  [ 47, 85, 96 ],
  [ 85, 23, 20 ],
  [ 44, 68, 35 ],
  [ 15, 25, 34 ],
  [ 42, 11, 79 ],
  [ 52, 44, 95 ],
  [ 18, 96, 92 ],
  [ 15, 91, 33 ],
  [ 69, 97, 53 ],
  [ 47, 25, 10 ],
  [ 62, 11, 8 ],
  [ 77, 61, 25 ],
  [ 35, 68, 95 ],
  [ 76, 67, 39 ] ];

const test8 = [ [ 31, 56, 1 ],
  [ 72, 60, 94 ],
  [ 84, 55, 89 ],
  [ 7, 15, 93 ],
  [ 69, 80, 55 ],
  [ 55, 6, 63 ],
  [ 2, 76, 8 ],
  [ 49, 31, 44 ],
  [ 38, 8, 97 ],
  [ 51, 49, 3 ],
  [ 31, 31, 14 ],
  [ 19, 75, 9 ],
  [ 80, 29, 23 ],
  [ 54, 60, 37 ],
  [ 45, 17, 25 ],
  [ 0, 56, 64 ],
  [ 97, 48, 4 ],
  [ 50, 50, 76 ],
  [ 12, 54, 97 ],
  [ 4, 81, 48 ],
  [ 65, 78, 99 ],
  [ 9, 29, 53 ],
  [ 83, 47, 7 ],
  [ 73, 22, 5 ],
  [ 76, 53, 24 ],
  [ 30, 66, 0 ],
  [ 44, 70, 85 ],
  [ 16, 98, 55 ],
  [ 33, 57, 76 ],
  [ 78, 66, 57 ],
  [ 11, 78, 14 ] ];

const test9 = [ [ 37, 33, 91 ],
  [ 20, 62, 33 ],
  [ 97, 31, 88 ],
  [ 89, 73, 77 ],
  [ 4, 58, 0 ],
  [ 54, 60, 15 ],
  [ 47, 80, 30 ],
  [ 55, 46, 7 ],
  [ 38, 0, 26 ],
  [ 35, 57, 13 ],
  [ 14, 93, 60 ],
  [ 54, 18, 57 ],
  [ 85, 29, 15 ],
  [ 63, 2, 17 ],
  [ 43, 19, 67 ],
  [ 47, 69, 95 ],
  [ 3, 73, 3 ],
  [ 48, 85, 58 ],
  [ 59, 6, 30 ],
  [ 24, 32, 73 ],
  [ 3, 97, 20 ],
  [ 50, 31, 80 ],
  [ 3, 0, 20 ],
  [ 33, 58, 3 ],
  [ 76, 50, 34 ],
  [ 80, 79, 32 ],
  [ 74, 49, 42 ],
  [ 49, 71, 10 ],
  [ 79, 83, 70 ],
  [ 40, 23, 50 ],
  [ 71, 29, 18 ],
  [ 46, 99, 30 ],
  [ 21, 76, 24 ],
  [ 44, 58, 96 ],
  [ 71, 64, 60 ],
  [ 98, 51, 40 ],
  [ 3, 51, 1 ],
  [ 5, 80, 18 ],
  [ 74, 49, 13 ],
  [ 20, 25, 12 ] ];


console.log(minCost(test1) === 3);
console.log(minCost(test2) === 5);
console.log(minCost(test3) === 12);
console.log(minCost(test4));
console.log(minCost(test5));
console.log(minCost(test6));
console.log(minCost(test7));
console.log(minCost(test8));
console.log(minCost(test9));
