function camelize(str) {
  let arr = str.split("");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "-") {
      if (i != arr.length - 1) {
        arr[i + 1] = arr[i + 1].toUpperCase();
      }
      arr.splice(i, 1);
    }
  }
  return arr.join("");
}

console.log(camelize("background-color")) == "backgroundColor";
console.log(camelize("list-style-image")) == "listStyleImage";
console.log(camelize("-webkit-transition")) == "WebkitTransition";
