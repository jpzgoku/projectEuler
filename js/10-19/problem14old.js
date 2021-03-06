var collatz = function(n) {
  var arr = [];
  var findMultiples = function(n) {
    arr.push(n);
    if (n === 1) {
      return arr
    } else if (n % 2 === 0) {
      var x = n/2
      return findMultiples(x);
    } else {
      var x = (n * 3) + 1;
      return findMultiples(x);
    }
  };

  return findMultiples(n);
};

function longestSequence(max) {
  var answer = [];
  for (var i = 1; i <= max; i++) {
    var x = collatz(i);
    if (x.length > answer.length) {
      answer = x;
    }
  }
  return [answer[0], answer];
};

console.log(longestSequence(1000000));
