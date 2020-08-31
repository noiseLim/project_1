"use strict";

// всё, что мы получаем от пользователей - строка

// To String

// 1) Редко используемый способ, команда String
console.log(typeof(String(null)));  //string
console.log(typeof(String(5)));  //string

// 2) Конкатинация - сложение строк с чем-либо = строка.
console.log(typeof(5 + ''));  //string

const num = 5;
console.log('https;//vk.com/catalog/' + num); //устаревший способ, 
                                              //лучше использовать интерполяцию ()``)

const fontSize = 26 + 'px'; // пример для стилей

//To Number

// 1) Редко используемый способ, команда Number
console.log(typeof(Number('4')));  //number

//2) Унарный плюс, более удобен
console.log(typeof(+'4'));  //number

// 3) Метод parseInt (редко используется)
console.log(typeof(parseInt("15px", 10)));  //number (10 - десятичная система)


// Пример с использованием унарного плюса

let answ = +prompt("hello", "");

//To boolean

// 0, '' (пустая строка, без пробелов), null, undefined, NaN; - всё это false

// 1)
let switcher = null;

if (switcher) {
    console.log('Working...');
}

switcher = 1;

if (switcher) {
    console.log('Working...');
}

//2) команда Boolean
console.log(typeof(Boolean('4')));  //boolean

//3) два знака отрицания
console.log(typeof(!!'4'));  //boolean