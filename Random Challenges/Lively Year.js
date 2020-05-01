// Given a list of people's birth and death date. Return the year with the most people alive.

// Start with an empty hash of years.
// Iterate through the list.
//     if Hash does not exists, add with 0.
//     For each birth add 1 to the hash.
//     For each death subtract 1 to the hash.

// define array of years by SORTING key's of hash.
// delcare maxPopulation at 0
// declare liviestYear at 0
// declare population at 0

// iterate through years array.
//     update population.
//     if maxPopulation is lower than population.
//         update liviestYear
//         update maxPopulation

// return liviestYear.

// Couple things to consider. Is the birth and death dates given as numbers? string? is it only year? Do they all look the same, or mm/dd/yy, or mm/yyyy. etc.
// This would require further processing of th input, but the logic to find the year itself would not change.
// This approach allows for Linear Time Complexity and Linear Space Complexy.