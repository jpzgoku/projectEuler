let countingSundays = function(startYear, endYear, startDay) {
  const daysOfTheWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const months = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'August', 'Sept', 'Oct', 'Nov', 'Dec'];
  let answer = [];
  let numOfDays;
  for (let year = startYear; year <= endYear; year++) {
    for (let i = 0; i < months.length; i++) {
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
      for (let day = 1; day <= numOfDays; day++) {
        let date = [daysOfTheWeek[startDay], months[i], day, year];
        if (date[0] === 'Sunday' && date[2] === 1) {
          answer.push(date);
        }
        startDay++;
        if (startDay === 7) {
          startDay -= 7;
        }
      }
    }
  }

  return answer.length;
};

console.log(countingSundays(1901, 2000, 1));