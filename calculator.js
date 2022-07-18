const buttons = document.querySelectorAll("button.number");
const operatorBtns = document.querySelectorAll("button.operator");
let displayValue = [];
let newValue = null;
let firstOperator = null;
let secondOperator = null;
let x = null;
let y = null;
let operator = null;
let result = null;

buttons.forEach((input) => {
  input.addEventListener("click", function (event) {
    displayValue.push(event.target.value);
    newValue = +displayValue.join("");
    document.getElementById("display").innerHTML = newValue;
    })
  });

operatorBtns.forEach((operator1) => {
  operator1.addEventListener("click", function (event) {
    if (x === null) {
      firstNum = newValue;
      x = firstNum
      console.log(x);
        }    
    else if (x != null) {
      secondNum = newValue ;
      y = secondNum;
      console.log(y)
    }
      
    if (operator === null) {
      operator = this.value;
      console.log(operator);
    }
    
  if (x && y) {
   operate(operator, x, y);
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

const equals = function(){}
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
  console.log(result);
  document.getElementById("display").innerHTML = result;
};

function backspace() {
  let backValue = displayValue.pop();
  backValue = +displayValue.join("");
  newValue = backValue;
  console.log(newValue);
}
