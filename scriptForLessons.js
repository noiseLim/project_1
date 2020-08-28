"use strict"

// 13. Условия/////////////////

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

// 14. Циклы///////////////////////

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

// 16. ///////////Функции///////////////

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

// 17. Методы и свойства строк и чисел///////////////////////

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

// 19. Callback-функции///////////////////

function first () {
    // Do something
    setTimeout(function() {
        console.log(1);
    }, 500);
}

function second() {
    console.log(2);
}

first();
second();



function learnJS(lang, collback) {
    console.log(`Я учу ${lang}!`);
    collback();
}
learnJS('JavaScript', function() {
    console.log('Я молодец!')
});



function learnJS(lang, collback) {
    console.log(`Я учу ${lang}!`);
}

function done() {
    console.log('Я молодец!');
}

learnJS('JavaScript', done);

// 20. Объекты, деструктизация объектов/////////////////

const option = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'red',
        background: 'green'
    },
    makeTest: function() {
        console.log('test');
    }
};
option.makeTest();

const {border, background} = option.colors;
console.log(border);

// console.log(Object.keys(option).length);
// console.log(option["colors"]["border"])
// console.log(option.name);
// delete option.name;
// console.log(option);
let counter = 0;
for (let key in option) {
    if (typeof(option[key]) === 'object') {
        for (let i in option[key]) {
            console.log(`Свойство ${i} имеет значение ${option[key][i]}`);
            counter++;
        }
    } else {
        console.log(`Свойство ${key} имеет значение ${option[key]}`);
        counter++;
    }
}
console.log(counter);




const options = {
    name: 'Aleksey',
    height: 1024,
    weight: 515,
    colors: {
        border: 'red',
        bg: 'black'
    }
};


for (let key in options) {
    if (typeof(options[key]) === 'object') {
        for (let i in options[key]) {
            console.log(`Это свойство ${i} содержит ${options[key][i]}`);
        }
    } else {
        console.log(`Это свойство ${key} содержит ${options[key]}`);
    }
}

// 21.Массивы и псевдомассивы//////////////

const arr = [1, 2, 3, 6, 8];

// arr.pop(); //удаляет последний элемент
// arr.push(10); //добавляет элемент в конец массива

console.log(arr);

for (i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

for (let value of arr) {
    console.log(value);
}

const arr = [4, 1, 7, 2, 3, 6, 8];


// arr[99] = 0;
// console.log(arr.length); // 100
// console.log(arr); // 94 пустые ячейки

arr.forEach(function(item, i, arr) {
    console.log(`${i}: ${item} внутри массива [${arr}]`)
});

const str = prompt('шо там, дядя?');
const product = str.split(', ');
product.sort();
console.log(product.join(', '));


const arr = [4, 15, 7, 21, 3, 16, 8];
arr.sort(compareNum);
console.log(arr);

function compareNum(a, b) {
    return a - b;
}

// 22. Передача по ссылке или по значению, Spread оператор (ES6…

let a = 5,
      b = a;

b = b + 5;
console.log(b);
console.log(a);

const obj = {
    a: 5,
    b: 1
};

// const copy = obj; //ссылка

// copy.a = 10;

// console.log(copy);
// console.log(obj);

function copy(mainObj) { //поверхностная копия (не действует на вложенные объекты)
    let copyObj = {};
    let key;
    for (key in mainObj) {
        copyObj[key] = mainObj[key];
    }
    return copyObj
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newNumbers = copy(numbers);
newNumbers.a = 10;
// newNumbers.c.x = 10; // вложенный объект остался ссылкой

console.log(newNumbers);
console.log(numbers);

const add = {
    d: 17,
    e: 50
};

//объединение двух объектов (независимая копия, не считая свойства с:)
console.log(Object.assign(numbers, add));


//создается новый объект {}, в него помещается старый объект, итог в клоне лежит 
//поверхностная копия объекта)
const clone = Object.assign({}, add); 
clone.d = 20;

console.log(add);
console.log(clone);

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice(); // независимая копия объекта

newArray[1] = 'f';
console.log(newArray);
console.log(oldArray);


//Spread. Ещё один способ создания копий. оператор разворота. "..." разворачивает
//структуру на отдельные значения
const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'livejournal', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'facebook'];

    console.log(internet);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7]; //все аргументы передаются в log. 
//Массив разложился на три элемента
log(...num);

//Spred Оператор

const array = ['a', 'b']; //поверхностная копия
const newAarray = [...array];

const q = {
    one: 1,
    two: 2
};
const newObj = {...q}; // поверхностная копия

// console.log(newAarray);
// console.log(array);
console.log(newObj);