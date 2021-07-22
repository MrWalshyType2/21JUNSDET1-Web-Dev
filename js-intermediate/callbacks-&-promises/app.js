/* Callbacks
   - A callback is a function, specifically a function that has a function
     passed into a function as an argument which is then invoked
   - Callbacks are needed as JavaScript is an event-driven language that operates on one
     thread, this means JS will continue executing code whilst listening for
     other events.
*/

function when(next) {
    console.log("Outer function");

    console.log("About to call callback");
    next();
}

function doSomething(fn) { console.log("Does something"); }
let doSomethingElse = () => { console.log("Does something else") }

when(doSomethingElse);




function apply(fn, arr) {
    // multiplyBy2, [1,2,3]
    for (let i = 0; i < arr.length; i++) {
        // fn() gets applied to every element in the array
        let currentElement = arr[i];
        arr[i] = fn(currentElement);
    }
    return arr;
}

function multiplyBy2(num) {
    return num * 2;
}

console.log(apply(multiplyBy2, [1,2,3]));
console.log(apply(x => x * 2, [1,2,3]));

console.log(apply(x => x ** 2, [1,2,3]));


function filter(predicateFn, arr) {
    let returnArr = [];

    for (let i = 0; i < arr.length; i++) {
        let currentElement = arr[i];

        if (predicateFn(currentElement)) {
            returnArr.push(currentElement);
        }
    }
    return returnArr;
}

function isEven(num) {
    if (num % 2 == 0) return true;
    return false;
}

console.log(filter(isEven, [1,2,3,4]));
console.log(filter(x => x % 2 == 0, [1,2,3,4]));