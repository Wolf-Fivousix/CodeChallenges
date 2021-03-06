// Given a string that consists of only two types of
// characters: '(' and ')', balance the parentheses
// by inserting either a '(' or a ')' as many times as
// necessary. Determine the minimum number of
// characters that must be inserted.
// Example
// s = '(()))'
// To make it a valid sequence, insert a '('at the
// beginning of the string, resulting in "((()))". The
// string is balanced after 1 insertion.
// Function Description
// Complete the function getMinOperations in the
// editor below. The function must return the
// minimum number of operations needed to
// make the parentheses sequence valid.
// getMinOperations has the following
// parameter(s):
//     string s: a string of parentheses
// Return
//     int: the minimum number of insertions
// required to balance the parentheses
// Constraints
// 1 ≤ length of s ≤ 10 5

// FIRST TEST
// This solutions fails for a simple reason: ")(" would be considered balanced with 0 changes, but in fact we need to add 2 paraentheses to make it work.
function getMin(s) {
    let [open, close] = [0, 0];
    s.split("").forEach(char => {
        char === "(" ? ++open : ++close;
    });
    console.log(open, close);
    return open > close ? open - close : close - open;
}

function getMin(s) {
    let opener = 0;
    let closer = 0;

    s.split("").forEach(char => {
        if (char === "(") ++opener;
        else opener > 0 ? --opener : ++closer;
    });
    
    return closer + opener;
}