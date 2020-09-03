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
  
// let mycar = new Car("Eagle", "Talon TSi", 1993, rand);
// console.log(mycar);

function Person(name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;
}

let rand = new Person('John', 23, 'M');

let mycar = new Car("Eagle", "Talon TSi", 1993, rand);
console.log(mycar);

const nums = [2,7,11,15];
const target = 9;
let number = [];

let twoSum = function(nums, target) {

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] + nums[i+1] === target) {
            number.push(i);
        }
    }
    return number;
};
console.log(twoSum(nums, target));
// console.log(number);