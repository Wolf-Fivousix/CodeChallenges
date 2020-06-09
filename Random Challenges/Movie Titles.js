// Write an HTTP GET method to retrieve
// information from a movie database.
// Given a string substr, the function
// getMovieTitles must perform the following
// tasks:
// 1. Query
// https://jsonmock.hackerrank.co
// m/api/movies/search/?
// Title=substr(replace substr).
// 2. Initialize the titles array to store
// total string elements. Store the Title
// from each record returned in the data
// field to the titles array.
// 3. Sort titles in ascending order and return it
// as the answer.
// The query response from the website is a
// JSON response with the following five
// fields:
// page: The current page
// per_page: The maximum number of
// results per page
// total: The total number of records in
// the search result
// total_pages: The total number of
// pages which must be queried to get all
// the results
// data: An array of JSON objects
// containing movie information
// If there are multiple pages to retrieve, the
// query should read
// https://jsonmock.hackerrank.com
// /api/movies/search/?
// Title=substr&page=pageNumber,
// replacing substr and pageNumber.
// Function Description
// Complete the getMovieTitles function in
// the editor below.
// getMovieTitles has the following
// parameter(s):
//     substr: a string
// Returns:
//     string[]: an array of strings, titles sorted
// in ascending order
// Sample Case 0
// Sample Input
// Sample Output
// Explanation
// For this example, all titles that contain
// the substring spiderman should be
// displayed. The response for the query
// https://jsonmock.hackerrank.co
// m/api/movies/search/?
// Title=spiderman&page=1 is:
// The response for the query
// https://jsonmock.hackerrank.co
// m/api/movies/search/?
// Title=spiderman&page=2 is:
// The values of the Title field for each
// record in the order received are:
// The values of the Title field for each
// record in the order received are:
// Sort the array in ascending order, and
// return it as the answer.

const https = require('https');
/*
 * Complete the function below.
 * Use console.log to print the result, you should not return from the function.
 * Base url: https://jsonmock.hackerrank.com/api/movies/search/?Title=
 */
function getMovieTitles(substr) {
    https.get(`https://jsonmock.hackerrank.com/api/movies/search/?Title=${substr}`, (res) => {
        res.on('data', (d) => {
            const movies = JSON.parse(d).data;
            let titles = [];
            
            for (let i = 0; i < movies.length; ++i) {
                titles.push(movies[i]["Title"]);
            }
            titles.sort().forEach(title => console.log(title));
        });

        }).on('error', (e) => {
        console.error(e);
    });
}

// 4/8 Test Cases
// I'm missing the conditions for multiple pages.