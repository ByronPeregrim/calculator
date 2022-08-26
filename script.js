const smallDisplay = document.querySelector('#small-display');
const largeDisplay = document.querySelector('#large-display');

const clearButton = document.querySelector('#clear-button');
const deleteButton = document.querySelector('#delete-button');
const sevenButton = document.querySelector('#seven-button');
const eightButton = document.querySelector('#eight-button');
const nineButton = document.querySelector('#nine-button');
const divideButton = document.querySelector('#divide-button');
const fourButton = document.querySelector('#four-button');
const fiveButton = document.querySelector('#five-button');
const sixButton = document.querySelector('#six-button');
const multiplyButton = document.querySelector('#multiply-button');
const oneButton = document.querySelector('#one-button');
const twoButton = document.querySelector('#two-button');
const threeButton = document.querySelector('#three-button');
const subtractButton = document.querySelector('#subtract-button');
const decimalButton = document.querySelector('#decimal-button');
const zeroButton = document.querySelector('#zero-button');
const equalButton = document.querySelector('#equal-button');
const addButton = document.querySelector('#add-button');

const btns = document.getElementsByClassName("button");
const numbers = document.getElementsByClassName("number");

let num = 0;
let a = 0;
let b = 0;
let operator = "";
let sum = 0;

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('clicked');
}

for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        this.classList.add("clicked");
    });
    btns[i].addEventListener('transitionend', removeTransition);
}

for (var i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener("click", function () {
        smallDisplay.textContent += this.textContent;
        num += this.textContent;
        num = +num;
    });
}

deleteButton.addEventListener('click', function () {
    smallDisplay.textContent = smallDisplay.textContent.slice(0, -1);
    num = Math.floor(num / 10);
})

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operator, a, b) {
    switch (operator) {
        case "+": 
            return add(a, b);
            break;
        case "-":
            return subtract(a, b);
            break;
        case "*":
            return multiply(a, b);
            break;
        case "/":
            if (b === 0) {
                return largeDisplay.textContent = "Cannot divide by 0.";
                break;
            }
            else {
                return divide(a, b);
                break;
            }
        default:
            return "OPERATE FUNCTION ERROR";
    }
}

addButton.addEventListener("click", function () {
    if (!(largeDisplay.textContent)) {
        a = num;
    }
    else {
        a = sum;
    }
    smallDisplay.textContent += " " + this.textContent + " ";
    operator = this.textContent;
    num = 0;
})



subtractButton.addEventListener("click", function () {
    if (!(largeDisplay.textContent)) {
        a = num;
    }
    else {
        a = sum;
    }
    smallDisplay.textContent += " " + this.textContent + " ";
    operator = this.textContent;
    num = 0;
})

multiplyButton.addEventListener("click", function () {
    if (!(largeDisplay.textContent)) {
        a = num;
    }
    else {
        a = sum;
    }
    smallDisplay.textContent += " * ";
    operator = "*";
    num = 0;
})

divideButton.addEventListener("click", function () {
    if (!(largeDisplay.textContent)) {
        a = num;
    }
    else {
        a = sum;
    }
    smallDisplay.textContent += " " + this.textContent + " ";
    operator = "/";
    num = 0;
})

equalButton.addEventListener('click', function () {
    if ((a || a === 0) && (num || num === 0) && operator){
        b = num;
        sum = operate(operator, a, b);
        sum = +sum.toFixed(8);
        largeDisplay.textContent = sum;
    }
    else {
        largeDisplay.textContent = "ERROR";
    }
})

clearButton.addEventListener('click', function () {
    num = 0;
    sum = 0;
    a = 0;
    b = 0;
    largeDisplay.textContent = "";
    smallDisplay.textContent = "";
})

decimalButton.addEventListener('click', function () {
    if (num % 1 === 0) {
        smallDisplay.textContent += this.textContent;
        num += this.textContent;
    }    
})

deleteButton.addEventListener('click', function() {

})

window.addEventListener('keydown', function(e) {
    const key = document.querySelector(`button[data-key="${e.keyCode}"]`);
    if(!key) return;
    if (key.classList.contains('number')) {
    smallDisplay.textContent += key.textContent;
    num += key.textContent;
    num = +num;
    }
    else if (key.classList.contains('add')) {
        if (!(largeDisplay.textContent)) {
            a = num;
        }
        else {
            a = sum;
        }
        smallDisplay.textContent += " " + key.textContent + " ";
        operator = key.textContent;
        num = 0;
    }
    else if (key.classList.contains('multiply')) {
        if (!(largeDisplay.textContent)) {
            a = num;
        }
        else {
            a = sum;
        }
        smallDisplay.textContent += " * ";
        operator = "*";
        num = 0;
    }
    else if (key.classList.contains('divide')) {
        if (!(largeDisplay.textContent)) {
            a = num;
        }
        else {
            a = sum;
        }
        smallDisplay.textContent += " " + key.textContent + " ";
        operator = "/";
        num = 0;
    }
    else if (key.classList.contains('subtract')) {
        if (!(largeDisplay.textContent)) {
            a = num;
        }
        else {
            a = sum;
        }
        smallDisplay.textContent += " " + key.textContent + " ";
        operator = key.textContent;
        num = 0;
    }
    else if (key.classList.contains('equal')) {
        if ((a || a === 0) && (num || num === 0) && operator){
            b = num;
            sum = operate(operator, a, b);
            sum = +sum.toFixed(8);
            largeDisplay.textContent = sum;
        }
        else {
            largeDisplay.textContent = "ERROR";
        }
    }
    else if (key.classList.contains('decimal')) {
        if (num % 1 === 0) {
            smallDisplay.textContent += key.textContent;
            num += key.textContent;
        }   
    }
    else if (key.classList.contains('clear')) {
        num = 0;
        sum = 0;
        a = 0;
        b = 0;
        largeDisplay.textContent = "";
        smallDisplay.textContent = "";
    }
    else if (key.classList.contains('delete')) {
        
    }
})