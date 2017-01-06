function reverseNum(n) {
	var numArray = [];
	var word = String(n);
	for (var i = word.length - 1; i >= 0; i--) {
		numArray.push(word.charAt(i));
	}
	return Number(numArray.join(''));
};

var palindrome = function(start, end) {
	var array = []
	for (var i = start; i < end; i++) {
		for (var j = start; j < end; j++) {
			var product = i * j
			if (product === reverseNum(product)) {
				array.push(product);
			}	
		}
	}
	return array;
};

function max(array) {
	var reverseArray = array.sort(function(a, b){return b-a});
	console.log(reverseArray[0]);
	return reverseArray[0];
};

max(palindrome(100, 1000));