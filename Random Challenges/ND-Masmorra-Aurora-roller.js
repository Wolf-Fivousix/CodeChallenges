const BASE_ND = 1
let roll = Math.random() * 100
const results = []

for (let i = 0; i < 100000; ++i) {
    const adventure = []
    let nd = BASE_ND
    for (let j = 0; j < 7; ++j) {
        let roll = Math.random() * 100
    
        if (roll <= 40) {
            // do Nothing
        }
        else if (roll <= 70) {
            nd += 1
        }
        else if (roll <= 90) {
            nd += 2
        }
        else if (roll <= 100) {
            nd += 3
        }
        adventure.push(nd)
    }
    results.push(adventure)
}

const probabilities = calculateLastEncounterProbabilities(results)


// console.log(roll, nd)
console.log(probabilities)
// console.log(results)

function calculateLastEncounterProbabilities(results) {
    const mapping = {}
    let largestNd = 0
    for (const adventure of results) {
        const finalNd = adventure[adventure.length - 1]
        if (finalNd > largestNd) {
            largestNd = finalNd
        }
        mapping[finalNd] = mapping[finalNd] ? mapping[finalNd] + 1 : 1
    }

    for (let i = 1; i <= largestNd; i++) {
        mapping[i] = mapping[i] | 0
    }

    const probabilities = {}
    //Divide each frequency by the total pool
    for (const key in mapping) {
        probabilities[key] = mapping[key] / results.length;
    }


    return probabilities
}