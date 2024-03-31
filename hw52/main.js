/*
Task 1 💻
Создайте переменные и присвойте им значения: 'true' false 17 undefined null
Затем с помощью оператора typeof выведите в консоль все типы созданных значений переменных.
*/
const firstVariable = 'true';
const secondVariable = false;
const thirdVariable = 17;
const fourthVariable = undefined;
const fifthVariable = null;
console.log(`${typeof firstVariable} ${typeof secondVariable} ${typeof thirdVariable} ${typeof fourthVariable} ${typeof fifthVariable}`);

/*
Task 2 💻
Даны две переменные: let height = 15 let width = 20
С помощью условий выведите в консоль разработчика наибольшее число.
*/
let height = 15;
let width = 20;
height > width ? console.log(`Наибольшее число: ${height}`) : console.log(`Наибольшее число: ${width}`);

/*
Task 3 💻
Написать перебор от 1 до 20, где выведутся все числа кратные трём.
Для вычисления кратности обратите внимание на оператор %
*/
for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0) {
        console.log(i);
    }
}

/*
Task 4 💻
Нам надо идти на работу, но нужно проверить все ли мы взяли или нет?
Нам точно нужны ключи документы и ручка, но из еды нам надо яблоко или апельсин.
Для решения этой задачи нам помогут логические операторы || &&.
Ответ поместите в переменную shouldGoToWork
*/
let key = true;
let documents = true;
let pen = true;
let apple = false;
let orange = true;
let shouldGoToWork = key && documents && pen && (apple || orange);
console.log(shouldGoToWork);

/*
Task 5 💻
Запросить у пользователя число:
1. Если число делится без остатка на 5 выводим сообщение Fiz
2. Если число делится без остатка на 3 выводим сообшение Buz
3. Если число делится без остатка и на 3 и на 5 выводим сообшение FizBuz
*/
const number = prompt('Введите число:');
if (number % 3 === 0 && number % 5 === 0) {
    console.log('FizBuz');
} else if (number % 5 === 0) {
    console.log('Fiz');
} else if (number % 3 === 0) {
    console.log('Buz');
} else {
    console.log('Введённое число не подпадает под проверяемые условия')
}

/*
Task 6 💻
Написать программу, которая выполняет следующие операции:
Запрашивает у пользователя возраст, если он больше 18, то выводит сообщение - Попей пивка.
Если меньше, то выводит сообщение - Пей колу.
Добавить условие, что если возраст от 16-18, выводим сообщение - Можешь выкурить сигаретку, только маме не говори.
*/
const userAge = prompt('Введите Ваш возраст:');
if (userAge > 18) {
    console.log('Попей пивка');
} else if (userAge <= 18 && userAge >= 16) {
    console.log('Можешь выкурить сигаретку, только маме не говори');
} else if (userAge < 18) {
    console.log('Пей колу');
}

/*
Task 7 💻
Напишем программу для туристического терминала. Запросите у пользователя
в какую сторону света он бы хотел отправиться. После ввода данных мы должны
вывести в консоль сообщение из списка. Если пользователь ввел неверные данные,
выведите сообщение в консоль чтобы он попробовал еще раз.

юг на юг пойдешь счастье найдешь
север на север пойдешь много денег найдешь
запад на запад пойдешь верного друга найдешь
восток на восток пойдешь разработчиком станешь
*/
const userTravelDream = prompt('В какую сторону света Вы бы хотели отправиться?');
switch (userTravelDream) {
    case 'юг':
        console.log('На юг пойдёшь счастье найдёшь');
        break;
    case 'север':
        console.log('На север пойдёшь много денег найдёшь');
        break;
    case 'запад':
        console.log('На запад пойдёшь верного друга найдёшь');
        break;
    case 'восток':
        console.log('На восток пойдёшь разработчиком станешь');
        break;
    default:
        console.log('Вы ввели неверные данные. Попробуйте повторить ввод ещё раз.');
        break;
}

/*
ADVANCED level
Task 1 👨‍🏫
Пользователь решил повеселиться и ввел свое имя в таком ввиде 'пОлИнА нАбЕрЕжНаЯ'
Испрвьте эту ситацию чтобы мы смогли корректно поприветсвовать пользователя, и поприветствуйте его через alert
Привет, Полина Набережная!
*/
let userName = prompt('Введите Ваше имя: ');
userName = userName.toLowerCase().trim().split(' ');
let modifiedUserName = '';
for (let i = 0; i < userName.length; i++) {
    modifiedUserName += userName[i].charAt(0).toUpperCase() + userName[i].slice(1) + ' ';
}
alert(modifiedUserName);

/*
Task 2 👨‍🏫
Написать программу, которая выполняет следующие операции:
Запрашивает у пользователя число.
Последовательно задает вопрос: cколько отнять / прибавить / умножить / разделить от предыдущего результата?
По окончании вывести пользователю alert, содержащий формулу и результат например:
((((6 - 10) + 5) * 20) / 2 = 110)
*/
const firstNumber = prompt('Введите первое число:');
const secondNumber = prompt('Сколько отнять?');
const thirdNumber = prompt('Сколько прибавить?');
const fourthNumber = prompt('Сколько умножить?');
const fifthNumber = prompt('Сколько разделить?');
const calculationResult = (((Number(firstNumber) - Number(secondNumber)) + Number(thirdNumber)) * Number(fourthNumber)) / Number(fifthNumber);
alert(`(((${firstNumber} - ${secondNumber}) + ${thirdNumber}) * ${fourthNumber}) / ${fifthNumber} = ${calculationResult}`);

/*
Task 3 👨‍🏫
Написать программу, которая будет выводить в консоль лесенку.
    #
    ##
    ###
    ####
    #####
    ######
*/
let symbol = '#';
for(let i = 0; i < 6; i++) {
    console.log(symbol);
    symbol += '#';
}
