module.exports = function() {

    Function.prototype.method = function(name, func) {
    	this.prototype[name] = func;
    	return this;
    };

    Array.method('sortSmall', function() {
    	return this.sort( (a, b) => a - b);
    });

    Array.method('sortBig', function() {
    	return this.sort( (a, b) => b - a);
    });

    Array.method('max', function() {
    	return Math.max(...this);
    });

    Array.method('evens', function() {
    	let answer = [];
    	for (let i in this) {
    		if (this[i] % 2 === 0) {
    			answer.push(this[i]);
    		}
    	}
    	return answer;
    });

    Array.method('sum', function() {
    	if (this.length === 0) {
    		return 0;
    	}
    	return this.reduce((prev, current) => prev + current);
    });

    Array.method('product', function() {
    	let sum = 1;
    	for (var i = 0; i < this.length; i++) {
    		sum = sum * this[i];
    	}
    	return sum;
    });

    Number.intToArray = function(n) {
    	let answer = [];
    	let str = String(n);
    	for (let i = 0; i < str.length; i++) {
    		answer.push(Number(str.charAt(i)));
    	}
    	return answer;
    };

    // Returns an array of all the multiples of 'n' including 'n'.
    Number.multiples = function(n) {
    	let answer = [];
    	let max = n;
    	for (let i = 1; i < max; i++) {
    		if (n % i === 0) {
    			max = n / i;
    			answer.push(i);
    			if (max === i) {
    				break
    			}
    			answer.push(max);
    		}
    	}
    	return answer;
    };

    // Returns an array of all the proper divisors of 'n'.
    Number.divisors = function(n) {
    	let arr = [];
    	let max = n;
    	for (let i = 1; i < max; i++) {
    		if (n % i === 0) {
    			max = n / i;
    			arr.push(i);
    			if (max === i) {
    				break;
    			}
    			arr.push(max);
    		}
    	}
    	arr.splice(1, 1);
    	return arr;
    };

}();
