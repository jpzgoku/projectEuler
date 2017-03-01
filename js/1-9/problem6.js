function sumOfSquares(max) {
	var sum = 0;
	for (var i = 1; i <= max; i++) {
		sum = sum + Math.pow(i, 2);
	}
	return sum;
};

function squareOfTheSum(max) {
	var sum = 0;
	for (var i = 1; i <= max; i++) {
		sum = sum + i;
	}
	return Math.pow(sum, 2);
};

// Finds the difference between a and b
let difference = (a, b) => (a > b) ? a - b : b - a

console.log(difference(squareOfTheSum(100), sumOfSquares(100)));
console.log(difference(sumOfSquares(100), squareOfTheSum(100)));
