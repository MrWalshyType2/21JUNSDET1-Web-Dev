/* Callbacks
   - A callback is a function, specifically a function passed into a function
     as an argument which is then invoked
   - Callbacks are needed as JavaScript is an event-driven language that operates on one
     thread, this means JS will continue executing code whilst listening for
     other events.
*/

function apply(fn, arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = fn(arr[i]);
    }
    return arr;
}

function filter(fn, arr) {
    let returnArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i])) returnArr.push(arr[i]);
    }
    return returnArr;
}

console.log(apply(x => x * 2, [1,2,3]));
console.log(apply(x => x ** 2, [1,2,3]));

console.log(filter(x => x % 2 == 0, [1,2,3,4]));