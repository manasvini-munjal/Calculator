const result = document.querySelector('.calculator__output');
const buttons = document.querySelectorAll('.calculator__key');
const equalTo = document.querySelector('.js-assignment');

const displayResult = (resultValue) => {
    let resultsArr = [resultValue];
    //resultsArr.push(resultValue);
    
    result.textContent = resultValue;
    console.log(resultsArr);
    storeInput(resultsArr);
};

const add = (a, b) => {
  return a + b;
};

const subtract = (a, b) => {
    return a - b;
};

const multiply = (a, b) => {
    return a * b;
};

const divide = (a, b) => {
   return a / b;
};

const operate = (operator, a , b) => {
  let result;
  console.log(`operator is: ${operator}, a is ${a} and b is ${b}`)
  switch(operator) {
    case '+':
      result = add(a, b);
      break;
    case '-':
      result = subtract(a, b);
      break;
    case 'X':
      result = multiply(a, b);
      break;
    case '/':
      result = divide(a, b);
      break;
    default:
      console.log('No operator selected');
      break;
 }
 if(operator) {
   displayResult(result);
 }
};

const storeInput= ( resultsArr, operandArr, operatorsArr) => {
   let count = 0;
   console.log(operandArr); // this works -> stores values
   console.log(operatorsArr);  // this works -> stores values
    equalTo.addEventListener('click', () => {
      count++;
      console.log(operandArr[0]);
      operate(operandArr[0], operatorsArr[0], operatorsArr[1]);
    });
 
  
};


const handleInput = () => {
  const regex = /\+|\-|\X|\÷/;
  let operand = [];
  let operators = [];
  let results = [];
  buttons.forEach(btn => btn.addEventListener('click', () => {
   if(regex.test(btn.textContent)) {
     operand.push(btn.textContent);
     storeInput(results, operand, operators);
     
   } else {
     operators.push(btn.textContent);
     storeInput(results, operand, operators);
   }
   
  }));

}

document.addEventListener('DOMContentLoaded', function() {
  handleInput();
}, false);






