function add(a, b) { return a + b }
function subtract(a, b) { return a - b }
function multiply(a, b) { return a * b }
function divide(a, b) {
    if (b === 0) return displayNumber.textContent = "ERROR"
    return a / b
}

// function operate(operator, a, b) {
//     switch (operator) {
//         case "+":
//             return add(a, b)

//         case "-":
//             return subtract(a, b)

//         case "*":
//             return multiply(a, b)

//         case "/":
//             return divide(a, b)
//     }
// }

const display = document.querySelector(".display")
const clearBtn = document.querySelector(".clear")
const allDigits = document.querySelectorAll(".digit")

let displayNumber = null

allDigits.forEach(digit => {
    digit.addEventListener("click", (e) => {
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

const allOperatorBtn = document.querySelectorAll(".op")
const multiplyBtn = document.querySelector(".multiply")
const minusBtn = document.querySelector(".minus")
const plusBtn = document.querySelector(".plus")
const divideBtn = document.querySelector(".divide")
const equalsBtn = document.querySelector(".equals")





// allOperatorBtn.forEach((btn) => {
//     btn.addEventListener("click", (e) => {
//         operateorBtnTarget = e.target
//         firstNum = document.querySelector(".number")
//         firstNum = +firstNum.textContent
//         display.removeChild(displayNumber)
//         displayNumber = null
//         operatorBtnCount++
//     })
// })

let firstNum;
let secondNum;
let operateorBtnTarget;
let result;

function evaluateResult() {
    // evaluate the second number
    secondNum = document.querySelector(".number")
    secondNum = +secondNum.textContent

    switch (operateorBtnTarget) {
        case multiplyBtn:
            result = multiply(firstNum, secondNum)
            break;

        case minusBtn:
            result = subtract(firstNum, secondNum)
            break;

        case plusBtn:
            result = add(firstNum, secondNum)
            break;

        case divideBtn:
            result = divide(firstNum, secondNum)
            break;
    }
    displayNumber.textContent = result
}

// equal button 
equalsBtn.addEventListener("click", evaluateResult)


let operatorBtnCount = 0
allOperatorBtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        if (operatorBtnCount < 1) {
            operateorBtnTarget = e.target
            firstNum = document.querySelector(".number")
            firstNum = +firstNum.textContent
            display.removeChild(displayNumber)
            displayNumber = null
            operatorBtnCount++
        }
        else if (operatorBtnCount >= 1) {
            evaluateResult()
        }
    })
})


// CLEAR BUTTON
clearBtn.addEventListener("click", () => {
    if (displayNumber !== null) {
        display.removeChild(displayNumber);
        displayNumber = null;
        firstNum = null
        secondNum = null
        operatorBtnCount = 0
    }
})
//