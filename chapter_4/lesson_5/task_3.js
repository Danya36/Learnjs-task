function Accumulator(startingValue) {
  this.value = startingValue;
  this.Read = function () {
    this.value += +prompt("Enter number to sum", 0);
    alert(this.value);
  };
}

let t = new Accumulator(2);
t.Read();
