// Finds the possible Lattice paths by imputting the dimensions.
let inputPathDimensions = (x, y) => {

	let surfaceArea = x + y;
	let d = function() {
		return (x > y) ? y : x
	}();

	let mul1 = [];
	let mul2 = [];

	for (let i = 0; i < d; i++) {
		mul1.push(surfaceArea - i);
		mul2.push(i + 1);
	}

	return mul1.product() / mul2.product();
};

console.log(inputPathDimensions(5, 3))
console.log(inputPathDimensions(20,20));

