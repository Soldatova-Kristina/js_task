// 1
function filter_list(l) {
    return l
        .filter(x => typeof x !== 'string')
}

// 2
function findShort(s) {
    return s
        .split(' ')
        .reduce((longest, word) =>
            word.length < longest.length ? word : longest).length
}

// 3
function positiveSum(arr) {
    const getPositive = arr
        .filter(num => num > 0)
    return getPositive
        .reduce((acc, num) => acc + num, 0)
}

// 4
function getCount(str) {
    return str
        .split('')
        .filter(i => i === 'a' || i === 'e' || i === 'i' || i === 'o' || i === 'u').length
}

// 5
function scrollingText(text) {
    let result = [];
    for (let i = 0; i < text.length; i++) {
        const rotated = text.slice(i) + text.slice(0, i);
        result.push(rotated);
    }
    return result;
}

console.log(scrollingText("codewars"))
// 6
var capitals = function (word) {
    return word
        .split('')
        .map((el, index) => el === el.toUpperCase() ? index : -1)
        .filter(el => el !== -1)
}

// 7
function insertDash(num) {
    const digits = num.toString().split('')
    const result = digits.reduce((acc, el, index) => {
        const current = Number(digits[index])
        const prev = Number(digits[index - 1])
        if (current % 2 !== 0 && prev % 2 !== 0) {
            return acc + "-" + el
        } else {
            return acc + el
        }
    })
    return result
}

// 8
function filterHomogenous(arrays) {
    return arrays.filter(arr => {
        if (!Array.isArray(arr) || arr.length === 0)
            return false
        const identType = typeof arr[0];
        return arr.every(el => typeof el === identType)
    });
}

//9

function min(arr, toReturn) {
    const minValue = Math.min(...arr)
    if (toReturn === "index") {
        return arr.indexOf(minValue)
    } else {
        return minValue;
    }
}

const array = [1, 2, 3, 4, 5]
console.log(min(array, "value"))

//10

function generateShape(integer) {
    const result = '+'.repeat(integer)
    return Array(integer).fill(result).join('\n')
}

console.log(generateShape(8))

//11

function findMagic(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (i === arr[i]) return arr[i];
    }
    return -1;
}

const findMagic2 = arr => arr.findIndex(i => arr[i] === i);
//12
obfuscate = function (email) {
    return email.split("")
        .map((el) =>
            el === "@" ? " [at] "
                : el === "." ? " [dot] " : el)
        .join("")
}

// 13
function arrCheck(value) {
    return Array.isArray(value) && value.every(Array.isArray);
}

// 14
function smallEnough(a, limit) {
    for (let i = 0; i < a.length; i++) {
        if (a[i] > limit) {
            return false
        }
    }
    return true
}

function smallEnough2(a, limit) {
    return Math.max(...a) <= limit
}

// 15

// 16

// 17

// 18

// 19

// 20

// 21

// 22

// 23

// 24

// 25

// 26

// 27

// 28

// 29

// 30

// 31

// 32

// 33

// 34

// 35

// 36

// 37

// 38

// 39

// 40

// 41

// 42


