// Given a list of names, determine the number of
// names in that list for which a given query string
// is a prefix. The prefix must be at least 1
// character less than the entire name string.
// Example
// names = ['jackson', 'jacques', 'jack']
// query = ['jack']
// The complete query string 'jack' is a prefix of
// jackson but not of jacques or jack. The prefix
// cannot contain the entire name string, so
// 'jack' does not qualify.
// Function Description
// Complete the function findCompletePrefixes in
// the editor below. The function must return an
// array of integers that each denotes the number
// of names strings for which a query string is a
// prefix.
// findCompletePrefixes has the following
// parameter(s):
//     string names[n]: an array of name strings
//     string query[q]: an array of query strings
// Returns:
//     int[q]: each value[i] is the answer to query[i]
// Constraints
// 1 ≤ n ≤ 20000
// 2 ≤ length of names[i], query[i] ≤ 30,
// 1 ≤ sum of the lengths of all names[i] ≤ 5 x 10 5
// 1 ≤ q ≤ 200
// Sample Case 0
// Sample Input 0
// STDIN    Function
// -----    --------
// 10    →    names[] size n = 10
// steve    →    names = ['steve','stevens','danny','steves','dan','john','johnny','joe','alex','alexander']
// stevens
// danny
// steves
// dan
// john
// johnny
// joe
// alex
// alexander
// 5    →    query[] size q = 5
// steve    →    query = ['steve','alex','joe','john','dan']
// alex
// joe
// john
// dan

// Sample Output 0
// 2
// 1
// 0
// 1
// 1

// Explanation 0

// Query 1: steve appears as a prefix in two
// strings: stevens and steves.
// Query 2: alex appears as a prefix in one string:
// alexander.
// Query 3: joe does not appear as a prefix in
// any string.
// Query 4: john appears as a prefix in one
// string: johnny.
// Query 5: dan appears as a prefix in one string:
// danny.

/*
 * Complete the 'findCompletePrefixes' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. STRING_ARRAY names
 *  2. STRING_ARRAY query
 */

function findCompletePrefixes(names, query) {
    const result = []

    for (let i = 0; i < query.length; ++i) {
        let matches = 0;

        for (let j = 0; j < names.length; ++j) {
            if (prefix(query[i], names[j])) ++matches;
        }

        result.push(matches);
    }

    return result;
}

function prefix(prefix, string) {
    if (prefix.length >= string.length) return false;

    for (let i = 0; i < string.length; ++i) {
        if (i >= prefix.length) return true;   
        if (prefix[i] !== string[i]) return false;
    }
}

// 10/10 Test cases. =)