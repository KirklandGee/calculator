let displayNumber = ""
const display = document.querySelector("#display-numbers")
const equals = document.querySelector(".equals")

//Variables to store user inputs
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
        console.log(displayNumber)
    })
});

//Click event for operators
document.querySelectorAll(".operator").forEach(operator => {
    operator.addEventListener("click", function() {
        firstNumber = parseInt(displayNumber);
        displayNumber = '';
        currentOperator = operator.id;
        console.log(currentOperator)
        display.textContent = ''
    })
});

//Evalute operations
equals.addEventListener("click", () => {
    secondNumber = parseInt(displayNumber);
    console.log(currentOperator)

    let value = operate(currentOperator, firstNumber, secondNumber)
    console.log(value)
})




function clearDisplay () {
    display.textContent = ''
}

//Performs basic math operation depending on user input
function operate (operatorFunction, a, b) {
    return operatorFunction(a, b)
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
