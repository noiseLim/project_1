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

btn.addEventListener('click', () => {
    // const timeId = setTimeout(logger, 2000);
    timerId = setInterval(logger, 2000); //использует интервал
});

clearInterval(timerId); 
/*переменная находится локано и не может быть использована
решаем проблему объявив её глобально ничего ей не присваивая
после клика в неё записывается значение (перезаписав переменную)*/

function logger () {
    if (i === 3) {
        clearInterval(timerId);
    }
    console.log('Hello');
    i++;
}