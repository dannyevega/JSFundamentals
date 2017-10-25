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
console.log(john.getFullName());
console.log(john.firstName); // will log John, not Default because the JS engine finds the first firstName property it can find and it found it on the john Object, it didnt need to go up the chain

var jane = {
	firstName: "Jane"
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
	if(john.hasOwnProperty(prop)){
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

console.log(john);



































