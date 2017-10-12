// What's happening under the hood when you invoke a function:

function b(){
}

function a(){
	b();
}

a();

/*
Let's step through the invocation for code above:

If we put the code in a JS file and run it, a Global Execution context will be created. The parser will parse the code, then the compiler, the program interpreting your code, will start up a Global Execution Context --> Global Object, 'this', Outer Environment (Window object if you're in the browser)

Then, it will attach these function a and b to it, allocating memory for the functions in the creation phase of the execution context -- b and a will be in memory

Then the code will be executed line by line

Once line 10 function a is executed, a new execution context is created and added to the execution stack. The execution stack is basically execution contexts stacked one on top of the other and the one at the top is the one that is currently running

Anytime you execute a function, a new execution context is created and added to the stack. The execution context is created with its own space for variables and functions, it will go through the creation phase and then execute line by line the code within the function

However, if you have another function invocation such as line 7 in function a, it will stop at that line and create a new execution context for that function invocation and run that code

Every function in JS creates a new execution context which runs the create phase then executes the code line by line within the function

When b finishes, it will get popped off the stack then back to a then down to Global
*/

function a(){
	b();
	var c;
}

function b(){
	var d;
}

a();
var d;

/*
Walkthrough of code above:

The lexical ordering of functions doesnt matter nor does the rest of the code that happens to be surrounding those function calls

Even though function a is lexically above function b, this doesnt matter -- both functions are already set up in memory in the creation phase of the initial Global Execution context
*/





















