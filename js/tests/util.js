module.exports = {

    intToArray(n) {
    	let answer = [];
    	let str = String(n);
    	for (let i = 0; i < str.length; i++) {
    		answer.push(Number(str.charAt(i)));
    	}
    	return answer;
    },

    // Returns an array of all the multiples of 'n' including 'n'.
    multiples(n) {
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
    },

    // Returns an array of all the proper divisors of 'n'.
    divisors(n) {
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
    }

}
