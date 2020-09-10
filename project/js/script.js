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
          addInput = document.querySelector('.adding__input'),
          checkbox = addForm.querySelector('[type="checkbox"]');

    addForm.addEventListener('submit', (event) => {
        event.preventDefault();
        
        
        let addFilm = addInput.value;
        const favorite = checkbox.checked;
        
        // if (addFilm.length > 21) {
        //     aaddFilm == `${addInput.value}...`;
        // }
        
        if (addFilm) {

            if (addFilm.length > 21) {
                addFilm = `${addFilm.substring(0, 22)}...`;
            }

            if (favorite) {
                console.log('Добавляем любимый фильм');
            }

            movieDB.movies.push(addFilm);
            sotrMovie(movieDB.movies);
    
            createBaseFilm(movieDB.movies, movieList);
        }

        addForm.reset();
        
    });
    
    const delAdv = (arr) => {
        arr.forEach(item => {
            item.remove();
        });
    };


    advTag.forEach(item => {
        item.remove();
    });

    const makeChanges = () => {
        genre[0].textContent = 'ДРАМА';
        promo[0].style.backgroundImage = 'url("img/bg.jpg")';
    };
    
    function sotrMovie (film) {
        film.sort();
    }

    
    function createBaseFilm (films, parent) {
        parent.innerHTML = "";
        sotrMovie(films);

        films.forEach((film, i) => {
            parent.innerHTML += `
            <li class="promo__interactive-item">${i + 1}. ${film}
                <div class="delete"></div>
            </li>`;
        }); 

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);

                createBaseFilm(films, parent);
            });

        });
    }

    delAdv(advTag);
    makeChanges();
    // sotrMovie(movieDB.movies);
    createBaseFilm(movieDB.movies, movieList);
    
});