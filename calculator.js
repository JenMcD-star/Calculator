const add = function(x, y) {
    let result = x + y;
    return result
  }

const subtract = function(x,y) {
    let result = x-y;
    return result
}

const sum = function(array) {
    return array.reduce((total, current) => total + current, 0);
  };
  
const multiply = function(array) {
      return array.length
        ? array.reduce((accumulator, nextItem) => accumulator * nextItem)
        : 0;
  };
  
const divide = function(x, y) {
    let result = x / y;
    return result
}

const operate = function(operator, x, y) {
    switch(operator) {
     case "+":
       return add(x,y)
     case "-":
       return subtract(x, y)
     case "*":
       return multiply(x,y)
    case "/":
       return divide(x,y)
    case "=":
        return sum
    }
}
