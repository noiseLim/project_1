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


const advTag = document.querySelectorAll('img'),
      promo = document.querySelectorAll('.promo__bg'),
      genre = document.getElementsByClassName('promo__genre'),
      interactive = document.querySelectorAll('promo__interactive-item'),
      movieList = document.querySelector('.promo__interactive-list');

console.log(interactive);

// console.log(advTag);

//1
advTag.forEach(function(item, i) {
    if (i != [0]) {
        item.remove();
    }
});


//более верное решение из урока
// const advTagWay = document.querySelectorAll('.promo__adv img');

// advTagWay.forEach(item => {
//     item.remove();
// });


//2
genre[0].textContent = 'ДРАМА';


//3
// promo[0].style.background = 'red';
promo[0].style.backgroundImage = 'url("img/bg.jpg")';



//4,5
// interactive[0].replaceWith(movieDB.movies[0]);


// interactive.forEach(i => {
//     interactive[i].replaceWith(movieDB.movies[i]);
// });

// interactive.forEach(item => {
//     if (interactive
//     item.interactive[0].replaceWith(movieDB.movies[0]);
// });

movieList.innerHTML = "";

movieDB.movies.sort();

movieDB.movies.forEach((film, i) => {
    movieList.innerHTML += `
    <li class="promo__interactive-item">${i + 1}. ${film}
        <div class="delete"></div>
    </li>`;

});

{/* <li class="promo__interactive-item">ЛОГАН<div class="delete"></div></li> */}