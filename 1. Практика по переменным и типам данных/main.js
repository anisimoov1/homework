// Задача 1.

let firstName = "Павел";
let lastName = "Анисимов";
let isStudent = true;

// Задача 2.

let age = 26;
let currentYear = 2026;
const birthYear = currentYear - age;

// Задача 3.

console.log(
	"Меня зовут",
	firstName,
	lastName,
	", мне",
	age,
	"лет.",
	"Я ученик курса:",
	isStudent,
);

// Задача 4.

// Какое значение будет у переменной result?
// let a = '123'; будет выведено в виде белого текста 123 по типу данных string
// let b = +'456'; будет выведено значение 456 по типу данных number (вроде текст синего цвета, я дальтоник в этой цветовой гамме). Знак "+" перед '456' меняет тип данных со string на number
// let c = Number('789'); будет выведено 789 синего цвета по типу данных number
// let d = Boolean(0); будет выведено false по типу данных boolean (потому что 0 это ЛОЖЬ!!!)
// let e = Boolean(' '); здесь будет выведено ПРАВДА!
// let result = a + b + c + d + e; должно будет 123456789false+true
