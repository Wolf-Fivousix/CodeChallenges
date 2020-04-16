// Grouping Transactions by Items' Names

// For a given array of
// transactions, each with an item
// name, group all the
// transactions by item name.
// Return an array of strings where
// each string contains the item
// name followed by a space and
// then the number of associated
// transactions. Sort the array
// descending by transaction
// count, then ascending
// alphabetically by item name for
// items with matching transaction
// counts.
// Example
// transactions = ["notebook", "notebook", "mouse", "keyboard", "mouse"]
// There are two items with 2
// transactions each: notebook
// and mouse. In alphabetical
// order, they are mouse,
// notebook.
// There is one item with 1
// transaction: keyboard.
// The return array, sorted as
// required is ["mouse 2",
// "notebook 2", "keyboard 1"].
// Function Description
// Complete the function
// groupTransactions in the editor
// below.
// groupTransactrions has the
// following parameter(s):

/*
 * Complete the 'groupTransactions' function below.
 *
 * The function is expected to return a STRING_ARRAY.
 * The function accepts STRING_ARRAY transactions as parameter.
 */
function groupTransactions(transactions) {
    let counterHash = {}
    transactions.forEach(transaction => {
        if (counterHash[transaction]) ++counterHash[transaction];
        else counterHash[transaction] = 1;
    });
    // console.log(counterHash);
    let keys = Object.keys(counterHash);
    let result = [];
    keys = keys.sort();
    while (keys.length) {
        let maxKey = keys[0];
        keys.forEach(key => {
            if (counterHash[key] > counterHash[maxKey]) maxKey = key;
        });
        result.push(`${maxKey} ${counterHash[maxKey]}`);
        keys.splice(keys.indexOf(maxKey), 1);
    }
    return result;
}

// 7/15 Test Cases passes.
// Right now we have a factorial behavior on the worst case. The while loop needs to be improved.