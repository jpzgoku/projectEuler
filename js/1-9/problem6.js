const prototypes = require('../prototypes');

let sumOfSquares = function(max) {
	var sum = 0;
	for (let i = 1; i <= max; i++) {
		sum += Math.pow(i, 2);
	}
	return sum;
};

let squareOfTheSum = function(max) {
	var sum = 0;
	for (let i = 1; i <= max; i++) {
		sum += i;
	}
	return Math.pow(sum, 2);
};

// Finds the difference between a and b
let difference = function(a, b) {
	return (a > b) ? a - b : b - a;
};

console.log(difference(squareOfTheSum(100), sumOfSquares(100)));
console.log(difference(sumOfSquares(100), squareOfTheSum(100)));
