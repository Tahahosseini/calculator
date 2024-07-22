const display = document.querySelector(".display")
const digits = document.querySelectorAll(".digit")
const operatorBtn = document.querySelectorAll(".op")
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

function add(a, b) { return roundTo5Decimal(a + b) }
function subtract(a, b) { return roundTo5Decimal(a - b) }
function multiply(a, b) { return roundTo5Decimal(a * b) }
function divide(a, b) {
    if (b === 0) return "ERROR"
    else {
        return roundTo5Decimal(a / b)
    }
}
function toPercent(n) {
    return n * 0.01
}

function roundTo5Decimal(n) {
    return Math.round(n * 100000) / 100000
}

function getDisplayNumText() {
    return +displayNumber.textContent
}

function updateDisplayNumText(n) {
    displayNumber.textContent = n
}

digits.forEach(digit => {
    digit.addEventListener("click", (e) => {
        if (isOperatorClicked) {
            display.removeChild(displayNumber)
            displayNumber = null
            isOperatorClicked = false
        }
        if (!displayNumber) {
            displayNumber = document.createElement("p")
            updateDisplayNumText(e.target.textContent)
            displayNumber.classList.add("number")
            display.appendChild(displayNumber)
        }
        else {
            displayNumber.textContent += e.target.textContent
        }
    })
})

backspace.addEventListener("click", () => {
    let lastCharRemoved = getDisplayNumText().toString().slice(0, -1)
    updateDisplayNumText(+lastCharRemoved)
})

percent.addEventListener("click", () => {
    updateDisplayNumText(toPercent(getDisplayNumText()))
})

decimal.addEventListener("click", (e) => {
    if (!isDecimal) {
        displayNumber.textContent += e.target.textContent
    }
    isDecimal = true
})

operatorBtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        if (!firstNum) {
            firstNum = getDisplayNumText()
        }
        else if (operator) {
            evaluateResult()
            firstNum = result // THE MOST IMPORTANT LINE OF CODE
            // if an operator and a first num already exist
            // it invokes the evaluate function which evaluates the second num
            // and sets the result of that evaluation as the new first num
            // SO MORE THAN A SINGLE PAIR OF NUMBERS CAN BE OPERATED
        }
        operator = e.target.textContent
        isOperatorClicked = true;
        isDecimal = false
    })
})

equalsBtn.addEventListener("click", evaluateResult)

function evaluateResult() {
    secondNum = getDisplayNumText()
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
    }
    updateDisplayNumText(result)
    isDecimal = false
}

clearBtn.addEventListener("click", () => {
    if (displayNumber) {
        display.removeChild(displayNumber)
        displayNumber = null
        firstNum = null
        secondNum = null
        operator = null
        result = null
        isDecimal = false
        isOperatorClicked = false
    }
})