// # Problem
// Write a function that takes two maps/hashes/objects/dicts (whatever your preferred language’s construct is) and returns if they are equal.
// For the purposes of this problem, assume that only direct comparison between primitive types (strings, numbers, booleans) are possible
// — comparison between hashes and arrays do not work “out of the box” (until you implement it!)

// areEqual({ "x": 1 }, { "x": 1 }) == True
// areEqual({ "x": 2 }, { "x": 1 }) == False

// ## Extension
// Can you handle the nested version?

function areEqual(objectOne, objectTwo) {
    const propertiesOne = Object.getOwnPropertyNames(objectOne)
    const propertiesTwo = Object.getOwnPropertyNames(objectTwo)
    // ["x"]
    // ["banana", "143", "name"] size = 3
    // ["tomato"]
    // ["tomato", "banana"]

    // ["tomato"]
    // ["banana"]

    // ["x"]

    if (propertiesOne.length !== propertiesTwo.length) return false

    for (const propertyName of propertiesOne) {
        if (!propertiesTwo.includes(propertyName)) return false
    }

    for (const propertyName of propertiesOne) {
        // First appraoch
        if (objectOne[propertyName] !== objectTwo[propertyName]) return false
        // "banana" === "BANANA" -> Should return false
        // "apple" to "pineapple"


        // Second approach
        const valueType = typeof objectOne[propertyName]
        const valueTypeTwo = typeof objectTwo[propertyName]
        if (valueType !== valueTypeTwo) return false
        
        switch(valueType) {
            case "number":
                break
            case "boolean":
                break
            case "string":
                break
            // This actually DOESN't work, because array type is still an Object.
            // We want to use Array.isArray(variable)
            case "array":
                // ["a"] equal ["a"]
                // ["a"] diff [["a"]]
                // ["a"] diff [["b"]]
                // [["b"]] diff [["a"]]
                // 
                console.log(`comparing arrays`)
                if (objectOne[propertyName].length !== objectTwo[propertyName].length) return false

                for (let i = 0; i < objectOne[propertyName].length; ++i) {
                    if (objectOne[propertyName][i] !== objectTwo[propertyName][i]) return false
                }
                break
            case "object":
                areEqual(objectOne[propertyName], objectTwo[propertyName])
                break
            default:
                throw new Error("Alien stuff")
        }
    }

    return true
}

console.log(areEqual({ "x": 1 }, { "x": 1 })) // == True
// console.log(areEqual({ "x": 2 }, { "x": 1 }) == False
console.log(areEqual({
    "banana": "apple",
    143: 0,
    name: true,
},
{
    "banana": "pineapple",
    143: 0,
    name: true,
})) // => false
console.log(areEqual({ tomato: 3 }, { tomato: 3, banana: 1 })) // false
console.log(areEqual({ tomato: 3 }, { banana: 1 })) // false

console.log(areEqual({ "x": ["a"] }, { "x": ["a"] })) // true
console.log(areEqual({ "x": ["a"] }, { "x": ["b"] })) // false:45
console.log(areEqual({ "x": ["a"] }, { "x": "b" })) // false:45
