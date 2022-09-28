const numButton = document.querySelectorAll(".num");
const equals = document.querySelector(".equals");
const allClear = document.querySelector(".all-clear");
let currentDisplay = document.querySelector('.current-display');
let oldDisplay = document.querySelector('.old-display');
let opButtons = document.querySelectorAll('.operator') ;
let resultDisplay = document.querySelector(".result");
let dec = document.querySelector('.dec')
let numOne = '';
let numTwo = '';
let result = ''
let operator;  

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operate(operator, num1, num2) {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    switch (operator) {
        case '+':
            return Math.round(add(num1, num2) * 10) / 10;
            break;
        case '-': 
            return Math.round(subtract(num1, num2) * 10) / 10;
            break;
        case '*':
            return Math.round(multiply(num1, num2) * 10) / 10;
            break;
        case '/':
            return Math.round(divide(num1, num2) * 10) / 10;
            break
    }
}

function addDigit(el) {
    if (!operator) {
    numOne += el.target.innerText;
    currentDisplay.innerText = numOne;
    }
    if (operator && result) {
        currentDisplay.classList.remove("hidden");
        oldDisplay.classList.remove("hidden");
        resultDisplay.classList.add("hidden")
        currentDisplay.innerText = numOne;
        numTwo += el.target.innerText;
        oldDisplay.innerText = numTwo;
        result = '';

    } else if (operator) {
        numTwo += el.target.innerText;
        oldDisplay.innerText = numTwo;
        currentDisplay.classList.add('opaque');
        resultDisplay.classList.remove("hidden") 
    }
}

numButton.forEach(el => {
    el.addEventListener("click", addDigit);
})

function addOperator(el) {
    if (operator == '/' && numTwo == '0') { 
        numTwo = ''
        throw "You can't do that!";
     }
    if (!operator) {
        operator = el.target.innerText;
    } else if (operator) {
        result = operate(operator, numOne, numTwo);
        operator = ''
        resultDisplay.innerText = result;
        currentDisplay.classList.add("hidden");
        oldDisplay.classList.add("hidden");
        resultDisplay.classList.remove('hidden');
        operator = el.target.innerText
        numOne = result;
        numTwo = '';
    }
}

opButtons.forEach(el => {
    el.addEventListener("click", addOperator);
})

function compute(el) {
    if (operator == '/' && numTwo == '0') { 
        numTwo = ''
        throw "You can't do that!";
     }
    result = operate(operator, numOne, numTwo);
    resultDisplay.innerText = result;
    currentDisplay.classList.add("hidden");
    oldDisplay.classList.add("hidden");
    numOne = result;
    numTwo = '';
    if (result) {
        operator = '';
        resultDisplay.classList.remove("hidden");
    }
}

equals.addEventListener("click", compute);

function clearCalc() {
    numOne = '';
    numTwo = '';
    currentDisplay.innerText = '';
    oldDisplay.innerText = '';
}