"use strict";

let myString =
  "Вот пример строки,в которой     используются знаки препинания.После знаков должны стоять пробелы , а перед знаками их быть не должно .    Если есть лишние подряд идущие пробелы, они должны быть устранены.";
console.log(normalSpace(myString));

function normalSpace(myString) {
  return myString
    .replaceAll(/\p{P}/gu, "$& ")
    .replace(/\s+/g, " ")
    .replace(/\s+([.,!":])/g, "$1");
}
