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
