const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41,
        43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

function binarySearch(arr, value) {
  let min = 0;
  let max = arr.length
  let turns = 0;
  while (true) {
    let guess = Math.floor((min + max) / 2);
    turns++;
    if (value === arr[guess]) {
      return [value, turns];
    }
    if (max < min) {
      return false;
    }
    if (arr[guess] > value) {
      max = guess - 1;
    }
    if (arr[guess] < value) {
      min = guess + 1
    }
  }
}

console.log(binarySearch(primes, 96))
