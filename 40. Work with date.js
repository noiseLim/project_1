"use strict";

// const now = new Date();
// const now = new Date('2020-09-24'); //можем сами задать дату

// const now = new Date('2020', '8', '24', '13'); 
// или в таком формате (месяцы считаются с 0, а часы с учетом часового пояса)

// const now = new Date(-9999);
/*любая дата, которая хранится в JS хранится в милисекундах. Нулем датируется дата 1970г., если нужно использовать дату до этого года,
то используем минус*/

// console.log(now);


//Распространенные методы получения дат
const now = new Date();
console.log(now);

// console.log(now.getFullYear()); //год
// console.log(now.getMonth()); //месяц (начиная с 0) 
// console.log(now.getDate()); //день
// console.log(now.getDay()); //день недели (воскр = 0)
// console.log(now.getHours()); //часы по мест времени
// console.log(now.getUTCHours()); //часы с учетом UTC

// console.log(now.getTimezoneOffset()); // -180
// /*разница между часовым поясом и UTC в минутах*/

// console.log(now.getTime()); //кол-во миллисек с 1970 г.



//методы сеттеры (не только создать, но и установить)

// console.log(now.setFullYear(2018)); //2018-09-24T11:07:39.740Z
// console.log(now.setHours(21)); 
/*изменил часы на 21. но консоль vs code ориентируется на 
UTC зону и отобразит на 3 часа меньше. консоль бразера 
ориентируется на локальную зону и отобразит часы корректно*/

// console.log(now);

//метод записи с парсингом
// const now2 = new Date();
//  new Date.parse('2020-09-24'); //??? не работает
// const id = Date.parse('2020-09-24'); // если только так
//покажет кол-во мс с 1970, как метод getTime


//используя Date можно создавать простые бенчмарки
let start = new Date();

for (let i = 0; i < 100000; i++) {
    let num = i ** 3;
}

let end = new Date();

console.log(`Скрипт завершил работу за ${end - start} миллисекунд`);