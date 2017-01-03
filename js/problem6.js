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

function findTheDifference(callback1, callback2) {
	return callback1 - callback2;
};

findTheDifference(squareOfTheSum(100), sumOfSquares(100));