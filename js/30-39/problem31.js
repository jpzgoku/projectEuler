const util = require('../util');

function coinSums() {
  let arr = [];
  for (let twoHundred = 0; twoHundred <= 1; twoHundred++) {
    for (let oneHundred = 0; oneHundred <= 2; oneHundred++) {
      for (let fifty = 0; fifty <= 4; fifty++) {
        for (let twenty = 0; twenty <= 10; twenty++) {
          for (let ten = 0; ten <= 20; ten++) {
            for (let five = 0; five <= 40; five++) {
              for (let two = 0; two <= 100; two++) {
                for (let one = 0; one <= 200; one++) {
                  if ((twoHundred * 200) + (oneHundred * 100) + (fifty * 50) + (twenty * 20) + (ten * 10) + (five * 5) + (two * 2) + (one * 1) > 200) {
                    break;
                  }
                  if ((twoHundred * 200) + (oneHundred * 100) + (fifty * 50) + (twenty * 20) + (ten * 10) + (five * 5) + (two * 2) + (one * 1) === 200) {
                    arr.push([twoHundred + ' x 200', oneHundred + ' x 100', fifty + ' x 50', twenty + ' x 20', ten + ' x 10', five + ' x 5', two + ' x 2', one + ' x 1']);
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  return arr.length;
};

util.timeFunc(coinSums);
