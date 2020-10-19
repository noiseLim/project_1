"use strict";

// function User(name, age) {
//     this.name = name;
//     let userAge = age;

//     this.say = function() {
//         console.log(`Имя пользователя: ${this.name}, возраст ${userAge}`);
//     };
// }

// const ivan = new User('Ivan', 23);

// console.log(ivan.name);
// console.log(ivan.userAge);

// ivan.name = 'Alex';
// ivan.userAge = 50;

// ivan.say();

/*создав внутри объекта переменную userAge она стала недоступна для
изменения снаружи, мы даже не можем получить её отдельно*/

// Применим геттеры и сеттеры

// function User(name, age) {
//     this.name = name;
//     let userAge = age;

//     this.say = function() {
//         console.log(`Имя пользователя: ${this.name}, возраст ${userAge}`);
//     };

//     this.getAge = function() {
//         return userAge;
//     };

//     this.setAge = function(age) {
//         if (typeof age === 'number' && age > 0 && age < 110) {
//             userAge = age;
//         } else {
//             console.log('Недопустимое значение');
//         }
//     };
// }

// const ivan = new User('Ivan', 23);

// console.log(ivan.name);
// console.log(ivan.getAge()); // теперь мы можем получить значение
// ivan.setAge(45); // появился способ изменить значение снаружи
// ivan.setAge(300);

// ivan.name = 'Alex';

// ivan.say();

//Применим с классами подобие ацессеров. создание методов
/*Такой синтаксис допускает изменение извне. По соглашению програмистов
нижнее подчеркивание (_age) не допускает изменение этого параметра*/

// class User {
//     constructor (name, age) {
//         this.name = name;
//         this._age = age;
//     }

//     say() {
//         console.log(`Имя пользователя: ${this.name}, возраст ${this._age}`);
//     }

//     getAge() {
//         return this._age;
//     }

//     setAge(age) {
//         if (typeof age === 'number' && age > 0 && age < 110) {
//             this._age = age;
//         } else {
//             console.log('Недопустимое значение');
//         }
//     }
// }

// const ivan = new User('Ivan', 23);
// console.log(ivan.name);

// // ivan._age = 99;

// // console.log(ivan.getAge());
// ivan.setAge(45);
// // ivan.setAge(300);

// ivan.say();




// Классы с геттерами и сеттерами

// class User {
//     constructor (name, age) {
//         this.name = name;
//         this._age = age;
//     }

//     //Экспериментальный синтаксис. Работает только в Chrome
//     //Больше не можем достучаться извне
//     #surname = 'Fedotov';

//     say() {
//         console.log(`Имя пользователя: ${this.name} ${this.#surname}, возраст ${this._age}`);
//     }

//     get age() {
//         return this._age;
//     }

//     set age(age) {
//         if (typeof age === 'number' && age > 0 && age < 110) {
//             this._age = age;
//         } else {
//             console.log('Недопустимое значение');
//         }
//     }
// }

// const ivan = new User('Ivan', 23);
// console.log(ivan.age); // 27. Использовали геттер
// console.log(ivan.surname); // Использовали геттер

// ivan.age = 99; // 99. переназначили сеттером

// ivan.say();



// Practice

class Catalog {
    constructor (name, age) {
        this.name = name;
        this.age = age;
    }

    #surname = 'Fedotov';

    say() {
        console.log(`Имя пользователя: ${this.name} ${this.#surname}, возраст ${this.age}`);
    }

    get userSurname() {
        return this.#surname;
    }

    set userSurname(surname) {
        if (typeof surname === 'string' && surname.length < 100 && surname.length > 0) {
            this.#surname = surname;
        } else {
            console.log('Это не Алексей!');
        }
    }
}

const aleksey = new Catalog ('Aleksey', 33);

console.log(aleksey.surname);

// aleksey.say();


console.log(aleksey.userSurname);
console.log(aleksey.userSurname = 'Ivanov');

aleksey.say();


// console.log(aleksey.name = 'Fred');
// console.log(aleksey.surname = 'Petrov');

// aleksey.say();