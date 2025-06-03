// Task 1
// let a=5;
// let b=10;
// let arr= [a,b]
// arr = [b, a]
// Task 2
// function getNumbers() {
//    return [1, 2, 3];
// }
// const [num1, num2, num3] = getNumbers()
// Task 3
// let arr = [7];
// const [a , b = 2 ,c = 3] = arr;
// Task 4
// const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// const  [, [, element] ] = matrix;
// console.log(element);//5
// Task 5
// constperson = {
//    name:'Alice',
//    age:25,
//    job:'Engineer'
// };
// const {name, age, job} = constperson;
// console.log(name);//'Alice'
// console.log(age);//25
// console.log(job);//'Engineer'
// Task 6
// const book = {
//    title: 'JavaScript Essentials',
//    author: 'John Doe',
//    year: 2021
// };
// const { title: bookTitle, author: bookAuthor, year} = book
// console.log(bookTitle);  // 'JavaScript Essentials'
// console.log(bookAuthor); // 'John Doe'
// Task 7
// const user = {
//    name: 'Bob'
// };
// const { name, age = 30} = user;
// console.log(name); // 'Bob'
// console.log(age);  // 30 (значение по умолчанию)
// Task 8
// const employee = {
//    id: 101,
//    info: {
//       name: 'Jane',
//       department: 'Marketing'
//    }
// };
// const { info: { name, department } } = employee;
// console.log(name);       // 'Jane'
// console.log(department); // 'Marketing'
// Task 9
// const numbers = [1, 2, 3, 4, 5];
// const [first, ...restNumbers] = numbers;
// console.log(first);       // 1
// console.log(restNumbers); // [2, 3, 4, 5]
// Task 10
// const product = {
//    name: 'Laptop',
//    price: 1000,
//    brand: 'BrandName',
//    stock: 50
// };
// const {name, ... rest} = product;
// console.log(name);  // 'Laptop'
// console.log(rest);  // { price: 1000, brand: 'BrandName', stock: 50 }
// Task 11
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const mergedArray = [...arr1, ...arr2];
// console.log(mergedArray); // [1, 2, 3, 4, 5, 6]
// Task 12
// const car = {
//    brand: 'Toyota',
//    model: 'Corolla',
//    year: 2020
// };
// Создай копию объекта car и измени year на 2022
// const newCar = {...car, year: 2022};
// console.log(newCar); // { brand: 'Toyota', model: 'Corolla', year: 2022 }
// Task 13
// const user = {
//    id: 1,
//    profile: {
//       name: 'Anna',
//       email: 'anna@example.com'
//    }
// };
// // Создай копию объекта user и обнови email
// const updatedUser = {
//    ...user,
//    profile: {
//       ...user.profile,
//       email: 'new.email@example.com'
//    }
// }
// console.log(updatedUser);
// {
//   id: 1,
//   profile: { name: 'Anna', email: 'new.email@example.com' }
// }
// Task 14
// function displayUserInfo(user) {
//    const {name, age, ...rest} = user
//    return `Имя: ${name}, Возраст: ${age}`;
// }
// const user = {
//    name: 'John',
//    age: 28,
//    country: 'USA'
// };
// console.log(displayUserInfo(user));
// Имя: John, Возраст: 28
// Task 15
// function getDefaultValue (userName, isAdmin, ...settings) {
//   return userName = userName || 'Guest';
// }
// Task 16
// const user = {
//     name: function (name) {
//         prompt()
//     },
//     profile: true,
//     isAdmin: true
// }
// const isAdmin = user && user.profile && user.isAdmin;
// Task 17
// const user = {};
// user.name ||= 'Guest'
// Task 18
// const newSet = new Set(['John', 'Jon', 'Jane']);
// Task 19
// function addParticipant (name) {
//     return newSet.add(name)
// }
// function getAllParticipant (name) {
//     return Array.from(newSet)
// }
// function removeParticipant (name) {
//     return newSet.delete(name)
// }
// Task 20
// const companyWorkers = new Map ([
//     ['name', 'position'],
// ])
// function addEmployee (name, position) {
//     companyWorkers.set(name, position)
// }
// function getPositionByName (name) {
//     companyWorkers.get(name)
// }
// function getAllEmployee () {
//     for (const [name, position] of companyWorkers.entries()) {
//         console.log(`${name}: ${position}`)
//     }
// }
// Task 21
// const healthData = new WeakMap();
// class Player {
//     constructor(name, health) {
//         this.name = name;
//         this.health = health;
//     }
// }
//
// function addPlayer(player) {
//     healthData.set(player, player.health ?? 100);
// }
//
// function getHealth(player) {
//     return healthData.get(player);
// }
//
// function deletePlayer(player) {
//     return healthData.delete(player);
// }
//
// function damagePlayer(player, amount) {
//     const currentHealth = healthData.get(player);
//     if (currentHealth !== undefined) {
//         healthData.set(player, currentHealth - amount);
//     }
// }
// const player1 = new Player('Artem', 100);
// const player2 = new Player('Kristina', 30);
//
// addPlayer(player1);
// addPlayer(player2);
// getHealth(player1);
// deletePlayer(player2);
// damagePlayer(player1, 20)
// Task 22
// const activeUser = new WeakSet();
// function addUser (user) {
//    activeUser.add(user);
// }
// function isUserActive(user) {
//     return activeUser.has(user);
// }
// function removeUser (user) {
//     activeUser.delete(user);
// }
// Task 23
// const jsonString = `{
//     "name": "Alice",
//     "age": 30,
//     "hobbies":
//         [
//             "reading",
//             "biking",
//             "cooking"
//         ],
//     "isStudent": false
// }`;
// const newStr = JSON.parse(jsonString);
// newStr.age = 31;
// newStr.hobbies.push('programming');
// const backToString = JSON.stringify(newStr);

// Task 25
const person = {
    name: "Bob",
    age: 25,
    greet: "function() { console.log('Hello!'); }", // строка
    address: {
        city: "New York",
        zip: "10001"
    }
};

const jsonString = JSON.stringify(person);
console.log(jsonString);
// Task 26
const book = {
    title: "JavaScript: The Good Parts",
    author: "Douglas Crockford",
    details: {
        publisher: "O'Reilly Media",
        pages: 176
    },
    tags: ["JavaScript", "Programming", "Web Development"]
};
const copyBook = JSON.parse(JSON.stringify(book));
copyBook.title = "JavaScript: Definitive Guide";
copyBook.details.pages = 1096;
console.log(copyBook);
console.log(book)
// Task 27
const user = {
    id: 1,
    username: "johndoe",
    password: "supersecretpassword",
    email: "johndoe@example.com"
};
const userCopy = JSON.stringify(user, ['id', 'username', 'email'])
console.log(userCopy)

// Task 28
function divide(a, b) {
    try {
        if (b === 0) {
            throw new Error('Cannot divide by zero');
        }
        return a / b;
    } catch (err) {
        console.log( err.message);
    } finally {
        console.log('Operation completed');
    }
}
console.log(divide(10, 2)); // Должно вывести: результат деления и "Operation completed"
console.log(divide(10, 0)); // Должно вывести: "Cannot divide by zero" и "Operation completed"

// Task 29
function parseJSON(jsonString) {
    try {
        const json = JSON.parse(jsonString);
        return json;
    } catch (err) {
        return "Invalid JSON format";
    } finally {
        console.log("Parsing completed");
    }
}
console.log(parseJSON('{"name": "John", "age": 30}')); // Должно вывести объект и "Parsing completed"
console.log(parseJSON('{name: John, age: 30}')); // Должно вывести "Invalid JSON format" и "Parsing completed"
// Task 30
function getStringLength(str) {
    try {
        if (typeof str !== 'string') {
            throw new Error('Input is not a string');
        }
        return `длина строки ${str.length}`;
    } catch (err) {
        console.log(err.message);
    } finally {
        console.log("String length checked");
    }
}

getStringLength("Hello"); // Должно вывести: длина строки 5 и "String length checked"
getStringLength(null); // Должно вывести: "Input is not a string" и "String length checked"

// Task 31
function sqrt(x) {
    try {
        if (x < 0) {
            throw new Error('Cannot calculate square root of a negative number');
        } return Math.sqrt(x)
    } catch (err) {
        console.log(err.message);
    } finally {
        console.log('Square root calculation completed')
    }
}
sqrt(9); // Должно вывести 3 и "Square root calculation completed"
sqrt(-9); // Должно вывести "Cannot calculate square root of a negative number" и "Square root calculation completed"

// Task 32
let balance = 500;
function withdraw(amount) {
   try {
       if (amount > balance) {
           throw new Error('Insufficient funds');
       }
       balance -= amount;
       console.log(`Оставшийся баланс: ${balance}`);
       } catch (err) {
       console.log(err.message);
       } finally {
       console.log('Transaction completed')
      }
}
withdraw(300); // Должно вывести оставшийся баланс и "Transaction completed"
withdraw(600); // Должно вывести "Insufficient funds" и "Transaction completed"

