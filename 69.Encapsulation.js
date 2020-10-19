"use strict";

function User(name, age) {
    this.name = name;
    let userAge = age;

    this.say = function() {
        console.log(`Имя пользователя: ${this.name}, возраст ${userAge}`);
    };
}

const ivan = new User('Ivan', 23);

console.log(ivan.name);
console.log(ivan.userAge);

ivan.name = 'Alex';
ivan.userAge = 50;

ivan.say();

/*создав внутри объекта переменную userAge она стала недоступна для
изменения снаружи, мы даже не можем получить её отдельно*/