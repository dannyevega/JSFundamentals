// What would be the expected outcome below?
var a = "Hello World!";

function b(){
	console.log('Called b!');
}

b(); // prints "Called b!"
console.log(a); // prints "Hello World!"
// These would print normally as we expect them to!



// What would be the expected outcome below?
b();
console.log(a);

var a = "Hello World!";

function b(){
	console.log('Called b!');
}

// Calling b would work as normal because of hoisting
// Printing var a would print 'undefined' because of hoisting
// This is because variable declarations are hoisted as well and given a value of undefined. JS doesn't give it a value until it reaches that line in the code. Creates a variable a and sets the value later

/*
The reason why JS behaves the way it does is due to the Execution Context which is created in two phases:

Creation phase: Global Object, 'this', Outer Environment and the JS parser recognizes where you've created function declaration and variable declarations -- all in memory

HOISTING -- > JS sets up memory space for variables and functions known as Hoisting. Its not actually moving code to the top of the file. All this means is that before our code begins to be executed line by line, the JS engine has already set aside memory space for the variables and functions declarations you created in the code youve built. These all exist in memory. When the code begins to run line by line, it can acess them.

Execution phase is when these assignments are set -- the code is ran line by line

var a;

when JS sets up memory space for variable a, it doesn't know what its value will be until it gets executed. So instead, it puts a placeholder of undefined. This just means it recognizes the variable but doesn't know the ultimate value yet.

All variables in JS are initially set to undefined and functions are siting there in their entirety.

This is all just phase 1 -- setting up the memory space so when the code begins executing, those things are actually already sitting in memory

*/