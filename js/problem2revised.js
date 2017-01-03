function fibonacci(n) {
	if (n === 0 || n === 1) {
		return 1;
	}
	return (fibonacci(n-1) + fibonacci(n-2));
};

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

findSum(4000000);