let distinctPowers = function(aMax, bMax) {
  let answer = [];
  for (let a = 2; a <= aMax; a++) {
    for (let b = 2; b <= aMax; b++) {
      answer.push(Math.pow(a, b));
    }
  }
  return answer;
};

  // Wrong. THis function isn't working for some reason.
// Removes duplicates from an array.
let removeDuplicates = function(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      arr.splice(i, 1);
      i--;
    }
  }
  return arr;
};


console.log(removeDuplicates(distinctPowers(5,5).sortSmall()));
console.log(removeDuplicates(distinctPowers(100, 100).sortSmall()));