"use strict";

const personalMovieDB = {

    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,

    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?','');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?','');
        }
    },

    rememberMyFilms: function() {
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
    },

    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
            console.log('Вы классный парень');
        } else if (personalMovieDB.count > 30) {
            console.log('Вы киноман');
        } else {
            console.log('Произошла ошибка');
        }
    },

    writeYourGenres: function() {
        for (let i = 1; i <= 3; i++) {
            let questionGenres = prompt(`Ваш любимый жанр №${i}`);
            
            if (questionGenres != null && questionGenres != '') {
                personalMovieDB.genres[i - 1] = questionGenres;
            }
            else {
                questionGenres = prompt(`Ваш любимый жанр №${i}`);
                i--;
            }
        }
        personalMovieDB.genres.forEach(function(item, i, genres) {
            console.log(`Любимый жанр #${i+1} - это ${item}`);
        });
    },

    // writeYourGenres: function() {
    //     for (let i = 1; i <= 3; i++) {

    //         if (personalMovieDB.genres != null && personalMovieDB.genres != '') {
    //             personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр №${i}`);
    //         }
    //         else {
    //             personalMovieDB.genres = prompt(`Ваш любимый жанр №${i}`);
    //             i--;
    //         }
    //     }
    //     personalMovieDB.genres.forEach(function(item, i, genres) {
    //         console.log(`Любимый жанр #${i+1} - это ${item}`);
    //     });
    // },

    // writeYourGenres: function() {
    //     for (let i = 1; i <= 3; i++) {
    //         let genre = prompt(`Ваш любимый жанр под номером ${i}`);
            
    //         if (genre === '' || genre == null) {
    //             console.log('Вы ввели некорректные данные или не ввели их вовсе');
    //             i--;
    //         } else {
    //             personalMovieDB.genres[i - 1] = genre;
    //         }
    //     }
    //     personalMovieDB.genres.forEach((item, i) => {
    //         console.log(`Любимый жанр #${i+1} - это ${item}`);
    //     });
    // },

    // writeYourGenres: function() {
    //     for (let i = 1; i < 2; i++) {
    //         let genres = prompt(`Ваш ваши любимые жанры через запятую`).toLocaleLowerCase();
                
    //         if (genres === '' || genres == null) {
    //             console.log('Вы ввели некорректные данные или не ввели их вовсе');
    //             i--;
    //         } else {
    //             personalMovieDB.genres = genres.split(', ');
    //             personalMovieDB.genres.sort();
    //         }
    //     }
    //     personalMovieDB.genres.forEach((item, i) => {
    //         console.log(`Любимый жанр #${i+1} - это ${item}`);
    //     });
    // },

    toggleVisibleMyDb: function() {
        if (personalMovieDB.privat != true) {
            personalMovieDB.privat = true;
        } else {
            personalMovieDB.privat = false;
        }
    },

    // toggleVisibleMyDb: function() {
    //     if (personalMovieDB.privat) {
    //         personalMovieDB.privat = false;
    //     } else {
    //         personalMovieDB.privat = true;
    //     }
    // },

    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    }
};

