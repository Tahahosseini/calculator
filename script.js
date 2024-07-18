function add(a, b) { return a + b }
function subtract(a, b) { return a - b }
function multiply(a, b) { return a * b }
function divide(a, b) { return a / b }
let firstNum;
let operator;
let secondNum;

function operate(operator, a, b) {
    switch (operator) {
        case "+":
            return add(a, b)

        case "-":
            return subtract(a, b)

        case "*":
            return multiply(a, b)

        case "/":
            return divide(a, b)
    }
}

const display = document.querySelector(".display")
const clearBtn = document.querySelector(".clear")
const allDigits = document.querySelectorAll(".digit")

allDigits.forEach(digit => {
    digit.addEventListener("click", (e) => {
        let displayNumber = document.createElement("p");
        displayNumber.textContent = e.target.textContent;
        displayNumber.classList.add("number");
        display.appendChild(displayNumber);
    });
});

clearBtn.addEventListener("click", () => {
    let allNumbers = display.querySelectorAll(".number")
    allNumbers.forEach((number) => {
        display.removeChild(number)
    })
})

