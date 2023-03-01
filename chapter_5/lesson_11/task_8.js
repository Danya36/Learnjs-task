// Форматирование относительной даты

function formatDate(date) {
  let nowTime = new Date();
  let result = nowTime.getTime() - date.getTime();
  if (result < 1000) return "прямо сейчас";
  if (result < 60000) return `${new Date(result).getSeconds()} сек. назад`;
  if (result < 3600000) return `${new Date(result).getMinutes()} мин. назад`;
  return new Date(nowTime - result);
}


console.log(formatDate(new Date(new Date() - 1))); // "прямо сейчас"

console.log(formatDate(new Date(new Date() - 30 * 1000))); // "30 сек. назад"

console.log(formatDate(new Date(new Date() - 5 * 60 * 1000))); // "5 мин. назад"

// вчерашняя дата вроде 31.12.2016, 20:00
console.log(formatDate(new Date(new Date() - 86400 * 1000)));
