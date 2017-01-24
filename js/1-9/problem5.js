function smallestMultiple(digit) {
	for (var i = 1; i < Infinity ; i++) {
		if (isDivisable(i, digit)) {
			console.log(i);
			return i;
		}
	}
};

function isDivisable(num1, digit) {
	for (var i = 1; i <= digit; i++) {
		if (num1 % i != 0) {
			return false;
		}
	}
	return true;
};

smallestMultiple(20);