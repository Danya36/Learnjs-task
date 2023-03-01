let values = [];

values[0] = +prompt("Введите значение 1");
values[1] = +prompt("Введите значение 2");

if (
  values == null ||
  values == "" ||
  !isFinite(values[0]) ||
  values[1] == null ||
  values[1] == "" ||
  !isFinite(values[1])
) {
  return alert("Отмена");
} else return alert(values[0] + values[1]);
