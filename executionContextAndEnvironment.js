/*
What is lexical Environment?
Where something sits physically in the code you write
lexical --> having to do with words or grammar. A lexical environment exists in programming lagnuages in which where you write something is VERY important. Where its writtend and what surrounds it
*/


/*
What is the Execution Context?
A wrapper to help manage the code that is running.
There are lots of lexical environments. Which one is currently running is managed via Execution conctexts. It can contain things beyond what you've written in yout code.
*/


/*
Name/Value pairs
A name which maps to a unique value
The name may be defined more than once but only can have one value in any given context
That value may be more name/value pairs

An Object is a collection of name/value pairs
*/


/*
The Global Environment and The Global Object

JS runs all code within an execution context
Base execution context within a JS program is the global context -- things that are accessible to you anywhere in your code

Global execution context creates two things for you: Global Object and the 'this' keyword

When a JS file is parsed containing no code, JS still creates a Global Object which is the window and a variable called 'this'
At the Global level, these two things are equal
'this' refers to the window Object OR you can just say window

Global --> code not inside of a function

In JS, when you create variables and functions and you're not inside a function, those variables and functions get attached to the Global Object

When code is executed, an execution context is created. At the base level when not inside a function, you have a Global Object that the JS engine creates for you as a part of the execution context. If youre running code inside of a browser, this object is the Global Window Object. You also get the variable called 'this'. At the base level, the 'this' keyword is the same as the window object

Outer Environment --> when you're running code inside of a function, this means the code outside of the function but when running at the Global level, this means null -- theres nothing outside of the Global window object

Finally, JS execution context runs your code. Variables and functions are going to sit on the Global Object

Execution Context runs all these things for you in this order: Global Object --> 'this' --> Outer Environment --> Your Code
*/

var a = "Hello World!";

function b(){

}