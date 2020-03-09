// Given an array of promises, return a solved promise if and only if all the promises are successful.
// All promises must be fired at the same time and all of them need to be executed before the function returns.

function runAllPromises(inputList) {
    for (let i = 0; i < inputList.legth; ++i){
        inputList[i]()
            .fail(() => false);
    }
}