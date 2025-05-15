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

