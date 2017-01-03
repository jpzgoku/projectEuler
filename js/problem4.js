var palindromeNumbers = [];

function palindromic(n) {
	if (n === reverseNum(n)) {
		return true;
	}
	return false;
};

function reverseNum(n) {
	var numArray = [];
	var word = String(n);
	for (var i = word.length - 1; i >= 0; i--) {
		numArray.push(word.charAt(i));
	}
	return Number(numArray.join(''));
};

function feedNumbers(start, end) {
	for (var i = start; i < end; i++) {
		var first = i;
		for (var j = start; j < end; j++) {
			var second = j
			var answer = i * j;
			if (palindromic(answer)) {
				palindromeNumbers.push(i * j);
			}	
		}
	}
	return largestPalNum();
};

function largestPalNum() {
	var largest = 0;
	for (var i = 0; i < palindromeNumbers.length; i++) {
		if (palindromeNumbers[i] > largest) {
			largest = palindromeNumbers[i];
		}
	}
	console.log(largest);
	return largest;
};

feedNumbers(100, 1000);