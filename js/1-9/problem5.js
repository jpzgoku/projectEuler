const prototypes = require('../prototypes');

let smallestMultiple = function(n) {
	for (let i = 1; i < Infinity; i++) {
		if (isDivisable(i, n)) {
			return i;
		}
	}
};

let isDivisable = function(num1, n) {
	for (let i = 1; i <= n; i++) {
		if (num1 % i != 0) {
			return false;
		}
	}
	return true;
};

console.log(smallestMultiple(20));


// Brute Force
