// In our execution context, we have our Variable environment, 'this' keyword and the Outer environment

// Wouldn't it be nice to be able to control what 'this' refers to when the execution context is create?

// We use call, bind and apply

// Function is a special type of Object that has a name or can be anonymous -- it has code within it that is invocable -- all functions in JS have access to cerrtain special methods -- i.e. call, bind and apply methods
var person = {
	firstName: "Ron",
	lastName: "Doe",
	getFullName: function(){
		var fullName = this.firstName + " " + this.lastName;
		return fullName;
	}
}

var logName = function(lang1, lang2){
	console.log('Logged: ' + this.getFullName());
}

logName();

// above code will fail because the 'this' keyword will be pointing to the global object -- its not a method of person object -- when we execute this logName function --> this.getFullName is not a function

// we can tell JS what 'this' refers to

// BIND
// .bind -- returns a new function, a copy of the logName function and sets up the new copy so whenever its invoked and new execution context is created, JS sees the function was created using the bind method --> this sets up some hidden things in the background so when JS decides what 'this'refers to, it knows it must be whatever was passed to the bind method
var logPersonName = logName.bind(person);
logPersonName() // we pass whatever Object we want to be the 'this' variable

// now when we call logPersonName, we passed the person Object to it so when its executed, the 'this' keyword inside logName will be pointing to the person Object

// .bind creates a copy of whatever function you're calling it on and whatever Object you pass to that function, the 'this' keyword will point to that Object you passed to it by reference



// CALL
// .call -- it works the same as invoking a funtion -- logName() -- but youre able to control what the 'this' keyword is pointing to -- we can also pass it parameters
// unlike bind, .call actually invoked the function but youre able to control the 'this' keyword and also pass arguments
logName.call // this will invoke the function



// APPLY
// .apply does the exact same thing as .call except it ONLY accepts its parameters as an array
logName.apply(person, 'en', 'es') // --> this will not work and throw an error
logName.apply(person, ['en', 'es']) // --> now, this will work



// Thats great and all but when would you actually use this in real life?
// function borrowing
var person2 = {
	firstName: "Ron",
	lastName: "Doe",
}

// this is function borrowing --> we wanted to apply the method in person Object to let person2 Object borrow the same method -- we can grab methods and use them on different object so long as they similar property names so it will work
console.log(person.getFullName.apply(person2));
console.log(person.getFullName.call(person2));



// function currying -- using .bind
function multiply(a, b){
	return a * b;
}

var byTwo = multiply.bind(this, 2); // by passing in the 'this' keyword, were setting the refernce to this variable indefinetely -- passing the 2 means the first argument (a) will always be a 2
// doing it this way is essentially saying, give me a copy of the mutliply function with the 'this' variable set up and we also permanently set 2 as the first parameter

// line 70 is essentially saying this below:
function byTwo(b){
	var a = 2;
	return a * b;
}

console.log(byTwo(4)); // 8

var byThree = multiply.bind(this, 3);
console.log(byThree(4)); // 12


// Function currying -- creating a copy of a function but with some preset parameters -- very useful for mathematical situations
