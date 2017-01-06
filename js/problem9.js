var findPythogoreanTriplet = function(sum) {
	var pythagoreanTriplets = [];
	for (var c = 3; c < sum ; c++) {
		for (var b = 2; b < c; b++) {
			for (var a = 1; a < b; a++) {
				if (isPythagoreanTriplet(a, b, c) && findCorrectSum(a , b , c, sum)) {
					pythagoreanTriplets.push([a, b, c]);
				}
			}
		}
	}
	console.log(pythagoreanTriplets);
	return pythagoreanTriplets;

	function isPythagoreanTriplet(a, b, c) {
		return (Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2)) ? true : false
	};

	function findCorrectSum(a, b, c, sum) {
		return (a + b + c === sum) ? true : false
	};
};

function allProducts(array) {
	array.forEach(function(element) {
		console.log(element[0] * element[1] * element[2]);
		return element[0] * element[1] * element[2];
	});
};

allProducts(findPythogoreanTriplet(1000));