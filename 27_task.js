"use srtict";

// let x = 5;
// alert(x++);

// console.log(typeof([] + false));  //false
// console.log([] + false - null);  //NaN
// console.log([] + false - null + true);  //NaN

let y = 1; 
let x = y = 2; 
alert(x);  //2 последовательное присваивание (справа на лево)

console.log([] + 1 + 2); /* 12. Пустой массив превращается в пустую строку, 
строка конкатинируется с числом и остается строкой*/


alert("1"[0]); //1. Идкес под №0 - 1

console.log(2 && 1 && null && 0 && undefined); // null
/*И(&&) запинается на лжи (выражение остановилось на null, остановилось и вывело его)
ИЛИ(||) запинается на правде*/

console.log(!!(1 && 2) === (1 && 2));
// !!(переводит выражение в boolean)

alert( null || 2 && 3 || 4 ); //3
/*по таблице приоритетов первым выполняется выражение 
&&, результат которого будет 3, т.к. оба выражения правда
, далее первая часть выражения null || 3 вернет 3, т.к.
3 = правда, после идет 3 || 4, вернет 3, т.к. ИЛИ
возвращает первое true, которое видит и останавливает код */

const a = [1,2,3];
const b = [1,2,3];
console.log(a == b); //false
/*сравниваются не значения внутри переменной, а сами
переменные, а они разные*/

console.log(+"infinity"); //Infinity
console.log(typeof(+"infinity")); //number

console.log("Ёжик" > "яблоко"); /*false, сравнивается
позиция символов в UNICODE*/

console.log(0 || "" || 2 || undefined || true || falsе); /* 2, т.к. 
2 - true*/