//Task 1 💻 Создайте переменные, затем сложите их и выведите результат в консоль разработчика.
let x = 20;
let y = 58;
let z = 42;
const result = x + y + z;
console.log('Результат сложения: ' + result);

/*
Task 2 💻 
Создайте переменные:
- количество секунд в минуте
- количество минут в часу
- количество часов в сутках
- количество суток в году
Посчитайте ваш возраст в секундах и поместите результат в переменную myAgeInSeconds
*/

const secondsInMintuteQuantity = 60;
const minutesInHourQuantity = 60;
const hoursInDayQuantity = 24;
const daysInYearQuantity = 365;
const myAgeInSeconds =  19 * daysInYearQuantity * hoursInDayQuantity * minutesInHourQuantity * secondsInMintuteQuantity;
console.log("Мой возраст в секундах: " + myAgeInSeconds);

/*
Task 3 💻
let count = 42
let userName = '42'
Создайте две переменные. Поместите в них переменную count и превратите в строку, 
а userName наоборот в число. Попробуйте реализовать задачу двумя разными способами.
*/ 

let count = 42;
let userName = '42';
const countType1 = String(count);
const countType2 = 'Мне' + count + 'года';
const userNameType1 = Number(userName);
const userNameType2 = +userName;
console.log(typeof countType1);
console.log(typeof countType2);
console.log(typeof userNameType1);
console.log(typeof userNameType2);

/*
Task 4 💻
Имеется три переменные:
  let a = 1
  let b = 2
  let c = "белых медведей"
Сложите переменные так, чтобы в результате получилось выражение: 12 белых медведей и результат выведите в консоль.
*/ 

let a = 1;
let b = 2;
let c = "белых медведей";
console.log(a + '' + b + ' ' + c);

/*
Task 5 💻
Создайте переменные и поместите в них нижеприведенные слова. Затем создайте еще одну переменную lengthWords и 
посчитайте в ней длинну всех слов из списка:
- доступ 
- морпех
- наледь
- попрек
- рубило
*/ 

const firstWord = 'доступ';
const secondWord = 'морпех';
const thirdWord = 'наледь';
const fourthWord = 'попрек';
const fivthWord = 'рубило';
const lengthWords = firstWord.length + secondWord.length + thirdWord.length + fourthWord.length + fivthWord.length;
console.log('Длинна всех слов из списка: ' + lengthWords);

/*
Task 6 💻
Создать 3 переменные разных типов и вывести в консоль для каждой из них строку следующего вида:
`Variable: %variable name% have type: %type variable%`
*/ 

const booleanVariable = true;
const numberVariable = 10;
const stringVariable = 'Hello';
console.log(`Variable ${Object.keys({booleanVariable})} have type: ${typeof booleanVariable}`);
console.log(`Variable ${Object.keys({numberVariable})} have type: ${typeof numberVariable}`);
console.log(`Variable ${Object.keys({stringVariable})} have type ${typeof stringVariable}`);

/*
Task 7 💻
Запросить у пользователя имя и возраст и вывести их в консоль.
*/

const personName = prompt('Введите Ваше имя');
const personAge = prompt('Введите Ваш возраст');
console.log(`Имя пользователя: ${personName}, возраст пользователя: ${personAge} лет`);

/*
ADVANCED level
Task 1 👨‍🏫
Поменяйте значение переменных местами не создавая дополнительной переменной:
let a = 4
let b = 3
*/

let A = 4;
let B = 3;

[A, B] = [B, A];
console.log(A);
console.log(B);

/*
Task 2 👨‍🏫
В данном послании скрыт шифр! Чтобы его разгадать нам нужно соединить все вторые символы слов!
let codeWord1 = "обернись";
let codeWord2 = "неужели";
let codeWord3 = "огурцы";
let codeWord4 = "липкие";
let codeWord5 = "?!";
Создайте переменную cipher и поместите туда необходимые символы
*/

let codeWord1 = "обернись";
let codeWord2 = "неужели";
let codeWord3 = "огурцы";
let codeWord4 = "липкие";
let codeWord5 = "?!";
const cipher = codeWord1[1] + codeWord2[1] + codeWord3[1] + codeWord4[1] + codeWord5[1];
console.log(cipher);