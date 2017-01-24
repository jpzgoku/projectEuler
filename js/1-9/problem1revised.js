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
	var sum = 0;
	for (var i = 0; i < array.length; i++) {
		sum = sum + array[i];
	}
	return sum;
};

arraySum(mulOf3And5(1000));