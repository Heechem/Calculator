"use strict";
const buttons = document.querySelectorAll(".button");
const screen = document.querySelector(".screen");
const wrapper = document.querySelector(".wrapper");
const numbers = document.querySelectorAll("[data-input]");
const erase = document.getElementById("erase");
const operators = document.querySelectorAll(".operators");
const decimalPoint = document.getElementById(".");
console.log(operators);

let selection1 = [];
let savedNumbers = [];

class Operator {
  constructor(a, b) {
    this.a = a;
    this.b = b;
    this.buttonFct();
    this.eraser();
    this.opsHandle();
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
  // the display function
  buttonFct() {
    buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        if (btn.getAttribute("data-input")) {
          selection1.push(btn.getAttribute("data-input"));
          this.handlClick();
        }

        screen.innerHTML = Number(selection1.join(""));
      });
    });
  }

  // enable and disble the decimal seprator
  handlClick() {
    decimalPoint.addEventListener("click", () => {
      decimalPoint.classList.add("disabled");
    });
  }
  // enable the eraser function C
  eraser() {
    erase.addEventListener("click", () => {
      screen.innerHTML = "";
      selection1 = [];
      decimalPoint.classList.remove("disabled");
      savedNumbers = [];
    });
  }

  //operators function
  opsHandle() {
    operators.forEach((ops) => {
      ops.addEventListener("click", () => {
        savedNumbers.push(Number(selection1.join("")));
        selection1 = [];
        console.log(savedNumbers);
        screen.innerHTML = "";
        if (decimalPoint.classList.contains("disabled")) {
          decimalPoint.classList.remove("disabled");
        }
      });
    });
  }
}

const calculation = new Operator();
