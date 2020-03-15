// Backend Programming Challange
// ========================================
// Convert a given float number (where exponent represents hours and fraction represents minutes ) in integer number representing equivalent time in seconds

function convertToSeconds(timeHours) {
    let seconds = 0;
    seconds = 3600 * Math.floor(timeHours);
    
    let minutes = timeHours.toString().split(".")[1] || "0";
    minutes = Number(minutes);

    return seconds += minutes * 60;
}

// This solution does not take into consideration negative numbers.