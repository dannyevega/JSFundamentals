function greet(phrase){
	return function(name){
		console.log(phrase + " " + name);
	}
}

function greet(phrase){
	return function(name){
		console.log(`${phrase} ${name}`);
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



// FUNCTION FACTORIES

// the makeGreeting function below just returns a function

// Even though these two functions sit lexically within the same makeGreeting function, they're going to point to two different spots in memory because they were created during two different execution contexts

// enlish is a function Object whose closure points to language being english

// spanish is another function Object whose closure points to a different execution context for the same function whose language points to Spanish

// Main takeaway: even though theyre the same functions, a new execution context is created everytime we execute it with new memory space no matter how many times we call it

function makeGreeting(language){
	return function(firstName, lastName){
		if(language === 'en'){
			console.log("Hello " + firstName + " " + lastName);
		}
		if(language === 'es'){
			console.log("Hola " + firstName + " " + lastName);
		}
	}
}

var english = makeGreeting("en"); // unique execution context -- wrapped up in closure pointing to 'en' as language
var spanish = makeGreeting("es"); // unique execution context -- wrapped up in closure pointing to 'es' as language

english("Juan", "Doe");
spanish("Juan", "Doe");

// Walk through of code above:

// Global execution context has makeGreeting, english and spanish

// When line 178 is ran, makeGreeting is executed and creates its own execution context with language being 'en' then it returns a function which is stored in the english variable -- makeGreeting ends and the memory space for this exeuction context is still hanging around


// Now when we run lines 179, another makeGreeting function is executed creating its own execution context with language being 'es' -- then it returns a function which is stored in the spanish variable -- makeGreeting ends and the memory space for this exeuction context is still hanging around

// We have two spots in memory hanging out with those two separate execution contexts once contained

// Now when we get to line 181 where invoke english where the inner function was returned, that creates a new execution context with firstName Juan and lastName Doe -- in this outer environment reference, we know it needs to point to one execution context created by makeGreeting cause thats where it sits lexically -- JS engine knows the first execution context was created during that first execution context so it points to that one (language being 'en') --> this is where our closure is

// When we hit line 182, same process happens but its pointing to a different execution context with language being 'es' forming its own closure

// makeGreeting is returning a function that has access to what the language variable was at the time it was created by pointing to that memory space -- this lets us create functions from other functions



// CLOSURES AND CALLBACKS
function sayHiLater(){
	var greeting = "Hi!";

	setTimeout(function(){
		console.log(greeting);
	}, 3000);
}

sayHiLater();

// What happens? After 3 seconds, it will print the contents of greetin variable -- were using function expressions --> closures

// setTimeout takes a function Object(function expression) -- were passing it as a parameter along with the time to wait -- taking advantage of first class functions and being able to pass around

// now sayHiLater finishes -- remember asynchronous processes? Well, setTimeout goes off into the browser counts the 3000 miliseconds and drops an event when its finished -- the JS engine checks if there are any functions listening for this event and it finds one (function expression inside of setTimeout)

// greeting variable doesnt exist in the function expression and sayHiLater has already finished running --> it goes up the scope chain and it has a closure for the greeting variable - it knows the memory space when sayHiLater was running and its execution context -- thanks to closures, the function expression has access to the greeting variable although it finished executing

// functions that do something after youve ran another function (i.e. function expression executing after setTimeout has finished) -->giving the function expression to another function (setTimeout) and having it do something when its dones(setTime out is done) is called a callback

// callback: a function you give to another function to be executed when the other function is finsished -- the function you call (invoke), 'calls back' by calling the function you gave it when it finishes

function tellMeWhenDone(callback){
	var a = 1000;
	var b = 2000;

	callback();
}

tellMeWhenDone(function(){
	console.log("All done....");
})

tellMeWhenDone(function(){
	console.log("I'm done, fam.");
})

