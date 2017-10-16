// What happens when the code of a function is ran

// When a function is invoked, a new execution context is created (creation phase) -- Vairable environemnt, 'this', and Outer Environment

console.log(this) // this is global so it will point to the Window object

function a(){
	console.log(this);
	this.newVariable = "hello";
}
a(); // creates execution context -- keyword 'this' will be Window object if you're simply invoking the function
console.log(newVariable) // this will print because we just invoked a above so the 'this' keyword is attached to the global Window object and the the newVariable exists there -- this is strange because its attached to the global namespace

var b = function(){
	console.log(this);
}
b(); // creates execution context -- keyword 'this' will be Window object if you're simply invoking the function

// Whenever you create a function expression or declaration at this level (global) the 'this' keyword will alays be Window

var c = function(){
	name: 'The c Object',
	log: function(){
		console.log(this);
	}
}
c.log(); // keyword 'this' is now pointing to the functon expression c -- because log is a new function invocation, a new execution context is created and the JS engine decides what 'this' refers to -- in this case, function c

// In the case where the function is actually a method attached to an Object, the 'this' keyword becomes the Object that the function is sitting inside of which is c

// You can do this and change a property within an Object because a new function invocation occurred
var c = function(){
	name: 'The c Object',
	log: function(){
		this.name = "Updated name for c";
		console.log(this);
	}
}
c.log(); // after invoking this, the name property will now be Updated name for c

// Some people think this ia bug in JS because the language was written by people to make decisions
var c = function(){
	name: 'The c Object',
	log: function(){
		this.name = "Updated name for c";
		console.log(this); // will update name property as expected to Updated name for c

		var setName = function(newName){
			this.name = newName;
		}
		setName("Updated c again!"); // this is the weird bug in JS! the keyword 'this' will be added to the Global object although its technically sitting within the c Object -- can't do anything about it
		console.log(this); // this will be an unintended error
	}
}
c.log();

// Objects are set by reference -- we can udnerstand this pattern which is a common solution to resolve above bug
var c = function(){
	name: 'The c Object',
	log: function(){
		var self = this; // since were inside an Object, equals sign sets by reference so self will be pointing to the same location as the 'this' keyword -- in this case, its pointing to the c Object
		self.name = "Updated name for c";
		console.log(self);

		var setName = function(newName){
			self.name = newName; // self is not defined inside this function -- when invoked, it will look up the scope chain and try to find variable self -- it finds it inside the log funciton and its set to 'this' keyword which is pointing to the c Object
		}
		setName("Updated c again!"); // now when setName is invoked, it will update the name property on c because its pointing to the whole Object
		console.log(self);
	}
}



// ARGUMENTS
/*
In ant programming language, theyre the parameters you pass to a function -- JS gives us a keyword of the same name which contains them all
*/
function greet(firstName, lastName, language){
	console.log(firstName);
	console.log(lastName);
	console.log(language);
	console.log('------------------------');
}
greet(); // you can run this in JS and will not throw an error -- will just set all the variables set to undefined since we didnt pass any values
greet('Jane'); // JS is ok with this -- will set values from left to right so this will be passed to firstName, all other variables will remain undefined
greet('Jane', 'Doe'); // still ok with JS -- now only language will be undefined
greet('Jane', 'Doe', 'Spanish'); // now all variables are set

function greet(firstName, lastName, language){

	language = language || 'English'; // way to set up default parameters -- in ES6, you can just pass inside the parameter --> (firstName, lastName, language = "English")

	console.log(firstName);
	console.log(lastName);
	console.log(language);
	console.log(arguments); //native inside JS contains all values you have passed -- looks like an array but its not, its arrayLike -- acts like an array, looks like an array but it doesnt behave like one -- acts enough
	console.log('------------------------');
}
