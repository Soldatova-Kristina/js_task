
// Задание 0
// console.log(!!0);          // ?false
// console.log(!!1);          // ? true
// console.log(!!"");         // ? false
// console.log(!!"Hello");    // ? true
// console.log(!!null);       // ? false
// console.log(!!undefined);  // ? false
// console.log(!!NaN);        // ? false
// console.log(!![]);         // ? true
// console.log(!!{});         // ? true
// console.log(!!"false");    // ? true
//
// console.log(Number("42"));       // ? 42
// console.log(Number("42px"));     // ? NaN
// console.log(Number(""));         // ? NaN
// console.log(Number(" "));        // ? 0
// console.log(Number(null));       // ? 0
// console.log(Number(undefined));  // ? NaN
// console.log(Number(true));       // ? 1
// console.log(Number(false));      // ? 0
// console.log();            // ? undefined
// console.log(+[]);                // ? 0
//
// console.log(String(123));        // ? '123'
// console.log(String(true));       // ? 'true'
// console.log(String(false));      // ? 'false'
// console.log(String(null));       // ? 'null'
// console.log(String(undefined));  // ? 'undefined'
// console.log(String(NaN));        // ? 'NaN'
// console.log(123..toString());    // ? '123'
// console.log((42).toString());    // ? '42'
// console.log([1,2,3].toString()); // ? '1, 2, 3'
// console.log({}.toString());      // ? "[object Object]"
//
// console.log(Boolean(null));      // ? false
// console.log(Boolean(undefined)); // ? false
// console.log(Boolean(NaN));       // ? false
// console.log(Number(null));       // ? 0
// console.log(Number(undefined));  // ? NaN
// console.log(Number(NaN));        // ? NaN
// console.log(String(null));       // ? null
// console.log(String(undefined));  // ? undefined
// console.log(String(NaN));        // ? NaN
// console.log(null == undefined);  // true
//
// console.log("5" + 3);     // 53
// console.log("5" - 3);     // ? 2
// console.log("5" * "2");   // ? 10
// console.log("5" / "2");   // ? 2.5
// console.log("5" + true);  // ? 5true
// console.log("5" - true);  // ?4
// console.log("5" * false); // ?0
// console.log("5px" - 2);   // ?  NaN
// console.log(+'42' + 5);    // ? 47
// console.log(undefined + 5); // ? NaN
//
// console.log(5 == "5");       // ? true
// console.log(5 === "5");      // ? false
// console.log(0 == false);     // ? true
// console.log(0 === false);    // ? false
// console.log(null == 0);      // ? false
// console.log(true > false);       // ?  true
// console.log(undefined < 0 );      // ? false
// console.log(false == '0'); // ? true
// console.log(undefined > 0);  // ? false
// console.log(undefined < 0);  // ? false
//
// console.log(!!1);             // ? true
// console.log(!!0);             // ? false
// console.log(!!"hello");       // ? true
// console.log(!!"");            // ? false
// console.log(!!null);          // ? false
// console.log(!!undefined);     // ? false
// console.log(!!NaN);           // ? false
// console.log(!!{});            // ? true
// console.log(!![]);            // ? true
// console.log(Boolean(" "));    // ? true
//
// console.log(true && "Hello");      // ? hello
// console.log(false || "World");     // ? world
// console.log("" || "default");      // ? default
// console.log(null && "Not printed");// ? null
// console.log(undefined || "Yes");   //  yes
// console.log(0 || 42);              // ? 42
// console.log(1 && 2 && 3);          // ? 3
// console.log(1 || 2 || 3);          // ? 3
// console.log("" && "Not printed");  // ? ''
// console.log(0 && "No");            // ? 0
//
// console.log(parseInt("42px"));   // 42
// console.log(parseInt("3.14"));   // 3
// console.log(parseFloat("3.14")); // ? 3.14
// console.log(parseInt("hello"));  // ? NaN
// console.log(parseFloat("10.5px"));// ? 10.5
// console.log(parseInt("007"));    // ? 7
// console.log(parseFloat("100px"));// ? 100
// console.log(parseInt("0x10"));   // ? 16
// console.log(parseInt(" 123 "));  // ? 123
// console.log(parseFloat(" 5.5 "));// ? 5.5

// //Задание 1
// let num = 2 ;
// if (!isNaN(num) && num % 2 === 0) {
//   console.log('Четное число');
// } else {
//   console.log('Нечетное число');
// }

// //Задание 2
// let userAge = 28;
// !isNaN(userAge) && userAge < 18
// ? console.log('вы несовершенолетний')
// : userAge >= 18 && userAge < 60
// ? console.log('вы совершенолетний')
// : userAge > 60
// ? console.log('вы пенсионер')
// : console.log('введите ваш возраст')

// //Задание 3
// let userTime = 'jcbd';
// if (!isNaN(userTime) && userTime >= 0 && userTime <= 12) {
//   console.log('утро')
// } else if (!isNaN(userTime) && userTime > 12 && userTime < 18 ) {
//   console.log('день')
// } else if (!isNaN(userTime) && userTime >=18   && userTime < 24 ){
//   console.log('вечер')
// } else {
//   console.log('введите время с 0-24')
// }

// //Задание 4
// let userTemperature = + prompt();
// console.log(
//     isNaN(userTemperature)
//         ? "Введите температуру цифрами"
//         : userTemperature <= 10
//         ? "холодно"
//         : userTemperature <= 20
//         ? "тепло"
//         : "жарко"
// );

//Задание 5
// let userPrice = 2500;
// let userStatus = 'стандарт';
// console.log (
//     isNaN(userPrice) || (userStatus === "стандарт" && userStatus === "VIP")
//         ? "введите стоимоcть цифрами и ваш статус \"стандарт\" или \"VIP\""
//         : userPrice >= 1000 && userStatus === "VIP"
//             ? `Стомость товара составит ${userPrice * 0.9}`
//             : `Стомость товара составит ${userPrice}`
// )

// Задание 6
// let month = 2;
// switch(true) {
//   case [6,7,8].includes(month):
//     console.log('summer')
//         break
//   case [9,10,11].includes(month):
//     console.log('autumn')
//         break
//   case [12, 1, 2].includes(month):
//       console.log('winter')
//         break
//   case [3,4,5].includes(month):
//     console.log('spring')
//     break
//   default:
//         console.log('ввведите месяц года от 1 - 12')
// }
//
// let month = 5;
// let season;
// switch (true) {
//   case month >= 3 && month <= 5:
//     season = "Весна";
//     break;
//   case month >= 6 && month <= 8:
//     season = "Лето";
//     break;
//   case month >= 9 && month <= 11:
//     season = "Осень";
//     break;
//   case month === 12 || month === 1 || month === 2:
//     season = "Зима";
//     break;
//   default:
//     season = "Некорректный месяц";
// }
// console.log(season);

//Задание 7
// let a = 10;
// let b =  5;
// let operator = '+';
// let result
// switch (operator) {
//   case '+':
//     result = a + b;
//     break;
//   case '-':
//     result = a - b;
//     break;
//   case '*':
//     result = a * b;
//     break;
//   case '/':
//     result = b !== 0
//              ? a / b
//              : "Ошибка: деление на ноль";
//     break;
//   default:
//     result = "Ошибка: неизвестный оператор";
// }
// console.log(result);

//Задание 8
// let day= 7;
// switch (day) {
//   case 1:
//     console.log('понедельник')
//         break;
//   case 2:
//     console.log('вторник')
//     break;
//   case 3:
//     console.log('среда')
//     break;
//   case 4:
//     console.log('четверг')
//     break;
//   case 5:
//     console.log('пятница')
//     break;
//   case 6:
//     console.log('суббота')
//     break;
//   case 7:
//     console.log('воскресенье')
//     break;
//   default:
//       console.log('введите день недели с 1 - 7')
// }

//Задание 9
// console.log(null ?? 0 ?? "Привет");// 0
// console.log(null || 0 || "Привет");  // Привет
// console.log(null && 0 && "Привет"); //null
// //
// let x = 3;
// let y = 5;
// //
// console.log(x > 2 || y < 6 && x === 3); // true
// console.log(0 ?? undefined ?? null ?? 10);// 0
// console.log(0 || undefined || null || 10);// 10
// //
// let isMember= true;
// let isPremium= false;
// //
// console.log(isMember && isPremium || !isPremium); // true
// console.log(!isMember || isPremium && isMember); // false
// //
// let age = 16;
// let hasParentalConsent = true;
// //
// if (age >= 18 || (age >= 16 && hasParentalConsent)) {
//   console.log("Доступ разрешён");// true
// } else {
//   console.log("Доступ запрещён"); // false
// }
// //
// let firstName = null;
// let lastName = null;
// //
// console.log(firstName ?? "Имя не указано" + " " + lastName ?? "Фамилия не указана"); // имя не указано
// //
// console.log(true && false, 10 > 5 && 5 > 3); // false, true

// Задание 10
// let age = 20;
// let hasTicket= true;
// let isVIP= true;
// //Напишит условие для проверки доступа логические операторы
//
// console.log(age >= 18 && !hasTicket
// ? 'доступ разрешен'
//     : isVIP
//     ? 'доступ разрешен'
//         : 'доступ запрешен'
// )

// Задание 11
// let currentHour = 12;
// let isWeekend= false;
// let isHoliday= false;
// //Напишите условие,которое проверяет, работает ли сотрудник
// console.log( isHoliday || isWeekend
//         ? 'Сотрудник отдыхает'
// : currentHour >= 9 && currentHour <= 18
// ? 'Сотрудник работает'
// : 'Сотрудник отдыхает'
// )
// Задание 12

// Задание 12
// let personalDiscount = null;
// let couponDiscount = 10; // Скидка по купону в процентах
// let isVIP = true;
//
// let discount = isVIP ? 50 : (personalDiscount ?? couponDiscount);
//
// if (discount !== null) {
//   console.log(`Ваша скидка: ${discount}%`);
// } else {
//   console.log("Скидка отсутствует");
// }

// Задание 13
// let isAuthorized = true;
// let isBanned = false;
// let isVerified = false;
// let isAdmin = true;
// //Напишите условие для проверки доступа
// console.log(isAuthorized == true && isAdmin == true && isVerified == true && isBanned == false
// ? 'доступ разрешен'
// : 'доступ запрешен');
// Задание 14

// Задание 14
// let score1 = 85;
// let score2 = null;
// let score3 = null;
// //Вывести средний балл пользователя с учётом значений по умолчанию.
//
// function getScore (score1 = 0, score2 = 0, score3= 0) {
// console.log(`${(score1 + score2 + score3) / 3}`);
// }
// getScore(score1, score2, score3);

//Задание 14.1
// let score1 = 85;
// let score2 = null;
// let score3 = 90;
// function getScore(score1, score2, score3) {
//   let result = ((score1 ?? 0) + (score2 ?? 0) + (score3 ?? 0)) / 3;
//   console.log(result);
// }
// getScore(score1, score2, score3);

//Задание 14.2
// let score1 = 85;
// let score2 = null;
// let score3 = 90;
// function getScore(score1 = 0 , score2 = 0, score3 = 0) {
//   let result = ((score1 ?? 0) + (score2 ?? 0) + (score3 ?? 0)) / 3;
//   console.log(result);
// }
// getScore(score1, score2, score3);

// Задание 15
// function getSum (num1, num2)  {
//     return num1 + num2;
// }
// console.log(getSum(5, 3))

// Задание 16
// function getLength(str) {
//     return str.length
// }
// console.log(getLength('Привет'))

// Задание 17
// function greet (age, name, city) {
//     return !isNaN(age) && typeof name === 'string' && typeof city === 'string'
//     ?  `Меня зовут ${name}, мне ${age} лет, я из ${city}`
//     :  'Введите коректные данные';
// }
// console.log(greet( 28, "Артем", "Буэнос-Айрес"));

//Задание 18
// let message = "Привет, мир!";
// console.log(message);//Привет, мир!
// function changeMessage (str) {
//     message = message.replace('мир', 'Мир');
// }
// changeMessage();
// console.log(message);
// Задание 19
// let message= "Глобальная переменная";
// showLocalMessage();
// function showLocalMessage(str){
//     let  message= "Локальная переменная";
//     console.log(message)
// }
// console.log(message);//Что буде выведено?

// Задание 19
// const double = function (x) {
//     return x * 2;
// };
// console.log(double(4));//
// const double = (x) => x * 2;
// console.log(double(4));

// Задание 20
// const pow = (num1, num2) => num1 ** num2;
// console.log(pow(3,2));