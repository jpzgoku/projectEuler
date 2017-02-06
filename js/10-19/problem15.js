// Finds the possible Lattive paths by imputting the dimensions.
function inputPathDimensions(x, y) {
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

	let num1 = arrayProduct(mul1);
	let num2 = arrayProduct(mul2);

	return num1 / num2;
};

// Finds the product of an array.
function arrayProduct(arr) {
	let sum = 1;
	for (let i = 0; i < arr.length; i++) {
		sum = sum * arr[i];
	}
	return sum;
}

console.log(inputPathDimensions(5, 3))
console.log(inputPathDimensions(20,20));