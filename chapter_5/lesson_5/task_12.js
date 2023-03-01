function unique(arr) {
  let result = [];

  for (let value of arr) {
    if (!result.includes(value)) {
      result.push(value);
    }
  }

  return result;
}

let strings = [
  "кришна",
  "кришна",
  "харе",
  "харе",
  "харе",
  "харе",
  "кришна",
  "кришна",
  ":-O",
];

console.log(unique(strings)); // кришна, харе, :-O
