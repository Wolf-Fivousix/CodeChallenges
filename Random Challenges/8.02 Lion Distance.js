// You went camping in the African savannah and woke up in the middle of the night
// to find yourself surrounded by sleeping lions.

// You want to sneak past them to get to your car.

// As to not wake the lions, you want to stay as far away as possible from them
// on your way to the car.

// Given an NxN map and the locations of the lions, yourself, and your car,
// what is the nearest you must get to a lion on your way to the car?

// Example:
// For a given 10x10 map of the savannah (C = car, L = lion, X = you):
// __0_1_2_3_4_5_6_7_8_9_
// 0|_|_|_|_|_|_|_|_|_|_|
// 1|_|_|_|_|_|_|_|C|_|_|
// 2|_|_|_|_|_|_|_|_|_|_|
// 3|_|_|_|_|_|_|_|_|L|_|
// 4|_|L|_|_|_|_|_|_|_|_|
// 5|_|_|_|_|_|_|_|_|_|_|
// 6|_|_|_|_|L|_|_|_|_|_|
// 7|_|_|_|_|_|_|_|L|_|_|
// 8|_|_|_|_|_|_|_|_|_|_|
// 9|_|L|_|_|X|_|_|_|_|_|

// The solution would be 2 because this is the path that maximizes the minimum
// distance from lions:
// __0_1_2_3_4_5_6_7_8_9_
// 0|L|1|2|_|_|_|_|_|_|_|
// 1|1|2|_|_|_|_|#|C|_|_|
// 2|2|2|_|_|_|_|#|_|_|_|
// 3|2|1|2|_|_|_|#|1|L|1|
// 4|1|L|1|_|_|_|#|2|_|_|
// 5|_|1|_|_|_|_|#|2|#|#|
// 6|_|_|1|_|L|_|_|1|_|#|
// 7|_|1|L|1|_|_|_|L|_|#|
// 8|_|1|1|_|_|_|_|_|_|#|
// 9|1|L|1|_|X|#|#|#|#|#|

// Note: this is only one of multiple valid paths meeting the requirements.



// make all Lion Positions to value 0.
// do a BFS starting with every lion in the queue.
// for every position, add the four neighbors to the queue.
// 	check all 4 sides
	// if there is NO value, place the value and add to queue. (value is self value + 1)

class Point {
  /** Initializes coordinates of given entity (lion, person, car) */
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}


function lionDistance(car, lions, you, mapSize) {
	const matrix = makeMap(mapSize);
	const queue = [];

	for (let i = 0; i < lions.length; ++i) {
		const lion = lions[i];
		matrix[lion.x][lion.y] = 0;
		queue.push(lion);
    }

    while (queue.length) {
        const currentPosition = queue.shift();
        // all 4 positions around it.
        // getNeighbors worries about inBound.
        const neighbors = getNeighbors(currentPosition);

        for (let i = 0; i < neighbors.length; ++i) {
            const neighbor = neighbor[i];
            matrix[neighbor.x][neighbor.y] = matrix[currentPosition.x][currentPosition.y] + 1;
            queue.push(neighbor);
        }
    }

    return matrix;
}

// This builds our matrix, but how do we find the best path to the car?
// My idea is using something like A*, where we start from "you" point and
// spread outwards until we find the car. Using a weighted traversal for the nodes.
// Anything that is a distance LESSER than our current minimum, gets skipped until we run out of
// better options.





// __0_1_2_3_4_5_6_7_8_9_
// 0|5|4|5|6|6|6|5|4|3|4|
// 1|4|3|4|5|5|5|4|3|2|3|
// 2|3|2|3|4|4|4|3|2|1|2|
// 3|2|1|2|3|3|3|2|1|0|1|
// 4|1|0|1|2|2|3|3|2|1|2|
// 5|2|1|2|2|1|2|3|2|2|3|
// 6|3|2|2|1|0|1|2|1|2|3|
// 7|3|2|3|2|1|2|1|0|1|2|
// 8|2|1|2|3|2|3|2|1|2|3|
// 9|1|0|1|2|3|4|3|2|3|4|