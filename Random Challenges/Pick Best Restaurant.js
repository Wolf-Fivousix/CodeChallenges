// Given a list of Dinners and Restaurants, pick the best choice available.

requests = [
    {name: 'Tim',
    cuisine:['sushi','burger', 'pizza'],
    price:'$'
    },
    {name: 'Eric',
    cuisine:['pizza'],
    price:'$$'
    },
    {name: 'Jenn',
    cuisine:['burger', 'pizza'],
    price:'$$$'
    },
    ]
     
    restuarants = [
    {
    name:'The Krusty Krab',
    cuisine:'burger',
    price: '$$'
    },
    {
    name:'Sushi by Fuji',
    cuisine:'sushi',
    price: '$'
    },
    {
    name:'Big Hanks Big Pizza',
    cuisine:'pizza',
    price: '$$$'
    },
    {
        Name: “In and out”,
        Cuisine: “burguer”,
        Price: “$”
    },
    {
        Name: “golden boy”,
        Cuisine: “pizza”,
        Price: “$”
    }
]

// Pizza => Big Hanks Big Pizza (cuisine)
// // Price is more important. As you can’t afford to eat in a place you like, if you can’t pay for it.

// $ => In And Out
// Because Everyone can afford the place.
// And 2 out of 3 of the dinners like burguer.

// $ => Golden Boy
// Because Everyone can afford the place.
// And 3 out of 3 of the dinners like burguer.



// Requests is now called Dinners.

// Iterate through Dinners and find the lowest price range they can afford.
// use that information to filter all the possible restaurants.

// If there is no restaurant after the price filtering. We should increase the price range, and remove the dinners that can’t afford it.

// Declare a hash table of cuisines.
// Lets iterate through Dinners and add each cuisine to the table.
	// if the cuisine doesn’t exist, add it with 1.
	// else increase the cuisine count by 1.

// declare a firstPick restaurant.
// Define bestScore to start at -1;
// Let iterate through the available restaurants.
	// check the cuisine “score”.
	// if cuisine does not exist in hash table, it’s score is 0.
	// if the score is better than before, change the firstPick.

// return firstPick.
// Inputs are arrays of objects.

function foodPick (dinners, restaurants) {
	let priceRange = Number.POSITIVE_INFINITY;
	for (let i = 0; i < dinners.length; ++i) {
		const currentPrice = dinners[i][“price”].length;
		if (currentPrice < priceRange) priceRange = currentPrice;
    }

    let places = restaurants.filter(restaurant => restaurant[“price”].length <= priceRange);

    // if (!places.length) go back and fix the Dinners / Restaurants.

    const cuisines = {};
    for (let i = 0; i < dinners.length; ++i) {
        const currentCuisine = dinners[i][“cuisine”];
        for (let j = 0; j < currentCuisine.length; ++j) {
            if (cuisines[currentCuisine[j]]) ++cuisines[currentCuisine[j]];
            else cuisines[currentCuisine[j]] = 1;
        }
    }

    let firstPick;
    let bestScore = -1;
    for (let i = 0; i < places.length; ++i) {
        const kitchen = places[i][“cuisine”];
        let currentScore = -1;
        if (cuisines[kitchen]) {
            currentScore = cuisines[kitchen];
        }
        else {
            currentScore = 0;
        }

        if (bestScore < currentScore) firstPick = places[i];
    }

    return firstPick[“name”];
}
