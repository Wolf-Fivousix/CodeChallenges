// Easy

// Count the number of prime numbers less than a non-negative number, n.

// Example:

// Input: 10
// Output: 4
// Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.

/**
 * @param {number} n
 * @return {number}
 */
function countPrimes(n) {
    let primes = 0;
    --n;
    
    while (n > 1) {
        if (isPrime(n)) ++primes;
        --n;
    }
    
    return primes;
}

function isPrime(value) {
    if (value < 2) return false;
    
    for (let i = 2; i < value; ++i) {
        if (value % i === 0) return false;
    }
    
    return true;
}

// Bruteforce solution. Runs out of time during execution.
// Let's think about this: As I go through the values, I already know which ones were prime before it.
// Hence, what I need to do is not figure out if the current value is prime, but instead, WHICH
// values are prime from 2 to N - 1.