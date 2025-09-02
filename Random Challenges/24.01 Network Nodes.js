// Given a string of "network nodes" that consist of all lowercase english letters 
// Find the minimum number of operations that can be performed to "disconnect" all nodes.

// Every time you disconnect a node, all "same letter" nodes that are adjacent to it are disconnected together:
// aaaaabbbb -> disconnects "a" -> bbbb
// bbbb -> disconnects "b" -> "" (empty string)
// Total operations: 2

/*

Lower case english letters in a string


OUTPUT - the MINIMUM number of operations required to DISCONNECT all nodes.

abc -> 3
abba -> 2
abcddcba -> 4
aaaacccba -> 3

abcac -> 1
acac -> 1 (a or c)
cac or aac -> both of these require 2 more
Total 4

ababaaaabaabbabbbbaaa -> ... 

Are there any repeated letters not adjacent?
How do I choose which letters to delete first, in order to make non-adjacent same letters become adjacent?

BRUTE FORCE:
Scan the string and save all the indexes of each letter.
Go through each of those indexes and find the ones that are NOT split apart. Those can be deleted immediately.
Delete those (we can use String.replace with an empty string "")

Repeat until we have an empty string OR no-non adjacent entries.

Re-doing and re-building the index table won't be very efficient, but let's get to a working solution and then we can improve if time allows.
*/

/*
 * Complete the 'getMinOperations' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING series as parameter.
 */
function getMinOperations(series) {
    let networkNodes = series
    let toDeleteLetters = []
    let numberOfOperations = 0
    
    do {
        const letterIndexes = generateLetterIndexes(networkNodes)
        toDeleteLetters = findAdjacentLetters(letterIndexes)
        
        for(const letter of toDeleteLetters) {
            networkNodes = networkNodes.replaceAll(letter, "")
        }
        
        numberOfOperations += toDeleteLetters.length
        
        console.log(networkNodes)
    } while (networkNodes.length > 0 && toDeleteLetters.length > 0)
    
    // At this point we no longer have any adjacent letter that we can remove to "make existing letters adjacent".
    // We'll repeat the process with the first letter of the sequence.
    // But we can't "replace all", since the letters are no longer adjacent.
    
    while (networkNodes.length > 0) {
        toDeleteLetters = findAdjacentLetters(generateLetterIndexes(networkNodes))
        if (toDeleteLetters.length > 0) {
            for(const letter of toDeleteLetters) {
                networkNodes = networkNodes.replaceAll(letter, "")
            }
            
            numberOfOperations += toDeleteLetters.length
        } else {
            numberOfOperations += 1
            networkNodes = networkNodes.slice(1)
        }
    }
    
    return numberOfOperations
}

function generateLetterIndexes(series) {
    const letterIndexes = {}
    for (let i = 0; i < series.length; ++i) {
        const letter = series[i]
        if (letterIndexes[letter]) {
            letterIndexes[letter].push(i)
        } else {
            letterIndexes[letter] = [i]
        }
    }
    
    return letterIndexes
}

function findAdjacentLetters(letterIndexes) {
    const adjacentLetters = []
    for (const [key, value] of Object.entries(letterIndexes)) {
        // console.log(`key=${key} value=${value}`)
        if (isAllIndexesContinuous(value)) {
            adjacentLetters.push(key)
        }
    }
    
    // console.log(adjacentLetters)
    return adjacentLetters
}

function isAllIndexesContinuous(indexes) {
    for (let i = 1; i < indexes.length; ++i) {
            const currentIndex = indexes[i]
            const previousIndex = indexes[i - 1]
            if (previousIndex !== currentIndex - 1) {
                return false
            }
        }
    return true
}

// This solution only passes 6 of 15 test cases.
// More complex cases are not being handled properly, like: ababaaaabaabbabbbbaaa