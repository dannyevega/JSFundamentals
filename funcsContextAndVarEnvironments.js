/*
Variable environment refers to where variables live in the environment and how they relate to each other in memory
*/

function b(){
	var myVar;
}

function a(){
	var myVar = 2;
	b();
}

var myVar = 1;
a();

/*
What happens in the code above?

The Global Execution context is created and myVar on line 14 is attached to the Window object -- variable environment in Global Execution context is the Global object or Window in browser

Code is then executed and myVar will be assigned 1 in memory

Invocation of function a is hit -- new execution context is created for function a and myVar variable will be put into function a's execution context variable environment -- its value will be 2 when that line is executed in memory

Then, invocation of function b is hit and this creates a new execution context with its own variable environment -- myVar will be undefined in memory

This has to do with scope -- where are we able to see each variable -- each variable is defined within its own execution context because they are in different functions

Each call to a new function, you get a new execution context -- all of these myVar variables are unique and unrelated

Every execution context has its own variable environment

*/
