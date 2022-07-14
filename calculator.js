
let displayValue = '0';
let firstOperand = null;
let secondOperand = null;
let firstOperator = null;
let secondOperator = null;
let result = null;
const buttons = document.querySelectorAll('#input');
//get value from button click
//save values
//display clicked buttons

   buttons.forEach((input) => {
    input.addEventListener('click', function(event) {   
    let displayValue = event.target.value
      document.getElementById("display").innerHTML = displayValue
    });
   })   
   

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