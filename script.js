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
