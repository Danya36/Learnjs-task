// Сколько секунд осталось до завтра?

function getSecondsToTomorrow() {
  let date = new Date();
  let h = date.getHours() * 3600;
  let m = date.getMinutes() * 60;
  let s = date.getSeconds();

  return 24 * 60 * 60 - (h + m + s);
}

getSecondsToTomorrow() == 3600;
