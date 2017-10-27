var a = 3;
console.log(typeof a); // number --> returned as a string, primitve value NOT the function constructor (Number)

var b = "Hello";
console.log(typeof b); // string --> returned as a string, primitve value NOT the function constructor (String)

var c = {};
console.log(typeof c); // object --> returned as a string, primitve value NOT the function constructor (Object)

var d = [];
console.log(typeof d); // object (arrays are objects) weird!
console.log(Object.prototype.toString.call(d)); // [object Array] better!

function Person(name) {
    this.name = name;
}

var e = new Person('Jane');
console.log(typeof e); // object --> returned as a string, primitve value NOT the function constructor (Object)
console.log(e instanceof Person); // instanceof tells us if Person is found down the prototype chaing -- returns true

console.log(typeof undefined); // undefined --> makes sense
console.log(typeof null); // returns object --> a bug since, like, forever...

var z = function() { };
console.log(typeof z); // returns function as string

// typeof --> a function that returns a string tells us what something is
// instanceof --> dealing with object chains, tells you what something has in its prototype chain



// STRICT MODE
// lets say you create a variable person and define it later but you spell it incorrectly, common mistake. Printing persom to the console will print an empty Object because we created it -- this can cause some tough to track down errors
var person;
persom = {};
console.log(persom);

// adding below basically tells JS engine to please be stricter when you're parsing this code, apply more rules
// this must go at the top of the file or on top of a function
"use strict"; // at top of js file

function logNewPerson(){
	"use strict"; // at top of function in case you dont want to apply this to the whole file

	var person2;
	persom2 = {};
	console.log(persom2);
}
logNewPerson();

// using strict will not let you do the above on line 37 -- you must first declare a variable before you set it to anything
