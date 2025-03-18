//Strings

// Задание 1
function containsSubstring(str,substr) {
    return str.includes(substr)
}
console.log(containsSubstring('Hello, World!', 'World')); // true
console.log(containsSubstring('Hello, World!', 'world')); // false

// Задание 2
function replaceFirstOccurance(str, search, replaceWith) {
    return str.replace(search, replaceWith);
}
console.log(replaceFirstOccurance('Hello, World!', 'World', 'JavaScript'));
console.log(replaceFirstOccurance('Hello, World! World!', 'World', 'JavaScript'));

// Задание 3
function getSubstring(str, start, end) {
return str.slice(start, end);
}
console.log(getSubstring('Hello, World!',7,12));//'World'
console.log(getSubstring('Hello, World!',0,5));//'Hello'

// Задание 4
function joinStrings(strings){
return strings.join(" ");
}
console.log(joinStrings(['Hello','World','from','JavaScript']));//'Hello World from JavaScript'

// Задание 5
function convertCase(str){
return str.includes('lowercase')
    ? str.toLowerCase()
    : str.toUpperCase();
}
console.log(convertCase('This should be lowercase'));//'this should be lowercase'
console.log(convertCase('This should be uppercase'));//'THIS SHOULD BE UPPERCASE'

// Задание 6
function trimSpaces(str){
return str.trim();
}
console.log(trimSpaces(' Hello, World! '));//'Hello,World!'

// Задание 7
function findCharIndex(str,char){
return str.indexOf(char)
}
console.log(findCharIndex('Hello, World!','W'));//7
console.log(findCharIndex('Hello, World!','z'));//-1

// Задание 8
function compareStrings(str1, str2) {
    if (str1.length !== str2.length)
        return false;
    for (let i = 0; i < str1.length; i++) {
        if (str1[i] !== str2[i]) {
            return false;
        }
    }
    return true;
}
console.log(compareStrings('Hello','Hello'));//true
console.log(compareStrings('Hello','hello'));//false

// Задание 9
function getLastCharacter(str){
   return str !== ""
    ? str.charAt(str.length-1)
    : null
}
console.log(getLastCharacter('Hello'));//'o'
console.log(getLastCharacter(''));//null
// Numbers

// Задание 1
function convertNumberSystems(num) {
return num.toString()
}
console.log(convertNumberSystems(255));
// { binary: '11111111', octal: '377', hex: 'ff' }
// Задание 2
function generateAndRoundNumber(rounding) {
    return rounding === 'ceil'
            ? Math.round(Math.random() * 1001).toFixed(2)
            : rounding === 'round'
            ? console.log(Math.ceil(Math.random() * 1001))
            : console.log('Введите параметр "ceil" или "round"')
}
console.log(generateAndRoundNumber('ceil'));
// Задание 3
function filterFiniteNumbers(value) {
return isNaN(value) || value === Infinity
}
console.log(filterFiniteNumbers());
// Задание 4
function parseNumbers(str) {
return parseFloat(str) || parseInt(str)
}
console.log(parseNumbers('123.456px'));
// Задание 5
function addFloats(a, b) {
return (a + b).toFixed(2);
}
console.log(addFloats(0.1, 0.2));
// Задание 6
function roundToDecimals(num, decimals) {
return  num.toFixed(decimals)
}
console.log(roundToDecimals(123.456789, 3));
// 123.457
// Задание 7
function checkIfInteger(num) {
return Number.isInteger(num)
        ? `${num} is an integer`
        : `${num} is not an integer`
}
console.log(checkIfInteger(5));    // "5 is an integer"
console.log(checkIfInteger(5.1));  // "5.1 is not an integer"
// Задание 8
function areFloatsEqual(a, b, precision = 5) {
return a.toFixed(precision) === b.toFixed(precision);
}
console.log(areFloatsEqual(0.1 + 0.2, 0.3));
// true
// Задание 9
function findMin(num1, num2, num3) {
return Math.min(num1, num2, num3)
}
function findMax(num1, num2, num3) {
    return Math.max(num1, num2, num3)
}

function findMinMax(num1, num2, num3) {
   return `Минимальное значение: ${findMin(num1, num2, num3)}, Максимальное значение: ${findMax(num1, num2, num3)}`;
}

console.log(findMinMax(1,2,3));
console.log(findMinMin(1,2,3));??

