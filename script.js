"use strict";
const buttons = document.querySelectorAll(".button");
const screen = document.querySelector(".screen");
const wrapper = document.querySelector(".wrapper");
const numbers = document.querySelectorAll("[data-input]");
const erase = document.getElementById("erase");
console.log(numbers);

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

// wrapper.addEventListener("click", function () {
//   numbers.forEach((nbr) => {
//     if (nbr.dataset["data-input"]) {
//       screen.innerHTML = nbr.attributes();
//     }
//     console.log(nbr);
//   });
// });
let selection = [];

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.getAttribute("data-input")) {
      selection.push(btn.getAttribute("data-input"));
    }
    console.log(selection);
    screen.innerHTML = Number(selection.join(""));
  });
});

erase.addEventListener("click", () => {
  screen.innerHTML = "";
  selection = [];
});
