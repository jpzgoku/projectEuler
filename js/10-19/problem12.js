const prototypes = require('../prototypes');

var highlyDivisibleTriangularNumber = function(numOfDivisors) {
	var previousNum = 0;
	for (let i = 1; i < Infinity; i++) {
		previousNum += i;
		if (Number.multiples(previousNum).length > numOfDivisors) {
			return previousNum;
		}
	}
};

console.log(highlyDivisibleTriangularNumber(500));
