"use strict";

class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    calcArea() {
        return this.height * this.width;
    }
}

//extends - наследование свойств
/*super() - метод, который вызывает тоже самое, что и у родителя
Rectangle. Всегда ставится на первом месте*/
class ColorReactingleWithText extends Rectangle {
    constructor(height, width, text, bgColor) {
        super(height, width);
        this.text = text;
        this.bgColor = bgColor;
    }
    ShowMyProps() {
        console.log(`Текст: ${this.text}, цвет: ${this.bgColor}`);
    }
}

const div = new ColorReactingleWithText(25, 30, 'World', 'red');

console.log(div.calcArea());
div.ShowMyProps();




// const square = new Rectangle (10, 10);
// const long = new Rectangle (20, 100);

// console.log(square.plo());
// console.log(long.plo());