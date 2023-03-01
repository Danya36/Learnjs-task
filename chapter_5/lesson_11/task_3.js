//День недели в европейской нумерации

function getLocalDay(date) {
  let euroDay = [1, 2, 3, 4, 5, 6, 7];
  return euroDay[date.getUTCDay()];
}

let date = new Date(2012, 0, 3); // 3 января 2012 года
console.log(getLocalDay(date)); // вторник, нужно показать 2
