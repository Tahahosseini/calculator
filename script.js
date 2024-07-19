function add(a, b) { return a + b }
function subtract(a, b) { return a - b }
function multiply(a, b) { return a * b }
function divide(a, b) { return a / b }

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

// we wanna check weather displayNumber already exists or not
let displayNumber;

allDigits.forEach(digit => {
    digit.addEventListener("click", (e) => {
        if (!displayNumber) {
            // we check that if display number isn't created yet (it's the first click)
            // Create a new <p> element for the number
            displayNumber = document.createElement("p");
            displayNumber.textContent = e.target.textContent;
            displayNumber.classList.add("number");
            display.appendChild(displayNumber);
        } else {
            // Update the text content for the next clicks
            displayNumber.textContent += e.target.textContent;
        }
    });
});

clearBtn.addEventListener("click", () => {
    // Clear the display and reset the displayNumber variable
    display.innerHTML = "";
    displayNumber = null;
});

// TO DO
// MAKE IT SO WHEN AN OPERATOR BUTTON IS CLICKED
const allOperatorBtn = document.querySelectorAll(".op")
const multiplyBtn = document.querySelector(".multiply")
const minusBtn = document.querySelector(".minus")
const plusBtn = document.querySelector(".plus")
const divideBtn = document.querySelector(".divide")


allOperatorBtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        switch (e.target) {
            case multiplyBtn:
                let firstNum = document.querySelectorAll("p")
                firstNum = firstNum.textContent
                console.log(firstNum)
        }
    })
})


// THE NUMBERS THAT ALREADY EXIST
// GET SENT AS THE FIRST NUMBER TO THE REQUIRED OPERATOR FUNCTION
// THE DISPLAY IS CLEARED
// THE SECOND NUMBER IS INPUTTED AND IS THE SECOND NUMBER IN THE FUNCTION
// AND WHEN THE EQUALS IS CLICKED
// THE VALUE THAT THE FUNCTION RETURNED IS DISPLAYED