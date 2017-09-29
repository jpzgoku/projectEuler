'use strict';
const prototypes = require('../prototypes');

// Finds the possible Lattice paths by imputting the dimensions.
var inputPathDimensions = function(x, y) {

	var surfaceArea = x + y;
	var d = function() {
		return (x > y) ? y : x
	}();

	var mul1 = [];
	var mul2 = [];

	for (let i = 0; i < d; i++) {
		mul1.push(surfaceArea - i);
		mul2.push(i + 1);
	}

	return mul1.product() / mul2.product();
};

console.log(inputPathDimensions(5, 3))
console.log(inputPathDimensions(20,20));
