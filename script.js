"use strict";

const number0Films = +prompt('Сколько фильмов вы уже посмотрели?','');

const personalMovieDB = {
    count: number0Films,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};




for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = prompt('На сколько оцените фильм?', '');
    
    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    }
    else {
          i--;
          console.log('error');
    }
}
if (personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    console.log('Вы классный парень');
} else if (personalMovieDB.count > 30) {
    console.log('Вы киноман');
} else {
    console.log('Произошла ошибка')
}


console.log(personalMovieDB);

