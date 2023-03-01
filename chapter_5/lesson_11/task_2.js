// Покажите день недели

function getWeekDay(date) {
  const nameOfDays = ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"];

  return nameOfDays[date.getDay()];
}

let date = new Date(2012, 0, 3); // 3 января 2012 года
console.log(getWeekDay(date)); // нужно вывести "ВТ"
