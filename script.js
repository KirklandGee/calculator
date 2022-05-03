
//Click event to watch for pressing of the number key divs.
document.querySelectorAll(".number").forEach(key => {
    key.addEventListener("click", function() {
        console.log(key.id);
    })
});


// //Function to display number when button is pressed
// function inputNumber (pressedKey) {
//     let pressedKey = 
// }

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
