// Function Constructors, 'new' and the history of JavaScript

// different ways to construct objects -- utilizing features in JS that allows us to create new Objects
function Person(firstName, lastName){
	this.firstName = firstName;
	this.lastName = lastName;
}

var john = new Person("John", "Doe");

// when we run into the keyword new, an empty object is created then it invokes the Person function

// when the function is called, a new execution context is created with the variable 'this'

// the 'this' variables points to the empty object we created with the keyword new

// when we add firstName and lastName, were adding it to that empty object

// whatever we do inside the empty object using the 'this' variable will end up apart of that object and the Object is returned

// were creating an Object using a function -- function constructor

// putting the new keyword in fron of the function is important -- it sets the 'this' keyword to that empty object you called it on

// we pass parameters to tell our object what values to use to consrtuct the new object (firstName, lastName in this case)

// adding the property:
this.firstName

//setting the property
= firstName

// Function constructor --> a normal function that is used to construct objects - the 'this' variable points to a new empty object and that object is returned from the function automatically



// Function Constructors and Prototype

// function names can be anonymous, it also has a code property that can be invocable - code thats ran when executed, functions also have a prototype property that is ALWAYS created when you create a function -- it starts off as an empty object and unless youre using te fucntion as a function constructor, it just hangs out and is never used

// prototype is only used when using the fucntion as a function constructor -- when the keyword new is used to instantiate a new instance of a class

// prototype property on a function is NOT the prototype of the function -- its the prototype of any objects created if youre using the function as a function constructor

// when you call the new keyword, it creates an empty object -- it sets the prototype of that empty object to the prototype property of the fucntion you then call

// any objects you create using the new keyword, the object created not only has whatever properties and methods you attached to it inside the function but it has a prototype which is the .prototype property of that function itself

Person.prototype.getFullName = function(){
	return this.firstName + " " + this.lastName;
}

var john = new Person("John", "Doe");
var jane = new Person("Jane", "Doe");

// both the john and jane objects will get access to this getFullName method because Person is their prototype























