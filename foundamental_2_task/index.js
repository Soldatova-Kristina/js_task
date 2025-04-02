//Strings

// Задание 1
// function containsSubstring(str, substr) {
//     return str.includes(substr)
// }
// console.log(containsSubstring('Hello, World!', 'World')); // true
// console.log(containsSubstring('Hello, World!', 'world')); // false

// Задание 2
// function replaceFirstOccurance(str, search, replaceWith) {
//     return str.replace(search, replaceWith);
// }
// console.log(replaceFirstOccurance('Hello, World!', 'World', 'JavaScript'));
// console.log(replaceFirstOccurance('Hello, World! World!', 'World', 'JavaScript'));

// Задание 3
// function getSubstring(str, start, end) {
//     return str.slice(start, end);
// }
// console.log(getSubstring('Hello, World!', 7, 12));//'World'
// console.log(getSubstring('Hello, World!', 0, 5));//'Hello'

// Задание 4
// function joinStrings(strings) {
//     return strings.join(" ");
// }
// console.log(joinStrings(['Hello', 'World', 'from', 'JavaScript']));//'Hello World from JavaScript'
// Задание 5
// function convertCase(str) {
//     return str.includes('lowercase')
//         ? str.toLowerCase()
//         : str.toUpperCase();
// }
// console.log(convertCase('This should be lowercase'));//'this should be lowercase'
// console.log(convertCase('This should be uppercase'));//'THIS SHOULD BE UPPERCASE'
// Задание 6
// function trimSpaces(str) {
//     return str.trim();
// }
// console.log(trimSpaces(' Hello, World! '));//'Hello,World!'

// Задание 7
// function findCharIndex(str, char) {
//     return str.indexOf(char)
// }
// console.log(findCharIndex('Hello, World!', 'W'));//7
// console.log(findCharIndex('Hello, World!', 'z'));//-1

// Задание 8
// function compareStrings(str1, str2) {
//     if (str1.length !== str2.length)
//         return false;
//     for (let i = 0; i < str1.length; i++) {
//         if (str1[i] !== str2[i]) {
//             return false;
//         }
//     }
//     return true;
// }
// console.log(compareStrings('Hello', 'Hello'));//true
// console.log(compareStrings('Hello', 'hello'));//false

// Задание 9
// function getLastCharacter(str) {
//     return str !== ""
//         ? str.charAt(str.length - 1)
//         : null
// }
// console.log(getLastCharacter('Hello'));//'o'
// console.log(getLastCharacter(''));//null
// Numbers

// Задание 1
// function convertNumberSystems(num) {
//     return num.toString()
// }
// console.log(convertNumberSystems(255));
// { binary: '11111111', octal: '377', hex: 'ff' }
// Задание 2
// function generateAndRoundNumber(rounding) {
//     return rounding === 'ceil'
//         ? Math.round(Math.random() * 1001).toFixed(2)
//         : rounding === 'round'
//             ? console.log(Math.ceil(Math.random() * 1001))
//             : console.log('Введите параметр "ceil" или "round"')
// }
// console.log(generateAndRoundNumber('ceil'));
// Задание 3
// function filterFiniteNumbers(value) {
//     return isNaN(value) || value === Infinity
// }
// console.log(filterFiniteNumbers());
// // Задание 4
// function parseNumbers(str) {
//     return parseFloat(str) || parseInt(str)
// }
// console.log(parseNumbers('123.456px'));
// Задание 5
// function addFloats(a, b) {
//     return (a + b).toFixed(2);
// }
// console.log(addFloats(0.1, 0.2));
// Задание 6
// function roundToDecimals(num, decimals) {
//     return num.toFixed(decimals)
// }
// console.log(roundToDecimals(123.456789, 3));
// 123.457
// Задание 7
// function checkIfInteger(num) {
//     return Number.isInteger(num)
//         ? `${num} is an integer`
//         : `${num} is not an integer`
// }
// console.log(checkIfInteger(5));    // "5 is an integer"
// console.log(checkIfInteger(5.1));  // "5.1 is not an integer"
// Задание 8
// function areFloatsEqual(a, b, precision = 5) {
//     return a.toFixed(precision) === b.toFixed(precision);
// }
// console.log(areFloatsEqual(0.1 + 0.2, 0.3));
// true
// Задание 9
// function findMin(num1, num2, num3) {
//     return Math.min(num1, num2, num3)
// }
// function findMax(num1, num2, num3) {
//     return Math.max(num1, num2, num3)
// }
// function findMinMax(num1, num2, num3) {
//     return `Минимальное значение: ${findMin(num1, num2, num3)}, Максимальное значение: ${findMax(num1, num2, num3)}`;
// }
// console.log(findMinMax(1, 2, 3));

//Задание 10
// const person = {
//     age: 17,
//     lastName: 'Sol',
//     firstName: 'Kris'
// }
// console.log(person);

// Задание 11
// const book = {
//     year: 2022,
//     author: 'Sol',
//     title: 'title'
// }
// delete book.author;
// book.year = 2023;
// console.log(book);
// Задание 12
// let user1 = {
//     address: {street: "Main Street"}
// };
// let user2 = {}; // пользователь без адреса
// function getStreet(user) {
//     return user?.address?.street || "Улица не указана";
// }
// console.log(getStreet(user1)); // "Main Street"
// console.log(getStreet(user2)); // "Улица не указана"</code>

// Задание 13
// let user1 = {
//     sayHi() {
//         console.log("Привет!");
//     }
// };
// let user2 = {}; // пользователь без метода sayHi
// function greetUser(user) {
//   return user?.sayHi?.();
// }
//
// greetUser(user1); // "Привет!"
// greetUser(user2); // ничего не происходит</code>
// Задание 14
// function User(name, isAdmin = false) {
// this.name = name;
// this.isAdmin = isAdmin;
// }
// User.prototype.sayHi = function () {
//     console.log(`Привет, меня зовут ${this.name}`)
// };
// let user1 = new User("Alice");
// let user2 = new User("Bob", true);
// user1.sayHi();// "Привет, меня зовут Alice"
// user2.sayHi();// "Привет, меня зовут Bob"
// Задание 15
// let calculator = {
//     result: 0,
//     add(value) {
// this.result += value;
//     },
//     subtract(value) {
// this.result -= value;
//     },
//     getResult() {
// return this.result
//     }
// };
// calculator.add(5);
// calculator.subtract(3);
// console.log(calculator.getResult());
// Задание 16
// let user = {
//     name: "John"
// };
// function getUserName(user) {
//     return user?.name ?? "Имя неизвестно"
// }
// // Пример использования:
// console.log(getUserName(user)); // "John"
// console.log(getUserName(null)); // "Имя неизвестно"
// Задание 17
// let user1 = {
//     addresses: [{
//         city: "New York"}]
// };
// let user2 = {
//     addresses: []
// };
// let user3 = {}; // пользователь без адресов
// function getCity(user) {
// if (Array.isArray(user.addresses) && user.addresses.length > 0) {
//     return String(user?.addresses[0]?.city ?? 'Город не указан');
// } else {
//    return 'Город не указан';
// }
// }
// console.log(getCity(user1)); // "New York"
// console.log(getCity(user2)); // "Город не указан"
// console.log(getCity(user3)); // "Город не указан"</code>
// Задание 18
// let user = {
//     name: "Alice", age: 30
// };
//     function deleteAge(user) {
//     if ('age' in user ) {
//         delete user.age
//     } return user
//     }
//     deleteAge(user);
//     console.log(user); // {name: "Alice"}
// Задание 19

// Задание 20

// Задание 21

// Задание 22

// Задание 23

// Задание 24

// Задание 25

// Задание 26

// Задание 27

// Задание 28

// Задание 29

// Задание 30

// Задание 31

// Задание 32

// Задание 33

// Задание 34

// Задание 35

// Задание 36