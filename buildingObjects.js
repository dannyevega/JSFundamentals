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
jane.getFullName();
// we can add features to all those objects we created from a function constructor using the prototype



// 'new' and functions

// if you forget to put the keyoword new, JS engine will still execute the function! this is a problem

// JS will run the bewow code as normal but since we didnt use the keyword new, it doesnt return the object, it returns undefined -- so our john and jane variables are set to udnefined -- if we try to use the methods below, well get an error because you cant call a fucntion on undefined
var john = Person("John", "Doe");
var jane = Person("Jane", "Doe");

john.getFullName(); // Uncaught TypeError: Cannot read property 'getFullName' of undefined
jane.getFullName(); // Uncaught TypeError: Cannot read property 'getFullName' of undefined

// just make sure to ahere to conventional rules
// function constructors always begin with a capital letter so make sure to use new keywrod when creating objects
// KEY TAKEAWAY: make sure you include new keyword!



// BUILT-IN FUNCTION CONSTRUCTORS

// when using function constructors, we have to remember were creating objects
var a = new String("Danny");

var b = new Number(3);

var c = new Date("10/27/17");

// so when you do the following, JS is actually converting or boxing in the primtive value into the object that has those methods on its prototypes

a.indexOf("a"); // not actually on the primtive string "Danny" but becuase it was created with the new keyword, it has access to all of Strings methods -- similarly, JS will convert this "Danny".indexOf("a") to allow you to use those methods since it knows you want to access those properties

// primitive stings will be converted to String objects generated by the String fucntion constructor that will allow you to use all of theString methods and properties

// not a number, its an object that wraps up the number and gives it a bunch of features -- you shouldnt do this anyway
var a = new Number(3);

// its dangerous to use built in native fucntion constructors for primtives



// Object.creste and Pure Prototypical Inheritance
var person = {
	firstName: 'Default',
	lastName: 'Default',
	greet: function(){
		return 'Hi ' + this.firstName;
	}
}

var john = Object.creat(person);
console.log(john);

// Object.create makes an empty object with its prototype pointing to whatever object you passed in

// you can set values just like normal that will overwrite the 'Defualt' property values but they will still be available in the objects prototype -- this is pure prototypal inheritance
// basically overwriting properties and makes reading code easier
john.firstName = "Ron";
john.lastName = "Doe";

// Polyfill: code that adds a feature which the engine may lack -- older and newer internet browsers have different JS engines -- we can have some code that checks if a browser has some features and if it doesnt, we write some code that takes the place of what that feature would do in newer browsers -- filling in the gaps


















