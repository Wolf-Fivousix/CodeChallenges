// Two non-negative integers are called siblings if they can be obtained from each other by rearranging the digits of their decimal representations. For example, 123 and 213 are siblings. 535 and 355 are also siblings.
// A set consisting of a non-negative integer N and all of its siblings is called the family of N. For example, the family of 553 comprises three numbers: 355, 535 and 553.
// Write a function:
// function solution(N);
// that, given a non-negative integer N, returns the largest number in the family of N. The function should return −1 if the result exceeds 100,000,000.
// For example, given N = 213 the function should return 321. Given N = 553 the function should return 553.
// Write an efficient algorithm for the following assumptions:
// N is an integer within the range [2,147,483,647]

function solution(N) {
    let digits = [];

    while (N > 0) {
        digits.push(N % 10);
        N = Math.floor(N / 10);
    }

    digits = digits.sort((a, b) => b - a);
    const largest = Number(digits.join(""));
    
    return largest > 100000000 ? -1 : largest;
}