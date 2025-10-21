// Medium

// In a mystic dungeon, n magicians are standing in a line. Each magician has an attribute that gives you energy. Some magicians can give you negative energy, which means taking energy from you.

// You have been cursed in such a way that after absorbing energy from magician i, you will be instantly transported to magician (i + k). This process will be repeated until you reach the magician where (i + k) does not exist.

// In other words, you will choose a starting point and then teleport with k jumps until you reach the end of the magicians' sequence, absorbing all the energy during the journey.

// You are given an array energy and an integer k. Return the maximum possible energy you can gain.

// Note that when you are reach a magician, you must take energy from them, whether it is negative or positive energy.

 

// Example 1:
// Input: energy = [5,2,-10,-5,1], k = 3

// Output: 3

// Explanation: We can gain a total energy of 3 by starting from magician 1 absorbing 2 + 1 = 3.

// Example 2:
// Input: energy = [-2,-3,-1], k = 2

// Output: -1

// Explanation: We can gain a total energy of -1 by starting from magician 2.

 

// Constraints:

// 1 <= energy.length <= 105
// -1000 <= energy[i] <= 1000
// 1 <= k <= energy.length - 1

/*
BRUTE FORCE:
Starting from 0 all the way to the end of the array
    we simulate the energy absorption process and calculate how much energy was gained.
    We save wheenver the final value is higher than the current one (start at NEGATIVE_INFINITY)

Return the value!

Not great, because we are doing a Polynomial search O(N^2)
Great with Constant Space, because we only use a few variables, O(1)

BETTER:
We do ONE initial pass of the array and calculate how much EACH POSITION will get of energy, based on i + k
    We start from right and go to left.
    Each i is i + (i + k)
Now we do a SECOND pass to see which value is the biggest one!
    We can also do this step as we calculate, by keeping a global maximum. But let's optmizie this later (as this doesn't improve complexity)

We are now doing in Linear Time Complexity O(N)
But now is Linear Space Complexity O(N) - Because we're using a new array.
    We can optmize for memory by using the existing input to  Constant Space Complexity O(1), but we'll loose the original data (I usually don't like this, so will leave it out)
*/

/**
 * @param {number[]} energy
 * @param {number} k
 * @return {number}
 */
function maximumEnergy_BRUTE_FORCE(energy, k) {
    let maximumEnergy = Number.NEGATIVE_INFINITY

    for (let i = 0; i < energy.length; ++i) {
        let currentEnergyAbsorption = 0
        for (let j = i; j < energy.length; j += k) {
            currentEnergyAbsorption += energy[j]
        }

        maximumEnergy = Math.max(maximumEnergy, currentEnergyAbsorption)
    }

    return maximumEnergy
};

// Works, but gets time limit exceeded.


/**
 * @param {number[]} energy
 * @param {number} k
 * @return {number}
 */
function maximumEnergy_BETTER(energy, k) {
    const energyAccumulation = new Array(energy.length)

    for (let i = energyAccumulation.length - 1; i >= 0; --i) {
        const nextMagicianEnergy = i + k < energy.length ? energyAccumulation[i + k] : 0
        // console.log(`i=${i}`)
        // console.log(`energy[i]=${energy[i]}`)
        // if (i + k < energy.length) console.log(`energy[i+k]=${energy[i+k]}`)
        // console.log(nextMagicianEnergy)
        energyAccumulation[i] = energy[i] + nextMagicianEnergy
    }

    // console.log(energyAccumulation)
    return energyAccumulation.reduce((maxEnergy, accumulation) => Math.max(maxEnergy, accumulation))
};

// Runtime 84 ms Beats 55.43%
// Memory 70.50 MB Beats 42.02%

// Great! let's apply the last optimization to remove the 2nd iteration!
/**
 * @param {number[]} energy
 * @param {number} k
 * @return {number}
 */
function maximumEnergy(energy, k) {
    const energyAccumulation = new Array(energy.length)
    let maxEnergyPossible = Number.NEGATIVE_INFINITY

    for (let i = energyAccumulation.length - 1; i >= 0; --i) {
        const nextMagicianEnergy = i + k < energy.length ? energyAccumulation[i + k] : 0
        energyAccumulation[i] = energy[i] + nextMagicianEnergy
        maxEnergyPossible = Math.max(maxEnergyPossible, energyAccumulation[i])
    }

    return maxEnergyPossible
};

// Runtime 84 ms Beats 55.43%
// Memory 71.37 MB Beats 21.97%
// Aaaaand, here we have some real life behavior! Compilers are really good at optmizing things. And the time consumed by Math.max doesn't provide any improvement over simply doing another pass in the array!