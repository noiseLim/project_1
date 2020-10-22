"use strict";

/*Если Try - OK, остальной участок кода игнорируется, если ошибка - 
catch, но код который написан после продолжит работать*/
try {
    console.log ("It's OK");
    console.log (a);
} catch(error) {
    console.log(error);
    // к этому объекту идут три сущности
    console.log(error.name);  //название ошибки
    console.log(error.message); //сообщение из этой ошибки
    console.log(error.stack); // какие функции привели к этой ошибке
} finally {
    //выполнится всегда
}

console.log('still here');