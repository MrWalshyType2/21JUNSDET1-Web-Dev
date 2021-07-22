/* Promises
    - Promises are placeholders for data that at somepoint may become available,
      it may also never come available.
    - Promises are asynchronous, this means other code can be executed whilst waiting
      for the promise to be fulfilled or rejected.
    
    Promises have three states:
    - Pending
    - Fulfilled/Success
    - Rejected/Failed

    Three methods that are commonly used in conjunction with a promise:
    - .then() handles successful promises
    - .catch() handles failed promises
    - .finally() will run last no matter what
*/
let newPromise = new Promise((resolve, reject) => {
    let a = 1 + 1;

    if (a == 2){
        //we say what happens in the success outcome
        resolve("Success");
    } else {
        //we say what happens in the reject outcome
        setTimeout(function() {
            // rejects after a 5 second timeout
            reject("Failed");
        }, 5000); // 5000 milliseconds/5 seconds
    }
});

//we then pass the value from resolve or reject and we set it to message.
//.then() is executed if Fulfilled/successful.
newPromise.then(function(message) {
    console.log(`This is in the then block and the status is: ${message}`);
    //.catch() is executed if rejected/failed.
}).catch((message) => {
    console.log(`This is in the catch block and the status is: ${message}`);
//.then can be chained and will execute regardless of the outcome.
}).finally(() => {
    console.log("I will take place regardless of what happened before.");
});

console.log("Hello");