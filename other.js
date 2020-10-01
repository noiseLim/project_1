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