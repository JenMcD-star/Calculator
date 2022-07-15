const buttons = document.querySelectorAll('#input');
let displayValue = [];
let num1 = null;
let num2 = null;
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


   
   function clearDisplay() {
    displayValue = '0';
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