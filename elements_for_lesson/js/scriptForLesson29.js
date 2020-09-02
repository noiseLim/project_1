"use strict";

const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      hearts = document.querySelectorAll('.heart'),
      oneHeart = document.querySelector('.heart'),
      wrapper = document.querySelector('.wrapper');

// console.dir(box);
// box.style.backgroundColor = 'blue';
// box.style.width = '500px';

//cssText позволяет быстро сформировать группу инлайн стилей для элемента
box.style.cssText = 'background-color: blue; width: 500px';
// box.style.cssText = `background-color: blue; width: ${num}px`;

btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';

/*при помощи цикла можно перебрать элементы и изменить слиль разом у всех
(редко используется, т.к. есть специальные перебирающие методы)*/
// for(let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'blue';
// }

/*метод forEach позволяет перебрать элементы при помощи item и изменить 
стиль у каждого из них*/
hearts.forEach(item => {
    item.style.backgroundColor = 'blue';
});

/*создает элемент div. он создается только внутри js файла, внутри страницы он 
никак не появится*/
const div = document.createElement('div');

//или похожий метод - текстовые узлы (используется редко)
// const text = document.createTextNode('Тут был я');


/*чаще всего работаем с классами. обернули созданый div в класс
 classList.(множество методов на удаление, обавл., и т.д.)*/
div.classList.add('black');
/*добавляем непосредственно на сайт, в данном случае в конец body (вставить 
можем куда угодно)*/
// document.body.append(div);

//разово добавили div в родитель класса.wrapper в конец
// document.querySelector('.wrapper').append(div);

/*(добавили wrapper к остальным переменным). созданный элемент остался в 
родительском классе wrapper*/
wrapper.append(div);
// wrapper.appendChild(div); // тоже самое (устарело)

//добавили div не в конец (append), а уже в начало (prepand) блока wrapper
// wrapper.prepend(div);

//внутри класса weaper есть элементы hearts (можем вставлять div между ними) 
// hearts[0].before(div); // поставили перед первым элементом div
// hearts[0].after(div);  // поставили после первого элемента div
// wrapper.insertBefore(div, hearts[0]); 
/* (устаревший метод) существовал до before
И after*/

//удаляем элемент
// circles[0].remove();
// wrapper.removeChild(hearts[1]); //устаревший метод удаления

//заменили первый элемент hearts на первый элемент circles (он передвинулся)
// hearts[0].replaceWith(circles[0]);

// wrapper.replaceChild(circles[0], hearts[0]); 
/*устаревший метод. первый элемент -
то, что используется для замены, второй элемент - то, что заменяем*/


//устаревшие конструкции

