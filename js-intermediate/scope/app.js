/* Scope
Two types:
    - Global
    - Local

Global scope is given to variables declared outside of all functions or
curly braces/code blocks.
    - This only applies to frontend (website) JS, not the backend node.js
    - Variables with global scope can be used anywhere
    - Naming conflicts are common when variables are left to pollute the
        global scope
    - Applies to var, let and const

There are two types of local scope:
    - Function scope
    - Block scope

Function scope is given to variables declared in a function, these 
variables can only be accessed within the function.

    - Functions can have a shared scope if they are nested, the inner function
        can access the outer functions variables (lexical scoping) but not the
        other way around. This is handy in creating closures which can be used
        to make data private.

        - Closures bundle functions together, with the enclosed functions
            having access to the surrounding functions lexical environment (state)

        - A closure does not need to be returned to be classed as a closure

    - Applies to var, let and const

Block scope is a new type of local scope that was brought into JS in the 
ECMAScript 2015 (ES6) specification that gave the let and const keywords.
    - Variables declared with let or const inside curly braces/code blocks
      are scoped only to that block, they cannot be accessed outside of said block.
*/



/* Globally scoped, accessible anywhere, unsafe data */
console.log("GLOBAL SCOPE");

var x = 3;
let y = "Hello";
const z = true;

function globallyScopedFunction() {
    console.log("Globally scoped");
}

{
    var x = 3; // globally scoped as it is var and not inside a function
    let inaccessible = 43; // block scoped
}
console.log(x);
// can access x as it is in the global scope 
// - var is functionally scoped, not block scoped

// console.log(inaccessible); // ReferenceError




/* Block scoped, accessible within blocks of any kind, safer data,
   applies to let and const
*/
console.log("BLOCK SCOPE");

function hasBlockScopedVariables() {
    const hidden = "hidden in block scope";
    let hidden2 = "also hidden in block scope";

    console.log(`The const and let vars can be accessed inside the scoped environment they where declared in ${hidden}`);
}
hasBlockScopedVariables();
// console.log(hidden); // ReferenceError

{
    let anotherHiddenOne = "Hidden in block scope";
}
// console.log(anotherHiddenOne); // ReferenceError


/* Function scope, variables declared within a func are scoped to that func */
console.log("FUNCTION SCOPE");

function hasFunctionScopedVariables() {
    var hiddenVar = "I'm hidden";
    let hiddenLet = "I'm also hidden";
    const hiddenConst = "I'm also, also hidden";

    console.log(`Can access functionally scoped variables in the function scope they where declared in: ${hiddenVar}`);
}
hasFunctionScopedVariables();
// console.log(hiddenVar); // ReferenceError
// console.log(hiddenLet); // ReferenceError
// console.log(hiddenConst); // ReferenceError


/* Closures */
console.log("CLOSURES");

function titlePrefixer(name) {

    return function prefix(prefix) {
        // name remains in scope even when this function is returned
        return `${prefix} ${name}`;
    }
}
// console.log(name); // cannot access name outside of its scope

let nameWithoutPrefix = titlePrefixer("Janet");
let prefixedName = nameWithoutPrefix("Miss");
console.log(prefixedName); // Miss Janet

let bob = titlePrefixer("Bob");
console.log(bob("Mr")); // Mr Bob


function wageCalculator(wage, name) {
    
    // this closure has access to wage
    function adjustWage(amount) {
        wage += amount;
    }

    // this returned object has closures that can access wage and adjustWage()
    return {
        raise(amount) {
            adjustWage(+amount);
        },
        lower(amount) {
            adjustWage(-amount);
        },
        wageBeforeTax() {
            return wage;
        },
        wageAfterTax(taxRate) {
            return wage - wage / 100 * taxRate;
        }
    }
}

const bobsWageCalculator = wageCalculator(30000, "Bob");
console.log(`BOBS WAGE BEFORE TAX: ${bobsWageCalculator.wageBeforeTax()}`);
console.log(`BOBS WAGE AFTER 40% TAX: ${bobsWageCalculator.wageAfterTax(40)}`);