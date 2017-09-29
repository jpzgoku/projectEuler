const add = require('../tests/add');
const util = require('../tests/util');
const number = require('../tests/number');

let mulOf3And5 = function(n) {
    let answer = 0;
    for (let i = 1; i < n; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            answer += i;
        }
    }
    return answer;
};

console.log(mulOf3And5(1000));

console.log(add);
console.log(add(2, 5));

console.log(util);
console.log(util.intToArray(123456));

console.log(number);
console.log(Number.intToArray(123456));
