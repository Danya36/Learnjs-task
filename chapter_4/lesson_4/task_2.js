let calculator = {
   firstNumber: 0,
   secondNumber: 0,
   read () {
     this.firstNumber = +prompt('enter first number');
     this.secondNumber = +prompt ('enter second number');
   },
   sum () {
     return this.firstNumber + this.secondNumber;
   },
   multipl () {
     return this.firstNumber * this.secondNumber
   }
 };
 
 calculator.read();
 console.log( calculator.sum() );
 console.log( calculator.mul() );