const numButton = document.querySelectorAll(".num");
const equals = document.querySelector(".equals");
let currentDisplay = document.querySelector('.current-display');
let oldDisplay = document.querySelector('.old-display');
let opButtons = document.querySelectorAll('.operator') ;
let resultDisplay = document.querySelector(".result");
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
    switch (operator) {
        case '+':
            return add(num1, num2);
            break;
        case '-': 
            return subtract(num1, num2);
            break;
        case '*':
            return multiply(num1, num2);
            break;
        case '/':
            return divide(num1, num2);
            break
    }
}

numButton.forEach((el) => {
    el.addEventListener('click', (e) => {
       if (!operator) {
            numOne += e.target.innerText;
            numOne = parseInt(numOne);
            currentDisplay.innerText = numOne;
        } else if (operator) {
            numTwo += e.target.innerText;
            numTwo = parseInt(numTwo);
            oldDisplay.innerText = numTwo;
            currentDisplay.classList.add("opaque");

        }
    })
})

opButtons.forEach((el) => {
    el.addEventListener("click", (e) => {
        if (operator) {
            result = operate(operator, numOne, numTwo);
            result = parseInt(result);
            resultDisplay.innerText = result;
            numTwo = '';
            numOne = '';
            numOne = result;
            currentDisplay.classList.add('hidden');
            oldDisplay.classList.add('hidden');
            resultDisplay.classList.remove('hidden');
        }
        operator = e.target.innerText;
        if (result) {
            numTwo = '';
            oldDisplay.innerText = ''
            currentDisplay.classList.remove('hidden');
            oldDisplay.classList.remove('hidden');
            resultDisplay.classList.add('hidden');
            currentDisplay.innerText = numOne;
        }
    })
})

equals.addEventListener("click", () => {
    result = operate(operator, numOne, numTwo);
    result = parseInt(result);
    resultDisplay.innerText = result;
    numTwo = '';
    numOne = '';
    numOne = result;
    currentDisplay.classList.add('hidden');
    oldDisplay.classList.add('hidden');
    resultDisplay.classList.remove('hidden');
})
