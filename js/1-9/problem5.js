let smallestMultiple = n => {
	for (var i = 1; i < Infinity ; i++) {
		if (isDivisable(i, n)) {
			return i;
		}
	}
};

let isDivisable = (num1, n) => {
	for (var i = 1; i <= n; i++) {
		if (num1 % i != 0) {
			return false;
		}
	}
	return true;
};

console.log(smallestMultiple(20));


// Brute Force