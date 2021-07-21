/* Data types
   - Primitive
     - number
     - bigint
     - string
     - boolean
     - null (empty variable, points to nothing)
     - undefined (variable has been declared, but not defined i.e. we haven't given
                  it a value)
     - symbol

   - Object
     - If it ain't a primitive, its a object
*/

// 4 ways to declare variables

x = 3; // implicit
var y = 4; // function or globally scoped, can be redclared
var y = 10;

let z = 5; // block scoped, cannot redeclare z
// let z = 7; // cannot be done

const xyz = x + y + z; // block scoped, cannot redeclare or redefine
// xyz = 32; // cannot be done


// Objects
let myCar = {
    manufacturer: "Mazda",
    model: "787B",
    lemansWins: 1,
    activeInLmp: false,
    engine: {
        cc: 1000
    }
};

console.log("MY CAR:", myCar);
console.log("MANUFACTURER:", myCar.manufacturer);
console.log("ENGINE:", myCar.engine);
console.log("CC:", myCar.engine.cc);