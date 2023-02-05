"use strict";
const buttons = document.querySelectorAll(".button");
const screen = document.querySelector(".screen");
const wrapper = document.querySelector(".wrapper");
const numbers = document.querySelectorAll("[data-input]");
const erase = document.getElementById("erase");
const operators = document.querySelectorAll(".operators");
const decimalPoint = document.getElementById(".");
const addBtn = document.getElementById("add");
const operationsWrapper = document.querySelector(".operations");
const equal = document.getElementById("equal");

let selection1 = [];
let savedNumbers = [];
let opsRecord;
let selection2 = [];
let results;

class Operator {
  storageInput;

  constructor(a, b) {
    this.a = a;
    this.b = b;

    this.eraser();
    this.opsfind();
    this.calculationProcess();
  }
  addition(a, b) {
    return a + b;
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
      opsRecord;
      selection2 = [];
    });
  }

  // The operators records
  opsfind() {
    operationsWrapper.addEventListener("click", (e) => {
      let id = e.target.id;
      if (
        id === "add" ||
        id === "sub" ||
        id === "multiply" ||
        id === "divide"
      ) {
        this.opsRecord = id;
      }

      console.log(this.opsRecord);
    });
  }

  // computation process
  calculationProcess() {
    let previousOperand;
    let currentOperand;
    previousOperand = parseFloat(selection2.join(""));
    currentOperand = parseFloat(selection1.join(""));
    if (isNaN(previousOperand) || isNaN(currentOperand)) return;
    console.log(this.opsRecord);
    switch (this.opsRecord) {
      case "add":
        this.results = this.addition(previousOperand, currentOperand);
        break;
      case "sub":
        this.results = this.substract(previousOperand, currentOperand);
        break;
      case "multiply":
        this.results = this.multiply(previousOperand, currentOperand);
        break;
      case "divide":
        this.results = this.divide(previousOperand, currentOperand);
        break;
    }
    console.log(selection1, selection2);
    console.log(previousOperand, currentOperand);
    screen.innerHTML = `${this.results}`;
    console.log(this.results);
  }
  nextStep() {
    console.log(this.results);
    selection1 = [];
    selection1.push(this.results);
  }
}

const calculation = new Operator();

// the display function

buttons.forEach((btn) => {
  if (selection1.length === 0) {
    btn.addEventListener("click", () => {
      if (btn.getAttribute("data-input")) {
        selection1.push(btn.getAttribute("data-input"));
        screen.innerHTML = Number(selection1.join(""));
      }
    });
  } else selection2.push(selection1);
});

// store the first and second value

operators.forEach((ops) => {
  ops.addEventListener("click", () => {
    if (selection2.length === 0) {
      selection2.push(selection1.join(""));

      selection1 = [];

      screen.innerHTML = "";
    } else {
      selection2.splice(0);
      selection2.push(selection1.join(""));
      selection1 = [];
      screen.innerHTML = "";
    }
    if (decimalPoint.classList.contains("disabled")) {
      decimalPoint.classList.remove("disabled");
    }
  });
});

// calculate the result

equal.addEventListener("click", (button) => {
  calculation.calculationProcess();

  calculation.nextStep();
  console.log(selection1);
});
