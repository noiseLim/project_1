// import {one, two} from './main';

// фигурные скобки для импорта именованного синтаксиса обязательны

// console.log(`${one} and ${two}`);


// Можем сразу переименовывать 
// import {one as first} from './main';
// console.log(first);

/*Можем импортировать всё, что экспортируется из предыдущего файла
и вызывать как свойства*/
// под data подразумевается всё, что было экспортировано из main.js
// import * as data from './main';
// console.log(`${data.one} and ${data.two}`);


// Дефолтный экспорт
import sayHi from './main';
sayHi();

// через type module в html
import sayHi from './main.js';
sayHi();