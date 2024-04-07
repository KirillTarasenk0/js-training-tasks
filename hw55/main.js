/*
Task 1 💻
Создать любой обьект с двумя ключами и любыми значениями в них,
а затем удалить ключи из обьекта.
*/
const object = {
    id: 1,
    num: 1,
};
console.log(object);
for (let key in object) {
    delete object[key];
}
console.log(object);

/*
Task 2 🖥
Создать любой обьект с двумя ключами и любыми значениями в них,
а затем проверить есть ли в обьекте определенный ключ и если есть
вывести в консоль **true**
*/
const secondObject = {
    firstKey: 'firstKey',
    secondKey: 'secondKey',
};
"firstKey" in secondObject ? console.log('true') : console.log('false');
"thirdKey" in secondObject ? console.log('true') : console.log('false');

/*
Task 3 🖥
Дан обьект:
const student = {
    name: 'John',
    age: 19,
    isHappy: true
}
C помощью цикла **for in** вывести в консоль сначала все ключи,
потом значения ключей обьекта.
*/
const student = {
    name: 'John',
    age: 19,
    isHappy: true
};
for (let key in student) {
    console.log(key);
}
for (let key in student) {
    console.log(student[key]);
}

/*
Task 4 🖥
Дан обьект:
const colors = {
    'ru pum pu ru rum': {
        red: 'красный',
        green: 'зеленый',
        blue: 'синий'
    },
};
Вывести в консоль слово красный и синий
*/
const colors = {
    'ru pum pu ru rum': {
        red: 'красный',
        green: 'зеленый',
        blue: 'синий'
    },
};
console.log(colors["ru pum pu ru rum"].red);
console.log(colors["ru pum pu ru rum"].blue);

/*
Task 5 🖥
Дан обьект:
let salaries = {
    andrey: 500,
    sveta: 413,
    anton: 987,
    andrey: 664,
    alexandra: 199
}
Вычислите среднюю зарплату сотрудников и результат
поместите в соответствующую переменную
*/
let salaries = {
    andrey: 500,
    sveta: 413,
    anton: 987,
    andrey: 664,
    alexandra: 199
}
let employeesCounter = 0;
let employeesGeneralSalary = 0;
for (let index in salaries) {
    employeesCounter++;
    employeesGeneralSalary += salaries[index];
}
let employeesAverageSalary = employeesGeneralSalary / employeesCounter;
console.log('Средняя зарплата сотрудников: ' + employeesAverageSalary);

/*
Task 6 🖥
Создать валидатор, запросить у пользователя логин
и пароль для регистрации. Затем данные записать в
обьект.
Потом попросить пользователя подтвердить данные.
Если верно введен логин и пароль, вывести сообщение
**Добро пожалоВать**.
*/

const userData = {
    userLogin: null,
    userPassword: null,
};
userData.userLogin = prompt('Введите логин');
userData.userPassword = prompt('Введите пароль');
userLoginConfirm = prompt('Подтвердите логин');
userPasswordConfirm = prompt('Подтвердите пароль');
if (userData.userLogin === userLoginConfirm && userData.userPassword === userPasswordConfirm) {
    alert('Добро пожаловать!');
} else {
    alert('Данные не совпадают. Попробуйте поворить ввод.');
}

/*

### ADVANCED level
Task 1 👨‍🏫
Мы на футбольном матче, счет забитых голов одной команды
не может превышать 9 мячей. Жаль что нам присылают результат
матча в формате '2:5', ведь нам надо это вывести в консоль словами.
Давайте напишем программу которая будет за нас переводить формат и
выводить результат в консоль.
*/
const scores = {
    0: 'Ноль',
    1: 'Один',
    2: 'Два',
    3: 'Три',
    4: 'Четыре',
    5: 'Пять',
    6: 'Шесть',
    7: 'Семь',
    8: 'Восемь',
    9: 'Девять',
};
const matchResultsConvertor = result => {
    let [score1, score2] = result.split(':');
    if (score1 > 9 || score1 < 0 || score2 > 9 || score2 < 0) {
        console.log('Вы ввели невалидные данные. Повторите пожалуйста ввод.')
        return;
    }
    for (let index in scores) {
        if (index === score1) {
            score1 = scores[index];
        }
        if (index === score2) {
            score2 = scores[index];
        }
    }
    return `${score1} : ${score2}`;
};

console.log(matchResultsConvertor('2:9'));

/*
Task 2 🖥
Даны два одинаковых обьекта. Сравните их так чтобы они были равны
let student1 = {
    name: 'Polina',
    age: 27,
}
let student2 = {
    name: 'Polina',
    age: 27,
}
*/
let student1 = {
    name: 'Polina',
    age: 27,
};
let student2 = {
    name: 'Polina',
    age: 27,
};
const isEqualsObjects = (obj1, obj2) => {
    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
        return false;
    }
    for (const key in obj1) {
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }
    return true;
};
console.log(isEqualsObjects(student1, student2));

/*
Task 3 🖥
У нас есть обьект с животными. Наша задача узнать имя птицы и
вывести его в консоль. Но произошла ошибка и в этом обьекте
нету птицы. Если попробуем узнать имя мы получим ОШИБКУ.
Задача придумать как обратиться к несуществующему обьекту и не
получить ошибку чтобы наша программа работала дальше.
const animals = {
   cat: {
      name: 'Енчик',
      age: 3,
   },
   dog: {
      name: 'Орео',
      age: 2,
   }
}
*/
const animals = {
    cat: {
        name: 'Енчик',
        age: 3,
    },
    dog: {
        name: 'Орео',
        age: 2,
    }
}
console.log(animals.bird?.name);