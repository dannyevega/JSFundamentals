// THE SCOPE CHAIN

function b(){
	console.log(myVar);
}

function a(){
	var myVar = 2;
	b();
}

var myVar = 1;
a();

/*
When you run the code above, it will print 1 because it's accessing myVar at the global level

When we do something with a variable, JS does more than look at the variable environment of the current execution context -- it also looks at the Outer Environment

Every execution context has a reference to its Outer Environment

In case of function a and b, it's Outer Environment reference is the Global Execution Context

JS does something special, it cares about the lexical environment when it comes to the outer reference of every exectuion context gets -- when you ask for a variable when running a line of code inside any execution context, if it cant find that variable, it will look at the outer reference and look variables there somewhere down below it in execution stack

The outer reference to where it points depends on where that function sits lexically

function b sits lexically in the Global level -- its outer environment is Global and so is function a

scope -- where we can access variables and chain -- links to outer envionment references
*/

// What if we change the lexical environment?

function a(){

	function b(){
		console.log(myVar);
	}

	var myVar = 2;
	b();
}

var myVar = 1;
a();
b();

/*
if you run the code above, you will get function a to print 2
function b will return Uncaught RefernceError: b is not defined -- this is because b is not lexically attached to the Global object anymore, it's inside function a but the parser doesnt look inside function a, it only attaches it to the Global object

function a will print 2 because the call to b within inside a will print myVar and b's outer environment is function a so it will print 2

Think of where the code sits physically, lexically

Where a function sits, determines its outer environment reference -- as its being executed, the exectuion contexts are stacking up and they're running synchronously
*/














