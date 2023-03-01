function getMaxSubSum(arr) {
  let sum = 0;
  let i = [];
  for (let x of arr) {
    sum = sum + x; //складываем все элементы массива
    i.push(sum); //сумму записываем как элемент массива i
    if (sum < 0) {
      sum = 0; //если сумма отрицательная, обнуляем сумму
      i.push(sum); //и записываем ее как элемент массива i
      continue; //
    }
  }
  let min = i[0]; //возьмем за минимальное число первый элемент массива
  for (let n = 1; n < i.length; n++) {
    let max = Math.max(min, i[n]); //сравниваем первый элемент с последующим
    min = max;
  }
  if (arr.length === 0) {
    min = 0; //проверка на пустой массив
  }
  return min;
}


console.log(getMaxSubSum([-1, 2, 3, -9]) == 5) //(сумма выделенных элементов)
console.log(getMaxSubSum([2, -1, 2, 3, -9]) == 6)
console.log(getMaxSubSum([-1, 2, 3, -9, 11]) == 11)
console.log(getMaxSubSum([-2, -1, 1, 2]) == 3)
console.log(getMaxSubSum([100, -9, 2, -3, 5]) == 100)
console.log(getMaxSubSum([1, 2, 3]) == 6) //(берём все)