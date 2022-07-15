const buttons = document.querySelectorAll("button.number");
const operatorBtns = document.querySelectorAll("button.operator");
let displayValue = [];
let newValue = null;
let x = null;
let y = null;
let operator1 = null;
let operator2 = null;
let result = null;
//get value from button click
//save values

//display clicked buttons
buttons.forEach((input) => {
  input.addEventListener("click", function (event) {
    displayValue.push(event.target.value);
    console.log(displayValue);
    newValue = +displayValue.join("");
    document.getElementById("display").innerHTML = newValue;
    if (x != null && y === null) {
      y = newValue;
      console.log(y);
    }
  });
});

operatorBtns.forEach((operator) => {
  operator.addEventListener("click", function (event) {
    if (x === null) {
      x = newValue;
      console.log(newValue);
    }
    if (operator1 === null) {
      operator1 = this.value;
      console.log(operator1);
    }
    document.getElementById("display").innerHTML = event.target.value;
    displayValue = [];
  });
});
//if the first operator is not null then do the operation
function clearDisplay() {
  displayValue = [];
  clearValue = "0";
  document.getElementById("display").innerHTML = clearValue;
  firstOperand = null;
  secondOperand = null;
  firstOperator = null;
  secondOperator = null;
  result = null;
}
const operate = function (operator, x, y) {
  switch (operator) {
    case "+":
      result = x + y;
      return result;
    case "-":
      result = x - y;
      return result;
    case "*":
      result = x * y;
      return result;
    case "/":
      result = x / y;
      return result;
  }
  displayValue = [];
  totalValue = result;
  document.getElementById("display").innerHTML = result;
};
