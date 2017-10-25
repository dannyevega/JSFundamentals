// Focusing on the creation of Objects

// Inheritance --> one object gets access to the properties and methods of another object

// Classical inheritance --> whats currently best known and popular (known in C sharp, Java, etc) -- a way of sharing methods and properties of objects, the most popular way its been done for a long time -- very verbose

// Prototypal inheritance --> still a way of sharing methods and properties of objects but much simpler, flexible, extensible and easy to understand

// JS engine looks up the prototype chain for methods

// Lets say we have an Object called Obj and it has one method called prop1. We can access it using the dot operator -- Obj.prop1 -- we also know the JS engine adds properties and methods that are hidden to us that interact with every Objeect

// All Objects have a prototype property including functions -- a property is a refernce to another Object -- proto Object is an Objects prototype

// Lets say the proto property has a property called prop2 -- if we call Obj.prop2, the JS engine will look for the property on Obj and it wont find it so then it will look on the prototype and find it there -- prototypes can also have other prototype properties that themselves can have properties

// JS engine basically looks all the way down the prototype chain -- prototype chain shows us what we have access to a property or method amongst a sequence of Objects that are connected via the prototype property -- its hidden from us -- the JS engine searches the chain for us -- so if a property doesnt exist on Obj, it will look down the prototype chain until its found or throw an error

// special reference in Object that tells us where to look for other properties and methods but we dont have to manually search for it -- the JS engine looks for it down the chain

var person = {
	firstName: "Default",
	lastName: "Default",
	getFullName: function(){
		return this.firstName + " " + this.lastName;
	}
}

var john = {
	firstName: "John",
	lastName: "Doe"
}

// dont do this EVER! Only for demo purposes!!
john.__proto__ = person;
console.log(john.getFullName);
console.log(john.firstName); // will log John, not Default because the JS engine finds the first firstName property it can find and it found it on the john Object, it didnt need to go up the chain

var jane = {
	firstName: "Jane";
}

jane.__proto__ = person;
console.log(jane.getFullName()); // this will print Jane Default --> jane Object only has a firstName property so it will print her name, Jane -- the jane Object doesn't have a lastName property so it looks up the prototype chain which is person and finds it there



// EVERYTHING HAS A PROTOTYPE
var a = {};
var b = function(){ };
var c = [];



// Reflection -- an object has the ability to look at itself, listing and changing its properties and methods --> this becomes very useful when we implement extend

// Using john object from above -- this will print only the properties associated with john itself (firstName, lastName) and not anything from the prototype
for(var prop in john){
	if(john.hasOwnPropert(prop)){
		console.log(prop + ": " + john[prop]);
	}
}



// Using extend
var jane = {
	address: '111 Main St.',
	getFormalFullName: function(){
		return this.lastName + ', ' + this.lastName;
	}
}

var jim = {
	getFirstName: function(){
		return firstName;
	}
}

// we extend these methods and properties from other objects onto our john object
_.extend(john, jane, jim);











