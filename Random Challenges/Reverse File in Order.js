/*
You're given an integer N, followed by N lines of input (1 <= N <= 1000).
Each line of input contains one or serveral words separated by single spaces.

Each word is a sequence of characters in English alphabet containing between 1 and 10 characters, inclusive.
The total number of words in the input is between 1 and 100, inclusive.

Your task, shall you accept it, is to reverse the orders of words n each line of input, while preserving. the words themselves.
The lines of your output should not have any trailing or leading spaces.

Example:
Input
3
Hello World
Bye World
Useless World

Output
World Hello
World Bye
Wolrd Useless
*/

function reverseInput(n, input) {
    const raw = input.split("\n");

    for (let i = 0; i < raw.length; ++i) {
        console.log(raw[i].split(" ").reverse().join(" "));
    }
}

const input1 = "Hello World\nBye World\nUseless World";
reverseInput(3, input1);