// Finds all abundant numbers up to 'max'
function abundantNumbers(max) {
  var abundant = [];
  for (var i = 1; i <= max; i++) {
     if (Number.divisors(i).sum() > i) {
      abundant.push(i);
    }
  }
  return abundant;
};

// Finds the possible sums of all the numbers in an array up to 'max'.
function possibleSums(arr, max) {
  var sums = [];
  for (var i = 0; i < arr.length; i++) {
    var num1 = arr[i];
    for (var j = i; j < arr.length; j++) {
      if (num1 + arr[j] >= max) {
        continue;
      }
      sums.push(num1 + arr[j]);

    }
  }
  return sums;
};

/* Finds all positive integers which cannot be written
 as the sum of two abundant numbers, up to 'max'. */
function nonAbundantSums(arr, max) {
  var numbers = function() {
    var empty = [];
    for (var i = 1; i < max; i++) {
      empty.push(i);
    }
    return empty;
  }();

  for (var i = 0; i < arr.length; i++) {
    var index = numbers.indexOf(arr[i]);
    if (index >= 0) {
      numbers.splice(index, 1);
    }
  }
  return numbers;
};

console.log(nonAbundantSums(possibleSums(abundantNumbers(28123), 28123), 28123).sum());
