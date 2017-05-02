/* Takes an integer and a power, changes all the digits to their 'p' power.
returns the sum. */
let digitPowers = function(n, p) {
  let arr = Number.intToArray(n);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = Math.pow(arr[i], p)
  }
  return arr.sum();
};

/* Returns an array of all the numbers that can be written as the sum
 of 'p' powers of their digits.*/
let allXDigitPowers = function(max, p) {
  let arr = [];
  for (let i = 2; i <= max; i++) {
    if (digitPowers(i, p) === i) {
      arr.push(i)
    }
  }
  return arr;
};

console.log(allXDigitPowers(1000000, 5).sum());
