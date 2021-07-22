/* JavaScript Objects
   - Unordered collection of data in the form of key:value pairs
   - Objects are reference data types, i.e. a variable points to the location of
     the object in memory
*/

// Ways to create objects
let obj = new Object(); // object constructor
let obj2 = {}; // object literal (most common)

function Trainee(name) {

    // created a property on this object
    // - functions are objects and thus they can have properties
    this.name = name;
}
const trainee = new Trainee("Bob"); // Constructor function
console.log(trainee.name);

// ES6 classes build upon prototypes
// - prototypes allow for inheritance and other oop like behaviour
class Trainer {
    constructor(name) {
        this.name = name;
    }
}

const trainer = new Trainer("Fred"); // es6 classes

// object properties
// - properties support full CRUD (Create, Read, Update, Delete)
let car = new Object();

// create, adding new properties like this is known as using the 'expando' property
// - objects support both dot and bracket notation
car["manufacturer"] = "Toyota"; // bracket notation
car.model = "TS050"; // dot notation

// read
console.log(car.manufacturer);

// update
car.model = "TS060";
console.log(`CAR WITH MODEL: ${JSON.stringify(car)}`)

// delete
delete car.model;
console.log(`CAR WITHOUT MODEL: ${JSON.stringify(car)}`)

/* JSON - JavaScript Object Notation
   - File format and data interchange format used for storing and transmitting
     data objects in the form of text
   - Based on the 1999 3rd Ed. of ECMAScript
   - Can convert to JS objects:
        - converting a JSON string to a JS object is called 'deserialization' (string -> object)
        - converting a JS object to a JSON string is called 'serialization' (object -> string)

   JSON objects are very similar to JS objects:
   - collection of name:value pairs
   - data is separated by commas
   - curly braces hold objects
   - square brackets hold arrays
    
   The key of a JSON field must be a string written in double quotes!

   Legal JSON value types:
   - string (must be double quotes)
   - number
   - object
   - array
   - boolean
   - null

   File ending: .json
   Media Type : application/json
*/
// Example of what a json object might look like
let myJSONObject = {
    "searchResults": [
        {
            "productName": "Aniseed Syrup",
            "unitPrice": 10
        },
        {
            "productName": "Alice Mutton",
            "unitPrice": 39
        }
    ]
};

// The parse method takes a string and parses it into JavaScript objects
// - deserialization (json string -> object)
let obj3 = JSON.parse('{"name":"Adrian"}');
console.log(obj3.name); // returns Adrian

// The stringify method takes JavaScript objects and returns a JSON string
// - serialization (object -> json string)
let someObj = { name: "John" };
let str = JSON.stringify(someObj);
console.log(str);


const articuno = {
    "abilities": [
      {
        "ability": {
          "name": "pressure",
          "url": "https://pokeapi.co/api/v2/ability/46/"
        },
        "is_hidden": false,
        "slot": 1
      },
      {
        "ability": {
          "name": "snow-cloak",
          "url": "https://pokeapi.co/api/v2/ability/81/"
        },
        "is_hidden": true,
        "slot": 3
      }
    ]
};

console.log(articuno.abilities);
console.log(JSON.stringify(articuno));

/*
1. Select some properties from the JSON Poke API pokemon that you will represent
   as a object. For example: { name: "Articuno", abilities: [{...},{...}], etc...}

   Link: https://pokeapi.co/

2. Use a template object for storing your poke data (this could be a object literal,
    a function object, a class, etc...)

3. Store the whole json data of a pokemon within a variable

let dittoJson = {
  "abilities": [
    {
      "ability": {
        "name": "limber",
        "url": "https://pokeapi.co/api/v2/ability/7/"
      },
      "is_hidden": false,
      "slot": 1
    },
    {
      "ability": {
        "name": "imposter",
        "url": "https://pokeapi.co/api/v2/ability/150/"
      },
      "is_hidden": true,
      "slot": 3
    }
  ],
  "base_experience": 101,
  "forms": [
    {
      "name": "ditto",
      "url": "https://pokeapi.co/api/v2/pokemon-form/132/"
    }
  ],
  // ...

4. Retrieve data from your pokemon object and store it in your pokemon template object
   - For example: let ditto = new Pokemon(dittoJson.id, dittoJson.name, etc...)

5. Convert the newly created object into a json string with JSON.stringify()
   */