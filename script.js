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
const ops = document.querySelectorAll(".ops");
const subBtn = document.getElementById("sub");
const divBtn = document.getElementById("divide");
const multiBtn = document.getElementById("multiply");

let selection1 = [];
let savedNumbers;
let opsRecord;
let selection2 = [];
let results;

class Operator {
  storageInput;

  constructor(a, b) {
    this.a = a;
    this.b = b;

    this.handlClick();
    this.compute();
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
    screen.innerHTML = "";
    decimalPoint.classList.remove("disabled");
    savedNumbers;
    opsRecord = undefined;
    selection1 = [];
    selection2 = [];
    this.results = "";
  }

  // computation process
  calculationProcess() {
    let previousOperand;
    let currentOperand;
    previousOperand = parseFloat(selection2.join(""));
    currentOperand = parseFloat(selection1.join(""));
    if (isNaN(previousOperand) || isNaN(currentOperand)) return;
    console.log(opsRecord);
    switch (opsRecord) {
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
    console.log(selection2, selection1, previousOperand, currentOperand);

    screen.innerHTML = `${this.results}`;
  }
  nextStep() {
    // if (this.results === undefined) return;
    this.opsRecord = "";

    selection1 = [];
    selection1.push(this.results);
    console.log(this.results);
  }
  compute() {
    equal.addEventListener("click", () => {
      this.calculationProcess();
      this.nextStep();
      console.log(results);
    });

    addBtn.addEventListener("click", () => {
      this.calculationProcess();
      this.nextStep();
    });
    // subBtn.addEventListener("click", () => {
    //   this.calculationProcess();
    //   this.nextStep();
    // });
    // multiBtn.addEventListener("click", () => {
    //   this.calculationProcess();
    //   this.nextStep();
    //   console.log(results);
    // });
    // divBtn.addEventListener("click", () => {
    //   this.calculationProcess();
    //   this.nextStep();
    //   console.log(results);
    // });
  }
}

const calculation = new Operator();

// the display function

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.getAttribute("data-input")) {
      selection1.push(btn.getAttribute("data-input"));
      screen.innerHTML = Number(selection1.join(""));
    }
  });
});

function firstStep() {
  //get the operator
  operationsWrapper.addEventListener("click", (e) => {
    if (e.target.id) {
      let id = e.target.id;
      if (
        id === "add" ||
        id === "sub" ||
        id === "multiply" ||
        id === "divide"
      ) {
        opsRecord = id;
      }
      // get the second number
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
    }
  });
}

firstStep();

// calculate the result

// equal.addEventListener("click", () => {
//   calculation.calculationProcess();
//   calculation.nextStep();
//   console.log(results);
// });

erase.addEventListener("click", () => {
  calculation.eraser();
});

// operationsWrapper.addEventListener("click", (e) => {
//   let id = e.target.id;
//   if (id === "add" || id === "sub" || id === "multiply" || id === "divide") {
//     opsRecord = id;
//     console.log(111);
//   }
// });
