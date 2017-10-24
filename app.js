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