function numberLetterCounts(n) {
  var sum = 0;
  for (var i = 1; i <= n; i++) {
    sum += numberToWord(i).length
  }
  return sum;
};

function numberToWord(n) {
  var numArray = function() {
    var arr = [];
    var str = String(n);
    for (var i = 0; i < str.length; i++) {
      arr.push(Number(str.charAt(i)));
    }
    return arr;
  }();

  var words = '';
  var test2 = (arr) => {
    if (arr.length === 1) {
      words += singleDigit(arr[0]);
    } else if (arr.length === 2) {
      words += doubleDigit(arr);
    } else if (arr.length === 3) {
      words += singleDigit(arr[0]) + 'hundred';
      if (arr[1] === 0 && arr[2] === 0) {
        return words
      }
      words += 'and';
      numArray.shift();
      return test2(numArray);
    } else if (arr.length === 4) {
      words += singleDigit(arr[0]) + 'thousand';
      return words;
    }
  };

  test2(numArray);
  return words;
};

function singleDigit(n) {
  if (n === 1) {
    return 'one';
  } else if (n === 2) {
    return 'two';
  } else if (n === 3) {
    return 'three';
  } else if (n === 4) {
    return 'four';
  } else if (n === 5) {
    return 'five';
  } else if (n === 6) {
    return 'six';
  } else if (n === 7) {
    return 'seven';
  } else if (n === 8) {
    return 'eight';
  } else if (n === 9) {
    return 'nine';
  } else {
    return '';
  }
};

function doubleDigit(arr) {
  if (arr[0] === 1) {
    return teens(arr[1]);
  } else if (arr[0] === 2) {
    return 'twenty' + singleDigit(arr[1]);
  } else if (arr[0] === 3) {
    return 'thirty' + singleDigit(arr[1]);
  } else if (arr[0] === 4) {
    return 'forty' + singleDigit(arr[1]);
  } else if (arr[0] === 5) {
    return 'fifty' + singleDigit(arr[1]);
  } else if (arr[0] === 6) {
    return 'sixty' + singleDigit(arr[1]);
  } else if (arr[0] === 7) {
    return 'seventy' + singleDigit(arr[1]);
  } else if (arr[0] === 8) {
    return 'eighty' + singleDigit(arr[1]);
  } else if (arr[0] === 9) {
    return 'ninety' + singleDigit(arr[1]);
  } else if (arr[0] === 0) {
    return singleDigit(arr[1]);
  }
};

function teens(n) {
  if (n === 0) {
    return 'ten';
  } else if (n === 1) {
    return 'eleven';
  } else if (n === 2) {
    return 'twelve';
  } else if (n === 3) {
    return 'thirteen';
  } else if (n === 5) {
    return 'fifteen';
  } else if (n === 8) {
    return 'eighteen';
  } else {
    return singleDigit(n) + 'teen';
  }
};

console.log(numberLetterCounts(1000));
