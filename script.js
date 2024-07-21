const display = document.querySelector(".display")
const allDigits = document.querySelectorAll(".digit")
const allOperatorBtn = document.querySelectorAll(".op")
const multiplyBtn = document.querySelector(".multiply")
const minusBtn = document.querySelector(".minus")
const plusBtn = document.querySelector(".plus")
const divideBtn = document.querySelector(".divide")
const equalsBtn = document.querySelector(".equals")
const clearBtn = document.querySelector(".clear")

let displayNumber;
let firstNum;
let secondNum;
let operator;
let result;
let isOperatorClicked = false;

function add(a, b) { return a + b }
function subtract(a, b) { return a - b }
function multiply(a, b) { return a * b }
function divide(a, b) {
    if (b === 0) return displayNumber.textContent = "ERROR"
    return a / b
}

// when digits are clicked
allDigits.forEach(digit => {
    digit.addEventListener("click", (e) => {
        if (isOperatorClicked) {
            if (displayNumber) {
                display.removeChild(displayNumber);
            }
            displayNumber = null;
            isOperatorClicked = false;
        }
        if (!displayNumber) {
            // we wanna check weather displayNumber already exists or not
            displayNumber = document.createElement("p");
            displayNumber.textContent = e.target.textContent;
            displayNumber.classList.add("number");
            display.appendChild(displayNumber);
        }
        else {
            displayNumber.textContent += e.target.textContent;
        }
    })
})

// when operator button is clicked
allOperatorBtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        if (!firstNum) {
            firstNum = +displayNumber.textContent
        }
        else if (operator) {
            evaluateResult()
            firstNum = result //THE MOST IMPORTANT LINE OF CODE
            // IF AN OPERATOR AND A FIRST NUM ALREADY EXIST
            // IT INVOKES THE EVALUATE FUNCTION WHICH EVALUATES THE SECOND NUM
            // AND SETS THE RESULT OF THAT EVALUATION AS THE NEW FIRST NUM
        }
        operator = e.target.textContent
        isOperatorClicked = true;
    })
})

// equal button 
equalsBtn.addEventListener("click", evaluateResult)

function evaluateResult() {
    // evaluate the second number
    secondNum = +displayNumber.textContent
    switch (operator) {
        case "*":
            result = multiply(firstNum, secondNum)
            break;

        case "-":
            result = subtract(firstNum, secondNum)
            break;

        case "+":
            result = add(firstNum, secondNum)
            break;

        case "/":
            result = divide(firstNum, secondNum)
            break;
    }
    displayNumber.textContent = result
}

// CLEAR BUTTON
clearBtn.addEventListener("click", () => {
    if (displayNumber !== null) {
        display.removeChild(displayNumber);
        displayNumber = null;
        firstNum = null
        secondNum = null
        operator = null
        result = null
    }
})