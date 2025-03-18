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

// Задание 24
function joinStrings(strings){
return strings.join(",");
}
console.log(joinStrings(['Hello','World','from','JavaScript']));//'Hello World from JavaScript'

// Задание 25
function convertCase(str){
return str.includes('lowercase')
    ? str.toLowerCase()
    : str.toUpperCase();
}
console.log(convertCase('This should be lowercase'));//'this should be lowercase'
console.log(convertCase('This should be uppercase'));//'THIS SHOULD BE UPPERCASE'

// Задание 26
function trimSpaces(str){

}
console.log(trimSpaces(' Hello,World! '));//'Hello,World!'

// Задание 27
function findCharIndex(str,char){

}
console.log(findCharIndex('Hello,World!','W'));//7
console.log(findCharIndex('Hello,World!','z'));//-1

// Задание 28
function compareStrings(str1,str2){

}
console.log(compareStrings('Hello','Hello'));//true
console.log(compareStrings('Hello','hello'));//false

// Задание 29
function getLastCharacter(str){

}
console.log(getLastCharacter('Hello'));//'o'
console.log(getLastCharacter(''));//null

// Задание 30

// Задание 31

// Задание 32
