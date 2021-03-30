// Medium

// Given a string s, we make queries on substrings of s.

// For each query queries[i] = [left, right, k], we may rearrange the substring s[left], ..., s[right], and then choose up to k of them to replace with any lowercase English letter. 

// If the substring is possible to be a palindrome string after the operations above, the result of the query is true. Otherwise, the result is false.

// Return an array answer[], where answer[i] is the result of the i-th query queries[i].

// Note that: Each letter is counted individually for replacement so if for example s[left..right] = "aaa", and k = 2, we can only replace two of the letters.  (Also, note that the initial string s is never modified by any query.)

 

// Example :

// Input: s = "abcda", queries = [[3,3,0],[1,2,0],[0,3,1],[0,3,2],[0,4,1]]
// Output: [true,false,false,true,true]
// Explanation:
// queries[0] : substring = "d", is palidrome.
// queries[1] : substring = "bc", is not palidrome.
// queries[2] : substring = "abcd", is not palidrome after replacing only 1 character.
// queries[3] : substring = "abcd", could be changed to "abba" which is palidrome. Also this can be changed to "baab" first rearrange it "bacd" then replace "cd" with "ab".
// queries[4] : substring = "abcda", could be changed to "abcba" which is palidrome.
 

// Constraints:

// 1 <= s.length, queries.length <= 10^5
// 0 <= queries[i][0] <= queries[i][1] < s.length
// 0 <= queries[i][2] <= s.length
// s only contains lowercase English letters.

/**
 * @param {string} s
 * @param {number[][]} queries
 * @return {boolean[]}
 */

/*
A note:
A great source for us to optimize is that all queries originate from the same "static" string.
That means if we compute 0...5 substring with 2 mutaitons, and we know that is a VALID palindrome, computing with 3, 4 ..200 mutations will also result in a VALID palindrome.

canBePalindrome
The real problem here, is getting a string with an X number of replacments and being able to say if it is a palindrome.
In this problem, we have 2 different problems. Checking if a string is a palindrome is straight forward with a 2 pointer approach.
What about the replacments? How can I adapt my approach to take taht into consideration?
    In this case, the same approach works, and whenever we find a letter that doesn't match, we check if we have our replacments coutner. If we have at least 1 replacement available, we can move on. Otherwise, we can return false as usual.
What about the "I can re-arrenge" the word?
    if we have to re-arrenge the word, the 2 pointer approach doesn't work, it will miss edge cases like "aaaaaabbbbbb".
    So let's go with the "sorting" approach. Sort the string and count the letters.
        If we find an "even" counter:
            Is the flag UP? 
                If we have "replacements" left
                    flag down and reduce replacements by 1.
                else
                    we ran out of replacments, return FALSE palindrome as usual.
            Else flag it. (we can only have 1 even letter)
            
This right here is another point for optimization.
Suppose we have 100 querries, all on the same 0...20 string. Each one increasing recplaments by 1.
If we store the substring and instead of checking if we CAN make it a palindrome with X replacements, we calculated HOW MANY replacements would take to make that substring a palindrome. Now we store this, any substring that hits it, we can instantly say if it will be a palindrome or not!

*/

// APROACH 1:
// function canMakePaliQueries(s, queries) {
//     return queries.map(query => canBePalindrome(s, query[0], query[1], query[2]));
// };

// function canBePalindrome(string, replacements) {
//     const letterCounter = {};
//     for (let i = 0; i < string.length; ++i) {
//         const char = string[i];
//         letterCounter[char] = letterCounter[char] ? letterCounter[char] + 1 : 1;
//     }
    
//     const odds = Object.values(letterCounter).filter(number => number % 2 !== 0).length;
    
//     return Math.floor(odds / 2) <= replacements;
// }

// Right now this solution is exceeding run time. Let's analyse it.
// The map of the queries is a N operations, where N is the size of querries. Let's call it Q. => Q Linear
// Then I iterate through the string (call it S) and count the ocurrances. => S Linear => Q * S Polynomial
// The hash counter is a constant with 26 characters. Therefore is irrelevant to our time complexity.
// We have a final Polynomial Time Complexity of Q * S.

// APROACH 2:
// Let's optmize the splice away, let's work with the indexes. And let's use some memoization for the strings we have already seen:
function canMakePaliQueries(s, queries) {
    const hash = {};
    return queries.map(query => canBePalindrome(s, query[0], query[1], query[2], hash));
};

function canBePalindrome(string, start, end, replacements, hash) {
    // Let's optmize the splice away, let's work with the indexes.
    const stringArray = makeArray(string, start, end);
    const sortedString = stringArray.sort().join("");
    
    if (!hash[sortedString]) hash[sortedString] = makeItPalindrome(sortedString);
    
    return hash[sortedString] <= replacements;
}

function makeArray(string, start, end) {
    const array = [];
    for (let i = start; i <= end; ++i) array.push(string[i]);
    
    return array;
}

function makeItPalindrome(string) {
    if (!string.length) return 0;
    let oddFlag = false;
    let letterCounter = 1;
    let currentChar = string[0];
    let replacementsNeeded = 0;
    
    for (let i = 1; i < string.length; ++i) {
        if (string[i] !== currentChar) {
            if (letterCounter % 2 !== 0) {
                if (oddFlag) {
                    oddFlag = false;
                    ++replacementsNeeded;
                }
                else oddFlag = true;
            }
            currentChar = string[i];
            letterCounter = 1;
        }
        else ++letterCounter;
    }
    // Keep this duplication here by now, want to see if this works.
    if (letterCounter % 2 !== 0) {
        if (oddFlag) {
            oddFlag = false;
            ++replacementsNeeded;
        }
        else oddFlag = true;
    }

    return replacementsNeeded;
}

// Still hitting the execution limit. It needs to be optmized further.

// APROACH 3:
// This approach comes from the "difference counter" strategy.
// We are going to map S and, at every position, we'll have a hash Counter of it's letters.
// Then, when we do a "query", all we need to do is apply that "odd letters counting strategy", but
// because we have the difference in counts, we do not need to re-count for each string.
function canMakePaliQueries(s, queries) {
    const letterHashCounters = makeLetterCounters(s);
    return queries.map(query => {
        const leftHash = query[0] - 1 < 0 ? null : letterHashCounters[query[0] - 1];
        const rightHash = letterHashCounters[query[1]];
        
        return canBePalindrome(countDiff(leftHash, rightHash), query[2]);
    });
}

function makeLetterCounters(string) {
    const masterCounter = {
        "a": 0,
        "b": 0,
        "c": 0,
        "d": 0,
        "e": 0,
        "f": 0,
        "g": 0,
        "h": 0,
        "i": 0,
        "j": 0,
        "k": 0,
        "l": 0,
        "m": 0,
        "n": 0,
        "o": 0,
        "p": 0,
        "q": 0,
        "r": 0,
        "s": 0,
        "t": 0,
        "u": 0,
        "v": 0,
        "x": 0,
        "y": 0,
        "w": 0,
        "z": 0,
    };
    const counterArray = [];
    
    for (let i = 0; i < string.length; ++i) {
        ++masterCounter[string[i]];
        counterArray.push(makeCopy(masterCounter));
        
    }
    
    return counterArray;
}

function makeCopy(originalHash) {
    const copyHash = {};
    Object.keys(originalHash).forEach(key => {
        copyHash[key] = originalHash[key];
    });
    
    return copyHash;
}

function countDiff(smallerHash, biggerHash) {
    if (!smallerHash) return biggerHash;
    
    const resultHash = {};
    Object.keys(smallerHash).forEach(key => {
        resultHash[key] = biggerHash[key] - smallerHash[key];
    });
    
    return resultHash;
}

function canBePalindrome(hash, replacements) {
    const odds = Object.values(hash).filter(num => num % 2).length;
    // console.log(hash, odds);
    return Math.floor(odds / 2) <= replacements;
}

// This is almost working, but is running out of memory witht he multiple hashes.