let numberLetterCounts = function(n) {

  let numberToWord = n => {

    let singleDigit = n => {
      switch (n) {
        case 1:
          return 'one';
        case 2:
          return 'two';
        case 3:
          return 'three';
        case 4:
          return 'four';
        case 5:
          return 'five';
        case 6:
          return 'six';
        case 7:
          return 'seven';
        case 8:
          return 'eight';
        case 9:
          return 'nine';
      }
      return '';
    }

    let doubleDigit = arr => {
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
      } else if (arr[0] === 8) {
        return 'eighty' + singleDigit(arr[1]);
      } else if (arr[0] === 0) {
        return singleDigit(arr[1]);
      } else {
        return singleDigit(arr[0]) + 'ty' + singleDigit(arr[1]);
      }
    };

    let teens = n => {
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


    let numArray = function() {
      let arr = [];
      let str = String(n);
      for (let i = 0; i < str.length; i++) {
        arr.push(Number(str.charAt(i)));
      }
      return arr;
    }();

    let words = '';
    let test2 = (arr) => {
      if (arr.length === 1) {
        words += singleDigit(arr[0]);
      } else if (arr.length === 2) {
        words += doubleDigit(arr);
      } else if (arr.length === 3) {
        words += singleDigit(arr[0]) + 'hundred';
        if (arr[1] === 0 && arr[2] === 0) {
          return words;
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

  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += numberToWord(i).length
  }
  return sum;
};

console.log(numberLetterCounts(1000));