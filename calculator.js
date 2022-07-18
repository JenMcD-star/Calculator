const buttons = document.querySelectorAll("button.number");
const operatorBtns = document.querySelectorAll("button.operator");
let displayValue = [];
let newValue = null;
let x = null;
let y = null;
let operator = null;
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
  });
});

operatorBtns.forEach((operator1) => {
  operator1.addEventListener("click", function (event) {
    if (x === null) {
      firstNum = newValue;
      x = firstNum;
      console.log(x);
    }
     if (x != null && y != null && operator != null) {
      operate(operator, x, y);
    } else if (operator === null) {
      tempOperator = this.value;
      operator = tempOperator;
      console.log(operator);;
    }

    document.getElementById("display").innerHTML = event.target.value;
    displayValue = [];
  });
});

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
  console.log(x)
  y = null;
  console.log(y)
};

function backspace() {
  let backValue = displayValue.pop();
  backValue = +displayValue.join("");
  newValue = backValue;
  console.log(newValue);
}
