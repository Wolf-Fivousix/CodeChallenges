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

// This theory: https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes

// Solution by AminiCK
// The Idea
// Use Sieve of Eratosthenes Algorithm
// Mark all increment of current value to false. p*(p+1), p*(p+2) ...
// The total Iteration run time can reduce to sqrt(n)
var countPrimes = function(n) {
    let hash = new Array(n).fill(true);
    hash[0] = false;
    hash[1] = false;
    for (let i=2;i*i<n;i++) {
        if (hash[i]) {
            for(let j=i*i;j<n;j+=i){ // p*(p+1)...
                hash[j] = false;
            }
        }
    }
    return hash.filter((val)=>val).length;
};
// Runtime: 140 ms, faster than 80.69% of JavaScript online submissions for Count Primes.
// Memory Usage: 65 MB, less than 35.39% of JavaScript online submissions for Count Primes.

// Solution by sushman
var countPrimes = function(n) {
    var count = 0;
    var flag = true;
    for(var i=2; i<n; i++){
        flag=true;
        for(var j = 2; j <= Math.sqrt(i); j++){
            if(i%j==0){
                flag = false;
                break;    
            }
        }
        if(flag==true)
			count=count+1;
    }
    return count;
};
// Runtime: 880 ms, faster than 15.79% of JavaScript online submissions for Count Primes.
// Memory Usage: 36.6 MB, less than 73.66% of JavaScript online submissions for Count Primes.