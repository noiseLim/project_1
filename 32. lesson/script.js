// console.log(document.head);
// console.log(document.documentElement); //получаем в консоль html со всем содержимым
// console.log(document.body.childNodes); /*ChildNodes позволяет получить все ноды, все 
// узлы внутри родителя body*/
// console.log(document.body.firstChild);  //свойств получает первого ребенка родителя
// console.log(document.body.lastChild);  //свойств получает последнего ребенка родителя

// console.log(document.querySelector('#current').parentNode);
//получили родителя для id=current(кнопка button) - элемент с классом first (div)

// console.log(document.querySelector('#current').parentNode.parentNode);
/*получили родителя-родителя для id=current(кнопка button) - элемент с классом 
wrapper (div)*/


//data атрибуты (еще один способ расстановки ориентиров к коде (наряду с id, css))
//метод получения data атрибутов:
// console.log(document.querySelector('[data-current="3]'));

//получаем соседа после атрибута data (нода text)
// console.log(document.querySelector('[data-current="3"]').nextSibling);

//получаем предыдущего соседа атрибута data (тоже нода text)
// console.log(document.querySelector('[data-current="3"]').previousSibling);

/*чтобы получить не ноду, а именно элемент используем методы с припиской Element*/
// console.log(document.querySelector('[data-current="3"]').nextElementSibling);
// console.log(document.querySelector('[data-current="3"]').previousElementSibling);
// console.log(document.querySelector('#current').parentElement);
// console.log(document.body.firstElementChild);

//альтернатива для childNodes - children (сформируется псевдомассив с элементами)
//либо:
// for (let node of document.body.childNodes) {
//     if (node.nodeName == '#text') {
//         continue;
//     }

//     console.log(node); //пслевдомассив не формируется, получаем поочередный вывод элементов
// }
