// Sally loves numbers that have unique digits. Given a range find how many numbers sally loves.


// This solution works fine, but for big enough ranges, the heap will explode due lack of memory.
function countNumbers(arr) {
    let ranges = [];
    arr.forEach(subArray => ranges.push(buildRange(subArray)));
    
    ranges.forEach(range => console.log(range.filter(number => love(number)).length));
}
function buildRange(array) {
    let range = [];
    for (let i = array[0]; i <= array[1]; ++i) {
        range.push(i);
    }
    
    return range;
}
function love(number) {
    let digits = {};
    const values = String(number).split("");
    for(let i = 0; i < values.length; ++i) {
        if (digits[values[i]]) return false;
        else digits[values[i]] = true;
    }
    return true;
}