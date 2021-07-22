/* 
The structure of a JS file can make a lot of difference to our programs, especially
in terms of security - are global variables safe... No they are not!

- Think about scope when thinking about how secure your variables are
    - Are they global, if so - WHY ARE THEY GLOBAL?
    - If it doesn't need to be in the global scope, put it in a local scope
*/

// The easiest way to protect our code is to wrap it in a 
// Immediately Invoked Function Expression (IIFE)
// - see below for the two variants
(() => {
    let x = 3;
    var y = 4;

    let password = "password123";
})();
// console.log(y, x); // inaccessible as they are scoped to the function

(function() {
    let x = 3;
    var y = 4;
})();
// console.log(y, x); // inaccessible as they are scoped to the function

/* A good rule of thumb for structure is:
    - variables first
    - methods next (functions on an object are methods)
    - initilisations and event listeners
*/
(function() {
    // vars
    let x = 32;
    let y = 32;
    let answer;

    // methods/functions
    const add = (num1, num2) => num1 + num2;

    // initialisations and event listeners
    answer = add(x, y);
})