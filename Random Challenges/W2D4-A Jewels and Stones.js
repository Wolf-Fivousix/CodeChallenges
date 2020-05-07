// Solution by Jeremy
// Jewels and Stones
// You are given two strings, J and S. String J represents the types of stones that are jewels. String S represents all of the stones that you have. Each character in string S is a type of stone you have. You want to know how many of your stones are also jewels.

// Contraints
// The letters in J are guaranteed distinct.
// All characters in J and S are letters.

// Letters are case-sensitive, so "a" is considered a different type of stone from "A".
// Example 1:
// Input: J = "aA", S = "aAAbbbb"
// Output: 3
// Example 2:
// Input: J = "z", S = "ZZ"
// Output: 0

// 1. Turn jewel string into jewel Object counter, where they key is the jewel, and the value is the count found in the stone string

// 2. Iterate through stone string, and add to the counter

// 3. add all the jewel values together

function jewelsAndStones(j =('aA'), s = "aAAbbbb"){
    // establish and object and iterate through j string

    let jewelCounter = {}

    for(let i=0; i<j.length;i++){
      jewelCounter[j[i]] = 0
    }

    jewelCounter['a']=0
    jewelCounter['A']=0

    // iterate through s, and add to each jewel count
    for(let i=0; i<s.length; i++){
      if (jewelCounter[s[i]] || jewelCounter[s[i]] === 0) jewelCounter[s[i]] +=1;
    }
    s = "aAAbbbb"
    jewelCounter['a']=0 +1
    jewelCounter['A']=0+1+1

    return Math.sum(Object.values(jewelCounter));
}

// write more test cases
// write more pseudocode as detailed as possible
// better time complexity explanations better space complexity
