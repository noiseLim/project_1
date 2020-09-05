// const btn = document.querySelector('button');

/*НЕ лучший вариант кода. Мы можем забыть/не знать, что уже назначали
событие для элемента и назначить другой. В таком случае первое 
назначение события не сработает. Так же если мы хотим, чтобы событие 
сработало один раз и было удалено, то в таком варианте удалить мы
его не сможем*/
// btn.onclick = function() {
//     alert('Click');
// };

/*Правильный способ (можем добавлять множество назначений событий).
'addEventListener' метод который следит за элементом. 
Внутри функции назначаем событие 'click', () - передаем collback
функцию, которая будет нашим обработчиком, в неё помещаем
действие (alert('Click))  */ 
// btn.addEventListener('click', () => {
//     alert('Click');
// });

// btn.addEventListener('click', () => {
//     alert('Second click');
// });

//пример: событие наведения мышки на элемент
// btn.addEventListener('mouseenter', () => {
//     console.log('Hover');
// });

/*когда нужно получить какие-то данные об элементе с которым 
взаимоействуем применяем специальный объект event, он передается 
как аргумент в collback функцию и называть его можно как угодно 
(обычно event или e) и передается он всегда первым
из множества данных получили .target (тот элемент на котором 
произошло событие (наша хтмл строка)).
в прмере удалили со страницы после клика*/

// btn.addEventListener('click', (e) => {
//     // console.log(e.target);
//     e.target.remove();
// });

//написали функцию для удаления
// const deleteElement = (e) => {
//     // e.target.remove();
//     console.log(e.target);
// };

/*теперь после выполнения "click" по элементу btn выполнится функция
удаления. МЫ ееё не выпоняем (нет скобок() после функции), мы 
сслылаемся на неё. мы говорим, что после выполнения click выполнится
deleteElement*/
// btn.addEventListener('click', deleteElement);
//remove удаляет обработчик
// btn.removeEventListener('click', deleteElement);


/*прервали выполнение обработчика add, дали ему сработать один раз
нет необходимости его использовать, т.к. у addEventListener есть опция
{once: true} делающая тоже самое n*/
// let i = 0;
// const deleteElement = (e) => {
//     console.log(e.target);
//     i++;
//     if (i == 1) {
//         btn.removeEventListener('click', deleteElement);
//     }
// };
// btn.addEventListener('click', deleteElement);


/*ВСПЛЫТИЕ. поведение элемента при котором обработчик события 
сначала обрабатывается на вложенном элементе, затем на родителя и
поднимаюсь выше*/
/*event.currentTarget используется, когда один и тот же обработчик 
события присваивается нескольким элементам.*/
const overlay = document.querySelector('.overlay');

const deleteElement = (e) => {
    // console.log(e.currentTarget);
    console.log(e.target);
    console.log(e.type);
};

// btn.addEventListener('click', deleteElement);
// overlay.addEventListener('click', deleteElement);


//отменяем стандартное поведение браузера 
const link = document.querySelector('a');

link.addEventListener('click', function(event) {
    event.preventDefault(); /*метод остан-ет станд. повед. браузера,
    этот участок кода всегда помещается в начало*/

    console.log(event.target); //вывели эдемент вместо ст. пов. бр-ра
    alert('Сегодня без ютуба, бро');
});

/*Если мы хотим использовать обработчик для нескольких элементов
(вместо одной button - для всех) необходимо использовать метод
forEach иначе addEventListener не сработает (он не работает с
псевдомассивами)*/
/*опция {once: true} событие срабатывает один раз и автоматически
удаляется*/
const btns = document.querySelectorAll('button');
btns.forEach(btn => {
    btn.addEventListener('click', deleteElement, {once: true});
});
