function intToArray(n) {
  var arr = [];
  var str = String(n);
  for (var i = 0; i < str.length; i++) {
    arr.push(Number(str.charAt(i)));
  }
  return arr;
};

function exponentiation(n, p) {
  var x = intToArray(n);
  for (var i = 1; i < p; i++) {
    x = arrayMultiplication(x);
  }
  console.log(x);
  return x;
};

function arrayMultiplication(arr) {
  var newArr = function() {
    var empty = [];
    for (var i = 0; i <= arr.length; i++) {
      empty.push(0);
    }
    return empty;
  };

  var product = newArr();
  for (var i = arr.length - 1; i >= 0; i--) {
    product[i + 1] = arr[i] * 2
  }

  for (var j = product.length - 1; j >= 0; j--) {
    if (product[j] >= 10) {
      product[j] = product[j] - 10;
      product[j - 1] = product[j - 1] + 1;
    }
  }

  for (var k = 0; k <= arr.length; k + 0) {
    if (product[k] === 0) {
      product.shift();
    } else {
      return product;
    }
  }
  return product;
};

function arraySum(array) {
	var sum = 0;
	for (var i = 0; i < array.length; i++) {
		sum = sum + array[i];
	}
	return sum;
};

console.log(arraySum(exponentiation(2, 1000)));
