"use strict";

/*Функция может вызываться 4-мя способами*/

// 1
/*Если фун-я запускается таким образом, то она ссылается
на контекст и этот контекст будет ссылаться на 
глобальный объект window. Это правило верно для кода
без строгого режима (use strict). Но если строгий режим
включен, то this встанет в позицию undefined*/
// function showThis() {
//     console.log(this);
// }
// showThis();


/* ф-я будет работать за счет замыкания (сначала ищет
переменные внутри себя, не находит и обращается выше
к родительской функции)*/
// function showThis(a, b) {
//     console.log(this);
//     function sum () {
//         console.log(this);
//         // return this.a + this.b; //не сработает
//         return a + b;
//     }
//     console.log(sum());
// }
// showThis(4, 5);



// 2 
/*получили тот объект в котором находится этот метод.
Если используем метод внутри объекта, то контекст
вызова всегда будет ссылаться на этот объект*/
// const obj = {
//     a: 20,
//     b: 15,
//     sum: function() {
//         console.log(this);
//     }
// };
// obj.sum();


/*но если внутри этого метода будет создана фун-я, 
которая внутри сеюя будет обращаться к контексту вызова, то
мы получим undefined, потому что это простой вызов
фун-и и он уже не относится к методу*/
// const obj = {
//     a: 20,
//     b: 15,
//     sum: function() {
//         function shout(){
//             console.log(this);
//         }
//         shout();
//     }
// };
// obj.sum();



// 3
// 3-ий способ использования функции через оператор new
/*чтобы записать какое-то свойство мы обращаемся к 
какому-то объекту. Внутри фу-ии конструкторов 
контекст вызова для всех методов и свойств будет 
только что созданный новый объект, в данном случае 
это ivan, т.е. вместо this по сути подставляется 
новый объект new User и в свойство name передаем то 
значение, которое передали при создании этого объекта.
Даже если появятся какие-то методы, они все равно
будут ссылаться на новый объект*/
// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function() {
//         console.log('Hello ' + this.name);
//     };
// }
// let ivan = new User('Ivan', 23);
// ivan.hello();


//4
/*Ручное присвоение this любой функции. Функция 
приобрела свой контекст благодаря использованию 
методов call и apply (указали функции работать с
объектом user и использовать его данные*/
// function sayName(surname) {
//     console.log(this); //{name:"John"}
//     console.log(this.name + surname); //JohnSmith
// }

// const user = {
//     name: 'John'
// };

// //разницы в методах нет, разница только в синтаксисе
// sayName.call(user, 'Smith');
// sayName.apply(user, ['Smith']);

// /*метод bind
// создает НОВУЮ функцию, связанную с определенным
// контекстом*/
// function count(num) {
//     return this*num;
// }
// const double = count.bind(2);
// console.log(double(3));
// console.log(double(13));

/* 
1) Обычная функция: this = window, но если
use strict - undefined
2) Контекст у методов объекта - сам объект
3) this в конструкторах и классах - это новый
экземпляр объекта
4) Ручная привязка This: call, apply, bind
*/

const btn = document.querySelector('button');

/*в такой форме записи (function()) контекст вызова
будет сам элемент на котором произошло событие. 
По сути this означает тоже самое, что event.target*/
btn.addEventListener('click', function() {
    console.log(this);
    this.style.backgroundColor = 'red';
});