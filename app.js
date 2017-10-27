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