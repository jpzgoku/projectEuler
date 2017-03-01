function mulOf3And5(endNum) {
	var nums = [];
	for (var i = 1; i < endNum; i++) {
		if (i % 3 === 0 || i % 5 === 0) {
			nums.push(i)
		}
	}
	return nums;
};

function arraySum(array) {
	let sum = 0;
	for (i in array) {
		sum = sum + array[i];
	}
	return sum
};

console.log(arraySum(mulOf3And5(1000)));
