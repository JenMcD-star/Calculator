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
    if (displayValue.length > 8) {
      displayValue.length = 8;
    }
    newValue = +displayValue.join("");
    document.getElementById("display").innerHTML = newValue;

    getInfo();
  });
});

window.addEventListener("keydown", (event) => {
  displayValue.push(event.key);
  if (displayValue.length > 8) {
    displayValue.length = 8;
  }
  newValue = +displayValue.join("");
  document.getElementById("display").innerHTML = newValue;
  getInfo();
});

function getInfo() {
  //assigns second input to a variable if the first already has a value
  if (x != null) {
    secondNum = newValue;
    y = secondNum;
    console.log(y);
  }
  //operate() when the x, y, and operator variables have a value
  if (x != null && y != null && operator != null) {
    operate(operator, x, y);

    //operate() when the x, y, and second operator variables have a value
  } else if (x != null && y != null && secondOperator != null) {
    operate(secondOperator, x, y);
    updateResult();
  }
}

operatorBtns.forEach((operator1) => {
  operator1.addEventListener("click", function (event) {
    // assigns first input to a variable
    if (x === null) {
      firstNum = newValue;
      x = firstNum;
      console.log(x);
    }
    // if an operator is already used, store the second operator and then use in operate()
    if (operator != null) {
      operator = null;
      tempTwoOperator = this.value;
      secondOperator = tempTwoOperator;
      console.log(secondOperator);
      x = result;
      y = null;
      operate(secondOperator, x, y);
    }
    // if the operator doesn't have a value then take the value from the button
    else if (operator === null) {
      tempOperator = this.value;
      operator = tempOperator;
      console.log(operator);
    }
    // display operator
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
//takes the variables and shows final result
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
  } else if (op === "/" && y != 0) {
    result = num1 / num2;
    return result;
  } else if (op === "/" && y === 0) {
    alert("no can do");
  }
  document.getElementById("display").innerHTML = result.toPrecision(3);
  updateResult();
};
//updates the result when multiple operators are used in a row and resets other variables
function updateResult() {
  operator = null;
  secondOperator = null;
  x = result;
  console.log(x);
  y = null;
}
//removes last item in array, joins array and displays it
function backspace() {
  let backValue = displayValue.pop();
  //if the backValue is an operator, display the previous variable
  if (backValue === undefined && x != null && y === null) {
    operator = null;
    document.getElementById("display").innerHTML = x;
  }
  //or if there are already two variables and an operator then backspace will display the result
  else if (backValue === undefined && x != null && y != null) {
    document.getElementById("display").innerHTML = y;
  }
  //removes last item in array, joins array and displays it
  else {
    backValue = +displayValue.join("");
    newValue = backValue;
    document.getElementById("display").innerHTML = newValue;
  }
}
