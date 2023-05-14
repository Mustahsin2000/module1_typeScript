"use strict";
const crush1 = {
    name: 'kakas',
    age: 45,
    profession: 'web developer',
    address: 'kakatua',
};
const crush2 = {
    name: 'koli',
    age: 45,
    profession: 'web developer',
    address: 'poga',
};
const courseName = 'web development';
const calculate = (number1, number2, operation) => {
    return operation(number1, number2);
};
calculate(10, 20, (x, y) => x + y);
calculate(10, 20, (x, y) => x - y);
calculate(10, 20, (x, y) => x * y);
calculate(10, 20, (x, y) => x / y);
