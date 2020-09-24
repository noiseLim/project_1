//setTimeout первая форма записи
// const timerId = setTimeout(function() {
//     console.log('Hello');
// }, 3000);


//вторая форма записи (используется не часто)
// const timerId = setTimeout(function(text) {
//     console.log(text);
// }, 3000, 'Hello');

//или передаем уже готовую функцию
// const timerId = setTimeout(logger, 3000);

// function logger () {
//     console.log('Hello');
// }

/*setTimeout Может работать и без переменной (но помещая в переменную
мы задаем уникальный интервал)*/

//команда останавливает запуск setTimeout
// clearInterval(timerId);

const btn = document.querySelector('.btn');
let timerId,
    i = 0;

// btn.addEventListener('click', () => {
//     const timeId = setTimeout(logger, 2000);
//     timerId = setInterval(logger, 500); //использует интервал
// });

// clearInterval(timerId); 
/*переменная находится локано и не может быть использована
решаем проблему объявив её глобально ничего ей не присваивая
после клика в неё записывается значение (перезаписав переменную)*/

// function logger () {
//     if (i === 3) {
//         clearInterval(timerId);
//     }
//     console.log('Hello');
//     i++;
// } 
/* в случаае если в logger описана тяжелая функция для выполнения 
которой, например нужно 3 секунды, скрипт сработает так - выполняется 
задержка 500 мс, потом скрипт 3 сек., после чего прописанная задержка
500 мс не выполнится, она будет поглощена долгим скриптом*/

//чтобы этого избежать используем таймер внутри таймера
// let id = setTimeout (function log () {
//     console.log('Hello');
//     id = setTimeout (log, 500);
// }, 500);
/* в таком случае таймер 500 мс будет запускаться строго после выполнения
функции, в независимости от времени её выполнения*/

//пример анимации на js
function myAnimation () {
    const elem = document.querySelector('.box');
    let pos = 0;

    const id = setInterval(frame, 10);
    function frame () {
        if (pos == 300) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }

    }
}

btn.addEventListener('click', myAnimation);