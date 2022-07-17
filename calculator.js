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
    console.log(displayValue);
    newValue = +displayValue.join("");
    document.getElementById("display").innerHTML = newValue;
    if (x != null && y === null) {
      x = firstValue;
      y = newValue;
      console.log(x, y);
    }
  });
});

operatorBtns.forEach((operator1) => {
  operator1.addEventListener("click", function (event) {
    if (x === null) {
      x = newValue;
      console.log(newValue);
    }
    if (operator === null) {
      operator = this.value;
      console.log(operator);
    }

    if (x && y) {
      operate();
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
const operate = function (operator, num1, num2) {
  if (operator === "+") {
    result = num1 + num2;
    return result;
  } else if (operator === "-") {
    result = num1 - num2;
    return result;
  } else if (operator === "*") {
    result = num1 * num2;
    return result;
  } else if (operator === "/") {
    result = num1 / num2;
    return result;
  }
  console.log('ugh');
  document.getElementById("display").innerHTML = 'ugh2';
};

function backspace() {
  let backValue = displayValue.pop();
  backValue = +displayValue.join("");
  newValue = backValue;
  console.log(newValue);
}
