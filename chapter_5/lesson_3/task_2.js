//Проверка на спам
checkSpam = (str) => {
  return str.toLowerCase().includes("viagra") ||
    str.toUpperCase().includes("XXX")
    ? true
    : false;
};

console.log(checkSpam('buy ViAgRA now'));
console.log(checkSpam('free xxxxx'));
console.log(checkSpam("innocent rabbit"));