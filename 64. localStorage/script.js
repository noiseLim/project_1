'use strict';

//Создает ключ-значение
// localStorage.setItem('number', 5);

// команда для получения данных из localStorage 
// localStorage.getItem('number');
// console.log(localStorage.getItem('number'));


// Удаляет ключ
// localStorage.removeItem('number');

//Полностью очищает локальное хранилище
// localStorage.clear();

const checkbox = document.querySelector('#checkbox'),
      form = document.querySelector('form'),
      change = document.querySelector('#color');


if (localStorage.getItem('isChecked')) {
    checkbox.checked = true;
}

if (localStorage.getItem('bg') === 'changed') {
    form.style.backgroundColor = 'red';
}

checkbox.addEventListener('change', () => {
    localStorage.setItem('isChecked', true);
});


change.addEventListener('click', () => {
    if (localStorage.getItem('bg') === 'changed') {
        localStorage.removeItem('bg');
        form.style.backgroundColor = '#fff';
    } else {
        localStorage.setItem('bg', 'changed');
        form.style.backgroundColor = 'red';
    }
});

const person = {
    name: 'Aleksey',
    age: 33
};

const authorization = JSON.stringify(person);
localStorage.setItem('Alex', authorization);

console.log(JSON.parse(localStorage.getItem('Alex')));