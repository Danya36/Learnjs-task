readNumber = () => {
  let input = +prompt("Enter numbers");
  if (input == "" || input === null) {
    return null;
  }
  let inputNumber = Number(input);
  isNaN(inputNumber) ? readNumber() : console.log(inputNumber);
};
readNumber();
