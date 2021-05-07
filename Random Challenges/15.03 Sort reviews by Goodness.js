/*
Amazon
Given a set of reviews provided by customers for a product and an array containing good words.
Goodness Value of a string is the number of good words in that string. 

eg: Good words array - “good”, “excellent”, “durable”, "long-lived", "well", "great"

Write a program that evaluates reviews for goodness value and provides sorted list of good reviews in descending order of goodness (Higher goodness value first).

Reviews

review0 - “Very good!”, “This works so good. It’s an excellent buy!” - 3,
review1 - “It’s the most durable device. Must buy!” - 1
review2 - “It’s battery is long-lived. Great!” - 2
review3 - “It’s battery is short lived. Do not buy!” - 0
review4 - "This book is badly - written:(" - 0
review5 - "A well - written novel" - 1
review6 - "This product is not good. Do not buy" - 0

Sorted output: [review0, review2, review1, review5]
*/

// adding reviews to market place
// sort reviews by "goodness"
/*
"good product"

“It’s the most durable device. Must buy!”
[it's, the, most, durable, device, must, buy!]

"This product is not good. Do not buy"
[this, product, is, not, good....]

"this product is no good"
"this product is notgood"
"this product isnot good"


Sort reviews by goodness
    define an empty array result
    iterate through list of reviews
        add subarray of review with it's goodness value
    sort this array based on goodness value
    return result array.
    
Evaluate Goodness
split the stirng input ionto array
define goodnes counters as 0
iterate through this array
    for each word, check if it matches our "Good words" array.
        if it does, check the previous word (make sure is whithin array boundary) is not a "negative word"
        else increase our "goodness" counter
return our goodness

Sorted output: [[review0, 0], [review2, 2], [review1,3], review5]

List Node
    this.review
    this.next
*/

// Log Linear Time Complexity O(n log n)
// Linear Space Complexity O(n)

function sortReviewsByGoodness(listHead, goodWords) {
    let head = listHead;
    const result = [];
    while (listHead !== null) {
        result.push([head.review, evaluateGoodness(head, goodWords)])
    }
    
    return result.sort((a, b) => b[1] - a[1]);
}

// Linear Time Complexity O (n), where N is our review string
// Linear Space Complexity O(n), where N is our goodWords and negativeWords
function evaluateGoodness(node, goodWordsArray) {
    const negativeWords = new Set(["not"]);
    const goodWords = new Set(goodWordsArray);
    
    const noPunctuation = node.review.gsub(/!,./, "");  // syntax might be wrong
    const review = noPunctuation.lowerCase().split(" ");
    let goodness = 0;
    review.forEach((word, i) => {
        if (goodWords.includes(word)) {
            const previousWord = i >= 1 ? review[i - 1] : review[i]; // First word will receive the same
            if (!negativeWords.includes(previousWord)) ++goodness;
        }
    });
    
    return goodness;
}