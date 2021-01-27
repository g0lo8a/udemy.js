/**
 * Числа
 *
 * 1. Получить число pi из Math и округлить его до 2-х знаков после точки
 * 2. Используя Math, найти максимальное и минимальное числа из представленного ряда 15, 11, 16, 12, 51, 12, 13, 51
 *
 * 3. Работа с Math.random:
 * a. Получить случайное число и округлить его до двух цифр после запятой
 * b. Получить случайное целое число от 0 до X. X - любое произвольное число.
 *
 * 4. Проверить результат вычисления 0.6 + 0.7 - как привести к нормальному виду (1.3)?
 * 5. Получить число из строки ‘100$’
 */
console.log(+Math.PI.toFixed(2));
console.log(Math.max(15, 11, 16, 12, 51, 12, 13, 51));
console.log(Math.min(15, 11, 16, 12, 51, 12, 13, 51));
console.log(Number(Math.random().toFixed(2)));
console.log(Math.round(Math.random() * 21));
console.log((0.6 * 10 + 0.7 * 10) / 10);
console.log(parseInt("100$"));
/**
 * Строки
 * 
 * let string = ‘some test string’;
ВРУЧНУЮ НИЧЕГО НЕ СЧИТАТЬ

 * 1. Получить первую и последнюю буквы строки
 * 2. Сделать первую и последнюю буквы в верхнем регистре
 * 3. Найти положение слова ‘string’ в строке
 * 4. Найти положение второго пробела (“вручную” ничего не считать)
 * 5. Получить строку с 5-го символа длиной 4 буквы
 * 6. Получить строку с 5-го по 9-й символы
 * 7. Получить новую строку из исходной путем удаления последних 6-и символов
 * (то есть исходная строка без последних 6и символов)
 * 8. Из двух переменных a = 20 и b = 16 получить переменную string, в которой будет
 * содержаться текст “2016”
 */
const str = "some test string";
const firstLeter = str[0].toUpperCase();
const lastLeter = str[str.length - 1].toUpperCase();
console.log(str.indexOf("string"));
console.log(str.lastIndexOf(" "));
console.log(str.substr(5, 4));
console.log(str.substring(5, 9));
console.log(str.slice(0, -6));
const a = 20;
const b = 16;
const string = String(a) + String(b);
console.log(string);
/**
 * Объекты
 *
 * 1. Создать объект с полем product, равным ‘iphone’
 * 2. Добавить в объект поле price, равное 1000 и поле currency, равное ‘dollar’
 * 3. Добавить поле details, которое будет содержать объект с полями model и color
 *
 *Все поля добавлять по очереди, не создавать сразу готовый объект со всеми полями.
 */

const obj = {
  product: "iphone",
};
obj.price = 1000;
obj.currency = "dollar";
obj.details = {};
obj.details.model = "model";
obj.details.color = "red";

console.log(obj);
/**
  * Преобразование примитивов
  * 
  * 1. Чему равно а, почему?
  
  let a = 0 || 'string';
  let a = 1 && 'string';
  let a = null || 25;
  let a = null && 25;
  let a = null || 0 || 35;
  let a = null && 0 && 35;
  
 * 2. Что отобразится в консоли. Почему?

  12 + 14 + '12'
  3 + 2 - '1'
  '3' + 2 - 1
  true + 2
  +'10' + 1
  undefined + 2
  null + 5
  true + undefined
 */

// let al = 0 || 'string' // string
// let al = 1 && 'string' // string
// let al = null || 25 // 25
// let al = null && 25 //null
// let al = null || 0 || 35 // 35
// let al = null && 0 && 35; // null

// let al = 12 + 14 + '12' //2612
// let al = 3 + 2 - '1' //4
// let al = '3' + 2 - 1 //31
// let al = true + 2 //3
// let al = +'10' + 1 //11
// let al = undefined + 2 //NaN
// let al = null + 5 //5
let al = true + undefined; //NaN
console.log(al);

/**
 * if else
 *
 * 1. Если переменная равна “hidden”, присвоить ей значение “visible”, иначе - “hidden”.
 * 2. Используя if, записать условие:
 *      a) если переменная равна нулю, присвоить ей 1;
 *      b) если меньше нуля - строку “less then zero”;
 *      c) если больше нуля - используя оператор “присвоение”, переменную умножить на 10
 *          (использовать краткую запись).
 *
 * 3. Дан объект let car = { name: 'Lexus', age: 10, create: 2008, needRepair: false }.
 * Написать условие если возраст машины больше 5 лет то нужно вывести в консоль сообщение
 * 'Need Repair' и свойство needRepair в объекте car изменить на true; иначе изменить на
 * false.
 *
 * 4. Дан объект let item = { name: 'Intel core i7', price: '100$', discount: '15%' }.
 * Написать условие если у item есть поле discount и там есть значение которое не NaN
 * а также есть поле price значение которого также не NaN то в объекте item создать поле
 * priceWithDiscount и записать туда цену с учетом скидки и вывести ее в консоль,
 * обратите внимание что поля discount и price это строки и вам из них
 * нужно получить числа чтобы выполнить расчет. иначе если поля discount нет то вывести
 * просто поле price в консоль.
 *
 * 5. Дан следующий код:
 *
 * let product = {
 *     name: “Яблоко”,
 *     price: “10$”
 * };
 *
 * let min = 10; // минимальная цена
 * let max = 20; // максимальная цена
 *
 * Написать условие если цена товара больше или равна минимальной цене и меньше или равна
 * максимальной цене то вывести в консоль название этого товара, иначе вывести в консоль
 * что товаров не найдено.
 */

let variable;
if (variable === "hidden") {
  variable = "visible";
} else {
  variable = "hidden";
}

variable = 2;

if (variable === 0) {
  variable = 1;
} else if (variable < 0) {
  variable = "less then zero";
} else if (variable > 0) {
  variable *= 10;
}
console.log(variable);

const car = {
  name: "Lexus",
  age: 10,
  create: 2008,
  needRepair: false,
};

if (car.age > 5) {
  console.log("Need Repair");
  car.needRepair = true;
} else {
  car.needRepair = false;
}

const item = {
  name: "Intel core i7",
  price: "100$",
  discount: "15%",
};

if (
  item.hasOwnProperty("discount") &&
  item.hasOwnProperty("price") &&
  !isNaN(parseInt(item.discount)) &&
  !isNaN(parseInt(item.price))
) {
  item.priceWithDiscount =
    parseInt(item.price) -
    (parseInt(item.price) / 100) * parseInt(item.discount);
} else if (item.hasOwnProperty("discount")) {
  console.log(item.price);
}

console.log(item);

let product = {
  name: "Яблоко",
  price: "10$",
};

let min = 10; // минимальная цена
let max = 20; // максимальная цена

if (parseInt(product.price) >= min && parseInt(product.price) <= max) {
  console.log(product.name);
} else {
  console.log("Товаров не найдено!");
}

/**
 * Тернарный оператор. Switch case
 *
 * Записать в виде switch case следующее условие:
 * if (a === ‘block’) {
 * 	console.log(‘block’)
 * } else if (a === ‘none’) {
 * 	console.log(‘none’)
 * } else if (a === ‘inline’) {
 * console.log(‘inline’)
 * } else {
 * 	console.log(‘other’)
 * }
 * Записать условие, используя конструктор switch. В консоли должно отразиться только одно значение.
 * Из задач по условному оператору if else выполнить задачи 1 и 2 в виде тернарного оператора:
 *
 * 2. Если переменная равна “hidden”, присвоить ей значение “visible”, иначе - “hidden”.
 * 3. Записать условие:
 *      a) если переменная равна нулю, присвоить ей 1;
 *      b) если меньше нуля - строку “less then zero”;
 *      c) если больше нуля - используя оператор “присвоение”, переменную умножить на 10
 *          (использовать краткую запись).
 */

const aba = "inline";

switch (aba) {
  case "block":
  case "none":
  case "inline":
    console.log(aba);
    break;
  default:
    console.log("other");
}

let x = "visible";

x = x === "hidden" ? "visible" : "hidden";

console.log(x);

let z = 1;

z = z === 0 ? 1 : z < 0 ? "less then zero" : (z *= 10);

console.log(z);

/**
 * Циклы
 *
 * 1. На основе строки “i am in the easycode” сделать новую строку где первые буквы
 * каждого слова будут в верхнем регистре. Использовать for или while.
 * 2. Дана строка “tseb eht ma i”. Используя циклы, сделать строку-перевертыш
 * (то есть последняя буква становится первой, предпоследняя - второй итд).
 * 3. Факториал числа - произведение всех натуральных чисел от 1 до n
 * включительно: 3! = 3*2*1, 5! = 5*4*3*2*1. С помощью циклов вычислить факториал числа 10. Использовать for.
 * 4. На основе строки “JavaScript is a pretty good language” сделать новую строку,
 * где каждое слово начинается с большой буквы, а пробелы удалены. Использовать for.
 * 5. Найти все нечетные числа в массиве от 1 до 15 включительно и вывести их в консоль. Массив [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] Использовать for of.
 * 6. Дан объект:
 * let list = {
 *      name: ‘denis’,
 *      work: ‘easycode’,
 *      age: 29
 * }
 * Перебрать объект и если значение в свойстве это строка то переписать ее всю в
 * верхнем регистре. Использовать for in.
 */

let strstr = "i am in the easycode";
let res = "";

for (let i = 0; i < strstr.length; i++) {
  if (strstr[i - 1] === " " || i === 0) {
    res += strstr[i].toUpperCase();
  } else {
    res += strstr[i];
  }
}
console.log(res);

let stringa = "tseb eht ma i";
res = "";
for (let i = 0; i < stringa.length; i++) {
  res += stringa[stringa.length - i - 1];
}
console.log(res);

res = 1;
for (let i = 0; i < 10; i++) {
  res *= 10 - i;
}
console.log(res);

let newStr = "JavaScript is a pretty good language";
res = "";
for (let i = 0; i < newStr.length; i++) {
  if (newStr[i] === " ") {
    continue;
  }
  if (newStr[i - 1] === " " || i === 0) {
    res += newStr[i].toUpperCase();
  } else {
    res += newStr[i];
  }
}
console.log(res);

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
for (const i of arr) {
  if (i & (2 !== 0)) {
    console.log(i);
  }
}

let list = {
  name: "denis",
  work: "easycode",
  age: 29,
};

for (const key in list) {
  if (typeof list[key] === "string") {
    list[key] = list[key].toUpperCase();
  }
}
console.log(list);

/**
 * Функции
 *
 * 1. Создать функцию multiply, которая будет принимать любое количество чисел и возвращать их произведение: multiply(1,2,3) = 6 (1*2*3)
 * Если нет ни одного аргумента, вернуть ноль: multiply() // 0
 * 2. Создать функцию, которая принимает строку и возвращает строку-перевертыш: reverseString(‘test’) // “tset”.
 * 3. Создать функцию, которая в качестве аргумента принимает строку из букв, числа, null или undefinrd и возвращает строку, где каждый символ разделен пробелом и заменен на юникод-значение символа:
 * getCodeStringFromText(‘hello’) // “104 101 108 108 111”
 * подсказка: для получения кода используйте специальный метод charCodeAt() и trim()
 * 4. Создать функцию угадай число. Она принимает число от 1-10 (обязательно проверить что число не больше 10 и не меньше 0). Генерирует рандомное число от 1-10 и сравнивает с заданным числом если они совпали то возвращает “Вы выиграли” если нет то “Вы не угадали ваше число 8 а выпало число 5”. Числа в строке указаны как пример вы подставляете реальные числа.
 * 5. Создать функцию, которая принимает число n и возвращает массив, заполненный числами от 1 до n: getArray(10); // [1,2,3,4,5,6,7,8,9,10]
 * Данное задание выполните после того как познакомитесь с методами массивов.
 * 6. Создать функцию, которая принимает массив, а возвращает новый массив с дублированными элементами входного массива.
 * Данное задание выполните после того как познакомитесь с методами массивов:
 * doubleArray([1,2,3]) // [1,2,3,1,2,3]
 * 7. Создать функцию, которая принимает произвольное (любое) число массивов и удаляет из каждого массива первый элемент, а возвращает массив из оставшихся значений.
 * Данное задание выполните после того как познакомитесь с методами массивов:
 * changeCollection([1,2,3], [‘a’, ’b’, ‘c’]) → [ [2,3], [‘b’, ‘c’] ], changeCollection([1,2,3]) → [ [2,3] ] и т.д.
 * 8. Создать функцию которая принимает массив пользователей, поле на которое хочу проверить и значение на которое хочу проверять. Проверять что все аргументы переданы. Возвращать новый массив с пользователями соответсвующие указанным параметрам.
 * Данное задание выполните после того как познакомитесь с методами массивов
 * funcGetUsers(users, “gender”, “male”); // [ {name: “Denis”, age: “29”, gender: “male”} , {name: “Ivan”, age: “20”, gender: “male”} ]
 */

function multiply() {
  let res = 1;
  for (let i = 0; i < arguments.length; i++) {
    res *= arguments[i];
  }
  return arguments.length ? res : 0;
}

console.log(multiply(1, 2, 3));
console.log(multiply());

function reverseString(str) {
  let sting = String(str);
  res = "";
  for (let i = 0; i < sting.length; i++) {
    res += sting[sting.length - i - 1];
  }
  return res;
}

console.log(reverseString("tseb eht ma i"));
console.log(reverseString("test"));
console.log(reverseString(null));
console.log(reverseString(undefined));
console.log(reverseString());

function getCodeStringFromText(str) {
  let res = "";
  str = String(str);
  for (let i = 0; i < str.length; i++) {
    res += str[i].charCodeAt() + " ";
  }
  return res.trim();
}

console.log(getCodeStringFromText("hello"));
console.log(getCodeStringFromText(null));

function guessTheNumber(num) {
  let randomNumber = +(Math.random() * 10).toFixed(0);
  num = parseInt(num);
  console.log(num);
  if (isNaN(num)) {
    return new Error("Please provide a valid number");
  } else if (num && num > 0 && num <= 10) {
    return num === randomNumber
      ? "Вы выиграли"
      : `Вы не угадали ваше число ${num} а выпало число ${randomNumber}`;
  } else {
    return new Error("Please provide number in range 0 - 10");
  }
}

console.log(guessTheNumber(1));
console.log(guessTheNumber(-1));
console.log(guessTheNumber("1"));
console.log(guessTheNumber(null));

function getArray(n) {
  let res = [];
  for (let i = 0; i < n; i++) {
    res[i] = i + 1;
  }
  return res;
}

console.log(getArray(10));

function doubleArray(arr) {
  return arr.concat(arr);
}

console.log(doubleArray([1, 2, 3]));

function changeCollection() {
  let res = [];
  for (let i = 0; i < arguments.length; i++) {
    if (Array.isArray(arguments[i])) {
      const element = arguments[i].slice();
      element.shift();
      res.push(element);
    }
  }
  return res;
}
console.log(changeCollection([1, 2, 3], ["a", "b", "c"]));
console.log(changeCollection([1, 2, 3]));

const users = [
  {
    _id: "5e36b779dc76fe3db02adc32",
    balance: "$1,955.65",
    picture: "http://placehold.it/32x32",
    age: 33,
    name: "Berg Zimmerman",
    gender: "male",
  },
  {
    _id: "5e36b779d117774176f90e0b",
    balance: "$3,776.14",
    picture: "http://placehold.it/32x32",
    age: 37,
    name: "Deann Winters",
    gender: "female",
  },
  {
    _id: "5e36b779daf6e455ec54cf45",
    balance: "$3,424.84",
    picture: "http://placehold.it/32x32",
    age: 36,
    name: "Kari Waters",
    gender: "female",
  },
];

function filterUsers(arr, key, value) {
  let res = [];
  if (Array.isArray(arr) && key && value) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i][key] === value) {
        res.push(arr[i]);
      }
    }
  } else {
    return new Error("Error message");
  }
  return res;
}

console.log(filterUsers(users, "age", 36));
console.log(filterUsers(users, "gender", "female"));

/**
 * Функции высшего порядка
 */

function firstFunc(arr, fn) {
  let res = 'New value: '
  for (let i = 0; i < arr.length; i++) {
    res += fn(arr[i])
  }
  return res
}


function handler1(el) {
  return el[0].toUpperCase() + el.slice(1);
}

console.log(firstFunc(['my', 'name', 'is', 'Trinity'], handler1));

function handler2(el) {
  return `${el * 10}, `
}

console.log(firstFunc([10, 20, 30], handler2).trim())

function handler3(el) {
  return `${el.name} is ${el.age},`
}

console.log(firstFunc([{ age: 45, name: 'Jhon' }, { age: 20, name: 'Aaron' }], handler3));

function handler4(el) {
  return el.split('').reverse().join('')
}

console.log(firstFunc(['abs', '123'], handler4));

function every(arr, fn) {
  if (Array.isArray(arr) && typeof fn === 'function') {
    for (let i = 0; i < arr.length; i++) {
      if (!fn(arr[i], i, arr)) {
        return false
      }
    }
  } else {
    return new Error("Please provide a valid number")
  }
  return true
}

console.log(every([6, 5, 7], function (el) { return el > 5 }))

/**
 * This
 */

const rectangle = {
  width: 100,
  heght: 50,
  getSquare: function () {
    return this.width * this.heght
  }
}

console.log(rectangle.getSquare())

const price = {
  price: 10,
  discount: '15%',
  getPrice: function () {
    return this.price
  },
  getPriceWithDiscount: function () {
    return this.price - (this.price / 100 * parseInt(this.discount))
  }
}

console.log(price.getPrice())
console.log(price.getPriceWithDiscount())

const object = {
  height: 10,
  increment: function () {
    return this.height += 1
  }
}

console.log(object.height)
object.increment()
console.log(object.height)

const numerator = {
  value: 1,
  double: function () {
    this.value *= 2
    return this
  },
  plusOne: function () {
    ++this.value
    return this
  },
  minusOne: function () {
    --this.value
    return this
  },
}

numerator.double().plusOne().plusOne().minusOne()
console.log(numerator.value)

const stock = {
  price: 100,
  count: 20,
  getPrice: function () {
    return this.price * this.count
  }
}

console.log(stock.getPrice())

const details = {
  price: 2,
  count: 4,
}

console.log(stock.getPrice.call(details))

let sizes = {
  width: 5,
  height: 10
},
  getSquare = function () {
    return this.width * this.height
  }

console.log(getSquare.call(sizes))

let element = {
  height: 25,
  getHeight: function () {
    return this.height
  }
}

let getElementHeight = element.getHeight.bind(element)
console.log(getElementHeight()) // undefined

/**
 * Стрелочные функции
 * Переделать функцию с использованием функции-стрелки (в методе reduce тоже использовать arrow function):

что такое метод reduce можно прочитать https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
 */

const sum = (...arguments) => {
  if (!arguments.length) return 0
  return arguments.reduce((prev, next) => prev + next)
}

console.log(sum(1, 2, 3, 4)) // 10
console.log(sum()) // 0

/**
 * Стрелочные функции
 * Переделать функцию с использованием функции-стрелки

function convertToObject(num) {
  const obj = {
      value: num,
      isOdd: Boolean(num % 2)
  }
  return obj;
}
 */

const convertToObject = (num) => ({
  value: num,
  isOdd: Boolean(num % 2)
})

/**
 * Перебирающие методы массивов
 * 1. На основе массива [1,2,3,5,8,9,10] сформировать новый массив, каждый элемент которого будет хранить информацию о числе и его четности:
 * [{digit: 1, odd: true}, {digit: 2, odd: false}, {digit: 3, odd: true}...]
 * 
 * 2. Проверить, содержит ли массив [12, 4, 50, 1, 0, 18, 40] элементы, равные нулю. Если да - вернуть true.
 * 
 * 3. Проверить, все ли элементы массива имеют длину более 3х символов ['yes', 'hello', 'no', 'easycode', 'what']. Если да - вернуть true
 * 
 * 4. Дан массив объектов, где каждый объект содержит информацию о букве и месте её положения в строке {буква: “a”, позиция_в_предложении: 1}:
 * 
[
  { char: "a", index: 12 },
  { char: "w", index: 8 },
  { char: "Y", index: 10 },
  { char: "p", index: 3 },
  { char: "p", index: 2 },
  { char: "N", index: 6 },
  { char: " ", index: 5 },
  { char: "y", index: 4 },
  { char: "r", index: 13 },
  { char: "H", index: 0 },
  { char: "e", index: 11 },
  { char: "a", index: 1 },
  { char: " ", index: 9 },
  { char: "!", index: 14 },
  { char: "e", index: 7 },
]

 * Напишите функцию, которая из элементов массива соберет и вернёт строку, основываясь на index каждой буквы. Например:
 * [{char:"H",index:0}, {char:"i",index: 1}, {char:"!",index:2}] → “Hi!”
 * 
 * 5. Отсортируйте массив массивов так, чтобы вначале располагались наименьшие массивы (размер массива определяется его длиной): [ [14, 45], [1], ['a', 'c', 'd'] ] → [ [1], [14, 45], ['a', 'c', 'd'] ]
 * 
 * 6. Есть массив объектов:
 *
[
  { cpu: "intel", info: { cores: 2, сache: 3 } },
  { cpu: "intel", info: { cores: 4, сache: 4 } },
  { cpu: "amd", info: { cores: 1, сache: 1 } },
  { cpu: "intel", info: { cores: 3, сache: 2 } },
  { cpu: "amd", info: { cores: 4, сache: 2 } },
]
 *
 * Отсортировать их по возрастающему количеству ядер (cores).
 * 
 * 7. Создать функцию, которая будет принимать массив продуктов и две цены. Функция должна вернуть все продукты, цена которых находится в указанном диапазоне, и сортировать от дешевых к дорогим:
 * 
let products = [
  { title: "prod1", price: 5.2 },
  { title: "prod2", price: 0.18 },
  { title: "prod3", price: 15 },
  { title: "prod4", price: 25 },
  { title: "prod5", price: 18.9 },
  { title: "prod6", price: 8 },
  { title: "prod7", price: 19 },
  { title: "prod8", price: 63 },
];
 * 
 * filterCollection(products, 15, 30) → [{...price: 15}, {...price: 18.9}, {...price: 19}, {...price: 25}]
 */
console.log("+++++++++++++");

[1, 2, 3, 5, 8, 9, 10].forEach((el) =>
  console.log({ digit: el, odd: Boolean(el % 2) })
)

console.log("+++++++++++++");

console.log([12, 4, 50, 1, 0, 18, 40].some(item => !item))

console.log("+++++++++++++");

console.log(
  ["yes", "hello", "no", "easycode", "what"].every((item) => item.length > 3)
)

console.log("+++++++++++++");

const fraseArray = [
  { char: "a", index: 12 },
  { char: "w", index: 8 },
  { char: "Y", index: 10 },
  { char: "p", index: 3 },
  { char: "p", index: 2 },
  { char: "N", index: 6 },
  { char: " ", index: 5 },
  { char: "y", index: 4 },
  { char: "r", index: 13 },
  { char: "H", index: 0 },
  { char: "e", index: 11 },
  { char: "a", index: 1 },
  { char: " ", index: 9 },
  { char: "!", index: 14 },
  { char: "e", index: 7 },
];

let fraseStr = ""

fraseArray
  .sort((prev, next) => prev.index - next.index)
  .forEach((item) => (fraseStr += item.char))

console.log(fraseStr)

console.log("+++++++++++++");

console.log(
  [[14, 45], [1], ["a", "c", "d"]].sort(
    (prev, next) => prev.length - next.length
  )
)

console.log("+++++++++++++");

console.log(
  [
    { cpu: "intel", info: { cores: 2, сache: 3 } },
    { cpu: "intel", info: { cores: 4, сache: 4 } },
    { cpu: "amd", info: { cores: 1, сache: 1 } },
    { cpu: "intel", info: { cores: 3, сache: 2 } },
    { cpu: "amd", info: { cores: 4, сache: 2 } },
  ].sort((prev, next) => prev.info.cores - next.info.cores)
)

console.log("+++++++++++++");

let products = [
  { title: "prod1", price: 5.2 },
  { title: "prod2", price: 0.18 },
  { title: "prod3", price: 15 },
  { title: "prod4", price: 25 },
  { title: "prod5", price: 18.9 },
  { title: "prod6", price: 8 },
  { title: "prod7", price: 19 },
  { title: "prod8", price: 63 },
]

function filterCollection(products, min, max) {
  return products
    .filter(({ price }) => price >= min && price <= max)
    .sort((prev, next) => prev.price - next.price)
}

console.log(filterCollection(products, 15, 30))

console.log("++++++ Замыкания ++++++");

/**
 * 1. Создайте функцию которая бы умела делать:
minus(10)(6); // 4
minus(5)(6); // -1
minus(10)(); // 10
minus()(6); // -6
minus()(); // 0
Подсказка, функция minus должна возвращать другую функцию.

 * 2. Реализовать функцию, которая умножает и умеет запоминать возвращаемый результат между вызовами:
function multiplyMaker ...
const multiply = multiplyMaker(2);
multiply(2); // 4 (2 * 2)
multiply(1); // 4 (4 * 1)
multiply(3); // 12 (4 * 3)
multiply(10); // 120 (12 * 10)

 * 3. Реализовать модуль, который работает со строкой и имеет методы:
a. установить строку
   i. если передано пустое значение, то установить пустую строку
   ii. если передано число, число привести к строке
b. получить строку
c. получить длину строки
d. получить строку-перевертыш
Пример:
модуль.установитьСтроку(‘abcde’);
модуль.получитьСтроку(); // ‘abcde’
модуль.получитьДлину(); // 5
модуль.перевернутьСтроку(); // 'edcba'

 * 4. Создайте модуль “калькулятор”, который умеет складывать, умножать, вычитать, делить и возводить в степень. Конечное значение округлить до двух знаков после точки (значение должно храниться в обычной переменной, не в this).

модуль.установитьЗначение(10); // значение = 10
модуль.прибавить(5); // значение += 5
модуль.умножить(2); // значение *= 2
модуль.узнатьЗначение(); // вывести в консоль 30 (здесь надо округлить)

Также можно вызывать методы цепочкой:
модуль.установитьЗначение(10).вСтепень(2).узнатьЗначение(); // 100
 */

const minus = (first = 0) => (second = 0) => first - second
console.log(minus(10)(6))
console.log(minus(5)(6))
console.log(minus(10)())
console.log(minus()(6))
console.log(minus()())

console.log("+++++++++++++");

const multiplyMaker = (param1) => {
  let res = param1
  return (param2) => res *= param2
}

const mult = multiplyMaker(2)
console.log(mult(2))
console.log(mult(1))
console.log(mult(3))
console.log(mult(10))

console.log("+++++++++++++");

const module = function () {
  let string = ''

  return {
    setStr: function (str = '') {
      string = String(str)
      return this
    },
    getStr: () => string,
    strLen: () => string.length,
    reverseStr: () => string.split('').reverse().join(''),
    str
  };
}()

module.setStr('abcde')
console.log(module.getStr())
console.log(module.strLen())
console.log(module.reverseStr())

console.log("+++++++++++++");

const calc = function () {
  let val = 0
  function setVal(p = 0) {
    val = Number(p)
    return this
  }
  function getVal() {
    return Number(val.toFixed(2))
  }
  function plus(p) {
    val += Number(p)
    return this
  }
  function minus(p) {
    val -= Number(p)
    return this
  }
  function divided(p) {
    val /= Number(p)
    return this
  }
  function mult(p) {
    val *= Number(p)
    return this
  }
  function exponentiation(p) {
    val = Math.pow(val, Number(p))
    return this
  }
  return {
    setVal,
    getVal,
    plus,
    minus,
    divided,
    mult,
    exponentiation
  }
}()

console.log(
  calc
    .setVal(8)
    .exponentiation(2)
    .divided(3)
    .getVal()
)

console.log('============');

/**
 * 1.Используя rest оператор и деструктуризацию, создать функцию, которая принимает любое количество аргументов и возвращает объект, содержащий первый аргумент и массив из остатка:

 * func(‘a’, ‘b’, ‘c’, ‘d’) → { first: ‘a’, other: [‘b’, ‘c’, ‘d’] }

 * 2. Организовать функцию getInfo, которая принимает объект вида
{ name: ..., info: { employees: [...], partners: [ … ] } }
и выводит в консоль имя (если имени нет, показывать ‘Unknown’) и первые две компании из массива partners:

const organisation = {
name: 'Google',
info: { employees: [‘Vlad’, ‘Olga’], partners: ['Microsoft', 'Facebook', 'Xing'] }
};

getInfo(organisation); → Name: Google Partners: Microsoft Facebook
 */

// const fu = function (...arg) {
//   const [first, ...other] = arg
//   return { first, other }
// }

const fu = (first, ...other) => ({ first, other })

console.log(fu('a', 'b', 'c', 'd'))

console.log('=============')

function getInfo({ name = 'Unknown', info: { employees, partners: [first, second, ...other] } }) {
  console.log(`Name: ${name} Partners: ${first} ${second}`)
}

const organisation = {
  name: 'Google',
  info: { employees: ['Vlad', 'Olga'], partners: ['Microsoft', 'Facebook', 'Xing'] }
};

getInfo(organisation)


console.log('++++++++=====+++++++++')

function User(fullName) {
  this.fullName = fullName

  Object.defineProperties(this, {
    firstName: {
      get: function () {
        return this.fullName.split(' ')[0]
      },
      set: function (val) {
        this.fullName = val + ' ' + this.lastName
      }
    },

    lastName: {
      get: function () {
        return this.fullName.split(' ')[1]
      },
      set: function (newLastName) {
        this.fullName = this.firstName + ' ' + newLastName
      }
    }
  })
}

const vasya = new User("Василий Попкин")

console.log(vasya.firstName); // Василий
console.log(vasya.lastName); // Попкин

vasya.firstName = 'Puh'
vasya.lastName = 'Сидоров'

console.log(vasya.fullName); // Puh Сидоров

console.log('===============');

/**
 * Зная структуру html, с помощью изученных методов получить (в консоль):

1. head

2. body

3. все дочерние элементы body и вывести их в консоль.

4. первый div и все его дочерние узлы

а) вывести все дочерние узлы в консоль

б) вывести в консоль все дочерние узлы, кроме первого и последнего

Для навигации по DOM использовать методы, которые возвращают только элементы
 */

console.log(document.querySelector('head'))
console.log(document.querySelector('body'))
console.log(document.querySelector('body').children)
console.log(document.querySelector('body').firstElementChild)
console.log(document.querySelector('body').firstElementChild.children)
// console.log(document.querySelector('body').firstElementChild.firstElementChild.nextElementSibling)
// console.log(document.querySelector('body').firstElementChild.lastElementChild.previousElementSibling)
const div = document.body.firstElementChild;
const filteredArticles = [...div.children].filter(p => p !== div.firstElementChild && p !== div.lastElementChild);
console.log(filteredArticles);


/**
  <div>
    <article>
      <p>Lorem ipsum dolor sit amet, odio omnesque ius cu, quo ex atqui antiopam. At detracto menandri eos. Duo in causae viderer, graeci <a href="#">reprehendunt</a> has in. Decore <mark>nemore</mark> philosophia te pro, nobis legere causae ex mei, odio putant mentitum ea ius. Vix nostro deserunt explicari eu.</p>
    </article>
  </div>
  <ul>
    <li><a href="#">Link1</a></li>
    <li><a href="#">Link2</a></li>
    <li><a href="#">Link3</a></li>
    <li><a href="#">Link4</a></li>
  </ul><span></span>
  <a href="#">Some link</a>

Создать функцию, которая принимает два элемента. Функция проверяет, является ли первый элемент родителем для второго:
isParent(parent, child);

isParent(document.body.children[0], document.querySelector('mark'));

// true так как первый див является родительским элементом для mark

isParent(document.querySelector('ul'), document.querySelector('mark'));

// false так ul НЕ является родительским элементом для mark

Функция принимает только DOM объекты. Обязательно проверяйте это.

Используя разметку из предыдущего задания.

Получить список всех ссылок, которые не находятся внутри списка ul.

Используя разметку из предыдущего задания.

Найти элемент, который находится перед и после списка ul.
 */

console.log('===============')

const isParent = (parent, child) => parent.contains(child)

console.log(isParent(document.body.children[0], document.querySelector('mark')))
console.log(isParent(document.querySelector('ul'), document.querySelector('mark')))
const filteredLinks = [...document.links].filter(a => !a.closest('ul'));
console.log(filteredLinks);
const ul = document.querySelector('ul')
console.log(ul.previousElementSibling)
console.log(ul.nextElementSibling)

/**
 * 
 1 Найти в коде список ul и добавить класс “list”
 2 Найти в коде ссылку, находящуюся после списка ul, и добавить id=link
 3 На li через один (начиная с самого первого) установить класс “item”
 4 На все ссылки в примере установить класс “custom-link”
 */
const ulClassList = document.querySelector('ul')
ulClassList.classList.add('list')
console.log(ulClassList)

const link = document.querySelector('ul ~ a')
link.id = 'link'
console.log(link)

const listItems = document.querySelectorAll('li')

for (let i = 0; i < listItems.length; i++) {

  if (i % 2 === 0) {
    listItems[i].classList.add('item')
  }
}

console.log(listItems)

const links = document.querySelectorAll('a')

links.forEach(el => {

  el.classList = 'custom-link'
});

console.log(links)

/**
 1. Не используя innerHTML, добавить в список несколько li с классом ‘new-item’ и текстом ‘item’ + номер li:

<ul>

<li><a href="#">Link1</a></li>

...

<li class=”new-item”>item 5</li>

<li class=”new-item”>item 6</li>

</ul>

Вручную номер li не ставить оно должно подставляться в зависимости от кол-ва лишек в списке.

 2. В каждую ссылку, которая находится внутри списка ul добавить по тегу strong (в каждую ссылку один - strong).

 3. В начало документа (в начало body) добавить картинку img с атрибутами src и alt (текст придумайте сами). В src добавьте реальный url к картинке. Для создания элемента используйте метод createElement.

 4. Найти на странице элемент mark, добавить в конец содержимого текст “green” и на элемент установить класс green

 5. Отсортировать li внутри списка в обратном порядке (по тексту внутри)
 */

const createElement = function () {
  return function () {
    const ulPlusLi = document.getElementsByTagName('ul')[0]
    const liCollection = ulPlusLi.children
    let count = liCollection.length
    const listItem = document.createElement('li')
    listItem.classList = 'new-item'
    listItem.textContent = `item ${++count}`
    ulPlusLi.append(listItem)
  }
}()

createElement()
createElement()
createElement()

// const ulList = document.getElementsByTagName('ul')[0]
// const liCollection = ulList.getElementsByTagName('a')

// for (let i = 0; i < liCollection.length; i++) {
//   const el = liCollection[i]
//   const strong = document.createElement('strong')
//   strong.textContent = ' strong'
//   el.append(strong)
// }

const [...linksS] = document.querySelectorAll('ul a')
linksS.forEach(link => link.insertAdjacentHTML('beforeend', '<strong> Strong</strong'))


console.log(linksS)

const img = document.createElement('img')
img.src = 'https://www.udemy.com/staticx/udemy/images/instructor-dashboard/messages_no_filtered.svg'
img.setAttribute('alt', 'картинка')
document.body.prepend(img)

const mark = document.querySelector('mark')
mark.textContent += ' green'
mark.classList = 'green'


const ulSort = document.querySelector('ul')
const listSort = [...ulSort.children].sort((prev, next) => prev.textContent > next.textContent ? -1 : 1)

ulSort.innerHTML = ''
listSort.forEach((item) => ulSort.appendChild(item))


console.log('===============+++++===============')

const container = document.querySelector('.container')


const btn = document.querySelector('button')
const lin = document.querySelector('#link')

btn.addEventListener('click', function(e) {
  const div = document.createElement('div')
  const nestedBtn = document.createElement('button')

  div.textContent = 'CLICK'
  nestedBtn.textContent = 'Button'
  container.appendChild(div)
  div.appendChild(nestedBtn)
})

container.addEventListener('click', e => {
  console.dir(e.target)
  if (e.target.tagName === 'BUTTON') {
    console.log('button clicked')
    console.log(e)
  }
})

function $(params) {
  return document.querySelector(params)
}

const text = $('#text')

btn.addEventListener('click', () => text.style.display = 'none')
// btn.addEventListener('click', () => btn.style.display = 'none')

console.log("d".charCodeAt(0));

