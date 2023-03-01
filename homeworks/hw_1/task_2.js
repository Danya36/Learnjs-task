function counter(someText) {
  const strItems = someText.split(" ");

  const result = {};

  strItems.forEach((item) => {
    const normalitem = item.toLowerCase();

    if (normalitem in result) {
      result[normalitem] = result[normalitem] + 1;
    } else {
      result[normalitem] = 1;
    }
  });

  return Object.keys(result)
    .map((k) => {
      if (result[k] % 10 == 2 || result[k] % 10 == 3 || result[k] % 10 == 4) {
        return `${k} - ${result[k]} раза;`;
      } else {
        return `${k} - ${result[k]} раз;`;
      }
    })
    .join(" ");
}

let myString =
  "Текст, в котором слово текст несколько раз встречается и слово тоже".replace(
    /,/g,
    ""
  );

console.log(counter(myString));
