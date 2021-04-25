// Pinterest
// Write a function that takes in a list of people’s schedules, and outputs time intervals when everyone is free.

// [Dates, Date]
// [1000, 1200, 1300, 2000]
// Solving for one day at a time.
// [
    // [[1000, 1200], 1300, 2000],
    // [1000, 1200, 1300, 2000],
    // [1000, 1200, 1300, 2000]
// ]

/*
[
  ...,
  ...,
  [],
  ...,
] => []


[
  [0800, 1200] => this means availability is from 0 to 8, and 12 to 24.
]



[
  [1000, 1200]
  [1000, 1100]
] => [[0000, 10000], [1200, 2400]]

[
 [...1200], [1210, ...]
 .
 .
 .
 
] => [1200, 1210]


input: [[1000, 1200], 1300, 2000],

    [0000, 10000, 12000, 24000]
    1
    2
    3
    4
    10 - false
    11 - false
    12 - false
    13 - false
    ..
    .
    .
    
    
    // [[1000, 1200], 1300, 2000],
    // [1000, 1200, 1300, 2000],
    // [1000, 1200, 1300, 2000]
    
    SET
    {
      0001
      0002
      0003
      0004
      .
      0959
      1201
      .
      .
      2400
    }
    
    
    
Create the set
  iterate through all minutes and add them.

Interate through input
  for every person
    iterate through the subarrays (pair of hours)
      for each minute inside that rage, remove said minute from our set

Restructre response
  start with empty array
  counter starts at the first avaialable minute
  response array starts as array with subArray with first available time
  iterate through the set
    if the current counter is not "currentTime -1", we have a break in the schedule,
      add the current time to response subArray
      start new resposne subArray
  handle last minute case  
    
    
    
*/

function restructureFreeTimeSet(availability) {
    const response = availability.toArray();  // Method name is probably wrong
    // [12, 13, 14]
    // [12, 14]
    // [[12, 14], [....]]
    // To be implemented, the idea is removing "in-between" hours
    // And then structre the response as we want it.
    
  }
  
  
  function findFreeTime(schedules) {
    const freeTimes = createFreeDay();
    
    filterUsedHours(freeTimes, schedules);
    
    return restructureFreeTimeSet(freeTimes);
  }
  
  
  // Only creates hours
  function createFreeDay() {
    const hours = new Set();
    for (let i = 0; i < 24; ++i) {
      hours.add(i);
    }
    
    return hours;
  }
  
  function filterUsedHours(freeTimes, schedules) {
    for (let i = 0; i < schedules.length; ++i) {
      const schdule = schedules[i];
      for (let j = 0; j < schdule.length; ++j) {
        const start = schdule[j][0];
        const end = schdule[j][1];
        
        for (let hour = start; start <= end; ++start) {
          freeTimes.delte(hour);
        }
      }
    }
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  