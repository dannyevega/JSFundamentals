var person = {
	firstName: 'Default',
	lastName: 'Default',
	greet: function(){
		return 'Hi ' + this.firstName;
	}
}

var john = Object.create(person);
console.log(john);