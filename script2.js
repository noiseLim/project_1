"use strict"

if (4 == 8) {
    console.log('OK!');
} else {
    console.log('NO!');
}

const num = 50;
if (num < 49) {
    console.log('Error');
} else if (num > 100) {
    console.log('Много');
} else {
    console.log('Yes');
}


const num2 = 50;

(num2 == 49) ? console.log('Yes') : console.log('NO')

let num3 = 50;

switch (num3) {
    case 49:
        console.log('Неверно');
        break;
    case 100:
        console.log('Неверно');
        break;
    case 42:
        console.log('Yes');
        break;
    default:
        console.log('Не в этот раз');
        break;
}

let num = 50;
// while (num < 55) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// } 
// while (num < 55);

// for (let i = 1; i < 8; i++) {
//     console.log(i);
// }

for (let i = 1; i < 8; i++) {
    console.log(num);
    num++;
}

for (let i = 1; i < 10; i++) {
    if (i == 6) {
        // break;
        continue;
    }
    console.log(i);
}

// ///////////Функции///////////////

// function declaration (работает до того как будет объявлена)
let num = 20;

function showFirstMessage(text) {
    console.log(text);
    let num = 10;
}
showFirstMessage('Hello world');

function calc(a, b) {
    return (a + b);
}

console.log(calc(5, 7));

function ret() {
    let num = 30;
    return = num;
}

const anotherNum = ret();
console.log(anotherNum);

// ////////////function expression
// создается только тогда, когда до нее доходит поток кода, ее
// можно вызвать только после объявления

const logger = function() {
    console.log('hello');
};

logger();

// Стрелочная функция

const calc = (a, b) => a + b;
const calc2 = (a, b) => {return a + b};
const calc2 = (a, b) => {
    console.log('1');
    return a + b;
};

console.log(calc(3, 2));

// Методы и свойства строк и чисел///////////////////////

const str = 'test';
const arr = [1, 2, 3];

console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str);

const fruit = 'Some fruit';
// console.log(fruit.indexOf('fruit'));
console.log(fruit.indexOf('i'));

const logg = 'Hello world';

console.log(logg.slice(6, 11));
console.log(logg.slice(6));
console.log(logg.slice(-5, -1));
console.log(logg.substring(6, 11));
console.log(logg.substr(6, 5)); // Второй аргумент говорит сколько символов вырезать

const num = 12.49;
console.log(Math.round(num)); // 12

const test = '12.2px';
console.log(parseInt(test)); // 12
console.log(parseFloat(test)); // 12.2