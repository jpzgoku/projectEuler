var triangle =             [[75],
                          [95, 64],
                        [17, 47, 82],
                      [18, 35, 87, 10],
                    [20, 04, 82, 47, 65],
                  [19, 01, 23, 75, 03, 34],
                [88, 02, 77, 73, 07, 63, 67],
              [99, 65, 04, 28, 06, 16, 70, 92],
            [41, 41, 26, 56, 83, 40, 80, 70, 33],
          [41, 48, 72, 33, 47, 32, 37, 16, 94, 29],
        [53, 71, 44, 65, 25, 43, 91, 52, 97, 51, 14],
      [70, 11, 33, 28, 77, 73, 17, 78, 39, 68, 17, 57],
    [91, 71, 52, 38, 17, 14, 91, 43, 58, 50, 27, 29, 48],
  [63, 66, 04, 68, 89, 53, 67, 30, 73, 16, 69, 87, 40, 31],
[04, 62, 98, 27, 23, 09, 70, 98, 73, 93, 38, 53, 60, 04, 23]];

var small = [[3],
            [7, 4],
          [2, 4, 6],
        [8, 5, 9, 3]];

function maximumPathSum(arr) {
  var sum = arr[0][0];
  console.log(sum);
  var startingCol = 0;
  for (var row = 0; row < arr.length - 1; row++) {
    var a = leftMiddleSum(arr, row, startingCol);
    var b = rightMiddleSum(arr, row, startingCol);
    var c = leftColumnSum(arr, row, startingCol);
    var d = rightColumnSum(arr, row, startingCol)
    if (b >= a && b >= c && b >= d ||
        d >= a && d >= b && d >= c) {
      startingCol++;
    }
    console.log(arr[row + 1][startingCol]);
    sum = sum + arr[row + 1][startingCol];
  }
  console.log(sum);
  return sum;
};

function leftColumnSum(arr, row, startingCol) {
  var sum = 0;
  for (var i = row; i < arr.length; i++) {
    sum = sum + arr[i][startingCol];
    if (row + 1 < i) {
      return sum;
    }
  }
  return sum;
};

function rightColumnSum(arr, row, startingCol) {
  var col = startingCol;
  var sum = 0;
  for (var i = row; i < arr.length; i++) {
    sum = sum + arr[i][col];
    col++;
    if (row + 1 < i) {
      return sum;
    }
  }
  return sum;
};

function leftMiddleSum(arr, row, startingCol) {
  var sum = arr[row][startingCol];
  if (checkLength(arr, row + 1)) {
    sum = sum + arr[row + 1][startingCol];
  }
  if (checkLength(arr, row + 2)) {
    sum = sum + arr[row + 2][startingCol + 1];
  }
  return sum;
};

function rightMiddleSum(arr, row, startingCol) {
  var sum = arr[row][startingCol];
  if (checkLength(arr, row + 1)) {
    sum = sum + arr[row + 1][startingCol + 1];
  }
  if (checkLength(arr, row + 2)) {
    sum = sum + arr[row + 2][startingCol + 1];
  }
  return sum;
};

function checkLength(arr, row) {
  return (arr.length - 1 <= row) ? false : true
};

maximumPathSum(triangle);
