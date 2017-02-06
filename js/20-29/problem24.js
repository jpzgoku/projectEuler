// WRONG
//https://www.quora.com/How-would-you-explain-an-algorithm-that-generates-permutations-using-lexicographic-ordering

let ex = [5,1,7,6,3,9,8,4,2];

let makeArray = (n) => {
  let arr = [];
  for (var i = 1; i <= n; i++) {
    arr.push(i);
  }
  return arr;
};

function swapPos(arr) {
  let x = function() {
    for (let i = arr.length - 1; i >= 0; i--) {
      if (arr[i] > arr[i - 1]) {
        return arr[i - 1];
      }
    }
    return arr.reverse()[0];
  }();
  //console.log("x: " + x);

  let xIndex = function() {
    var index = arr.indexOf(x);
    if (index >= 0) {
      return index;
    }
  }();
  //console.log("xIndex: " + xIndex);

  let y = function() {
    for (let i = arr.length - 1; i >= xIndex; i--) {
      if (arr[xIndex] > arr[i]) {
        return arr[i - 1];
      }
    }
    return arr[arr.length - 1];
  }();
  //console.log("y: " + y);

  let yIndex = function() {
    let index = arr.indexOf(y);
    if (index >= 0) {
      return index;
    }
  }();
  //console.log("yIndex: " + yIndex);


  arr[xIndex] = y
  arr[yIndex] = x

  let origionalArray = arr;

  var newArr = function() {
    let spl = xIndex + 1
    let firstHalf = arr.splice(0, spl);
    return firstHalf
  }();

  let v = newArr.concat(arr.reverse());
  console.log(v)
  return v
};

function doItALot(times, arr) {
  let answer = [];
  for (let i = 1; i < times; i++) {
    arr = swapPos(arr);
    answer.push(arr);
  }
  return answer;
}

console.log(doItALot(6,[0,1,2]));
//console.log(doItALot(90, [1, 2, 3, 4, 5, 6, 7, 8, 9]));
