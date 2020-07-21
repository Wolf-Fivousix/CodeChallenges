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
// If I save those primes, all I need to do is see if those primes are divisors of it.

function countPrimes(n) {
    let primes = [];

    for (let value = 2; value < n; ++value) {
        let primeFlag = true;
        
        for (let i = 0; i < primes.length; ++i) {
            const divisor = primes[i];
            if (value % divisor === 0) {
                primeFlag = false;
                break;
            }
        }
        
        if (primeFlag) primes.push(value);
    }
    
    return primes.length;
}

// New version. Still running out of time. =/