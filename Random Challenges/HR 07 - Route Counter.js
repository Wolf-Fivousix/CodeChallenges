// A logistics firm is trying to
// determine how many routes they
// can serve to use in an
// advertisement. There are a number
// of cities they can visit, but they can
// only be visited in the order listed,
// and fuel is limited. Since the
// number of routes may be large,
// return the value modulo (10 9 + 7).
// Write a function that receives
// cities, an array of n integers, each
// a city id number at the city's
// position
// fuel, the amount of fuel available.
// It should return the number of
// different routes available.
// Routes must adhere to the
// following criteria:
// A route begins at cities[0]
// The truck begins with a known
// amount of fuel.
// Travel from cities[i] to
// cities[j] costs | cities[i] - cities[j] |
// units of fuel.
// Travel between cities[i] and
// cities[j] is allowed if all of the
// following conditions are met:
// i < j
// cities[j] has not been visited
// | cities[i] - cities[j] | ≤ fuel
// remaining
// Example
// fuel = 7
// cities = [1, 3, 6, 2, 4]

// fuel 5
// n 6
// [2, 6, 2, 3, 4, 8]
// Your Output (stdout)
// 3
// Expected Output
// 3

// fuel 3
// n 4
// [1, 3, 6, 4]
// Your Output (stdout)
// 2
// Expected Output
// 2

// Fuel 4
// n 10
// [10, 14, 18, 19, 12, 12 ,17 ,20 ,5, 15]
// Your Output (stdout)
// 0
// Expected Output
// 3

// Fuel 7
// n 11
// [14, 19, 1, 10, 2, 14, 14, 13, 12, 13]
// Your Output (stdout)
// 3
// Expected Output
// 8

// Fuel 8
// n 59
// [16, 17, 8, 8, 6, 7, 10, 2, 1, 4, 4, 20, 6, 13, 19, 3, 15, 4, 9, 6, 8, 7, 12, 10, 2, 13, 16, 5, 9, 13, 12, 16, 10, 12, 3, 7, 10, 13, 8, 3, 8, 3, 2, 5, 7, 12, 20, 1, 15, 20, 19, 15, 6, 10, 4, 20, 14, 20, 16]
// Your Output (stdout)
// 8
// Expected Output
// 1685

/*
 * Complete the 'countRoutes' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER fuel
 *  2. INTEGER_ARRAY cities
 */
function countRoutes(fuel, cities, currentPosition = 0, visited = {}) {
    if (!fuel || !cities.length) return 0;
    let result = 0;
    for (let i = 0; i < cities.length; ++i) {
        const fuelCost = cities[i] - currentPosition;
        if (visited[cities[i]] || fuelCost > fuel) continue;
        else {
            visited[cities[i]] = true;
            fuel -= fuelCost;
            currentPosition = cities[i];
            result += 1 + countRoutes(fuel, cities.slice(1), currentPosition, visited);
        }
    }
    return result;
}

// 2/9 Test Cases

console.log(countRoutes(5, [2, 6, 2, 3, 4, 8]) === 3);
console.log(countRoutes(3, [1, 3, 6, 4]) === 2);
console.log(countRoutes(4, [10, 14, 18, 19, 12, 12 ,17 ,20 ,5, 15]) === 3);
console.log(countRoutes(7, [14, 19, 1, 10, 2, 14, 14, 13, 12, 13]) === 8);
console.log(countRoutes(8, [16, 17, 8, 8, 6, 7, 10, 2, 1, 4, 4, 20, 6, 13, 19, 3, 15, 4, 9, 6, 8, 7, 12, 10, 2, 13, 16, 5, 9, 13, 12, 16, 10, 12, 3, 7, 10, 13, 8, 3, 8, 3, 2, 5, 7, 12, 20, 1, 15, 20, 19, 15, 6, 10, 4, 20, 14, 20, 16]) === 1685);


// Bob's solution in Python:
/*
def getRoads(array, idx, fuel, visit):
    counter = 0
    n = len(array)
    
    visited = visit
​
    if( idx==(n-1) or fuel == 0):
        return 1
​
    else:
        pointer = idx+1
        while(pointer<n):
            if(abs(array[idx]-array[pointer])<=fuel and not(array[pointer] in visited) ):
                visited.append(array[pointer])
​
                newFuel = fuel - (abs(array[idx]-array[pointer]))
                counter += getRoads(array,pointer,newFuel, visited)
​
                visited.remove(array[pointer])
​
            pointer +=1
        
        if counter == 0:
            return 1
        else:
            return counter
​
a = [2,6,2,3,4,8]
f = 5
b = [1,3,6,4]
ff = 3
c = [1,3,6,2,4]
fff = 7 
​
print(getRoads(b,0,ff,[b[0]])) #2
print(getRoads(a, 0, f, [a[0]])) #3
print(getRoads(c, 0, fff, [c[0]]))  # 6
*/

// My conversion to JS - This did not work. Probably some difference between the languages.
// function countRoutes(array, index, fuel, visit) {
//     let counter = 0;
//     let n = array.length;

//     let visited = visit.slice();

//     if (index === n - 1 || fuel === 0) return 1;
//     else {
//         let pointer = index + 1;

//         while (pointer < n) {
//             let difference = array[index] - array[pointer];
//             difference = difference < 0 ? -difference : difference;

//             if (difference <= fuel && !visited.includes(array[pointer])) {
//                 visited.push(array[pointer]);

//                 let newFuel = fuel - difference;

//                 counter += countRoutes(array, pointer, newFuel, visited);
//                 visited.slice(array.indexOf(array[pointer]), 1);
//             }

//             ++pointer;
//         }

//         return counter === 0 ? 1 : counter;
//     }
// }

// console.log(countRoutes([2, 6, 2, 3, 4, 8], 5, 0, [2]) === 3);
// console.log(countRoutes([1, 3, 6, 4], 3, 0, [1]) === 2);