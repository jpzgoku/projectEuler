/*JavaScript did it wrong! I used the same code in Python and
got the correct answer. I'm guessing the problem is that the
numbers get to big for javaScript which made problems for
the sort and remove duplicates functions*/

function distinctPowers(aMax, bMax) {
  let arr = [];
  for (let a = 2; a <= aMax; a++) {
    for (let b = 2; b <= aMax; b++) {
      arr.push(Math.pow(a,b));
    }
  }
  return arr;
};

// Sorts an array into alphabetical or numberical order.
function sort(arr) {
  var x = function(arr) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        var a = arr[i];
        var b = arr[i + 1];
        arr[i] = b;
        arr[i + 1] = a;
      }
    }
    return arr;
  };

  for (var j = 0; j < arr.length; j++) {
    x(arr);
  }
  return arr;
};

// Removes duplicates from an array.
function removeDuplicates(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      arr.splice(i, 1);
    }
  }
  return arr;
}

console.log(removeDuplicates(sort(distinctPowers(5,5))));
console.log(removeDuplicates(sort(distinctPowers(100, 100))));
