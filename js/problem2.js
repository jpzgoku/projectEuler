function fibonacci(n) {
	if (n === 0 || n === 1) {
		return 1;
	} else {
		return (fibonacci(n-1) + fibonacci(n-2));
	}
}
var answer = 0
for (var i = 0; fibonacci(i) < 4000001; i++) {
	console.log("The fibonacci of " + i + " is " + fibonacci(i));
	if (fibonacci(i) % 2 === 0) {
		answer = answer + fibonacci(i);
	}
	console.log(answer);
}

