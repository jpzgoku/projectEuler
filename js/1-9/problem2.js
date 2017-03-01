let fibonacci = (n) => (n === 0 || n === 1) ? 1 : (fibonacci(n-1) + fibonacci(n-2));

function findSum(max) {
	var answer = 0;
	for (var i = 0; fibonacci(i) <= max; i++) {
		console.log("The fibonacci of " + i + " is " + fibonacci(i));
		if (fibonacci(i) % 2 === 0) {
			answer = answer + fibonacci(i);
		}
	}
	console.log(answer);
	return answer;
};

findSum(4000000);
