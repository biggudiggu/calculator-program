let currentInput = '';
let previousInput = '';
let operator = null;


const display = document.getElementById("display");

function appendToDisplay(input){
    if (input === ',' && currentInput.includes('.')) return;
    if (input === ',') {
      currentInput += '.';
    }
    else{
      currentInput += input;
    }
    display.value = currentInput;
}

function clearDisplay() {
  display.value = "";
  previousInput = '';
  currentInput = '';
  operator = null;
}

function togglePlusMinus() {
  if (currentInput.startsWith(`-`)) {
    currentInput = currentInput.substring(1);
  }
  else{
    currentInput = `-${currentInput}`; 
  }
  display.value = currentInput;
}

function setOperator(op) {
  if (currentInput === '') return;
  if (previousInput !== '') {
    calculate();
  }

  operator = op;
  previousInput = currentInput;
  currentInput = '';
}

function calculate() {
  if (currentInput === '' || previousInput === '' || operator === null) return;

  const prev = parseFloat(previousInput);
  const current = parseFloat(currentInput);
  let result;

  switch (operator) {
    case '+':
      result = prev + current;
      break;
    case '-':
      result = prev - current;
      break;
    case 'x':
      result = prev * current;
      break;
    case '÷':
      result = current === 0 ? 'Error' : prev / current;  
      break;

    default:
      return;
  }

  currentInput = result.toString();
  operator = null;
  previousInput = '';
  display.value = currentInput;
}

function calculatePercentage(){
  if(currentInput === '') return;

  const prev = parseFloat(previousInput);
  currentInput = ((prev * parseFloat(currentInput)) / 100).toString();
  display.value = currentInput;
}