"use strict";

//Регулярное выражение состоит из двух частей. Паттерн (шаблон) и флаги

// new RegExp('pattern', 'flags'); //способ создания, которым никто не пользуется
// /pattern/f

//метод search

// const ans = prompt('Вежите ваше имя');

// const reg = /n/;

//Поиск по регулярному выражению внутри строки
// console.log(ans.search(reg)); //При вводе Ann результат - 1, он же индекс


//Флаги
/*
i - поиск в независимости от регистра
g - поиск сразу нескольких вхождений
m - включает многострочный режим
*/

// const reg = /n/i;
// console.log(ans.search(reg));

//Флаги работают не со всеми методами

// используя метод match мы получаем массив
// console.log(ans.match(reg)); // ["n", index: 1, input: "ann", groups: undefined]

//но если комбинировать флаги, массив приобретает такой вид
// const reg = /n/ig;
// console.log(ans.match(reg)); // ["N", "N", "N"] при вводе ANNN



// const pass = prompt('Password');

// точка(.) означает, что мы берем все элементы, которые попадут в строку
//значение выражения = мы берем все символы и заменяем их на звездочку(*)
// console.log(pass.replace(/./g, "*"));

// экранирование точки
// console.log(pass.replace(/\./g, "*"));

// заменили '-' на ':' 
// console.log('12-34-00'.replace(/-/g, ':')); 



// Свои методы регулярных выражений
// test - Ищет совпадения. Возвращает true/false

// const ans = prompt('Вежите ваше имя');

// const reg = /n/ig;
//test ищет совпадения с ans внутри reg
// console.log(reg.test(ans));



//классы
/*
\d - ищем цифры
\w - ищем все слова (буквы)
\s - ищем все пробелы
*/

// const ans = prompt('Вежите ваше число');
// const reg = /\d/;
// console.log(ans.match(reg)); 
//Результат ["4", index: 6, input: "fsdfsd4dds", groups: undefined]

// const reg = /\d/g;
// console.log(ans.match(reg)); // ввели - 200px, результат - ["2", "0", "0"]

//можно комбинировать запросы
const example = 'My name is R2D2';
console.log(example.match(/\w\d\w\d/i));
//["R2D2", index: 11, input: "My name is R2D2", groups: undefined]


//Обратные классы
/*
\D - не числа
\W - Не буквы
*/

// ищем все не буквы
const example2 = 'My name is R2D2';
console.log(example2.match(/\W/ig));
// получили пробел [" ", index: 2, input: "My name is R2D2", groups: undefined]
//или если с флагом глобальности - g
// [" ", " ", " "]

const example3 = 'My name is R2D2';
console.log(example3.match(/\D/ig));
// получили не числа 
//["M", "y", " ", "n", "a", "m", "e", " ", "i", "s", " ", "R", "D"]