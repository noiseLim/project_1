"use strict";

// function* generator() {
//     yield 'S';
//     yield 'c';
//     yield 'r';
//     yield 'i';
//     yield 'p';
//     yield 't';
// }

// const str = generator();

/*Чтобы вызвать следующий шаг генератора необходимо использовать
встроеный метод next*/

// console.log(str.next());
// console.log(str.next());
// console.log(str.next());
// console.log(str.next());
// console.log(str.next());
// console.log(str.next());
// console.log(str.next());


/* Когда функция отрабатывает она отдает нам объект
{ value: 't', done: false }
Если количество вызовов next равно кол-ву выражений внутри 
генератора + 1, то { value: undefined, done: true }
*/

// console.log(str.next().value); // возвращает только значение



function* count(n) {
    for (let i = 0; i < n; i++) {
        yield i;
    }
}

const counter = count(7);

// console.log(counter.next().value); // 0
// console.log(counter.next().value); // 1
// console.log(counter.next().value); // 2
/*сколько раз вызвали функцию столько итераций срабатывает цикл, 
дальше просто ждет следующего вызова*/


//вместо ручного вызова и если нужно вызвать максимальное кол-во раз
for (let k of count(7)) {
    console.log(k);
}
