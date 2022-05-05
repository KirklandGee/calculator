const display = document.querySelector("#display-numbers")
const equals = document.querySelector(".equals")

//Variables to store user inputs
let displayNumber = ""
let firstNumber = 0
let secondNumber = 0
let currentOperator = ''

//Click event to watch for pressing of the number key divs.
//Also displays number in the calc display
document.querySelectorAll(".number").forEach(key => {
    key.addEventListener("click", function() {
        // console.log(key.id);
        display.textContent += key.id;
        displayNumber += key.id;
    })
});

//Click event for operators
document.querySelectorAll(".operator").forEach(operator => {
    operator.addEventListener("click", function() {
        secondNumber = parseInt(displayNumber)
        if (firstNumber && secondNumber) {
            calculate()
            currentOperator = operator.id;
            return
        }
        firstNumber = parseInt(displayNumber);
        displayNumber = '';
        currentOperator = operator.id;
        display.textContent = ''
    })
});

//Evalute operations
equals.addEventListener("click", () => {
        calculate();
})

//Performs a calculation with firstNumber & secondNumber
function calculate () {
    if (firstNumber && secondNumber) {
    let result = operate(currentOperator, firstNumber, secondNumber)
    displayNumber = result;
    firstNumber = parseInt(result)
    display.textContent = displayNumber;
    firstNumber = null
    secondNumber = null
    }
}

function clearDisplay () {
    display.textContent = ''
    displayNumber = ''
    firstNumber = null
    secondNumber = null
}

//Performs basic math operation depending on user input
function operate (operator, a, b) {
    switch (operator) {
        case 'add':
            return add(a, b);
        case 'subtract':
            return subtract(a, b)
        case 'divide':
            return divide(a, b)
        case 'multiply':
            return multiply(a, b);
    }
}

//Basic calculation functions
function add (a, b) {
    return a+b;
}

function subtract (a, b) {
    return a-b;
}

function multiply (a, b) {
    return a*b;
}

function divide (a, b) {
    return a/b;
}
