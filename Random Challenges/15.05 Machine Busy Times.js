/**
 * Implement busiest time finder in Machine Reservation System
 *
 * I have very expensive machine sitting in my lab. Since its expensive I cannot afford to have more than one machine
 * So anyone who wants to use this machine will be using it by reserving this machine.
 * Hence I have created reservation system as well. Where user can define their start time and end time for their use
 * Since this machine is powerful at a time it can be operated by many users. Assume there is no limit of users right now.
 *
 * I want to know that for a given day which time range is the most busiest time range. How can I get it?
 *
 * For example:
 *
 * User 1: 9AM - 5PM
 * User 2: 10AM - 1PM
 * User 3: 1AM - 4AM
 * User 4: 11AM - 3PM
 *
 * So the most busiest time will be 11AM - 1PM.
 * 
 * hours [1, 2, ...]
 * 
 * 
 * 
 * Linear Time COmplexity O(n) (where N is the list of users)
 * Constant Space Compelxity O(1)
 * 
 * if there are no usages (array is all 0's return "No usaged today")
 * define hours array with 24 elemetns
 * iterate through user input
 *      for each user, iterate through hours (start and end)
 *          increse the hour counter in our hoursArray
 * return hours peak
 * 
 * find hours peak
 *  define start at 0
 *  define end at 0
 *  define max peak as 0
 *  iterate through array
 *      if current peak is greater than max Peak
 *          update start and end
 *      else if peak is equal to max peak
 *          update end
 * 
 * return format hour (pass start and end)
*/

// 24h format
// [[9, 5], [10, 13], [1, 4]...]
function busiestTime(userTimes) {
    if (!userTimes.length) return "No usaged today";
    
    const usage = new Array(24).fill(0);
    
    userTimes.forEach(usageWindow => {
        for (let i = usageWindow[0]; i <usageWindow[1]; ++i) {
            ++usage[i];
        }
    });
    
    return findPeakHours(usage);
}

// Right now this solution doesn't handle non-adjacent peek hours, like [9-12] [16-18].
function findPeakHours(usage) {
    let startTime = 0;
    let endTime = 0;
    let maxPeak = 0;
    
    // (element, index)
    usage.forEach((currentPeak, hour) => {
        if (currentPeak > maxPeak) {
            starTime = hour;
            endTime = hour;
            maxPeak = currentPeak;
        }
        else if (curerntPeak === maxPeak) {
            endTime = hour;
        }
    });
    
    return formatHour(starTime, endTime);
}












