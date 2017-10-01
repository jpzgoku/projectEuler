const prototypes = require('../prototypes');

var spirialDiagonalSum = function(n) {
    var answer = [];
    var position = 1;
    var increment = 2;
    var sidesOfCircle = 4;
    var timesAroundSquare = 0;

    for (let i = 1; i <= Math.pow(n, 2); i++) {
        if (i === position) {
            answer.push(i);
            position += increment;
            if (position !== 1) {
                timesAroundSquare++;
            }
            if (timesAroundSquare === sidesOfCircle) {
                timesAroundSquare = 0;
                increment += 2;
            }
        }
    }
    return answer.sum();
}

console.log(spirialDiagonalSum(1001));
