//Какой день месяца был много дней назад?

function getDateAgo(date, days) {
  let startDate = date.getTime();
  let daysAgo = days * 24 * 3600 * 1000;
  return new Date(startDate - daysAgo).getDate();
}

let date = new Date(2015, 0, 2);

console.log(getDateAgo(date, 1)); // 1, (1 Jan 2015)
console.log(getDateAgo(date, 2)); // 31, (31 Dec 2014)
console.log(getDateAgo(date, 365)); // 2, (2 Jan 2014)
