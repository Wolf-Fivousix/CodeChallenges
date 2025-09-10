// Medium

// On day 1, one person discovers a secret.

// You are given an integer delay, which means that each person will share the secret with a new person every day, starting from delay days after discovering the secret. You are also given an integer forget, which means that each person will forget the secret forget days after discovering it. A person cannot share the secret on the same day they forgot it, or on any day afterwards.

// Given an integer n, return the number of people who know the secret at the end of day n. Since the answer may be very large, return it modulo 109 + 7.

// Example 1:
// Input: n = 6, delay = 2, forget = 4
// Output: 5
// Explanation:
// Day 1: Suppose the first person is named A. (1 person)
// Day 2: A is the only person who knows the secret. (1 person)
// Day 3: A shares the secret with a new person, B. (2 people)
// Day 4: A shares the secret with a new person, C. (3 people)
// Day 5: A forgets the secret, and B shares the secret with a new person, D. (3 people)
// Day 6: B shares the secret with E, and C shares the secret with F. (5 people)

// Example 2:
// Input: n = 4, delay = 1, forget = 3
// Output: 6
// Explanation:
// Day 1: The first person is named A. (1 person)
// Day 2: A shares the secret with B. (2 people)
// Day 3: A and B share the secret with 2 new people, C and D. (4 people)
// Day 4: A forgets the secret. B, C, and D share the secret with 3 new people. (6 people)
 

// Constraints:

// 2 <= n <= 1000
// 1 <= delay < forget <= n

/*
BRUTE FORCE

while day is lesser than equal N
    If a number reached FORGET value, remove it from the queue (unshift) and decrease counter by 1.
    If there's a 0 or lesser, add a new "delay" to end of queue and increase counter.
    Decrease every number by 1

return counter (in the modulo format requested)

Since we are "ticking" this solution will grow with the input.
But since the growth of complexity doesn't match the input, it's not actually Linear, it's more like Polynomial or something. Since a single extra day can have maaaany increases in the queue.
And the array operations are insanely expensive and will not work for larger values. (array will run out of memory)


NEXT APPROACH:
*/

/**
 * @param {number} n
 * @param {number} delay
 * @param {number} forget
 * @return {number}
 */
function peopleAwareOfSecret_BruteForce(n, delay, forget) {
    let day = 0
    let counter = 1
    const gossipers = [delay]

    while(day < n) {
        ++day
        console.log(`Day: ${day}`)
        for (let i = 0; i < gossipers.length; ++i) {
            if (gossipers[i] === (delay - forget) ) {
                gossipers.shift()
                counter -= 1
                --i // We adjust the i since we have to iterate to the next element that, now, becomes the current.
                continue // Break this loop iteration without doing anything else.
            }

            if (gossipers[i] <= 0) {
                counter += 1 // Share the secret
                gossipers.push(delay) // Add the person to the memory tracker
            }

            gossipers[i] -= 1
        }

        // console.log(`[${gossipers}]`)
        console.log(`Aware: ${counter}`)
    }

    return counter // formating to be done
};

/*
NEXT APPROACH:
Every single day the "changes" are applied to the same amount of people.
For exemple: Everyone that learned the secret on day X, will forget ON THE SAME DAY.
So I don't need 1 array entry for every single person, I can "merge them all" into a pairing!
*/

/**
 * @param {number} n
 * @param {number} delay
 * @param {number} forget
 * @return {number}
 */
function peopleAwareOfSecret(n, delay, forget) {
    const MOD = (10 ** 9 + 7)
    let day = 0
    let counter = 1
    const gossipers = [
        { people: 1, memory: delay },
    ]

    while(day < n) {
        ++day
        const newGossipers = {
            people: 0,
            memory: delay - 1,  // We add all the gossipers in a batch AFTER we decreased the memory timer. So we need to account for that.
        }
        for (let i = 0; i < gossipers.length; ++i) {
            if (gossipers[i].memory === (delay - forget) ) {
                // console.log(`Group of people foretting the secret -> ${JSON.stringify(gossipers[i])}`)
                counter = (counter - ((gossipers[i].people % MOD)) % MOD + MOD) % MOD
                gossipers.shift()
                --i // We adjust the i since we have to iterate to the next element that, now, becomes the current.
                continue // Break this loop iteration without doing anything else.
            }

            if (gossipers[i].memory <= 0) {
                
                counter = (counter + (gossipers[i].people % MOD)) % MOD // Share the secret
                newGossipers.people = (newGossipers.people + gossipers[i].people % MOD) % MOD
            }

            gossipers[i].memory -= 1
        }

        if (newGossipers.people) {
            // console.log(`Group of people learning the secret -> ${JSON.stringify(newGossipers)}`)
            gossipers.push(newGossipers) // Batch add new people to the memory tracker
        }

        // console.log(`============= Day: ${day} - Aware: ${counter.toLocaleString()}`)
        // console.log(`Aware: ${counter} - ${JSON.stringify(gossipers)}`)
        // console.log(`Aware: ${counter} - ${JSON.stringify(gossipers)}`)
    }

    return counter // Modulo formating is done at every operation. So we don't need it again here.
};



// console.log(peopleAwareOfSecret_BruteForce(6, 2, 4))
// console.log(peopleAwareOfSecret_BruteForce(4, 1, 3))
// console.log(peopleAwareOfSecret_BruteForce(425, 81, 118)) // 1754995?
console.log(peopleAwareOfSecret(6, 2, 4))
console.log(peopleAwareOfSecret(4, 1, 3))
console.log(peopleAwareOfSecret(425, 81, 118)) // 1754995 yes!
console.log(peopleAwareOfSecret(684, 18, 496)) // Answer too big, modulo implementation is required to achieve correct expected result of 653668527
// Great video (16min long) explaining how and why we are using Modulo for these computations:
// https://www.youtube.com/watch?v=-OPohCQqi_E

// Runtime 29 ms Beats 17.65%
// Memory 58.14 MB Beats 17.65%