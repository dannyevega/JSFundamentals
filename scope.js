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
*/