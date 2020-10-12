"use strict";

// 1. Метод filter
// Фильтрует элементы внутри массивов. Возвращает новый массив

// const names = ['Ivan', 'Ann', 'Ksenia', "Voldemart"];

// const shortNames = names.filter(function(name) {
//     return name.length < 5;
// });

// console.log(shortNames);




// 2. Метод map
// Позволяет взять исходный массив и изменить каждый элемент внутри него.
// Возвращает новый массив

const answers = ['IvAn', 'AnnA', 'Hello'];

// const result = answers.map(item => {
//     return item.toLowerCase();
// });

const result = answers.map(item => item.toLowerCase());
// console.log(result);

/* тот же результат, только изменили существующий массив, но лучше так
не делать*/
let answers2 = ['IvAn', 'AnnA', 'Hello'];
answers2 = answers2.map(item => item.toLowerCase());



// 3. Методы every/some
/* some берет массив, перебирает его и если хотябы один элемент подходит
по какому-то условию (которую мы зададим), то он нам вернет - true, если нет -
false*/ 

//some
const some = [4, 'qwwq', 'sdasdsa'];

console.log(some.some(item => typeof(item) === 'number'));

/*every перебирает массив и если все элементы подходят по какому-то условию,
то - true, если нет - falce*/

//every
console.log(some.every(item => typeof(item) === 'number'));



// 4. Метод reduce
/*Проходит по всем элементам и схлопывает (складывает, вычетает, или ещё
что-то) весь массив*/
/* Имеет 2 аргумента. Является методом перебора. В нашем случает sum - сумма
каждого перебора, current - элемент массива.*/
// может принимать 3-ий аргумент - начальное значение
const arr = [3, 4, 6, 3, 1];

const res = arr.reduce((sum, current) => sum + current);
console.log(res);

//example 2
const arr2 = ['apple', 'pear', 'plum'];

const res2 = arr2.reduce((sum, current) => `${sum}, ${current}`);
console.log(res2);


//example
// получим массив с именами имеющими значение 'person'
const obj = {
    ivan: 'persone',
    ann: 'persone',
    dog: 'animal',
    cat: 'animal'
};

/* entries - преобразовал объект в массив с вложенными внутри
массивами каждого элемента 'ключ-значение
filter - отфильтровал массивы с значениями 'persone'
map - изменил массив, сформировав массив со значениями с индесом 0*/
const newArr = Object.entries(obj)
.filter(item => item[1] === 'persone')
.map(item => item[0]);

console.log(newArr);