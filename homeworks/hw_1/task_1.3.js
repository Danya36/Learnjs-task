"use strict";

const v = require("voca");

let myString = "Это моя новая строка, в ней много букв и ни одной цифры ";
// Вариант 1 (короткий)
console.log(v.countWords(myString));

// Вариант 2 (через функцию)
function wordCount(str) {
  str = str.replace(/(^\s*)|(\s*$)/gi, "");
  str = str.replace(/[ ]{2,}/gi, " ");

  return str.split(" ").length;
}
console.log(wordCount(myString));
