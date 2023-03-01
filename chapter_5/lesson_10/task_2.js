//Максимальная зарплата

function topSalary(obj) {
  let [max, name] = [0, null];

  for (const [key, value] of Object.entries(obj)) {
    if (value > max) [max, name] = [value, key];
  }

  return name;
}

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

console.log(topSalary(salaries));
