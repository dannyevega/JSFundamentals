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



// FUNCTIONS ARE OBJECTS -- FIRST CLASS FUNCTIONS
/*
first class functions -- everything you can do with other types, you can do with functions --> assign them to variables, pass them around, create them on the fly

Function -- special type of Object with all normal features of Object and others

You can attach properties and methods to a function because it is an Object --> primitive, Object, other functions

Name for a function -- optional, can be anonymous

Code property -- the code you write gets put into special property of the function Object, the function is an Object with other properties and the code you write is one of those properties you can add onto it -- this is invocable meaning run this code

Function is an Object whose code just happens to be one of the properties of that Object
*/
function greet(){
	console.log("hi");
}
greet.language = "english"; // this is possible because functions are objects so were just setting a property
console.log(greet) // will just return function as text
console.log(greet.language) // will print hi



// FUNCTION STATEMENTS AND FUNCTION EXPRESSIONS
/*
function expression: a unit of code that results in a value -- it doesnt have to save to a variable

function expressions are not hoisted -- only the variable will be hoisted
*/
var a;
a = 3; // will return 3 in console
1 + 2 // will return 3 in console, also an expression because its just returning a value

// below function expression -- puts function Object into memory and points the anonymousGreet variable to that address in memory
// this is an anonymous function because the function itself does not have a name -- you can set the function equal to a variable to point to that address in memory
// the anonymous function itself is an expression because it results in a value then set to a variable
var anonymousGreet = function(){
	console.log("hi");
}
anonymousGreet(); // this will print fine

anonymousGreet(); // this will return undefined is not a function because variables and functions declarations get hoisted initially -- so anonymousGreet is set to undefined and when JS runs line by line, it sees anonymousGreet trying to be invoked and it is not a funtion yet so it throws an error -- JS will see this line and see its set to undefined but cant invoke it yet cause its not set to anythign yet
var anonymousGreet = function(){
	console.log("hi");
}

/*
function statement: it does work, no value is returned

Below is a function statement -- it just places the greet function into memory but doesnt return a value until it is invoked

function statements are hoisted -- available to us in memory

Its a function which is an object and has a code property which we wrote inside

function statement becuase when its ran in the exection context, it doesnt do anything. JS just knows that its a function and places it in memory -- not until its invoked will it return or do somehting
*/
function greet(){
	console.log("hi");
}



// By Value vs. By Reference
// by value: referencing one value to another by copying the value -- they become the same by copying the value into two separate spots in memory -- below copies the value into two separate spots in memory
var a = "Hello"; // a has an address that tells it where this primitive value sits in memory -- reference is really to a location in memory
var b = a; // b will point to a new address, a new location in memory and a copy of the primitive value is placed into this spot in memory

// by reference: when you set a variable to an Object, you still get an address pointing to that Object -- However, variable b will not get a new location in memory, it points to the exact same Object -- same location in memory, no new Object created or copy to it -- just two variables pointing to the same address
// all Objects interact by reference -- completely different from by value
var a = { name: "Reynaldo" };
var b = a;

// by value (primitive) examples:
// changing the value of a doesnt affect b because theyre two different spots in memory
var a = 3;
var b;
b = a;
a = 5;
console.log(a) // prints 5
console.log(b) // prints 3

// by reference (all Objects and Functions) examples:
// these arent copies of each other, theyre pointing to the same Object in memory -- if we mutate c, d is also mutated because theyre both pointing to the same Object
var c = { greeting: 'hi' };
var d;
d = c; // JS sees c is an Object and instead of setting up new memory for b, it just points b to the same address as c
c.greeting = "hello";
console.log(c); // prints hello
console.log(d); // prints hello

function changeGreeting(obj){
	obj.greeting = "Hola"; // mutate
}
changeGreeting(c);
console.log(c); // prints Hola
console.log(d); // prints Hola

// equals operator sets up new memory space (new address) -- the equals sign sets up brand new memory space
var c = { greeting: 'heya' }; // special case where by reference doesnt apply because equals sets up new memory
console.log(c);
console.log(d);














