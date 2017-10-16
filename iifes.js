// IMMEDIATELY INVOKED FUNCTION EXPRESSION
// does exactly what its called -- immediately call this function expression when the JS engine hits this line

// only put expressions into parantheses -- needs a value to be returned -- creating a function and running it at the same time
(function(name){
	var greeting = "Hello ";
	console.log(greeting + name);
}("Danny"));

/*
All were doing is just executing a function as soon as we create it
*/

// IIFEs are commonly used in JS frameworks -- keep in mind for safe code
/*
When the above example if first loaded, it creates the Object in memory for the function expression part on the Global Execution Context and its anonymous --> ()

Then, JS sees the function is being invoked with ("Danny") and it creates an excecution context for anonymous function and then the code is ran line by line

It sees the variable greeting and this variable goes into the Variable Environment for the anonymous functions execution context, NOT into the global

We have our own execution context running within this anonymous function -- any variable we declare inside this anonymous function is within its execution context, not the Global -- its sitting all by itself -- this can be very useful
*/

// Let's say you have these two script tags loaded in your index

// inside greet.js, you have a variable greeting set to hola --> var greeting = "Hola";
<script src ="greet.js"><script>
// inside app.js, you have the above IIFE also with a variable greeting set to hello --> var greeting = "Hello";
<script src ="app.js"><script>

// Before, this caused a problem and collision but it no longer does -- they dont collide anymore -- when you console.log greeting it will print Hola with no errors

// remember, all of the script tags basically stack up on top of each other so the code with both script tags looks like this when they run:
var greeting = "Hola"; // from greet.js

(function(name){ // from app.js
	var greeting = "Hello ";
	console.log(greeting + name);
}("Danny"));

// greeting = "Hola" is added to the Global Execution Context
// when the IIFE is invoked, it creates a new execution context and the greeting variable inside the anonymous function is placed within that execution context
// both of these greetin variables exist in seaprate execution contexts and addresses -- this ensures there will be no collisions and makes code safe -- it encapuslates all of its code



