let currentValue = '',   // Saves the currently displayed number
    firstValue = '',     // First operand 
    operator = '',       // (+,-,*,/)
    shouldReset = '';    // Indicates whether to reset 'currentValue' after an operation

function updateDisplay(){
    const resultField = document.getElementById('result');
    resultField.value = currentValue;
}

function clearDisplay(){
    currentValue = '';
    firstValue = '';
    operator = '';
    shouldReset = false;
    updateDisplay();
}

function performCalculation(a, operator, b) {
    a = parseFloat(a);
    b = parseFloat(b);
    if (operator === '+') return a + b;
    if (operator === '-') return a - b;
    if (operator === '*') return a * b;
    if (operator === '/') return a / b;
}

function numberBtnClick(number){
    if(shouldReset){
        currentValue = '';
        shouldReset = false;
    }
    currentValue += number;
    updateDisplay();
}

function operate(op){
    if (firstValue === '' && currentValue !== ''){
        firstValue = currentValue;
        operator = op;
        shouldReset = true;
    } else if (firstValue !== '' && operator !== '' && currentValue !== ''){
        firstValue = performCalculation(firstValue, operator, currentValue).toString();
        operator = op;
        currentValue = '';
    }
}

function equalsBtnClick(){
    if (firstValue !== '' && operator !== '' && currentValue !== ''){
       currentValue = performCalculation(firstValue, operator ,currentValue).toString();
        firstValue = '';
        operator = '';
        shouldReset = true;
        updateDisplay();
    }
}
