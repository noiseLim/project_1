'use strict';

// const persone = {
//     name: 'Aleks',
//     tel: '+755525555'
// };


// JSON.stringify преобразует объекты js в формат данных для отправки на сервер
// console.log(JSON.stringify(persone));

// JSON.parse преобразует данные из формата JSON обратно в формат объектов js 
console.log(JSON.parse(JSON.stringify(persone)));


// ГЛУБОКИЕ КОПИИ
//Создаются при помощи JSON

const persone = {
    name: 'Aleks',
    tel: '+755525555',
    parents: {
        mom: 'Olga',
        dad: 'Mike'
    }
};

/* JSON.stringify создает существующий объект в формат JSON. После чего 
JSON.parse распарсит его обратно в объект и создаст полностью независимый 
объект*/
const clone = JSON.parse(JSON.stringify(persone));

persone.parents.mom = 'Anna'; //поменяли в родителе значение
console.log(persone);
console.log(clone); // клон не изменился