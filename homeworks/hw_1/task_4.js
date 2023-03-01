class Product {
  constructor(name, price, quantity, description) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.description = description;
  }
}

String.prototype.contains = String.prototype.includes;
String.prototype.starts = String.prototype.startsWith;
String.prototype.ends = String.prototype.endsWith;

Number.prototype[">"] = function (value) {
  return this > value;
};
Number.prototype["<"] = function (value) {
  return this < value;
};
Number.prototype["="] = function (value) {
  return this == value;
};
Number.prototype["<="] = function (value) {
  return this <= value;
};
Number.prototype[">="] = function (value) {
  return this >= value;
};

// Раскомментировать нужную строку

//const str = "name-contains-fd&price-=2-&quantity->5&description-ends-abc";
const str = "name-starts-fd&quantity-=5";

const arr = [
  new Product("fdBread", 2, 34, "The bestabc"),
  new Product("fdBeer", 23, 5, "Badabc"),
  new Product("Meatfd", 2, 5, "New abc"),
  new Product("fdFastfood", 1, 5, "Sometimes ok"),
  new Product("Chips", 34, 4, "Good chips"),
  new Product("fdSoup", 2, 35, "Goodsabc"),
];

function filter(arr, str) {
  const stringArr = str.split("&");
  const protypes = stringArr.map((item) => ({
    options: item.split(/(-|>=?|<=?|=)/).filter((v) => v && /[^-]/.test(v)),
  }));

  const newArr = arr.filter((value) => {
    for (let protype of protypes) {
      if (!value[protype.options[0]][protype.options[1]](protype.options[2]))
        return false;
    }
    return true;
  });
  return newArr;
}

const newArr = filter(arr, str);
console.log(newArr);
