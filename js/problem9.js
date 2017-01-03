function isPythagoreanTriplet(a, b, c) {
	if (Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2)) {
		return true;
	}
	return false;
};

function findCorrectSum(a, b, c, sum) {
	if (a + b + c === sum) {
		return true;
	}
	return false;
};

function findPythogoreanTriplet(sum) {
	for (var c = 3; c < sum ; c++) {
		for (var b = 2; b < c; b++) {
			for (var a = 1; a < b; a++) {
				if (isPythagoreanTriplet(a, b, c)) {
					if (findCorrectSum(a , b , c, sum)) {
						console.log(a * b * c);
					}
				}
			}
		}
	}
}

findPythogoreanTriplet(1000);