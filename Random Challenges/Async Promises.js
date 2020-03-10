// Given an array of promises, return a solved promise if and only if all the promises are successful.
// All promises must be fired at the same time and all of them need to be executed before the function returns.

function runAllPromises(inputList) {
    for (let i = 0; i < inputList.legth; ++i){
        inputList[i]()
            .fail(() => false);
    }
}

// Ok, let's start considering that we do not care about them being fired concurrently. Let's fire them in order, as each promise resolves.
function runAllPromises(inputList) {
    return new Promise((resolve, reject) => {
        if (!inputList.length) return resolve(true);
        else {
            let promise = inputList.pop();
            return promise();
        }
    });
}