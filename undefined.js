var a;
console.log(a);

/*
the term 'undefined' is a special keyword that JS has internally that means that the variables hasn't been set
*/

// when you run the below code, the console will print 'a is undefined!' because it has not been set yet
if(a === undefined){
	console.log('a is undefined!');
} else {
	console.log('a is defined!');
}

// Now, set a value to variable a and it will print 'a is defined!'
a = "Hello";

if(a === undefined){
	console.log('a is undefined!');
} else {
	console.log('a is defined!');
}

// Now, if we completely remove the var keyword and try to console.log(a), the console will through an 'Uncaught ReferenceError' because it has no idea what 'a' is
console.log(a); // Uncaught ReferenceError: a is not defined

// undefined doesn't mean it does not exist or empty. It's actually a value and taking up memory space -- special keyword that means, this is the initial value set by JS

// NEVER DO THIS!
// The below is valid JS but its not good practice to explicitly set values to undefined -- It's better to let JS handle that and tells us that I, as in the programmer, never set that value
var a = "Hello World";
console.log(a);
a = undefined;

if(a === undefined){
	console.log('a is undefined!');
} else {
	console.log('a is defined!');
}

// will print "Hello World" from line 32
// will print "a is undefined!" from line 33

// Basically, undefined is the initial value set to all variables in the creation phase, the first phase of creating an exeuction context. -- sets up the memory of that variable and in that memory space puts the value called undefined