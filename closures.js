function greet(phrase){
	return function(name){
		console.log(phrase + " " + name);
	}
}
greet("Hi"); // this invocation will itself return the inner function
greet("Hi")("Danny"); // now you invoke the inner function by invoking the returned function

// youre invoking a function that returns a function and you can invoke the function that was returned

var sayHello = greet("Hello");
sayHello("Danny"); // this will still work -- how? this is possible because of Closures

// Whats happening under the hood:
// this seems unusal because when the greet function ends in the sayHello variable, its popped off the execution stack but somehow still holds onto the phrase value when we execute sayHello with a passed name argument -- how?

// We have our global execution context when this code loads -- when we hit sayHello = greet("Hello"), it creates a new execution context and the variable phrase set to Hello is sitting within its variable environment -- it then returns a function from inside -- thats it and the greet execution context is returned and popped off the stack

// Every execution context has space in memory where all of its variables and functions created inside of it live -- what happens to that memory space when the execution context is removed?

// Under normal circumstances, the JS engine would clear this memory out with a process called garbage collection. However, at the moment when that execution context finishes, that memory space is still there -- although the execution context is gone, that variable is still floating around in memory

// Now we move on and were back to the Global Execution Context. We invoke the function that sayHello is pointing to and its an anoymous function because we ddint give it a name --> sayHello("Danny");

// sayHello() is added to the Global Execution Context

// sayHello creates a new execution context -- the variable name holding "Danny" will be held in this execution stacks memory

// when we hit the console.log line within the anonymous function, the JS engine sees the 'phrase' variable and goes up the scope chain looking for it (outer lexical environment) since it couldnt find the variable inside the function itself -- the sayHello execution context still has a reference to the variables and memory space of its outer environment

// Even though the greet function ended and finished, any function created inside of it when they are called will still have a reference to that greet functions memory -- what was in the greets memory of its own execution context space

// In this way, we say the execution context of 'sayHello' has closed in its outer variables -- the variables it would normally have refernce to anyway even though those execution contexts are gone -- this is a Closure

// We dont create closures -- theyre a feature of the language. It doesnt matter when we invoke a function, the JS engine will ensure that whatever function were running, it will always have access to the variables that its supposed to have access to -- its scope is in tact

// Ensures code is supposed to run the way its supposed to and has access to the outer lexical environment



// EXAMPLE of Closure:
function buildFunctions(){
	var arr = [];
	for(var i = 0; i < 3; i++){
		arr.push(
			function(){
				console.log(i);
			}
		)
	}
	return arr;
}
var fs = buildFunctions();
fs[0]();
fs[1]();
fs[2]();

// all above function invocations will print 3 -- why is this?

// Whats happening under the hood:
// buildFunctions is pushing these functions into this array then we call those functions at the bottom i.e. fs[0]()
// We have an array of 3 functions at the end of this and each of them prints the value of i which is 3 -- why is that?

// Execution stack of example above:
// Global execution context contains the buildFunctions() and fs variable we created

// Next, we hit line 53 --> var fs = buildFunctions() where the buildFunctions is being invoked -- when this is invoked, we get an execution context with the variables i created in the for loop and arr -- what are the values of these variables at the time we hit the return statement?

// The for loop runs -- i is first set to 0 then pushes the anonymous function into the array -- the console.log is NOT being run when this happens -- were just creating a new function object and pushing it into the array -- we havent invoked the function at all

// So it continues and i becomes 1 then pushes another anonymous function into the array

// i becomes 2 then pushes another anonymous function into the array

// i becomes 3 then then exits the for loop because it is no longer less than 3

// i's last value at this moment is a 3 since that is what told us to exit the for loop

// When we hit the return arr; statement inside the buildFunctions function, whats in memory at this execution context: i --> 3 and arr is holding 3 anonymous function objects

// Then, we go back to the global execution context and the buildFunctions execution context is popped off the stack -- what's still intact here? The memory of the buildFunctions execution context is still hanging around

// Then we invoke the function on each element in the array on line 54, 55 and 56 -- the function says to console.log(i) -- there is no i variable inside that function execution context so it goes up the scope chain and finds the variable i left over from buildFunctions execution context left in memory so it prints that value which is 3

// This happens for all function invocations for fs[0](), fs[1]() and fs[2]() --> they all have the same outer environment reference so they print the same value for i -- they all point at the same memory spot because they were all created inside the same function -- buildFunctions

// This may be weird but once you understand that the console.log(i) is not being executed right there where its sitting but being executed when we invoke the functions on 54-56, this makes sense when we look behind the scenes

// The value of i is what it is at the moment that we execute the function



// What if we wanted the above code to do what we might have intended it to do? i.e. print 0, 1 and 2? We can do it two ways:

// Using ES6, we can use the let keyword instead of var because let is scoped to the block, everything within the curly braces in the function below -- so everytime we run the for loop, let will be a new variable in memory -- everyime the function is invoked below, j will be pointing to a different value in memory i.e. 0, 1 and 2

function buildFunctions2(){
	var arr = [];
	for(var i = 0; i < 3; i++){
		let j = i;
		arr.push(
			function(){
				console.log(j);
			}
		)
	}
	return arr;
}
var fs2 = buildFunctions();
fs2[0]();
fs2[1]();
fs2[2]();

// Using ES5, in order to preserve the value of i, were going to need a separate execution context for each of the functions that were pushing into the array -- we need a parent scope that holds the current value of i as the loop runs

// The only way to get a new execution context is to invoke a function -- how can we do this every loop? We use an IIFE

// Everytime this loop runs, its going to execute the IIFE where i is being passed -- first passing 0, then execute a new one passing 1, then execute a new one passing 2 -- each of these invocations is going to create a new execution context where j is going to be stored in each of these execution contexts --> j = 0 in one execution context, j = 1 in another execution context and j = 2 in another execution context

// Although all of these execution contexts will eventually be popped off, we know thanks to closures that all values of those 3 j's will be hanging out in memory so we can just return the function printing the value of j

// Were doing a push when we run buildFunctions2() and the push is going to push the result of executing the IIFE -- executing the buildFunctions2 function gives us back a function --> this what gets pushed into the array: function(){console.log(j)}

/* Then when this gets executed at each invocation i.e. fs2[0]() --> function(){console.log(j)} -- it doesnt need to go up the scope chain looking for j, it will just go out to this execution context:

(function(j){
	return function(){
		console.log(j);
	}
}(i))

j will store the value at that moment it was executed in the loop
*/

function buildFunctions3(){
	var arr = [];
	for(var i = 0; i < 3; i++){
		arr.push(
			(function(j){
				return function(){
					console.log(j);
				}
			}(i))
		)
	}
	return arr;
}
var fs3 = buildFunctions3();
fs3[0]();
fs3[1]();
fs3[2]();


