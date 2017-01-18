//Failure. This version is even slower

function arraySum(array) {
	var sum = 0;
	for (var i = 0; i < array.length; i++) {
		sum = sum + array[i];
	}
	return sum;
};

var sieveOfEratosthenes = function(n) {

	var numbers = function() {
		arr = [];
		for (var i = 2; i <= n; i++) {
			arr.push(i);
		}
		return arr;
	};

	var pArray = numbers();

	for (var i = 0; i < Math.ceil(n / 2); i++) {
		if (removeMultiples(i)[1] === 0) {
			console.log(removeMultiples(i)[0]);
			return removeMultiples(i)[0];
		}
	}

	function removeMultiples(arrPosition) {
		var times = 0
		var j = pArray[arrPosition];
		for (var p = j + j; p <= n; p = p + j) {
			var index = pArray.indexOf(p);
			if (index >= 0) {
				times++
				pArray.splice(index, 1);
			}
		}
		return [pArray, times];
	};
};

console.log(arraySum(sieveOfEratosthenes(2000000)));



