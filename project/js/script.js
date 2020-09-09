/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */
//////////////////////////////////////////////
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

'use strict';

document.addEventListener('DOMContentLoaded', () => {

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
          movieList = document.querySelector('.promo__interactive-list'),
          addForm = document.querySelector('form.add'),
          addInput = document.querySelector('.adding__input');

    addForm.addEventListener('submit', (event) => {
        event.preventDefault();
        
        
        const addFilm = addInput.value;
        
        movieDB.movies.push(addFilm);
        movieDB.movies.sort();
        
    });
    
    advTag.forEach(item => {
        item.remove();
    });
    
    genre[0].textContent = 'ДРАМА';
    
    promo[0].style.backgroundImage = 'url("img/bg.jpg")';
    
    
    movieDB.movies.sort();
    
    function creteBaseFilm (films, parent) {
        parent.innerHTML = "";

        films.forEach((film, i) => {
            parent.innerHTML += `
            <li class="promo__interactive-item">${i + 1}. ${film}
                <div class="delete"></div>
            </li>`;
        }); 
    }
    creteBaseFilm(movieDB.movies, movieList);
    
});