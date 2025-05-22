// Задание 1
function printNumber (number) {
    if (number === 0) return;
    printNumber(number - 1);
    console.log(number);
}
printNumber(5);
// Задание 2
function countdown (number) {
   if (number === 0) return;
    console.log(number);
    countdown(number - 1);
}
countdown(5);
// Задание 3
function factorial(number) {
    if (number === 0) return 1;
    return (number * factorial(number - 1));
}
console.log(factorial(5));// 120
console.log(factorial(3));// 6
// Задание 4
function fibonacci (number) {
    if (number === 1 || number === 2) return 1;
    return fibonacci(number - 1) + fibonacci(number - 2);
}
console.log(fibonacci(6)); // 8
console.log(fibonacci(10)); // 55
// Задание 5
function createCounter() {
    let counter = 0;
    return function () {
        counter++;
        console.log(counter);
    };
}
const counter = createCounter();
counter(); // 1 
counter(); // 2 
counter(); // 3
// Задание 6
for  (let i = 0; i <= 4; i++)  {
    setTimeout(function()  {
        console.log(i++);  //  Что  выведет?
    },  1000);
}
// Через замыкание
for (var i = 0; i <= 4; i++) {
    (function(foo) {
        setTimeout(function () {
            console.log(foo);
        }, 1000);
    })(i);
}
// Задание 7
function rememberValue(value) {
return function () {
    return value;
}
}
const rememberTen = rememberValue(10);
console.log(rememberTen()); // 10
// Задание 8
var counterModule = (function() {
    let counter = 0;
    return {
        increment() {
            counter++;
            return counter;
        },
        reset() {
            counter = 0;
        }
    };
})();

counterModule.increment();
counterModule.increment();
counterModule.reset();
counterModule.increment();
// Задание 9
function multiply(...args) {
    return args.reduce((acc, val) => acc * val, 1);
}
console.log(multiply(5, 5));
// Задание 10
function concatStrings(word, ...words) {
    return [word, ...words].join(', ')
}
concatStrings('cat', 'dog', 'mama');
// Задание 11
function combineArrays(arr1, arr2) {
return [...arr1, ...arr2];
}
combineArrays([1, 2, 3],[4, 5, 6]);
// Задание 12
const user = {
    name: "Artem",
    age: 30
};

function copyObject(original) {
    const key = 'city';
    const value = 'buenos-aires';
    return {...original, [key]: value};
}

copyObject(user);
// Задание 13

// Задание 14

// Задание 15

// Задание 16

// Задание 17

// Задание 18

// Задание 19



