let pentagonal = (max) => {
  
  let p = (n) => (n * ((3 * n) -1)) / 2

  let answer = [];
  for (let i = 1; i <= max; i++) {
    answer.push(p(i));
  }
  return answer;
};

function problem44(max) {
  let p = pentagonal(max);
  for (let i of p) {
    for (let j = p.indexOf(i); j < p.length; j++) {
      if (p.indexOf(i + p[j]) >= 0) {
        let a = [p[j], i];
        if (p.indexOf(a[0] - a[1]) >= 0) {
          return a[0] - a[1]
        }
      }
    }
  }
  return false;
};


console.log(problem44(2500))
