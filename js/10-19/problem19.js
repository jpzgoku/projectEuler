var daysOfTheWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
var months = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'August', 'Sept', 'Oct', 'Nov', 'Dec'];

function countingSundays(startYear, endYear, startDay) {
  var x = startDay;
  var answer = [];
  var numOfDays;
  for (var year = startYear; year <= endYear; year++ ) {
    //console.log(year);
    for (var i = 0; i < months.length; i++) {
      //console.log(months[i]);
      if (months[i] === 'April' || months[i] === 'June' ||
          months[i] === 'Sept' || months[i] === 'Nov') {
            numOfDays = 30;
      } else if (months[i] === 'Feb') {
        if (year % 4 === 0 && year !== 1900) {
          numOfDays = 29;
        } else {
          numOfDays = 28;
        }
      } else {
        numOfDays = 31;
      }
      for (var day = 1; day <= numOfDays; day++) {
        var date = [daysOfTheWeek[x], months[i], day, year]
        //console.log(date);
        if (date[0] === 'Sunday' && date[2] === 1) {
          answer.push(date);
        }
        x++;
        if (x === 7) {
          x -= 7;
        }
      }
    }
  }
  console.log(answer);
  console.log(answer.length);
  return answer;
};

//countingSundays(1900, 1900, 0);
countingSundays(1901, 2000, 1);