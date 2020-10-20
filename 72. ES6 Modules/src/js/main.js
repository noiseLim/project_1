export let one = 1;

let two = 2;

export {two};

export default function sayHi() { //экспорт по умолчанию (default)
    console.log('Hello');
} 