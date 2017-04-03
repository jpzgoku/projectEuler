let fibonacci = (n) => (n === 0 || n === 1) ? 1 : (fibonacci(n-1) + fibonacci(n-2));

function findSum(max) {
	var answer = 0;
	for (var i = 0; fibonacci(i) <= max; i++) {
		console.log("The fibonacci of " + i + " is " + fibonacci(i));
		if (fibonacci(i) % 2 === 0) {
			answer = answer + fibonacci(i);
		}
	}
	return answer;
};

console.log(findSum(4000000));

function arraySum(array) {
	return array.reduce((prev, current) => prev + current);
};

function evenFibonacciNumbers(max) {
	let nums = [];
	let f = n => (n === 0 || n === 1) ? 1 : (f(n-1) + f(n-2));

	for (let i = 0; f(i) <= max; i++) {
		if (f(i) % 2 === 0) {
			nums.push(f(i));
		}
	}
	return nums
};

console.log(arraySum(evenFibonacciNumbers(4000000)));
