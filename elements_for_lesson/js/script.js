'use strict';

/*Методы, которые позволяют нам взаимодействовать со страницей, для получения их 
в своем JavaScript*/


//метод получения документа по id
const box = document.getElementById('box');

console.log(box);

//метод получения документа по tag
const btns = document.getElementsByTagName('button')[1]; /* все кнопки buttons добавляются 
в массив, чтобы обратиться к определенной добавляем индекс, даже если элемент один
единственный он все равно будет добавлен в массив (и вы не сможете изменить стиль и 
прочее), добавив индекс [0] мы можем этого избежать*/

console.log(btns);
// console.log(btns[0]);

//метод получения документа по class(необходимо использовать индексы)
const circles = document.getElementsByClassName('circle');
console.log(circles);


/*имеет метод forEach. имеет возможность работать с множеством элементов. необходимо
ставить '.', т.к. метод работает с селекторами*/
const hearts = document.querySelectorAll('.heart');
console.log(hearts);

//при помощи forEach выводит поочередно все элементы в псевдомассиве hearts
hearts.forEach(item => {
    console.log(item);
});

/* позволяет получить только один элемент со страницы, причем берет первый, который 
попал под сочетание этого селектора. необходимо ставить '.', т.к. метод работает 
с селекторами*/
const oneHeart = document.querySelector('.heart');
// const oneHeart = document.querySelector('.circle');
console.log(oneHeart);