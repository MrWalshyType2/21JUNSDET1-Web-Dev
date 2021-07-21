/* Iteration
   - for loop
   - for of loop (use for looping over iterable objects like arrays or strings)
   - for in loop (use for looping over enumerated objects, loops through properties)
   - while loop
   - do-while loop
   - recursion (function calls itself)
*/

// for loop
console.log("FOR LOOP");
for (let i = 0; i < 10; i++) {
  console.log(i);
}
// console.log(i); // cannot be accessed as i is scoped to the for block

// for of loop
console.log("FOR OF LOOP - string");
let str = "Hello";

for (const letter of str) {
  console.log(letter);
}

console.log("FOR OF LOOP - array");
let arr = [1, 2, 3, "Hello there"];
for (const element of arr) {
  console.log(element);
}

// for in loop
console.log("FOR IN LOOP");
let myObj = {
  name: "Bob",
  age: 22
}

for (const key in myObj) {
  console.log(`The property ${key} has the value ${myObj[key]}`);
}

// while loop
console.log("WHILE LOOP");
let inPlay = true;

while (inPlay) {
  console.log("In play");
  inPlay = false;
}

// do-while loop
console.log("DO WHILE LOOP")
inPlay = true;
do {
  console.log("running");
  inPlay = false;
} while (inPlay);

// recursion
console.log("RECURSION")
function countBackwardsFrom(num) {
  if (num < 0) {
    return;
  }
  console.log(num);
  countBackwardsFrom(num = num - 1); // tail recursion
}

countBackwardsFrom(10);