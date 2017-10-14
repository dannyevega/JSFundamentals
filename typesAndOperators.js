// DYNAMIC TYPING

/*
You dont tell JS what type of data a variable holds, it figures it out while your code is running. Variables can hold different types of values because its all figured out during execution

This is powerful but can also get you in trouble if you dont know what is happening
*/

var isNew = true;
isNew = 'yup';
isNew = 1;



// PRIMITIVE TYPES
/*
Type of data that represents a single value -- its not an object

UNDEFINED: represents lack of existence (you shouldnt explcitly set this)

NULL: represents lack of existence (you can set a variable to this)

leave the keyword undefined for the engine -- you can set a variable to null when you want to set it to nothing

BOOLEAN: true or false

NUMBER: floating point number (theres always some decimals attached to it) -- JS only has one number type. It can make math a little weird

STRING: a sequence of characters contained inside of single or double quotes

SYMBOL: used in ES6
*/



// OPERATORS
/*
A special function that is syntactically written differently -- they generally take two parameters and return one result

Pre-written code within JS inside of operators like addition (+) and subtraction (-)

Operators are functions

below code will execute because the addition is a function
*/

var a = 3 + 4;
console.log(a);



// OPERATIVE PRECEDENCE
/*
Which operator function gets called first -- functions are called in order of precedence (higher precedence wins)

Associativity: what order operator fucntion get called in: left to right or right to left when functions have the same precedence -- PDF attached to course
*/

var a = 3 + 4 * 5;
console.log(a);

/*
the ouput above will be 60 because multiplication has a higher precedence over addition
*/

var a = 2, b = 3, c = 4;
a = b = c;
console.log(a);
console.log(b);
console.log(c);

/*
associativity example above with assignment example of equals. The equal assignemnt associativity is right to left so the output will be 4 for all variables
*/

var a = (3 + 4) * 5;
console.log(a);

/*
output will be 35 because grouping has the highest precedence. Anything inside of parentheses will ALWAYS be executed first
*/



// COERCION
/*
Converting a value from one type to another type. This happens quite often in JS because it is a dynamically typed language
*/

var a = 'hello' + ' world';
console.log(a);

/*
code above will concatenate both strings into 'hello world'
*/

var a = 1 + '2'
console.log(a);

/*
code above will coerce number 1 into a string and output the string 12. JS makes its best guess decision to change the type for you so it will output the string 12
*/



// COMPARISON OPERATORS
console.log(1 < 2 < 3); // will return true

console.log(3 < 2 < 1); // will also return true, why?

/*
Both are less than operators so they have the same precedence. Which one gets ran first? Less than operators have a left to right associativity

In first example, 1 < 2 is ran first then 2 < 3 which are all true

In second example, 3 < 2 is ran first which returns false. So what were really comparing is false < 1. JS tries to coerce the type because they are two different types. Boolean coercion of false becomes a 0 which is less than 1 so the second example returns true

You can test what coercion will return using the Number function -- Number(false) --> 0

console.log(3 < 2 < 1)
console.log(false < 1)
console.log(0 < 1) --> returns true

console.log(1 < 2 < 3)
console.log(true < 3)
console.log(1 < 3) --> returns true
*/



// CHECKING IF TWO THINGS ARE EQUAL
// Equality
3 == 3 // true
3 == '3' // true because JS will coerce the types
false == 0 // true becase of coercion
null == 0 // false -- special cases with undefined and null -- although null coerces to 0
"" == 0 // true
"" == false // true

// there are unexpected coercion and this can be considered a downfall to JS. JS will always try to coerce different types

// Strict equality -- strictly compares the values and does not coerce the type
3 === 3 // true
"3" === "3" // true
"3" === 3 // false -- different types



// BOOLEANS
// all these types that imply the lack of existence convert to false -- we can use this to our advantage --? is something exists that is not any of the below types
Boolean(undefined) // false
Boolean(null) // false
Boolean("") // false

var a; // a initially set to undefined

// we can check if it exists
if(a){
	console.log("here");
}
// since a is set to undefined in memory, it will never log anything cause its undefined coerces to false

a = 0;
if(a){
	console.log("here");
}
// this still won't print because 0 is coerced to false so need to set another check in conditional to check for zeros
if(a || a ===0){
	console.log("now this will print")
}



// DEFAULT VALUES
/*
script tags dont get new execution contexts
Imagine you have 3 script tags:

<script src="lib1.js"></script>
<script src="lib2.js"></script>
<script src="app.js"></script>

and inside both lib1.js and lib2.js files, they have the same variable:

lib1.js
var libraryName = "Library 1";

lib2.js
var libraryName = "Library 2";

what happens if you console.log(libraryName) inside app.js?

well, the muliple script tags essentially just stack all of the code together and then running all of the JS as if it were inside a single file

the console will print Library 2 because both variables were treated as the same file attached to the global window and has global execution context -- so first, the first line of code is ran in the first file, then second file, then the console.log in app.js so the second var just replaced the value

this can be difficult or not ideal when dealing with frameworks -- what can we do?

window.libraryName = window.libraryName || "Library 2"

setting the object or set of fucntions that define the library or framework and doesnt bother to do anything if a name exists there
*/















