"use strict";

let myString =
  "��� ������ ������,� �������     ������������ ����� ����������.����� ������ ������ ������ ������� , � ����� ������� �� ���� �� ������ .    ���� ���� ������ ������ ������ �������, ��� ������ ���� ���������.";
console.log(normalSpace(myString));

function normalSpace(myString) {
  return myString
    .replaceAll(/\p{P}/gu, "$& ")
    .replace(/\s+/g, " ")
    .replace(/\s+([.,!":])/g, "$1");
}
