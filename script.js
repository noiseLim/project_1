"use strict";

let number0Films;

function start() {
    number0Films = +prompt('Сколько фильмов вы уже посмотрели?','');

    while (number0Films == '' || number0Films == null || isNaN(number0Films)) {
        number0Films = +prompt('Сколько фильмов вы уже посмотрели?','');
    }
}
// start();

const personalMovieDB = {
    count: number0Films,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
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
}

// rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
        console.log('Вы классный парень');
    } else if (personalMovieDB.count > 30) {
        console.log('Вы киноман');
    } else {
        console.log('Произошла ошибка')
    }
}

// detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.privat);


// function writeYourGenres() {
//     for (let i = 1; i <= 3; i++) {
//         personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр №${i}`);
//     }
// }
// writeYourGenres();

let questionsOfGenres;

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        questionsOfGenres = prompt(`Ваш любимый жанр №${i}`);
        
        if (questionsOfGenres != null && questionsOfGenres != '' && questionsOfGenres.length < 50) {
            personalMovieDB.genres[i - 1] = questionsOfGenres;
        }
        else {
            i--;
            console.log('error');
        }
    }
}

writeYourGenres();