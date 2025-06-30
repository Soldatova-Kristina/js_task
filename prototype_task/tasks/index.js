// // Задание 1
// const venicle = {
//     start () {
//         console.log("car start")
//     },
//     stop () {
//         console.log("car stop")
//     }
// }
// const car = {
//     drive () {
//         console.log("car drive")
//     }
// }
//
// car.__proto__ = venicle;
// car.start();
// // Задание 2
// const animal = {
//     eat () {
//         console.log("This animal eats food")
//     },
//     sleep () {
//         console.log("This animal sleeps")
//     }
// }
// const dog = {
//     bark () {
//         console.log("Woof!")
//     }
// }
//
// dog.__proto__ = animal;
// dog.eat();
// dog.bark();
// dog.eat();
// // Задание 3
// const car2  = {
//     startEngine () {
//         console.log("Engine started")
//     },
//     stopEngine () {
//         console.log("Engine stopped")
//     }
// }
//
// const electricCar = Object.create(car2);
// electricCar.chargeBattery = () => {
//     console.log("Battery charging");
// };
//
// electricCar.startEngine();
// electricCar.stopEngine();
// electricCar.chargeBattery();
//
// // Задание 4
// const book = {
//     title: String
// }
// const ebook = Object.create(book);
// ebook.format = true;
// console.log("format" in ebook);
// console.log("title" in ebook);
// console.log("title" in book);
// console.log(ebook.hasOwnProperty("title"));
// console.log(ebook.hasOwnProperty("format"));
// console.log(book.hasOwnProperty("title"));
// // Задание 5
// function Person () {}
// Person.prototype.greet = function () {
//     console.log("Greeting");
// };
//
// const user1 = new Person();
// const user2 = new Person();
// user1.greet();
// user2.greet();
// // Задание 6
// function Venicle () {
//     this.type = true
// }
// const car3 = new Venicle();
// console.log(car3.constructor === Venicle);
// // Задание 7
// function Venicle2 () {
//     this.type = true
// }
// Venicle2.prototype.drive = function ()  {
//     console.log("Drive")
// }
// const car4 = new Venicle2();
// console.log(car4.constructor === Venicle2);
// // Но!
// function Venicle3 () {
//     this.type = true
// }
// Venicle3.prototype =   {
//    drive: function () {
//        console.log("Drive")
//    }
// }
// const car5 = new Venicle3();
// console.log(car5.constructor === Venicle3);
// // Исправить:
// function Venicle4 () {
//     this.type = true
// }
// Venicle4.prototype =   {
//     drive: function () {
//         console.log("Drive")
//     },
//     constructor: Venicle4
// }
// const car6 = new Venicle4();
// console.log(car6.constructor === Venicle4);
// // Задание 8
// Array.prototype.first = function () {
//     return this[0];
// }
// let arr = [1, 2, 3 ,4]
// console.log(arr.first());
// // Задание 9
// const phone = {
//     call () {}
// }
// const smartPhone = Object.create(phone);
// smartPhone.browseInternet = function () {};
// smartPhone.call();
// console.log(Object.getPrototypeOf(smartPhone) === phone);
// // Задание 10
// Array.prototype.countOccurances = function () {
//     const counts = this.reduce((acc, el) => {
//         acc[el] = (acc[el] || 0) + 1;
//         return acc;
//     }, {});
//
//     for (let key in counts) {
//         if (counts[key] > 1) {
//             console.log(`${key} repeats ${counts[key]} times`);
//         }
//     }
// }
//
// let array = [1, 2, 3, 2, 4, 2]
// array.countOccurances();
// Задание 11
// String.prototype.capitalize = function () {
//     return this.charAt(0).toUpperCase() + this.slice(1);
// }
// let str = "hello"
// console.log(str.capitalize());
// // Задание 12
// Number.prototype.isEven = function () {
//     return Number(this) % 2 === 0;
// }
// let num = 2;
// console.log(num.isEven())
// // Задание 13
// function greet(greeting, punctuation) {
//     console.log(`${greeting}, ${this.name}`);
// }
//
// const person = { name: "Артём" };
// greet.call(person, "Привет");
// greet.apply(person, ["Здравствуй"]);
// const boundGreet = greet.bind(person, "Салют");
// boundGreet();
// // Задание 14
// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     introduce () {
//         console.log(`Hello ${this.name}! You are ${this.age} years old`);
//     }
// }
// const user = new Person("Артём", 29);
// user.introduce();
// // Задание 15
// class Animal {
//     constructor() {
//     }
//     speak() {
//         console.log("Птица издает звук")
//     }
// }
// class Bird extends Animal {
//     speak() {
//         console.log("Птица чирикает")
//     }
// }
//
// const smallBird = new Bird;
// smallBird.speak();
// // Задание 16
// class Car {}
// class Truck{}
// const track = new Truck();
//
// console.log(track instanceof Truck);
// console.log(track instanceof Car);
// // Задание 17
// class Restangle {
//     constructor(width, height) {
//         this._width = width;
//         this._height = height;
//     }
//     get getArea() {
//         return this._width * this._height;
//     }
//     set width(value) {
//         if (value > 0) {
//             this._width = value;
//         } else {
//             console.error("Ширина должна быть больше 0");
//         }
//     }
//     set height(value) {
//         if (value > 0) {
//             this._height = value;
//         } else {
//             console.error("Высота должна быть больше 0");
//         }
//     }
//     get width() {
//         return this._width;
//     }
//     get height() {
//         return this._height;
//     }
// }
// const result = new Restangle(2, 5)
// console.log(result.width);
// console.log(result.height);
// console.log(result.getArea);
// // Задание 18
// class AppConfig {
//     static appName= "My Cool App";
//     static version ="2.0.1";
// }
// // Задание 19
// class MathUtils {
//     static add (a, b) {
//         return a + b;
//     }
//     subtract (a, b) {
//         return a - b;
//     }
// }
// // Задание 20
// class Counter {
//     static count = 0;
//     static increment() {
//         this.count++;
//     }
//     static decrement() {
//         this.count--;
//     }
// }
// // Задание 21
// class TemperatureConverter {
//     static toCelsius(fahrenheit) {
//         return ((fahrenheit - 32) * 5) / 9;
//     }
//     static toFahrenheit(celsius) {
//         return (celsius * 9) / 5 + 32;
//     }
// }
// // Задание 22
// class Rectangle {
//     #width
//     #height
//    get area () {
//         return this.#width * this.#height;
//     }
//     setDimensions(width, height) {
//         this.#width = width;
//         this.#height = height;
//     }
// }
// const rect = new Rectangle();
// rect.setDimensions(5, 10);
// console.log(rect.area); // 50
// // Задание 23
// class Animal1 {
//     _name
//     describe(password) {
//     }
// }
// class Cat extends Animal1 {
//     meow () {
//         console.log("Cat meow")
//     }
// }
// // Задание 24
// class PasswordManager {
//     #encrypt(password) {
//         return password + "***" ;
//     }
//     setPassword(password) {
//         this.#encryptedPassword = this.#encrypt(password);
//     }
//     getPassword(password) {
//         return this.#encryptedPassword;
//     }
// }
// // Задание 25
// class Car2 {
//     constructor(brand, speed) {
//         this._brand = brand;
//         this._speed = speed;
//     }
//     accelerate(amount) {
//         this._speed += amount;
//     }
//     getSpeed() {
//         return this._speed;
//     }
// }

// Задача 1: Базовое наследование
 //Условие: Создайте класс Vehicle с конструктором, принимающим brand, и методом start().
    // Затем создайте класс Car, наследующий от Vehicle, с дополнительным свойством doors и переопределенным методом start().

class Venicle {
    constructor (brand) {
        this.brand = brand;
    }
    start () {
        console.log('Starting Venicle');
    }
}

class Car extends Venicle {
    constructor (brand, doors) {
        super(brand);
        this.doors = doors;
    }
    start () {
        console.log('Car starts');
    }
}

//
class Restangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    get area() {
        return this.width * this.height;
    }
    set area (newArea) {
            const proportion = this.width / this.height;
            this.width = Math.sqrt(newArea * proportion);
            this.height = this.width / proportion;
    }
}
