// Initially, there is a Robot at position (0, 0). Given a sequence of its moves, 
// judge if this robot makes a circle, which means it moves back to the original place.

// The move sequence is represented by a string. And each move is represent by a character. 
// The valid robot moves are R (Right), L (Left), U (Up) and D (down). The output should be 
// true or false representing whether the robot makes a circle.

// Example
// Input: "UD"
// Output: true
// Example 2:
// Input: "LL"
// Output: false

// "ULDR"

/*
1. Make a counter obj with two keys: a vertical key and a horizontal key
2. iterate through input string and if the char is a U then increment vertkey, if char is D then decrement vertkey,
, if char is L then decrement horizontalKey and if char is R then increment horizontalkey
3. lastly, check if both key's values are 0 and if so return true else false
*/

let roboCircle = function(dirs) {
    const counters = {};
    counters['vert'] = 0;
    counters['horiz'] = 0;

    for (let i = 0; i < dirs.length; i++) {
        switch (dirs[i]) {
            case 'U': 
                counters['vert']++;
                break;
            case 'D':
                counters['vert']--;
                break;
            case 'L':
                counters['horiz']--;
                break;
            case 'R':
                counters['horiz']++;
                break;
        }
    }

    if (counters['vert'] === 0 && counters['horiz'] === 0) return true;
    else return false;
}
// Solution by Max.

// console.log(roboCircle("UD")); // true
// console.log(roboCircle("LLLL"));// false
// console.log(roboCircle("UUDDRLLRR")); // false

// Provided solution

// def judge_circle(moves)
//   x = 0
//   y = 0
//   moves.each_char do |move|
//     case move
//     when "U"
//       y += 1
//     when "D"
//       y -= 1
//     when "R"
//       x += 1
//     when "L"
//       x -= 1
//     end
//   end
//   return x === 0 && y === 0
// end