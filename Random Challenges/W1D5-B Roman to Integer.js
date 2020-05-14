// W1D5B

// XXI = 2155151
// Converting roman numerals to an interger
// Range from 1 - 3999
// Symbol	I	V	X	L	C	D	M
// Value	1	5	10	50	100	500	1000



// ex. III => 3
// ex. IV = 4
// ex. IX = 9
// XL = 40 
// XC = 90
// CD = 400
// CM = 900

// 1. number = 0
// 2. declare a dictionary at the top to store all the basic conversion, (ex{ I: 1...})
// 3. iterate through every character in the string 
// 4. then add the corresponding value, according to the dictionary 
// 5. If we hit I, X, or C, we check the next number to see if it makes a 4 or 9 case
// 6. return number

// ex. DLXXIII => 573
// ex. IV = 4

function romanToInteger(str) {
  // 1
  let num = 0;

  // 2 
  const dictionary = { 'I': 1, 
    'V': 5, 
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  }

  // 3
  let i = 0;
  while (i < str.length) {
    const char = str[i];
    // 5
    if (char === 'I' && str[i+1] === 'V') {
      num += 4;
      i += 2
    } else if (char == 'I' && str[i+1] === 'X') {
      num += 9;
      i += 2
    } else if (char == 'X' && str[i+1] === 'L') {
      num += 40;
      i += 2
    } else if (char == 'X' && str[i+1] === 'C') {
      num += 90;
      i += 2
    } else if (char == 'C' && str[i+1] === 'D') {
      num += 400;
      i += 2
    } else if (char == 'C' && str[i+1] === 'M') {
      num += 900;
      i += 2
    } else {
      // 4
      num += dictionary[char]
      i++
    }
  }

  // 6
  return num;
}

// str = DLXXIII 
// num = 573

// i = 6
// char = I

// str = IV
// num = 4
// i = 0
// char = I; 
console.log(romanToInteger("IV"));
console.log(romanToInteger("DLXXIII"));