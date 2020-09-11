//touchstart (касание к элементу)

//touchmove (палец при касании начинает двигаться)

//touchend (палец оторвался от элемента)

/*touchenter (как только палец при проскальзывании зашел на пределы 
этого элемента)*/

/*touchleave (когда палец продолжил скользить и ушел за пределы этого 
элемента)*/

/*touchcancel (когда точка соприкосновения больше не регистрируется на 
поверхности, например палец вышел за предел браузера)*/

window.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.box');

    box.addEventListener('touchstart', (e) => {
        e.preventDefault();

        console.log('Start');
        // console.log(e.touches);
        console.log(e.targetTouches);

    });

    box.addEventListener('touchmove', (e) => {
        e.preventDefault();

        // console.log('Move');
        console.log(e.targetTouches[0].pageX);

    });

    // box.addEventListener('touchend', (e) => {
    //     e.preventDefault();

    //     console.log('End');

    // });
});

//3 главных свойства
/*touches (выдает список всех пальцев, которые сейчас 
взаимодействуют с экраном(которые он держит на мониторе))*/

//targetTouches (все пальцы, которые взаимодействуют именно с этим элементом)

/*changedTouches (список пальцев, которые участвуют в текущем событии, 
например если это событие touchend, то список будет содержать палец, 
который убран, даже если остальные пацы до сих пор на экране)*/