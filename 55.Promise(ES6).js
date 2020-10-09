"use strict";


//Пример collback hell
// console.log('Запрос данных...');

// setTimeout(() => {
//     console.log('Подготовка данных...');

//     const product = {
//         title: 'TV',
//         price: 5000
//     };

//     setTimeout(() => {
//         product.status = 'order';
//         console.log(product);
//     }, 2000);
// }, 2000);



// Promise

// console.log('Запрос данных...');

// const req = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('Подготовка данных...');
    
//         const product = {
//             title: 'TV',
//             price: 5000
//         };

//         resolve(product);
//     }, 2000);
// });

// req.then((product) => {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             product.status = 'order';
//             resolve(product);
//             // reject();
//         }, 2000);
//     });
// }).then(data => {
//     data.modify = true;
//     return data;
// }).then((data) => {
//     console.log(data);
// }).catch(() => {
//     console.log('Произошла ошибка');
// }).finally(() => { // выполняется абсолютно при любом исходе
//     console.log('Finally');
// });




// 2 метода all и raсe


const test = time => {
    return new Promise (resolve => {
        setTimeout(() => resolve(), time);
    });
};
// test(1000).then(() => console.log('1000 ms'));
// test(2000).then(() => console.log('2000 ms'));


/* Promise.all ждет окончания выполнения всех промисов, которые были переданы
в массив и только потом, что-то делает*/
// Promise.all([test(1000), test(2000)]).then(() => {
//     console.log('ALL');
// });

//race выполняет свои действия только когда самый первый промис себя отработал
Promise.race([test(1000), test(2000)]).then(() => {
    console.log('ALL');
});