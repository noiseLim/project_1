'use strict';

const box = document.querySelector('.box'),
      btn = document.querySelector('button');


/* получили ширину и высоту (просто число) нашего
модального окна, но с вычетом полосы scroll*/
// const width = box.clientWidth; // 383
// const height = box.clientHeight; // 333

/* получили ширину и высоту в (просто число) нашего
модального окна, но с учетом полосы scroll*/
// const width = box.offsetWidth; // 450
// const height = box.offsetHeight; // 350

/* получили ширину и высоту в (просто число) нашего
модального окна, но если ширина проскролена
(отсутствует), то ширина будет с вычетом её 
неактивной части. По вертикали же получаем полную
высоту с учетом всех прокруток*/
const width = box.scrollWidth; // 383
const height = box.scrollHeight; // 1352

console.log(width, height);

// по клику на button раскрыли модальное окно
btn.addEventListener('click', () => {
    // box.style.height = box.scrollHeight + 'px';
    // по клику на button раскрыли модальное окно

    console.log(box.scrollTop);
    /*можем увидеть сколько пользователь отмотал
    пикселей по клику*/
});

//метод получает координаты объекта
console.log(box.getBoundingClientRect());

//можем получить отдельное значение
console.log(box.getBoundingClientRect().top);


// можем получать стили псевдоэлементов
const style = window.getComputedStyle(box);
console.log(style.display);


console.log(document.documentElement.clientWidth);
console.log(document.documentElement.scrollTop);