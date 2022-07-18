const buttons = document.querySelectorAll("button.number");
const operatorBtns = document.querySelectorAll("button.operator");
let displayValue = [];
let newValue = null;
let x = null;
let y = null;
let operator = null;
let secondOperator = null;
let result = null;

buttons.forEach((input) => {
  input.addEventListener("click", function (event) {
    displayValue.push(event.target.value);
    newValue = +displayValue.join("");
    document.getElementById("display").innerHTML = newValue;
    if (x != null) {
      secondNum = newValue;
      y = secondNum;
      console.log(y);
    }
    if (x != null && y != null && operator != null) {
      operate(operator, x, y);
    }
  });
});

operatorBtns.forEach((operator1) => {
  operator1.addEventListener("click", function (event) {
    // assigns first input to a variable
    if (x === null) {
      firstNum = newValue;
      x = firstNum;
      console.log(x);
    }
    // if there is already a value for both numbers and the operator then operate
    if (x != null && y != null && operator != null) {
      operate(operator, x, y);
    }
    // if the operator doesn't have a value then take the value from the button
    if (operator === null) {
      tempOperator = this.value;
      operator = tempOperator;
      console.log(operator);
    // if there is already an operator replace x with result of previous operation and save new operator
    } else if (operator != null){
      tempOperator = this.value;
      secondOperator = tempOperator;
      console.log(secondOperator);
      x = result;
      y = null;

    }
    document.getElementById("display").innerHTML = event.target.value;
    displayValue = [];
  });
});
//resets back to initial calculator
function clearDisplay() {
  displayValue = [];
  clearValue = "0";
  document.getElementById("display").innerHTML = clearValue;
  x = null;
  y = null;
  operator = null;
  result = null;
}

const operate = function (op, num1, num2) {
  if (op === "+") {
    result = num1 + num2;
    return result;
  } else if (op === "-") {
    result = num1 - num2;
    return result;
  } else if (op === "*") {
    result = num1 * num2;
    return result;
  } else if (op === "/") {
    result = num1 / num2;
    return result;
  }
  document.getElementById("display").innerHTML = result;
  x = result;
  console.log(x);
  y = null;
};

function backspace() {
  let backValue = displayValue.pop();
  backValue = +displayValue.join("");
  newValue = backValue;
  document.getElementById("display").innerHTML = newValue;
}
