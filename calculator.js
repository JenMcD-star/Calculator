const buttons = document.querySelectorAll('button.number');
const operatorBtns = document.querySelectorAll('button.operator');
let displayValue = [];
let x = null;
let y = null;
let operator1 = null;
let operator2 = null;
let result = null;
//get value from button click
//save values

//display clicked buttons
   buttons.forEach((input) => {
    input.addEventListener('click', function(event) { 
     displayValue.push(event.target.value)
     console.log(displayValue)
     newValue = +displayValue.join("")
     document.getElementById("display").innerHTML = newValue;
    
    });
  })   

  operatorBtns.forEach((operator) => {
    operator.addEventListener('click', function(event) { 
     document.getElementById("display").innerHTML = '0';
      displayValue.push(event.target.value)
     document.getElementById("display").innerHTML = displayValue;
    });
  })
  

   
   function clearDisplay() {
    displayValue =[];
    clearValue = '0';
    document.getElementById("display").innerHTML = clearValue;
    firstOperand = null;
    secondOperand = null;
    firstOperator = null;
    secondOperator = null;
    result = null;
   }
const operate = function(operator, x, y) {
    switch(operator) {
     case "+":
       return x + y;
     case "-":
       return x-y;
     case "*":
       return x*y;
    case "/":
       return x / y;
    }
}