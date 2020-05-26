// Sally loves numbers that have unique digits. Given a range find how many numbers sally loves.

function countNumbers(arr) {
    const lovedNumbers = {};

    arr.forEach(rangeArray => {
        let counter = 0;

        for (let number = rangeArray[0]; number <= rangeArray[1]; ++number) {
            if (lovedNumbers[number] || love(number, lovedNumbers)) ++counter;
        }

        console.log(counter);
    });
}

function love(number, lovedNumbers) {
    const original = number;
    let digits = {};

    while(number > 0) {
        const digit = number % 10;

        if (digits[digit]) {
            lovedNumbers[original] = false;
            return false;
        }
        else digits[digit] = true;

        number = Math.floor(number/10);
    }

    lovedNumbers[original] = true;
    return true;
}

// By using the Hash for previously calculated numbers we can improve the run time by a bit.
// Passing 9/11 Test Cases.

// Even though we burn memory, we cannot execute quick enough for 5k and 10k ranges.