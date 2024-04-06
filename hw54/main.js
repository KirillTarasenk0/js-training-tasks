/*
NORMAL level
Task 1 🖥
Дан массив: const colors = ['red', 'green', 'blue']
Выведите в консоль его длину.
*/
const colors = ['red', 'green', 'blue'];
console.log(colors.length);

/*
Task 2 🖥
Дан массив: const animals = ['monkey', 'dog', 'cat']
Выведите в консоль его последний элемент вне зависимости от его длинны.
*/
const animals = ['monkey', 'dog', 'cat'];
console.log(animals.at(-1));

/*
Task 3 🖥
Дан массив: const numbers = [5, 43, 63, 23, 90]
Удалите все элементы в массиве и выведите в консоль полученный результат.
Реализуйте решение двумя способами.
*/
const numbers1 = [5, 43, 63, 23, 90];
console.log(numbers1);
for (let i = 0; i < numbers1.length; i++) {
    delete numbers1[i];
}
console.log(numbers1);
const numbers2 = [5, 43, 63, 23, 90];
console.log(numbers2);
numbers2.splice(0, numbers2.length);
console.log(numbers2);

/*
Task 4 🖥
Дан массив: const students = ['Polina', 'Dasha', 'Masha']
Удалите последний элемент массива, затем вместо него добавьте в массив студента Borya.
Удалите первый элемент массива, затем вместо него добавьте в массив студента Andrey.
Полученный результат не забудьте вывести в консоль.
*/
const students = ['Polina', 'Dasha', 'Masha'];
console.log(students);
students.pop();
students.push('Borya');
console.log(students);
students.shift();
students.unshift('Andrey');
console.log(students);

/*
Task 5 🖥
Дан массив: const cats = ['Gachito', 'Tom', 'Batman']
Выведите в консоль все элементы массива. Сначала через цикл for, затем for of.
*/
const cats = ['Gachito', 'Tom', 'Batman'];
for (let i = 0; i < cats.length; i++) {
    console.log(cats[i]);
}
for (let cat of cats) {
    console.log(cat);
}

/*
Task 6 🖥
const evenNumbers = [2, 4, 6, 8, 10]
const oddNumbers = [1, 3, 5, 7, 9]
Соедините два массива чисел в один.
В полученном массиве попробуйте найти индекс числа 8
*/
const evenNumbers = [2, 4, 5, 8, 10];
const oddNumbers = [1, 3, 5, 7, 9];
const oddEvenArray = [...evenNumbers, ...oddNumbers];
let indexEightNumber = 0;
for (let i = 0; i < oddEvenArray.length; i++) {
    if (oddEvenArray[i] === 8) {
        indexEightNumber = i;
    }
}
console.log(oddEvenArray);
console.log('Индекс числа 8: ' + indexEightNumber);

/*
Task 7 🖥
Дан массив: const binary = [0, 0, 0, 0]
Наш бинарный массив неполный, в нем явно не хватает единиц.
Превратите данный массив в строку.
[0, 0, 0, 0] -> '0101010'
*/
const binary = [0, 0, 0, 0];
let binaryString = '';
for (let i = 0; i < binary.length; i++) {
    binaryString += binary[i]
    if (i === binary.length - 1) {
        continue;
    }
    binaryString += '1';
}
console.log(binaryString);

/*
ADVANCED level
Для решения задач используйте циклы for или for of
Task 1 👨‍🏫
Реализуйте функцию которая будет проверять, является ли слово палиндромом.
*/
const isPalindrome = word => {
    let firstWord = word;
    let secondWord = '';
    for (let i = word.length - 1; i >= 0; i--) {
        secondWord += word[i];
    }
    if (firstWord === secondWord) {
        return true;
    } else {
        return false;
    }
};
console.log(isPalindrome('летел'));
console.log(isPalindrome('абв'));

/*
Task 2 👨‍🏫
const matrix = [
    [12, 98, 78, 65, 23],
    [54, 76, 98, 43, 65],
    [13, 324, 65, 312],
    [9092, 22, 45, 90000],
]
Выведите в консоль среднее значение чисел в многомерном массиве.
*/
const matrix = [
    [12, 98, 78, 65, 23],
    [54, 76, 98, 43, 65],
    [13, 324, 65, 312],
    [9092, 22, 45, 90000],
];
let arrayNumberSum = 0;
let arrayItemsCount = [].concat(...matrix).length;
for (let i of matrix) {
    for (let j of i) {
        arrayNumberSum += j;
    }
}
let averageNumber = arrayNumberSum / arrayItemsCount;
console.log(averageNumber);

/*
Task 3 👨‍🏫
Дан массив: const mixedNumbers = [-14, 24, -89, 43, 0 , -1, 412, 4]
Создайте два массива, в один поместите все положительные числа включая 0,
в другой все отрицательные. Оба массива затем выведите в консоль.
*/
const mixedNumbers = [-14, 24, -89, 43, 0, -1, 412, 4];
let firstArray = [];
let secondArray = [];
mixedNumbers.forEach((item) => {
    if (item >= 0) {
        firstArray.push(item);
    } else {
        secondArray.push(item);
    }
});
console.log(firstArray);
console.log(secondArray);

/*
Task 4 👨‍🏫
Создать массив длинной не менее 5, из динамически созданных случайных чисел.
Далее написать алгоритм который берет все числа из исходного массива, возводит
их в куб и записывает в новый массив. В конце вывести оба массива в консоль.
*/
let array = [];
for (let i = 0; i < 5; i++) {
    array.push(Math.round(Math.random() * 10));
}
let newArray = [];
array.forEach((value) => {
    newArray.push(value ** 3);
});
console.log(array);
console.log(newArray);