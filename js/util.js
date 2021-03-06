module.exports = {

    // util.timeFunc(func, [arg1, arg2, arg3]);
    // No arguments: util.timeFunc(func);
    timeFunc(callback, args) {
        var ø = Object.create(null);
        var start = new Date();
        console.log(callback.apply(ø, args));
        var end = new Date();
        console.log((end - start) / 1000, 'seconds');
    },

    // Sieve of eratoshenes
    primes(n) {
    	var answer = [];
    	var sieve = function() {
    		var arr = [];
    		for (let i = 0; i < n; i++) {
    			arr.push(true);
    		}
    		return arr;
    	}();
    	for (let p = 2; p <= n; p++) {
    		if (sieve[p]) {
    			answer.push(p)
    			for (let j = p * p; j <= n + 1; j += p) {
    				sieve[j] = false;
    			}
    		}
    	}
    	return answer;
    },

    capitalLetterToInt(char) {
        return char.charCodeAt(0) - 64;
    }
};
