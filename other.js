// Метод Array.isArray() возвращает true, если объект является массивом и 
// false, если он массивом не является.

let obj = {
    a: 1,
    b: 2,
};

let arr = [1, 2, 3];

console.log(Array.isArray(arr));



function Car(make, model, year, owner) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.owner = owner;
  }
  
// var mycar = new Car("Eagle", "Talon TSi", 1993, rand);
// console.log(mycar);

function Person(name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;
}

var rand = new Person('John', 23, 'M');

var mycar = new Car("Eagle", "Talon TSi", 1993, rand);
console.log(mycar);