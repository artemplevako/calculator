const display = document.querySelector('.display');

const digits = document.querySelectorAll('.digit');

digits.forEach(digit => digit.addEventListener('click', e =>
    display.textContent += e.target.textContent
));

const operations = document.querySelectorAll('.operation');

operations.forEach(operation => operation.addEventListener('click', e => {
    if (display.textContent === '' ||
            display.textContent.split(' ').length > 1) return;
    display.textContent += ' ' + e.target.textContent + ' ';
}));

const equals = document.querySelector('#equals');

equals.addEventListener('click', e => {
    const [lhs, operand, rhs] = display.textContent.split(' ');
    if (typeof rhs === 'undefined') return;
    display.textContent = round(operate(+lhs, +rhs, operand), 4);
});

const clear = document.querySelector('#clear');

clear.addEventListener('click', e => display.textContent = '');

function round (n, decimalDigits) {
    return Math.round(n * 10**decimalDigits) / 10**decimalDigits;
}

function add (a, b) {
    return a + b;
}

function subtract (a, b) {
    return a - b;
}

function multiply (a, b) {
    return a * b;
}

function divide (a, b) {
    return a / b;
}

function operate (lhs, rhs, operator) {
    switch (operator) {
        case '+': return add(lhs, rhs);
        case '-': return subtract(lhs, rhs);
        case '*': return multiply(lhs, rhs);
        case '/': return divide(lhs, rhs);
    }
}
