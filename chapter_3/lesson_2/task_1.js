function pow(x, n) {
  // фигурная скобка должна быть на 1 строке с заданной функцией
  let result = 1;
  for (let i = 0; i < n; i++) {
    //  result с новой строки и отступом в таб
    result *= x;
  }
  return result;
}

let x = prompt("x?", ""), // каждый задаваемый параметр с новой строки
  n = prompt("n?", ""); //забыли точку с запятой
if (n <= 0) {
  // круглая скобка на той строке, где if
  alert(`Степень ${n} не поддерживается, введите целую степень, большую 0`);
} else {
  // круглая скобка закрывающая предыдущее действие и открывающая новое на одной строке, между ними else
  alert(pow(x, n)); // нет пробелов между параметрами функции, забыли точку с запятой в конце
}
