"use strict";

class Operator {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
  addition(a, b) {
    return (this.r = a + b);
  }
  substract(a, b) {
    return a - b;
  }
  multiply(a, b) {
    return a * b;
  }
  divide(a, b) {
    return a / b;
  }
}

const calculation = new Operator();
console.log(calculation.addition(5, 12), calculation.substract(10, 5));
console.log(2);
