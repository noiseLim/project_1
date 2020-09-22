"use strict";

const btns = document.querySelectorAll('button');

//свойство length показывает, что у первой кнопки есть 2 класса
// console.log(btns[0].classList.length);  


/*метод item позволяет получить класс который 
располагается под определенным индексом*/
// console.log(btns[0].classList.item(1));  

//добавили класс (можем добавлять несколько)
// console.log(btns[0].classList.add('red', 'sjdhsdf'));  

//удаляем класс
// console.log(btns[0].classList.remove('blue'));  

/*метод toggle. если класс есть на элементе, то он будет убран. 
Если нет - добавлен*/
// console.log(btns[0].classList.toggle('blue'));


/* Метод contains позволяет проверять наличие класса на определенном элементе
определенного класса и вовращает нам булиновое значение*/
// console.log(btns[1].classList.add('red')); //добавили класс для проверки

// if (btns[1].classList.contains('red')) {
//     console.log('red');
// }


/*по клику на первую кнопку проверяем есть ли во второй кнопке класс red,
если нет, то добавляем. Если есть, то убираем*/
// btns[0].addEventListener('click', () => {
//     if (!btns[1].classList.contains('red')) {
//         btns[1].classList.add('red');
//     } else {
//         btns[1].classList.remove('red');
//     }
// });

//второй вариант записи
btns[0].addEventListener('click', () => {
    btns[1].classList.toggle('red');
});

/*устаревшее свойство className(не стоит его использовать). 
содержит классы в качестве одной строки*/
console.log(btns[0].className);