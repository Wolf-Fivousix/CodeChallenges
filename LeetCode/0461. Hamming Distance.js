
// Easy

// The Hamming distance between two integers is the number of positions at which the corresponding bits are different.

// Given two integers x and y, return the Hamming distance between them.

 

// Example 1:

// Input: x = 1, y = 4
// Output: 2
// Explanation:
// 1   (0 0 0 1)
// 4   (0 1 0 0)
//        ↑   ↑
// The above arrows point to positions where the corresponding bits are different.
// Example 2:

// Input: x = 3, y = 1
// Output: 1
 

// Constraints:

// 0 <= x, y <= 231 - 1
 

// Note: This question is the same as 2220: Minimum Bit Flips to Convert Number.

/*
Brute Force:

Let's start by "fixing" the binary representation of a number.
In JS, we need to convert it into a binary string. BUT that will give as many characters as needed. So we need to "fill" the remaining positions so that both number strings match in length.
Otherwise our comparision will break. (we can also consider 0 for the first few elements, if that is more desirable. But I feel like this approach makes it much easier to output the binary and compare them manually if needed)

Convert both inputs into binary.
"Fill up to the left" of the smallest value with 0's.
Initiate a counter at 0
Iterate through both strings.
       if the character at the position I is different, increase the counter

return the counter

Analysis here is a little tricky. Because we are "converting" the input. So even though it is just a simple NUMBER, it will create a huge array in binary.
Once that is created, it is linear to iterate through it. But I can't say how efficient or inneficient is the number to binary conversion.

So let's assume Linear Time and Space complexity O(n + m) (since we have 2 values)

*/

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
function hammingDistance(x, y) {
    let binaryX = Number(x).toString(2)
    let binaryY = Number(y).toString(2)
	if (binaryX.length > binaryY.length) binaryY = binaryY.padStart(binaryX.length, "0")
	else binaryX = binaryX.padStart(binaryY.length, "0")

	// console.log(binaryX)
	// console.log(binaryY)
	let counter = 0
	for (let i = 0; i < binaryX.length; ++i) {
		if (binaryX[i] !== binaryY[i]) ++counter
	}

	return counter
};

[
	[1, 4],
	[10515, 10151]
].forEach(([x, y]) => {
	console.log(hammingDistance(x, y))
})

// Runtime 39 ms Beats 99.17%
// Memory 48.92 MB Beats 41.87%

// Wow... It ended up not being so much "Brute force" after all!

// Another way to do this is to XOR the two numbers, the resulting number, by definition, will only have 1's if
// Only one of them had it and the other didin't. If both numbers have 1, it will reset to 0.
// If both had 0, it will remain 0.
// We can then manipulate the bits directly, avoiding the conversion all together, just counting the numbers of 1's shown:

function hammingDistanceV2(x, y) {
    let value = x ^ y;
    let counter = 0;
    
    while (value != 0) {
        if (value & 1)
           ++counter
           
        value = value >> 1
    }
    
    return counter
};