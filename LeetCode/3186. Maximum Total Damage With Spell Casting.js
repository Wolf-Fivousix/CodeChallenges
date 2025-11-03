// Medium

// A magician has various spells.
// You are given an array power, where each element represents the damage of a spell. Multiple spells can have the same damage value.
// It is a known fact that if a magician decides to cast a spell with a damage of power[i], they cannot cast any spell with a damage of power[i] - 2, power[i] - 1, power[i] + 1, or power[i] + 2.
// Each spell can be cast only once.
// Return the maximum possible total damage that a magician can cast.

// Example 1:
// Input: power = [1,1,3,4]
// Output: 6
// Explanation:
// The maximum possible damage of 6 is produced by casting spells 0, 1, 3 with damage 1, 1, 4.

// Example 2:
// Input: power = [7,1,6,6]
// Output: 13
// Explanation:
// The maximum possible damage of 13 is produced by casting spells 1, 2, 3 with damage 1, 6, 6.

// Constraints:

// 1 <= power.length <= 105
// 1 <= power[i] <= 109

/* -> THESE ARE WRONG. See later why.
BRUTE FORCE (or "human" approach):

Read the power array and compute the "potential" of each power[i] (count how many of each element we have)
Iterate through the keys in this new object, skip 2 elements
    calculate the total power of this combination
Repeat this processes with i starting at 1, 2 and 3 (because once we are at 4, it's the same as being in 1. We also DO NOT have 0. Power[i] starts at 1 as a constrain)

Compare the 3 results and return the largest one.

This makes complete sense for a human! But as a computer, we can do a bit better!

BETTER:

We already know that the only difference between each "computation" is the delta between the vlaues. In other words, each power[i] falls within ONE of THREE buckets.
Bucket 1
Bucket 2
Bucket 3
Because Bucket 4 will be the same as Bucket 1!
THAT MEANS we can MOD POWER[I] as the KEY of the computation.
Eg.
1 % 3 = 1
2 % 3 = 2
3 % 3 = 0
4 % 3 = 1
5 % 3 = 2
6 % 3 = 0

Now we have effectively created 3 buckets that correctly hash the key at run-time!

All we gotta do is do ONE pass through the power array, calculate the sums of the 3 different combinations and then return the biggest of the three!

This gives us:
Linear Time Complexity O(N)
Constant Space Complexity O(1)

AWESOME!!

*/

/**
 * @param {number[]} power
 * @return {number}
 */
function maximumTotalDamage_WRONG(power) {
    const totalDamages = {
        0: 0,
        1: 0,
        2: 0,
    }

    for (const damage of power) {
        totalDamages[damage % 3] += damage
    }

    return Math.max(...Object.values(totalDamages))
};

// NOOOOOO NO NO NO NO NO NONOONOOO!!!
// We don't have 3 fixed buckets!! If we cast spell 1, we cannot cast 2 and 3, but if we DO NOT cast a spell 4, we CAN cast spell 5!! Even though 5 doesn't "fall" within the same bucket, because we didn't cast that spell, this bucket is now free!

// Let's take a step back then....
/*
BRUTE FORCE:
When we start picking an value, we can decide between 1, 2 or 3.
These are the only options we have.
Now... Imagining the array continues on, if we pick 1, we HAVE TO exclude 2 and 3... And then we repeat the process with 4, 5 and 6.
If we pick 4, we can only pick 7 forward..
If we pick 5, we can only pick 8 forward..
    But you may say: Hey! if you are picking 5, you COULD go back and pick 2, right!?
    WRONG! That decision HAS ALREADY BEEN MADE! We already picked 1 in this "branch" of computation! The option of picking 2 and 5 will be covered by the loop that start in 2! We don't need to "back evaluate" this case!
Okay, so there's a pattern here!

Everytime we pick a number, we move 3 values up and then repeat the picking process. Each time, we branch in 3 different "possibilities"
       0
    /  |  \
   0   0   0

NOW I can recursively dynamically compute with an ever shrinking array of 3 elements!

Is this THE MOST OPTIMAL APPROACH? No!! But we're looking for a brute force solution here! Let's see if it works!
/*

/**
 * @param {number[]} power
 * @return {number}
 */
function maximumTotalDamage_WRONG_2(power) {
    const totalDamage = {}
    // Calculate the total damage of each power choice
    for (const damage of power) {
        totalDamage[damage] = totalDamage[damage] ? totalDamage[damage] + damage : damage
    }

    // console.log(totalDamage)

    return optimizeDamage(totalDamage, Object.keys(totalDamage))
};

function optimizeDamage(damage, powers) {
    console.log(`powers in consideration - ` + powers)
    if (!powers.length) return 0


    // Check if the first 3 elements of the input are within the x - 2 < x < x + 2 window.
    const elements = powers.splice(0,3).map(el => Number(el))
    // console.log(`elements-${elements}`)
    const values = [elements.shift()]
    // console.log(`values-${values[0]}`)
    // console.log(`length=${elements.length}`)
    // console.log(`elements[0]=${elements[0]}`)
    // console.log(`values[0] + 2=${(values[0] + 2)}`)
    // console.log(`true?=${elements[0] <= values[0] + 2}`)

    if (elements.length && elements[0] <= values[0] + 2) {
        values.push(elements.shift())
        // console.log(`values-${values}`)
    }
    if (elements.length && elements[0] <= values[0] + 2) {
        values.push(elements.shift())
        // console.log(`values-${values}`)
    }
    powers.unshift(...elements)
    console.log(`Values [${values}]`)
    console.log(`Powers = ${powers}`)
    const powerOptimization = optimizeDamage(damage, powers)
    console.log(`optimizeDamage(damage, powers) = ${powerOptimization}`)
    console.log(`values [${values}] -> ${values.map(element => damage[element] + powerOptimization)}`)

    return Math.max(...values.map(element => damage[element] + powerOptimization))
}
// This solution ALMOST worked, but it made some incorrect assumptions about the way the logic branches. Mainly on cases like 1,2,3,4,5!



/**
 * @param {number[]} power
 * @return {number}
 */
function maximumTotalDamage_BRUTE_FORCE(power) {
    const totalDamage = {}
    // Calculate the total damage of each power choice
    for (const damage of power) {
        totalDamage[damage] = totalDamage[damage] ? totalDamage[damage] + damage : damage
    }

    // console.log(totalDamage)

    return optimizeDamage(totalDamage, Object.keys(totalDamage).map(el => Number(el)))
};

function optimizeDamage(damage, powers) {
    // console.log(`powers in consideration - ` + powers)
    if (!powers.length) return 0


    // Check if the first 3 elements of the input are within the x - 2 < x < x + 2 window.
    const elements = powers.splice(0,3)
    // console.log(`elements-${elements}`)
    const values = [elements.shift()]
    // console.log(`values-${values[0]}`)
    // console.log(`length=${elements.length}`)
    // console.log(`elements[0]=${elements[0]}`)
    // console.log(`values[0] + 2=${(values[0] + 2)}`)
    // console.log(`true?=${elements[0] <= values[0] + 2}`)

    if (elements.length && elements[0] <= values[0] + 2) {
        values.push(elements.shift())
        // console.log(`values-${values}`)
    }
    if (elements.length && elements[0] <= values[0] + 2) {
        values.push(elements.shift())
    }
    powers.unshift(...elements)

    // We're now FILTERING the powers array for any element that is within the INVALID window of THE CURRENT VALUE we are calculating.
    return Math.max(...values.map(value => damage[value] + optimizeDamage(damage, powers.filter(el => el > value + 2))))
}
// This solution is working! But is exceeding the time... for this input: [4,80,75,89,76,53,82,1,73,32,46,72,50,75,61,85,50,46,68,83,25,69,80,28,80,50,1,50,20,37,69,33,11,63,21,79,62,89,51,2,70,20,61,46,17,44,38,89,88,82,63,72,57,56,38,1,78,30,66,68,26,44,1,67,47,74,8,50,19,36,88,35,50,43,76,16,51,24,50,42,55,19,9,51,55,88,1,26,84,60,14,27,50,64,22]
// How can we make it MORE PERFORMANT?

// We know we are RE-CALCULATING the same OPTIMAL DAMAGE multiple times unecessarily!
// In the case that the array is breaking, we have a sequence from 1 to 89, and imagine... When we branch the logic in 1,2,3 ... we will skipp 4 or 5 but other than that, computations for the LATER entries will be exactly the same!
// SO, KNOWING THIS, what do we want to do?
// We want to MEMOIZE the results of any computation made LATER.
// So BEFORE we compute the optmization, we should check if we have already computed that, and only calculate if we haven't.

/**
 * @param {number[]} power
 * @return {number}
 */
function maximumTotalDamage(power) {
    const totalDamage = {}
    // Calculate the total damage of each power choice
    for (const damage of power) {
        totalDamage[damage] = totalDamage[damage] ? totalDamage[damage] + damage : damage
    }

    // console.log(totalDamage)

    const DAMAGE_OPTIMIZATION = {}
    return optimizeDamage(totalDamage, Object.keys(totalDamage).map(el => Number(el)), DAMAGE_OPTIMIZATION)
};


function optimizeDamage(damage, powers, DAMAGE_OPTIMIZATION) {
    // console.log(`powers in consideration - ` + powers)
    if (!powers.length) return 0

    // Check if the first 3 elements of the input are within the x - 2 < x < x + 2 window.
    const elements = powers.splice(0,3)
    const values = [elements.shift()]

    if (elements.length && elements[0] <= values[0] + 2) {
        values.push(elements.shift())
    }
    if (elements.length && elements[0] <= values[0] + 2) {
        values.push(elements.shift())
    }
    powers.unshift(...elements)

    // Memoize DamageOptimization based on the value we're calculating.
    values.forEach(value => {
        if (!DAMAGE_OPTIMIZATION[value]) DAMAGE_OPTIMIZATION[value] = optimizeDamage(damage, powers.filter(el => el > value + 2), DAMAGE_OPTIMIZATION)
    })
    // console.log(JSON.stringify(DAMAGE_OPTIMIZATION))

    // We're now FILTERING the powers array for any element that is within the INVALID window of THE CURRENT VALUE we are calculating.
    return Math.max(...values.map(value => damage[value] + DAMAGE_OPTIMIZATION[value]))
}
// This is working.... It is efficient BUT .... We explode the HEAP when the input is very large. AKA - powers length is 10^5 ... T_T .... damn it!!



function testCase(input, result) {
    console.log(`Test Case: ${maximumTotalDamage(input) === result ? "PASS" : "FAIL <<<<<<<<<<<<<<<"}`)
}
testCase([1,1,3,4], 6)
testCase([7,1,6,6], 13)
testCase([7,1,6,3], 10)
testCase([4,80,75,89,76,53,82,1,73,32,46,72,50,75,61,85,50,46,68,83,25,69,80,28,80,50,1,50,20,37,69,33,11,63,21,79,62,89,51,2,70,20,61,46,17,44,38,89,88,82,63,72,57,56,38,1,78,30,66,68,26,44,1,67,47,74,8,50,19,36,88,35,50,43,76,16,51,24,50,42,55,19,9,51,55,88,1,26,84,60,14,27,50,64,22], 2272)
