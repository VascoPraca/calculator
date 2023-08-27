
let inputArray = [];


function operate () {
    if (inputArray.length >= 3) {
        let result = calculateResult();
        document.getElementById('displayScreen').innerHTML = result;
        inputArray = [result.toString()];
    }
}


function add (x, y) {
    return x + y;
}
function subtract (){
    return x - y;
}
function multiply (){
    return x * y;
}
function divide (){
    return x / y;
}

function calculateResult() {
    let expression = inputArray.join('');

    let parts = expression.split(/(\+|\-|\*|\/)/g);

    let result = parseFloat(parts[0]);

    for (let i = 1; i < parts.length; i += 2) {
        let operator = parts[i];
        let num = parseFloat(parts[i+1]);

        if (operator === '+') {
            result += num;
        } else if (operator === "-") {
            result -= num;
        } else if (operator === "*") {
            result *= num;
        } else if (operator === "/") {
            result /= num;
        }
    }
    return result;
}

function displayNums(button){
    let x = button.value;
    inputArray.push(x);//Add digit to array
    document.getElementById('displayScreen').innerHTML = inputArray.join(''); //Update the display
}
function clearDisplay(){
    document.getElementById('displayScreen').innerHTML = '';
    inputArray = []; //Clear inputArray
}

document.querySelectorAll('#keypad').forEach(button => {
    button.addEventListener('click', () => {
        inputArray.push(button.value); // Add the operator to the array
        document.getElementById('displayScreen').innerHTML = inputArray.join(''); // Update the display
        operate(); // Perform calculation immediately after operator press
    });
});