// A valid parentheses string is either empty (""), "(" + A + ")", or A + B, where A and B are valid parentheses strings, and + represents string concatenation.
// For example, "", "()", "(())()", and "(()(()))" are all valid parentheses strings.
// A valid parentheses string S is primitive if it is nonempty, and there does not exist a way to split it into S = A+B, with A and B nonempty valid parentheses strings.
// Given a valid parentheses string S, consider its primitive decomposition: S = P_1 + P_2 + ... + P_k, where P_i are primitive valid parentheses strings.
// Return S after removing the outermost parentheses of every primitive string in the primitive decomposition of S.
// Example 1:
// Input: "(()())(())"
// Output: "()()()"
// Explanation: 
// The input string is "(()())(())", with primitive decomposition "(()())" + "(())".
// After removing outer parentheses of each part, this is "()()" + "()" = "()()()".
// Example 2:
// Input: "(()())(())(()(()))"
// Output: "()()()()(())"
// Explanation: 
// The input string is "(()())(())(()(()))", with primitive decomposition "(()())" + "(())" + "(()(()))".
// After removing outer parentheses of each part, this is "()()" + "()" + "()(())" = "()()()()(())".
// Example 3:
// Input: "()()"
// Output: ""
// Explanation: 
// The input string is "()()", with primitive decomposition "()" + "()".
// After removing outer parentheses of each part, this is "" + "" = "".

// "()"    => ""
// "(())"  => "()"
// "()(())"    => "()"

// declare deco as empety array.
// decompose string S -> Giving us 1+ valid parenthesis inputs (deco as array).
//     declare result as empty string array.
//     counter of opening parenthesis.
//         iterate through input (starting at 1)
//             for each "(" add to counter
//             for each ")" remove from counter.
//             if counter is 0 add current sequence to result, as a slice of current iteration. (use splice to remove from original)
//     return result

// ["()", "(())"]
// assign result of decompositionFunction to deco variable.

// declare result. (empty string for now)
// iterate through Deco array.
//     For each one, simplify parenthesis. (function simplify)
//         remove first and last characters of sequence.
//     add simplified parenthesis to result.
// return result.




function decomposeAndSimplify(originalString) {
    let deco = decompose(originalString);
    let result = "";

    for (let i = 0; i < deco.length; ++i) {
        result += simplify(deco[i]);
    }

    return result;
}

function decompose(string) {
    let result = [];
    let counter = 1;

    for (let i = 1; i < string.length; ++i) {
        if (string[i] === "(") ++counter;
        else --counter;

        if (!counter) {
            result.push(string.splice(0, i + 1));      // Assume my splice call is working as intended.
            i = 0;
            counter = 1;
        }
    }

    return result;
}

function simplify(string) {
    return string.slice(1, -1);       // "(xxxxxxx) => xxxxxxxx
    // Possible change in case splice dont work on string.
    return string.split("").splice(1, string.length - 1).join("");
}

// "()(())"    => ["()", "(())"]

// string (input) => "(())"
// result = ["()", "(())"]
// counter = 0

// i = 5
// string[i] = ")"

// deco = ["()", "(())"]
// result = "()"
// "()" => Simplify => ""
// "(())" => simplify => "()"