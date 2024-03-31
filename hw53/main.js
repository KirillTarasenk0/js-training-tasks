/*
NORMAL level
Task 1 💻
Написать функцию getSum, которая будет высчитывать сумму чисел от нуля, до параметра, который мы в неё передаем.
Если передадим число 100 то, надо вычислить сумму чисел от 0 до 100 (должно получится 5050)
*/
function getSum(number) {
    if (number < 0) {
        return;
    }
    let sum = 0;
    for (let i = 0; i <= number; i++) {
        sum += i;
    }
    return sum;
}
console.log(getSum(-100));
console.log(getSum(100));

/*
Task 2 💻
Напишите функцию которая в качестве аргумента принимает в себя сумму
кредита который хочет получить клиент и верните результат переплаты
по кредиту:
процентная ставка в год — 17%,
количество лет — 5.
Мы пишем функцию для хорошего банка, поэтому сумма кредита не увеличивается.
*/
const creditOverpayment = creditSum => {
    const creditYears = 5;
    const interestRatePerYear = 1.17;
    return creditSum * interestRatePerYear ** creditYears - creditSum;
};
console.log(creditOverpayment(1000));

/*
Task 3 💻
Написать функцию trimString которая в качестве аргумента принимает три параметра:
строку
значение от
значение по
После вызова функция должна вернуть переданную строку обрезанную по значениям от и по
*/
const trimStrings = (string, from, to) => {
    let changedString = '';
    for (let i = from; i < to; i++) {
        changedString += string[i];
    }
    return changedString;
};
console.log(trimStrings('строка', 0, 4));

/*
Task 4 💻
Написать функцию getSumNumbers, которая будет принимать
число и вычислять сумму цифр из которых состоит число.
Для 2021 это будет 5.
*/
const getSumNumbers = number => {
    let numberSum = 0;
    let stringFromNumber = String(number);
    for (let i = 0; i < stringFromNumber.length; i++) {
        numberSum += Number(stringFromNumber[i]);
    }
    return numberSum;
};
console.log(getSumNumbers(2021));

/*
Task 5 💻
Написать функцию getSum которая принимает два целых числа a и b,
которые могут быть положительными или отрицательными, найти сумму
всех чисел между ними, включая их, и вернуть ее. Если два числа
равны, верните a или b.
getSum(1, 0) == 1   // 1 + 0 = 1
getSum(1, 2) == 3   // 1 + 2 = 3
getSum(0, 1) == 1   // 0 + 1 = 1
getSum(1, 1) == 1   // 1 Since both are same
getSum(-1, 0) == -1 // -1 + 0 = -1
getSum(-1, 2) == 2  // -1 + 0 + 1 + 2 = 2
*/
const getSumSecond = (a, b) => {
    if (a === b) {
        return a;
    }
    let sum = 0;
    if (a > b) {
        for (let i = b; i <= a; i++) {
            sum += i;
        }
    } else {
        for (let i = a; i <= b; i++) {
            sum += i;
        }
    }
    return sum;
};
console.log(getSumSecond(1, 0));
console.log(getSumSecond(1, 2));
console.log(getSumSecond(0, 1));
console.log(getSumSecond(1, 1));
console.log(getSumSecond(-1, 0));
console.log(getSumSecond(-1, 2));

/*
Task 6 💻
Напишите функцию fooboo которая принимает в качестве аргумента три параметра:
булевое значение
функцию foo которая выводит в консоль свое имя
функцию boo которая выводит в консоль свое имя
Если переданное булевое значение true запускаем функцию foo иначе boo
*/
let fooCallback = function() {
    console.log('foo');
};
let booCallback = function() {
    console.log('boo');
};
function fooboo(boolStatement, fooCallback, booCallback) {
    if (boolStatement) {
        fooCallback();
    } else {
        booCallback();
    }
}
fooboo(true, fooCallback, booCallback);
fooboo(false, fooCallback, booCallback);

/*
ADVANCED level
Task 1 👨‍🏫
Реализуйте функцию, который принимает 3 целочисленных значения a, b, c.
Функция должна возвращать true, если треугольник можно построить со
сторонами заданной длины, и false в любом другом случае.
*/
const buildTriangleStatus = (a, b, c) => {
    return a + b > c && a + c > b && b + c > a;
};
console.log(buildTriangleStatus(2, 2, 10));
console.log(buildTriangleStatus(6, 6, 4));

/*
Task 2 👨‍🏫
Ваша задача - разбить плитку шоколада заданного размера n x m на
маленькие квадраты. Каждый квадрат имеет размер 1x1 и не может быть
разбит. Реализуйте функцию, которая будет возвращать минимальное
количество необходимых надломов.

Например, если вам дается плитка шоколада размером 2 x 1, вы можете
разделить ее на отдельные квадраты всего за один надлом, но для размера
3 x 1 вы должны сделать два надлома.

Если входные данные недействительны, вы должны вернуть 0 (поскольку
надломы не требуются, если у нас нет шоколада для разделения). Ввод
всегда будет неотрицательным целым числом.
*/
const splitChocolateInfo = (n, m) => {
    if (n <= 0 || m <= 0) {
        return 0;
    }
    return n * m - 1;

};
console.log(splitChocolateInfo(4, 2));

/*
Task 3 👨‍🏫
Напишите программу для вычисления общей стоимости покупки телефонов.
Вы будете продолжать покупать телефоны (подсказка: циклы!), пока у вас
не закончатся деньги на банковском счете. Вы также будете покупать
аксессуары для каждого из телефонов.

После того, как вы посчитаете сумму покупки, прибавьте налог, затем
выведите на экран вычисленную сумму покупки, правильно отформатировав её.

Наконец, сверьте сумму с балансом вашего банковского счета, чтобы понять
можете вы себе это позволить или нет.

Вы должны настроить некоторые константы для «ставки налога», «цены телефона»,
«цены аксессуара», также как и переменную для вашего «баланса банковского счета».

Вам следует определить функции для вычисления налога и для форматирования цены со
знаком валюты и округлением до двух знаков после запятой.

Попробуйте включить ввод данных в вашу программу, например с помощью функции
prompt(..). Вы можете, например, запросить у пользователя баланс банковского
счета. Развлекайтесь и будьте изобретательны!
*/
const TAX_RATE = 0.15;
const PHONE_PRICE = 100;
const ACCESSORY_PRICE = 10;
const taxCalculation = money => {
    return money * TAX_RATE;
};
const priceFormatter = price => {
    return price.toFixed(2);
};
const buyPhones = money => {
    let onePhonePrice = PHONE_PRICE + taxCalculation(PHONE_PRICE) + ACCESSORY_PRICE;
    console.log('Сумма покупки одного телефона составляет: ' + priceFormatter(onePhonePrice) + '$');
    if (money < onePhonePrice) {
        throw new Error('У вас на счету не достаточно денег для совершения покупки.');
    }
    let generalPhonePrice = 0;
    while (money > generalPhonePrice) {
        if (generalPhonePrice + onePhonePrice >= money) {
            break;
        }
        generalPhonePrice += onePhonePrice;
    }
    console.log(`Общая стоимость покупки телефонов составляет: ${generalPhonePrice}$`);
};
let userMoney = prompt('Введите Ваш баланс банковского счёта');
buyPhones(userMoney);