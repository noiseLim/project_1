/*оператор rest передается всегда последним. Собирает оставшиеся
аргументы, которые могут быть переданы и формирует из них массив)*/
const log = function (a, b, ...rest) {
    console.log(a, b, rest);
}

log('basic', 'rest', 'operator', 'usage');



//параметр по умолчанию можно записывать при объявлении фу-ции
function calcOrDouble(number, basis = 2) {
    // basis = basis || 2; //до ES6
    console.log(number * basis);
}
calcOrDouble(3);