// "use strict";

// const mess = (function(name) {
//     return 'Hello ' + name;
// }('Aleksey'));
// console.log(mess);

// console.log(this === window);
// this.MyString = 'Hello world';
// console.log(window.MyString);

// function sum(a, b) {
//     console.log(this === window); // => true
//     this.myNumber = 20; // add 'myNumber' property to global object
//     return a + b;
//  }
//  // sum() is invoked as a function
//  // this in sum() is a global object (window)
//  console.log(sum(15, 16));     // => 31
//  console.log(window.myNumber); // => 20

// function execute() {  
//     'use strict'; // activate the strict mode

//     function concat(str1, str2) {
//     // the strict mode is enabled too
//     console.log(this === undefined); // => true
//     return str1 + str2;
//     }
//     // concat() is invoked as a function in strict mode
//     // this in concat() is undefined
//     console.log(concat('Hello', ' World!'));
// }

// execute();

const myObj = {
    newObject: function (name) {
        return `Hello ${name}`;
    } 
};

console.log(myObj.newObject('Aleksey'));


const numbers = {
    a: 2,
    b: 3,
    c: {
        d: 5,
    }
};

function copy(newNum) {
    let firstNum = {};

    for (let key in newNum) {
        firstNum[key] = newNum[key];

    }
    return firstNum;
}

const newNumber = copy(numbers);

newNumber.b = 10;

console.log(numbers);
console.log(newNumber);


const array = [1, 2, 3];
const newArray = array.slice();

newArray[1] = 'dfs';

console.log(array);
console.log(newArray);

const obj = {
    a: 2,
    y: 4,
    k: {
        s: 9,
    }
};

const newObj = {...obj};

newObj.k.s = 0;
newObj.y = 0;

console.log(obj);
console.log(newObj);


const property = {
    height: 1024,
    weight: 1024,
    color: {
        bg: 'red',
        border: 'yellow'
    }
};

// let key;
// let i;

function showProperty(obj) {
    for (let key in obj) {
        if (typeof(obj[key]) === 'object') {
            for (let i in obj[key]) {
                console.log(`Значение ${i} содержит свойство ${obj[key][i]}`);
            }
        } else {
            console.log(`Значение ${key} содержит свойство ${obj[key]}`);
        }

    }
}

showProperty(property);
