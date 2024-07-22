const display = document.querySelector(".display")
const allDigits = document.querySelectorAll(".digit")
const allOperatorBtn = document.querySelectorAll(".op")
const multiplyBtn = document.querySelector(".multiply")
const minusBtn = document.querySelector(".minus")
const plusBtn = document.querySelector(".plus")
const divideBtn = document.querySelector(".divide")
const equalsBtn = document.querySelector(".equals")
const clearBtn = document.querySelector(".clear")
const decimal = document.querySelector(".decimal")
const percent = document.querySelector(".percentage")
const backspace = document.querySelector(".backspace")

let displayNumber;
let firstNum;
let secondNum;
let operator;
let result;
let isOperatorClicked = false;
let isDecimal = false

function add(a, b) { return a + b }
function subtract(a, b) { return a - b }
function multiply(a, b) { return a * b }
function divide(a, b) {
    if (b === 0) return displayNumber.textContent = "ERROR"
    else {
        let result = a / b
        return Math.round(result * 100000) / 100000
    }
}
function evaluatePercent(a) {
    return a * 0.01
}

// when digits are clicked
allDigits.forEach(digit => {
    digit.addEventListener("click", (e) => {   // when a digit is clicked
        if (isOperatorClicked) {               // if an operator has already been clicked
            display.removeChild(displayNumber) // remove the already existing digits
            displayNumber = null               // reset displayNumber so it can be created in next if statement
            isOperatorClicked = false          // reset isOperatorClicked so the code doesn't run until another operator click
        }
        if (!displayNumber) {
            // we wanna check weather displayNumber already exists or not
            displayNumber = document.createElement("p")
            displayNumber.textContent = e.target.textContent
            displayNumber.classList.add("number")
            display.appendChild(displayNumber)
        }
        else {
            displayNumber.textContent += e.target.textContent
        }
    })
})

let numberToString
let stringToNumber
// backspace logic
backspace.addEventListener("click", () => {
    numberToString = displayNumber.textContent.toString()
    numberToString = numberToString.slice(0, -1)
    stringToNumber = +numberToString
    displayNumber.textContent = stringToNumber
})

// percentage logic
percent.addEventListener("click", () => {
    displayNumber.textContent = evaluatePercent(displayNumber.textContent)
})

// decimal logic
decimal.addEventListener("click", (e) => {
    if (!isDecimal) {
        displayNumber.textContent += e.target.textContent
    }
    isDecimal = true
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
        isDecimal = false
    })
})

// equal button 
equalsBtn.addEventListener("click", evaluateResult)

function evaluateResult() {
    // evaluate the second number
    secondNum = +displayNumber.textContent
    switch (operator) {
        case "×":
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

        // case "%":
        //     result = evaluatePercent(firstNum)
        //     break;
    }
    displayNumber.textContent = result
    isDecimal = false
}

// CLEAR BUTTON
clearBtn.addEventListener("click", () => {
    if (displayNumber !== null) {
        display.removeChild(displayNumber)
        displayNumber = null
        firstNum = null
        secondNum = null
        operator = null
        result = null
        isDecimal = false
    }
})