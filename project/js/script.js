/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};


const adv = document.querySelectorAll('.promo__adv'),
      advTag = document.querySelectorAll('img'),
      div = document.createElement('div');


console.log(advTag);
// div.classList.add('black');
document.body.append(div);

advTag.forEach(function(item, i) {
    item.remove();
});

// adv[0].style.backgroundColor = 'red';
// adv[0].remove();
// advTag[1].remove();
// advTag[1].remove();
// advTag[1].remove();

