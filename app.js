var objectLiteral = {
	firstName: "Juan",
	isAProgrammer: true
}

console.log(JSON.stringify(objectLiteral));

var jsonValue = JSON.parse('{ "firstName": "Juan", "isAProgrammer": true }');

console.log(jsonValue);