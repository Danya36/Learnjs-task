function extractCurrencyValue(str) {
  return (str = parseInt(str.match(/\d+/)));
}

console.log(extractCurrencyValue("$120"));
