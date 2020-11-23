"use strict";

/*объекты состоят из свойств и методов
свойства (данных) - это то, что описывает наш объект 
(характеристики, данные)

методы - это то, что умеет делать наш объект*/

// Второй вид свойств объекта акцессоры
// Getter - позволяет получать значение
// Setter - позволяет устанавливать значение

const persone = {
    name: 'Aleksey',
    age: 25,

    get userAge() {
        return this.age;
    },

    set userAge(num) {
        this.age = num;
    }
};
// console.log(persone.userAge = 33); /*без сеттера не сможем утановить
// новое значение*/
console.log(persone.userAge);
console.log(persone.age);
persone.age = 20;

console.log(persone);

