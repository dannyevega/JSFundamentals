// First class functions (behave as objects, pass as parameters, return from functions) -- were able to implement functional programming

// this is too much code to do something so simple
var arr1 = [1,2,3];
console.log(arr1); // [1,2,3]

var arr2 = [];
for(var i = 0; i < arr1.length; i++){
	arr2.push(arr1[i] * 2);
}
console.log(arr2); // [2,4,6]

// use functional programming
function mapForEach(arr, fn){
	var result = [];
	for(var i = 0; i < arr.length; i++){
		result.push(
			fn(arr[i]);
		);
	}
	return result;
}

var multiplyByTwo = mapForEach(arr1, function(item){
	return item * 2;
});

console.log(multiplyByTwo); // [2,4,6]

// this does the same thing as the for loop above -- this looks much cleaner --> we took the for loop and segmented it off into its own function (mapForEach) -- then when we told it what to do against each item in the array (multiplyByTwo)

// We called a function (mapForEach) passed it an array (arr1) and told what to do with each item in the array (function(item){ return item * 2 })

var greaterThan2 = mapForEach(arr1, function(item){
	return item > 2;
});
console.log(greaterThan2); // [false, false, true];

// With functional programming, were able to reuse the mapForEach function to do entirely differnt work to each item in the array by passing the function -- passing the work we want to get done against it

// segment our code and lets us build cleaner code to make it easier to understand



// We created a function expression on the fly (checkPastLimit) that accepts a limiter and an item that gives us back a boolean
// We then call mapForEach and we pass the array we want to loop over
// We pass a function and make a copy of it using .bind ('this' keyword is needed to call .bind but in this case, it doesnt matter because were not telling it what Object to refer to, just need it to run properly) and we set the first parameter to a 1 (limiter set to 1)
// When the mapForEach calls the function and passes the array, that array item will get passed into the item argument inside the checkPastLimit function expression because the limiter is already a 1
var checkPastLimit = function(limiter, item){
	return item > limiter;
}

var greaterThan1 = mapForEach(arr1, checkPastLimit.bind(this, 1));
console.log(greaterThan1);

// Here we creat a fucntion that accepts a limit as an argument
// the checkPastLimitSimplified fucntion itself returns a function that well actually use
// Then we use .bind to preset the limiter
// all were doing is creating an function Object and were using .bind to preset its first parameter
var checkPastLimitSimplified = function(limit){
	return function(limiter, item){
		return item > limiter;
	}.bind(this, limit);
}

// Were invoking checkPastLimitSimplified with the limit preset to 3 in this case (or whatever we pass to it) and this function returns a function Object with the limit preset
// The returned function Object is what gets passed to the mapForEach function with the preset limit
var newArr = mapForEach(arr1, checkPastLimitSimplified(3));
console.log(newArr);

// My Examples:
function forEach(arr, fn){
	var result = [];
	for(var i = 0; i < arr.length; i++){
		result.push(
			fn(arr[i])
		);
	}
	return result;
}

var nums = [1,2,3,4,5];

var isEven = forEach(nums, function(item){
	return item % 2 === 0;
});

console.log(isEven);

var multiplyBy = function(num, item){
	return item * num;
}

var multiplyBy3 = forEach(nums, multiplyBy.bind(this, 3));
console.log(multiplyBy3);

var boundMultiplyBy = function(numToTimes){
	return function(num, item){
		return item * num;
	}.bind(this, numToTimes);
}

var multiplyBy5 = forEach(nums, boundMultiplyBy(5));
console.log(multiplyBy5);