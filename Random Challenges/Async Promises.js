// Given an array of promises, return a solved promise if and only if all the promises are successful.
// All promises must be fired at the same time and all of them need to be executed before the function returns.
// This problem is basically a variation of implementing Promise.allSettled() method.

function runAllPromises(inputList) {
    return new Promise( ()=> {
        for (let i = 0; i < inputList.legth; ++i){
            inputList[i]()
            .fail(() => false);
        }
    });
}

// Ok, let's start considering that we do not care about them being fired concurrently. Let's fire them in order, as each promise resolves.
function runAllPromises2(inputList) {
    return new Promise((resolve, reject) => {
        if (!inputList.length) return resolve(true);
        else {
            let promise = inputList.pop();
            return promise();
        }
    });
}

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise(function(resolve, reject) {
  setTimeout(resolve, 100, 'foo');
});

Promise.all([promise1, promise2, promise3]).then(function(values) {
  console.log(values);
});
runAllPromises([promise1, promise2, promise3])
    .then(function(values) {
    console.log(values);
  });
// expected output: 2x Array [3, 42, "foo"]

