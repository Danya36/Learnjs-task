function pow(x, n) {
  return x ** n;
}
function showPow() {
  let x = +prompt("Введите число которое нужно возвести в степень:", "");
  let n = +prompt("Введите степень числа:", "");

  if (n < 1) {
    alert(`Степень ${n} не поддерживается, используйте натуральное число`);
  } else {
    return alert(`${x} в степени ${n}, будет равно: ${pow(x, n)}`);
  }
}
showPow();
