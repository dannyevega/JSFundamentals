// OBJECTS

/*
Objects have properties that can be primtives, other objects (also considered properties), and functions (known as methods)

Objects have an address associated with them for the computer to set in memory and they have references to all of their own properties and methods with their own addresses

Objects -- sitting in memory having references to other things sitting in memory that are connecting to it -- it knows wheres its different properties and methods are located that make the Object up
*/

// not the best way to create Objects but makes it obvious whats happening
var person = new Object();

// using brackets to set new primitive property called firstName
person["firstName"] = "Reynaldo";
person["lastName"] = "Juarez";

console.log(person["firstName"]);
console.log(person.firstName);

var Wah = {
	firstName: 'Danny',
	lastName: 'Vega',
	address: {
		street: '111 Main St.',
		city: 'New York',
		state: 'NY'
	}
};



// NAMESPACE
/*
A container for variables and functions -- typically to keep variables and functions with the same name separate -- we dont need this in JS, we can fake it

We can use Object literals as containers so they don't collide with other things on the page
*/

var greet = "Hello";
var greet = "Hola";

console.log(greet); // will print Hola since JS runs synchronously and Hola is the last value

// create Object literal containers
var english = {};
var spanish = {};

english.greet = "Hello";
spanish.greet = "Hola";

console.log(english) // will have greet property set to Hello

// above examples are used inside of frameworks and libraries to ensure when youre writing functions and so is someone else, we dont have any namespace collisions -- two things that are names the same



// JSON and Object literals
/*
Previously, XML was used to send data over the internet -- used to send too much data that would affect performance and speed so now we use JSON which looks like an Object literal and sent as a string

Properties have to be wrapped in quotes when using JSON -- JSON is valid Object literal but not the other way around. JSON has stricter rules
*/
{
	"firstName": "Juan",
	"isAProgrammer": true
}

var objectLiteral = {
	firstName: "Juan",
	isAProgrammer: true
}

// JSON.stringify is a a built in JS function used to make a JSON objects into strings so that you can then pass them to a server
console.log(JSON.stringify(objectLiteral));

// JSON.parse is a built in JS function that will turn string into valid JSON
var jsonValue = JSON.parse('{ "firstName": "Juan", "isAProgrammer": true }');

console.log(jsonValue);























