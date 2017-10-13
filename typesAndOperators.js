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
