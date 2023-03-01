function randomInteger(min, max) {
  let num;
  do {
    num = Math.floor(Math.random() * 10);
  } while (num < min || num >= max);
  return num;
}
console.log(randomInteger(1, 5));
