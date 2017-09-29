const prototypes = require('../prototypes');

var mulOf3And5 = function(n) {
    var answer = 0;
    for (let i = 1; i < n; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            answer += i;
        }
    }
    return answer;
};

console.log(mulOf3And5(1000));
