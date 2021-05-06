// Offers to BUY: 100, 100, 99, 99, 97, 90
// Offers to SELL: 109, 110, 110, 114, 115, 119process.stdin.resume();

// It is ok to work with round numbers.
// Assumption: we work with orders as they come.
// Whatever existing BUY and SELL orders will be passed down as arguments.

// Let's go with keeping an array sorted.

// { 
//     order: "buy" || "sell" 
//     price: xxxx
// }


// Assumption: buyStack and SellStack come in already orderd.
// If order is processed, return true. otherwise return false
/*
if the order is to buy
    what is the lowest selling price
    if the selling price is equual or lesser than the order price
        process the order
    otherwise we want to add the buy order to the buyStack.
else do something
    same process as buying, but using the sell Stack.


process order
    remove the first element from stack (modifing the input)
    return true
    
addOrder
    add the order to the appropriate place in stack
    (sort the stack again)
    return false (because order was not processed)
    
buy 100
sell [105, ...]
*/


function processOrder(buyStack, sellStack, order) {
    if (order["order"] === "buy") {
        lowestSellPrice = sellStack[sellStack.length - 1];
        if (lowestSellPrice <= order["price"]) {
            sellStack.pop();
            return true;
        }
        addOrder(buyStack, order);
    }
    else {
        highestBuyOrder = buyStack[buyStack.length - 1];
        if (highestBuyOrder >= order["price"]) {
            buyStack.pop();
            return true;
        }
        addOrder(sellStack, order);
    }
    
    return false;
}

function addOrder(stack, order) {
    stack.push(order["price"]);
    
    if (order["order"] === "buy") {
        stack = stack.sort((a, b) => a - b);
    }
    else {
        // sort descending (top is lowest price)
        stack = stack.sort((a, b) => b - a);
    }
}

// console.log(processOrder([], [], { "order": "buy", "price": 26 }))

let buyStack = [100, 100, 99, 99, 97, 90].sort((a,b) => a - b);
let sellStack = [109, 110, 110, 114, 115, 119].sort((a,b) => b - a);

// console.log(buyStack)
// console.log(sellStack)
const order1 = { 
    "order": "sell",
    "price": 150
}

const order2 = { 
    "order": "buy",
    "price": 120
}
const order3 = { 
    "order": "sell",
    "price": 99
}
console.log("Order1: ", processOrder(buyStack, sellStack, order1)); // => false
console.log(sellStack); // new order in stack

console.log("Order 2: ", processOrder(buyStack, sellStack, order2)); // => true
console.log(sellStack); // order in stack removed

console.log("Order 3:", processOrder(buyStack, sellStack, order3)); // => true
console.log(buyStack); // order in stack removed


















