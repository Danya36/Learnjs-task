const v = require("voca");

let myString = "��� ��� ����� ������, � ��� ����� ���� � �� ����� ����� ";
// ������� 1 (��������)
console.log(v.countWords(myString));

// ������� 2 (����� �������)
function wordCount(str) {
  str = str.replace(/(^\s*)|(\s*$)/gi, "");
  str = str.replace(/[ ]{2,}/gi, " ");

  return str.split(" ").length;
}
console.log(wordCount(myString));
