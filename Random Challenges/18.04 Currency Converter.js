// # Prompt


// # Build an application that reads products and prices from the Coinbase Pro API, and calculates a quote between any two currencies Coinbase Pro trades, regardless of the available product pairs.

// # Example

// # input
// tickers = {
//   "BTC-USD": { "ask": 1000, "bid": 990 }, # 1.00 USD -> 1/1000 BTC, 1 BTC -> 990 USD
//   "BTC-EUR": { "ask": 1200, "bid": 1150 },
//   "ETH-USD": { "ask": 200, "bid": 180 },
//   "ETH-EUR": { "ask": 220, "bid": 210 },
// "USD-EUR": { "ask": "100", }
// "USDD-USD"
// }
// base_currency = 'USD'
// base_amount = 100
// quote_currency = 'EUR'
// # quote_amount = ?

// Ask is SECOND to FRIST (reverse transaction)
// Bid is FIRST to SECOND
/*
USD -> BTC -> EUR
100 -> 0.1 -> 0.1 * 1150 => 115 EUR

"USD-BTC"
"BTC-USD"


*/

// If there is no convertion return an error.
// Assume our tickers objects are correctly formated.
// Return a float for the converstion.

// USD -> EUR
// "USD-EUR"
// How to connect a non-existing ticker (for example, USD to EUR)

// We could convert our tickers into a graph
// Each chield connect to have a "conversion" formula.
    // When consturction the graph:
    // when going from FIRST to SECOND we would use the BID
    // When going from SECOND to FIRST we would use ASK



//   "BTC-USD": { "ask": 1000, "bid": 990 }, # 1.00 USD -> 1/1000 BTC, 1 BTC -> 990 USD
//   "BTC-EUR": { "ask": 1200, "bid": 1150 },
//   "ETH-USD": { "ask": 200, "bid": 180 },
//   "ETH-EUR": { "ask": 220, "bid": 210 },
/*

coins {
    "BTC": {"USD": X * 990},
    "USD": {"BTC": x / 1000, "ETH": x * 200 }
    "EUR": BTC, ETH
    "ETH": USD, EUR
}


Build COINS table (graph map)
    We need to fix the values for the ocnversions in the graph.
Build the graph given all the tickers
Traverse the graph and find the best convertion from X to Y.

*/
function quoteConversion() {
    // const tickers = API_CALL;
    const tickers = {};
    const coinGraph = buildTickersGraph(tickers);
    
    if (!possibleToConvert(coinGraph, currency1, currency2)) {
        
    }
    else throw new Error("Impossible to Convert");
}

function buildTickersGraph(tickers) {
    const coinGraph = {};
    Object.keys(tickers).forEach((key) => {
        const coins = key.split("-"); // "BTC-USD" => ["BTC", "USD"]
        const coin1 = coins[0];
        const coin2 = coins[1];

        if (coinGraph[coin1]) {
            coinGraph[coin1] = { ...coinGraph[coin1], [coin2]: 1 / tickers[key]["ask"] }
        }
        else {
            coinGraph[coin1] = { [coin2]: tickers[key]["bid"] }
        }
        
        if (coinGraph[coin2]) {
            coinGraph[coin2] = { ...coinGraph[coin2], [coin1]: 1 / tickers[key]["ask"] }
        }
        else {
            coinGraph[coin2] = { [coin1]: tickers[key]["bid"] }
        }
    });
    
    return coinGraph;
};

// We might not need this, so commenting it out.
// class GraphNode {
//     constructor(neighbor) {
//         this.neighbors = [neighbor];
//     }
    
//     addChild(neighbor) {
//         this.neighbors.push(neighbor);
//     }
// }

// function buildGraph(map) {
//     for (let key in map) {
        
//     }
// }

// BFS for the element
function possibleToConvert(coinGraph, currency1, currency2) {
    if (!coinGraph[currency1]) return false;
    
    const queue = [currency1];
    const visitedNodes = {};
    
    while (queue.length) {
        const current = queue.shift();
        if (current === currency2) return true;
        if (visitedNodes[current]) continue;
        
        visitedNodes[current];
        Object.keys(current).forEach(neighbor => queue.push(neighbor));
    }
    
    return false;
}


















// Testing
const tickers1Test = {
  "BTC-USD": { "ask": 1000, "bid": 990 },
  "BTC-EUR": { "ask": 1200, "bid": 1150 },
  "ETH-USD": { "ask": 200, "bid": 180 },
  "ETH-EUR": { "ask": 220, "bid": 210 }
}

// console.log(buildTickersGraph(tickers1Test));
console.log(buildGraph(tickers1Test));
