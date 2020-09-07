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


const advTag = document.querySelectorAll('.promo__adv img'),
      promo = document.querySelectorAll('.promo__bg'),
      genre = document.getElementsByClassName('promo__genre'),
      interactive = document.querySelectorAll('promo__interactive-item'),
      movieList = document.querySelector('.promo__interactive-list');
// console.log(interactive);

// console.log(advTag);

//1
advTag.forEach(item => {
    item.remove();
});


//2
genre[0].textContent = 'ДРАМА';


//3
promo[0].style.backgroundImage = 'url("img/bg.jpg")';

//4,5
movieList.innerHTML = "";

movieDB.movies.sort();

movieDB.movies.forEach((film, i) => {
    movieList.innerHTML += `
    <li class="promo__interactive-item">${i + 1}. ${film}
        <div class="delete"></div>
    </li>`;

});



/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

// const inputValue = document.querySelector('.adding__input').value;
    //   btn = document.querySelector('button');
// console.log(inputValue);
// console.log(btn);
const btn = document.querySelector('button');

btn.addEventListener('click', getIn);

function getIn() {
    const inputValue = document.getElementsByTagName('input').value;
    // console.log(inputValue);
    movieDB.movies.forEach(item => {
        console.log(item);
    });
}

// console.log(movieDB);
// console.log(btn);
// getIn();
console.log(movieDB);