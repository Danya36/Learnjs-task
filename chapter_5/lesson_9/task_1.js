// Сумма свойств объекта

function sumSalaries(salaries) {
  let sumSsalaries = 0;
  for (const iterator of Object.values(salaries)) {
    sumSsalaries += iterator;
  }
  return sumSsalaries;
}

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

console.log(sumSalaries(salaries)); // 650
