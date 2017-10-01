const prototypes = require('../prototypes');

var binary = function(dec) {
    return (dec >>> 0).toString(2);
};

var reverseNum = function(n) {
    return parseInt(n.toString().split('').reverse().join(''));
};

var doubleBasePalindromes = function(max) {
    var answer = [];
    for (let i = 0; i < max; i++) {
        if (i === reverseNum(i) && parseInt(binary(i)) === reverseNum(binary(i))) {
            answer.push(i);
        }
    }
    return answer.sum();
};

console.log(doubleBasePalindromes(1000000));
