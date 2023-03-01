function unique(arr) {
  let newArr = new Set(Array.from(arr));
  return newArr;
}

let values = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
];

console.log(unique(values)); // Hare,Krishna,:-O
