// Сколько сегодня прошло секунд?

const getSecondsToday = () => {
   let date = new Date();
   return date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds();
   };

getSecondsToday() == 36000 // (3600 * 10)