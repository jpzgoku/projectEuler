function mulOf3And5(endNum) {
	let nums = [];
	for (let i = 1; i < endNum; i++) {
		if (i % 3 === 0 || i % 5 === 0) {
			nums.push(i)
		}
	}
	return nums;
};

function arraySum(array) {
	return array.reduce((prev, current) => prev + current);
};

console.log(arraySum(mulOf3And5(1000)));
