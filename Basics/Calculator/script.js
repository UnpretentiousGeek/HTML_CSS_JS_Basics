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

let var_1, var_2, opr;


function operate(var_1, var_2, opr) {

    switch (opr) {
        case "+":
            return add(var_1, var_2);

        case "-":
            return subtract(var_1, var_2);

        case "*":
            return multiply(var_1, var_2);

        case "/":
            if (var_2 == 0) {
                return ("can't divide by zero bro!")
            }
            return Math.ceil(divide(var_1, var_2) * 1000) / 1000;
    }
}

const digits = document.querySelector('.digits');
const operators = document.querySelector('.operators');

const display = document.getElementById('display');

let first = "";
let second = "";
let oper = "";
let flag = 0;

[...digits.children].forEach(child => {
    child.addEventListener('click', () => {
        if (flag == 0) {
            display.value = first + child.textContent;
            first = first + child.textContent;
        }

        if (flag == 1) {
            display.value = second + child.textContent;
            second = second + child.textContent;
        }

    })
});

[...operators.children].forEach(child => {
    child.addEventListener('click', () => {
        if (flag == 1 && second != "") {


            first = operate(Number(first), Number(second), oper);
            display.value = first;
            second = "";
        }

        oper = child.textContent;
        flag = 1;
    })
});

const cal = document.getElementById('calculate');

cal.addEventListener('click', () => {
    if (first && second && oper) {
        display.value = operate(Number(first), Number(second), oper);
    }

})


function clear_display() {
    display.value = "";
}

const clear = document.getElementById('clear');
clear.addEventListener('click', () => {
    clear_display();
    first = "";
    second = "";
    oper = "";
})

