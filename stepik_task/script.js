//Задача 1
// let carLength = 4.2;
// let carCount = 1.7;
// if (carLength <= 3.8 && carCount <= 1.2) {
//     console.log('Класс A')
// }else if(carLength <= 4 && carCount <= 1.6) {
//     console.log('Класс B')
// }else if(carLength <= 4.5 && carCount >= 1.6 && carCount <= 2) {
//     console.log('Класс C')
// }else {
//     console.log('Выберите автомобиль другого класса')
// }

// Задача 2
// let age = 18;
// let access = age >= 18 ?'Доступ разрешен' : 'Доступ запрещен';
//
// console.log(access);

// Задача 3
// function getNumber(min, max) {
//     while (true) {
//         let num = +prompt(`Введите число от ${min} до ${max}:`);
//         if (!isNaN(num) && num >= min && num <= max) {
//             return num;
//         }
//         alert("Ошибка! Введите корректное число.");
//     }
// }

// Задача 4
// let num = getNumber(1, 7);
// let result = (num === 6 || num === 7) ? "Выходной" : "Рабочий день";
//
// console.log(result);

// Задача 5
// let price = +prompt("Введите цену товара:");
// let status = prompt("Введите статус покупателя (standard или VIP):").toLowerCase().trim();
// if (status === "vip" && price >= 1000 ) {
//     console.log(`${price * 0.9}`);
// }else if (status === "standard" && price >= 1000) {
//     console.log(`${price* 0.95}`);
// }else{
//     console.log(price);
// };

// Задача 6
// const [price, status] = [+prompt(), prompt()];
//
// console.log(price > 1000
//                 ? status === 'VIP'
//                 ? price * 0.9
//                 : price * 0.95
//                 : price);

// Задача 7
// let [weight, deliveryStatus] = [+prompt(), prompt()];
// let deliveryCost = (deliveryStatus === "экспресс")
//     ? (weight <= 5 ? "Стоимость доставки: 1000 рублей" : "Стоимость доставки: 1500 рублей")
//     : (deliveryStatus === "обычная")
//     ? (weight <= 5 ? "Стоимость доставки: 500 рублей" : "Стоимость доставки: 800 рублей")
//     : "Некорректный статус доставки";
//
// console.log(deliveryCost);

// Задача 8
// let month = +prompt("Введите месяц (от 1 до 12)");
// let temperature = +prompt("Введите температуру в градусах Цельсия");
//
// if (isNaN(month) || isNaN(temperature) || month < 1 || month > 12) {
//     console.log("Некорректные данные");
// } else {
//     if (month == 12 || month == 1 || month == 2) {
//         if (temperature <= -25) {
//             console.log("Зима (холодная зима)");
//         } else {
//             console.log("Зима");
//         }
//     } else if (month == 3 || month == 4 || month == 5) {
//         if (temperature < 15) {
//             console.log("Весна (прохладная весна)");
//         } else {
//             console.log("Весна");
//         }
//     } else if (month == 6 || month == 7 || month == 8) {
//         if (temperature >= 30) {
//             console.log("Лето (жаркое лето)");
//         } else {
//             console.log("Лето");
//         }
//     } else if (month == 9 || month == 10 || month == 11) {
//         if (temperature < 0) {
//             console.log("Осень (прохладная осень)");
//         } else {
//             console.log("Осень");
//         }
//     }
// }

// Задача 9
// let num = 7;
// let count = 1;
//
// while(count <= 10) {
//     console.log(`${num} * ${count}` + ' = ' + (num * count));
//     count++;
// }

// Задача 10
// let num1 =9;
// let num2 = 3;
//
//  if (num1 >= num2) {
//      while (num1 >= num2) {
//          if (num1 % 3 === 0) {
//              console.log(num1)
//          }
//              num1--
//          }
//  } else if (num1 <= num2) {
//      while (num1 < num2) {
//          if (num1 % 3 === 0) {
//              console.log(num1)
//          }
//          num1++
//      }
//  }

// Задача 11
// let num = 3;
// let count = 0;
//     while (count < 1) {
//         console.log(2**num)
//         count++
//     }

// Задача 12
// let num = 2;
// let count = 0;
//
// while (num < 1000) {
//     num *= 2;
//     count ++
// }
// console.log("Итоговое число:", num)
// console.log("Количество итераций:", count)

// Задача 13
// let n = 8;
//
// for (let i = 2; i <= n; i += 2) {
//     console.log(i);
// }

// Задача 14
// let num1 = 1;
// let num2 = 10;
//
// for (i = num2; i >= num1; i--) {
//     console.log(i)
// }

// Задача 15
// let num = 7;
// let sum = 0;
//
//     for(let i = 1; i <= num; i+=2) {
//             sum += i;
// }
//
// for (i = 1; i <= N; i ++) {
//     if (i % 2 === 1) {
//         S += i
//     }
// }
//
//console.log(`Сумма нечетных чисел от 1 до ${num} равна ${sum}`)

// Задача 16
// let num = 7;
// let evenNum = 0;
// let oddNum = 0;
//
// for(let i = 1; i <= num; i++) {
//     if(i % 2 === 0) {
//         evenNum++;
//     } else  {
//         oddNum++;
//     }
// }
//
// console.log(`Количество четных чисел: ${evenNum}`)
// console.log(`Количество нечетных чисел: ${oddNum}`)

// Задача 17
// let num1 = 7;
// let num2 = 6;
//
// function getBigger (num1, num2) {
// if (num1 > num2) {
//     console.log(`${num1} больше, чем ${num2}`)
// }else if (num1 < num2) {
//     console.log(`${num2} больше, чем ${num1}`)
// }else{
//     console.log(`${num1} равно ${num2}`)
// }
// второе решение
// num1 > num2
//     ? console.log(`${num1} больше, чем ${num2}`)
//     : num1 < num2
//     ? console.log(`${num2} больше, чем ${num1}`)
//     : console.log(`${num1} равно ${num2}`);
//
// getBigger(num1, num2)

// Задача 17.1
// function getBigger (num1, num2) {
//     console.log(num1 > num2
//                      ? `${num1} больше, чем ${num2}`
//                      : num1 < num2
//                      ? `${num2} больше, чем ${num1}`
//                      : `${num1} равно ${num2}`);
//     }
//
// getBigger(+prompt(), +prompt());

// Задача 18
// function getBiggerNum (num1, num2, num3, num4) {
//     let numbers = [Number(num1), Number(num2), Number(num3), Number(num4)];
//     let maxNumber = Math.max(...numbers);
//     console.log(maxNumber)
// }
//
// getBiggerNum (1, 8, 3, 4)

// Задача 19
// function getMath (num1, num2, operator) {
// let result = operator === '+'
//                ? num1 + num2
//                : operator === '-'
//                ? num1 - num2
//                : operator === '*'
//                ? num1 * num2
//                : operator === '/'
//                ? num1 / num2
//                : 'Неверный оператор';
// console.log(result);
// }
// getMath(7, 3 ,'=');

// Задача 19.1
// function getMath(num1 = +prompt(), num2 = +prompt(), operator = prompt()) {
//     console.log(operator === "*" || operator === "/" || operator === "+" || operator === "-"
//     ? eval(`${num1} ${operator} ${num2}`)
//     : "Неверный оператор");
// }
//getMath();

// Задача 20
// function getArithmeticMean (num1, num2, num3) {
//     return ((num1 + num2 + num3) / 3) * 2;
// }
// let result = getArithmeticMean(3, 3, 3);
//
// console.log(result);

// Задача 21
// let globalResOne, globalResTwo;
//
// function calculateAverage(num1, num2, num3, num4) {
//     let resOne = (num1 + num2) / 2;
//     let resTwo = (num3 + num4) / 2;
//     return {resOne, resTwo};
// }
//
// let getVarOfCalculateAverage = calculateAverage(1, 2, 3, 4)
//
// globalResOne = getVarOfCalculateAverage.resOne;
// globalResTwo = getVarOfCalculateAverage.resTwo;
//
// function compareAverages (globalResOne, globalResTwo) {
// return globalResOne > globalResTwo
//        ? 'Среднее значение первого набора больше'
//        : globalResOne < globalResTwo
//        ? 'Среднее значение второго набора больше'
//        : 'Средние значения наборов равны'
// }
//
// console.log(compareAverages(globalResOne, globalResTwo);

// Задача 22
// function checkTriangleExistence (num1, num2, num3) {
//     let firstSideofTriangle = +prompt();
//     let secondSideofTriangle = +prompt();
//     let thirdSideofTriangle = +prompt();
//
//     return firstSideofTriangle >= secondSideofTriangle + thirdSideofTriangle
//            || secondSideofTriangle >= firstSideofTriangle + thirdSideofTriangle
//            || thirdSideofTriangle >= thirdSideofTriangle + secondSideofTriangle
//            ? 'Треугольник не существует'
//            : 'Треугольник существует';
// }
// console.log(checkTriangleExistence());

// Задача 23
// let square = +prompt();
// let height = +prompt();
// let typeOfFigure = prompt();
//
// let calculateCylinderVolume = (num1, num2, str) => typeOfFigure === 'цилиндр'? 'Объем цилиндра: ' + square * height : calculateConeVolume();
// let calculateConeVolume = (num1, num2, str) => 'Объем конуса: ' + 1/ 3 * square * height;
//
// if (typeOfFigure === 'цилиндр') {
//     console.log(calculateCylinderVolume(square, height, typeOfFigure));
// }else {
//     console.log(calculateConeVolume(square, height, typeOfFigure));
// }

// Задача 24
// let country = prompt();
// let date = prompt();
// let days = prompt();
//
// function getValidDays(days) {
//     let inputDays = Number(days);
//     if (days === 'неопределенное количество') {
//         return 'неопределенное количество'
//     } else {
//         return inputDays;
//     }
// }
//
// let trip = {
//     date,
//     country,
//     days: getValidDays(days),
// }
// console.log(`${trip.date} вы отправляетесь в ${trip.country} на ${trip.days} дней`)

// Задача 25
// let obj1 = { value: 5 };
// let obj2 = obj1;
//
// let num1 = 3;
// let num2 = num1;
//
// obj2.value = 10;
//
// num2 = 2;
//
// console.log(obj1.value % num1);

// Задача 26
// const catalogue = {
//     magazine: 5,
// }
//
// catalogue.magazine = +prompt();
//
// catalogue.magazine > 10 && catalogue.magazine <= 50
//     ? console.log(catalogue.magazine)
//     : console.log('Введите число в диапазоне от 10 до 50 включительно');

// Задача 27
// let bankAccount = {
//     balance: 500,
//
//     deposit: function(amount) {
//         return amount += this.balance
//     },
//
//     withdraw: function(amount) {
//         return this.balance >= amount
//             ? this.balance -= amount
//             : "Недостаточно средств на счете";
//     },
// };
//
// const amount = Number(prompt());
// const choice = prompt()
// if (choice === "внести") {
//     console.log(bankAccount.deposit(amount));
// } else if (choice === "снять") {
//     console.log(bankAccount.withdraw(amount))
// }

// Задача 28
// let budget = {
//     income: +prompt(),
//     expenses: +prompt(),
//     calculateProfit (num) {
//         return this.income-this.expenses;
//     }
// }
// console.log(budget.calculateProfit() === 0
//     ? 'Вы отработали в ноль'
//     : budget.calculateProfit() < 0
//         ? `Вы ушли в минус на ${-budget.calculateProfit()} рублей`
//         : `Ваша прибыль составляет ${budget.calculateProfit()} рублей`
// )

// Задача 29
// let str = prompt();
// str.includes('д') || str.includes('н')
//     ? console.log(str.toUpperCase())
//     : console.log(str.toLowerCase());

// Задача 30
// let str = prompt();
// let symbol = prompt();
//
// let count = 0;
// for (let i = 0; i < str.length; i++) {
//     if (str[i] === symbol){
//         count++
//     }
// }
//
// console.log(`Символ "${symbol}" встречается ${count} раз(-а)`)

// Задача 31
// let num = prompt();
// isNaN(num)
//     ? console.log('Вы ввели не число')
//     : console.log('Вы ввели число');

// Задача 32
// let num = -81;
// console.log(num > 0
//     ? `Квадратный корень из ${num} равен ${Math.sqrt(num)}`
//     : num < 0
//         ? Math.abs(Math.sqrt(num))
//         : '');

// Задача 33
// let fruits = ["Яблоко", "Груша", "Вишня", "Абрикос"];
//
// for (let i = 0; i < 2; i++) {
//     fruits.shift();
// }
//     fruits.unshift( "Апельсин" , "Банан")
//     console.log(fruits);
//
// let fruits = ["Яблоко", "Груша", "Вишня", "Абрикос"];
// fruits.splice(0, 2, 'Апельсин', 'Банан');
// console.log(fruits);

// Задача 34
// let arr = [];
// let userNameOne = 'костя';
// let userNameTwo = 'димон';
// let userNameThree = 'петя';
// arr.push(userNameOne, userNameTwo, userNameThree)
// console.log(`${arr[0]} и ${arr[2]}`);

// Задача 35
// const numElements = Number(prompt("Введите количество элементов в массиве:"));
// const userArray = [];
//
// for (let i = 0; i < numElements; i++) {
//     let el = prompt();
//     userArray.unshift(el);
// }
//
// console.log(userArray);

// Задача 36
// const numElements = Number(prompt("Введите количество элементов в массиве:"));
// const userArray = [];
// const lengths = [];
//
// for (let i = 0; i < numElements; i++) {
//     let el = prompt();
//     userArray.push(el)
// }
//
// for (const word of userArray) {
//     const length = word.length;
//     lengths.push(length);
// }
// console.log(lengths);

// Задача 37
// let str = prompt();
// str = str.split(", ").map(el => isNaN(el)
//     ? el
//     : Number(el));
// console.log(str)

// 37.1
// let result = [];
// for (elem of prompt().split(", ")) {
//     isNaN(elem) ? result.push(elem) : result.push(Number(elem)); }
// console.log(result);

/// 37.2
// let arr = prompt().split(", ");
// let numArr = [];
// for (let element of arr) {
//     let newElement = parseInt(element);
//     numArr.push(isNaN(newElement) ? element : newElement);
// }
// console.log(numArr);

/// 37.3
// let word=prompt();
// let mass=word.split(', ');
// for (let i=0; i<mass.length; i++){
//     if ( !isNaN(mass[i])) {
//         mass[i]=parseInt(mass[i]);
//     }
// }
// console.log(mass);

// Задача 38
// const s = ["папа", "мамуля", "сестра", "сын"];
// const stringLengths = s.map(function(elem) {
//     return elem.length;
// });
// console.log(stringLengths.join(" "));
// Задача 39
// const dates = ["25.10.1917", "22.06.1941", "09.05.1945", "26.12.1991"];
// const years = dates.map(function(date) {
//     const parts = date.split(".");
//     return parts[2];
// });
// console.log(years.join(", "));

// Задача 40
// const fruits = ["apple", "banana", "orange"];
// console.log(fruits.includes("banana")); // Выведет true
// console.log(fruits.includes("grape"));  // Выведет false

// Задача 41
// const numbers = [1, 2, 3, 4, 5];
// const increasedNumbers = numbers.map(function(number) {
//
//     return number + 2;
// });
//
// console.log(increasedNumbers);

// Задача 42
// const numbers = [1, 2, 3, 4, 5];
// // Используем метод filter для создания нового массива evenNumbers
// const evenNumbers = numbers.filter((number) => {
//     return number % 2 === 0;
//     // в новый массив добавляются только те элементы, которые делятся на 2 без остатка
// });
// console.log(evenNumbers); // Выведет [2, 4]

// Задача 43
// const capitals = [
//     "Токио", "Афины", "Нью-Дели", "Сеул", "Джакарта", "Багдад", "Астана", "Москва", "Анкара"
// ];
//
// const newArr = capitals.filter(cap => cap.startsWith("А"));
// console.log(newArr)

// Задача 44
// let capitals = prompt().split(" ");
// let result = capitals.includes("Андорра-Ла-Велла")
//     ? capitals.filter(cap => cap.endsWith("а"))
//     : capitals.filter(cap => cap.endsWith("н"));
// console.log(result);

// Задача 44.1
// const capitals = prompt().split(' ');
// const endChar = capitals.includes('Андорра-Ла-Велла') ? 'а' : 'н';
// console.log(capitals.filter(x => x.endsWith(endChar)));

// Задача 45
// let arr = prompt().split(" ");
// let newArr = arr.map(word => word.toUpperCase());
// console.log(newArr)

// Задача 46
// let arr = prompt().split(", ");
// let newArr = arr.map(name => `Пока, ${name}`);
// console.log(newArr);

// Задача 47
// const cities = ["Москва", "Санкт-Петербург", "Саратов", "Магадан", "Ярославль", "Самара", "Якутск"];
// let userCity = prompt();
//
// let result = cities.includes(userCity)
//     ? `Города, начинающиеся с буквы "${userCity[0]}": ` + cities.filter(city => city.startsWith(userCity[0])).join(", ")
//     : "Такого города нет в списке";
// console.log(result);

// Задача 48
// function outer() {
//   let a = 42;
//
//   function inner() {
//     console.log(a);
//   }
//
//   return inner;
// }
//
// const accessToInner = outer();
//
// accessToInner();



