//* Розгалуження: if, if...else, else...if
//TODO: 1 ===================================
//Даний рядок, що складається із символів, наприклад, 'abcde'.
// Перевірте, що першим символом цього рядка є буква 'a'.
// Якщо це так - виведіть 'так', інакше виведіть 'ні'.
// const str = 'abcde';
// if (str[0] === 'a') {
//   console.log('так');
// } else {
//   console.log('ні');
// }
// console.log(str.startsWith('a') ? 'так' : 'ні');
//TODO: 2 ===================================
// Написати скрипт, який перевіряє чи введене число через prompt потрапляє в діапазон від 55 до 99 включно.
// Якщо так, вивести в консоль "Число потрапляє в діапазон".
// Якщо ні, вивести в консоль "Число не потрапляє в діапазон".

// const num = 50;
// if (num >= 55 && num <= 99) {
//     console.log("Число потрапляє в діапазон");
// } else { console.log("Число не потрапляє в діапазон"); }

// console.log(num >= 55 && num <= 99 ? "Число потрапляє в діапазон" : "Число не потрапляє в діапазон");
//TODO: 3 ===================================
// Є 3 вікові групи : діти (0-16), дорослі(17-60), пенсіонери (61-100).
// До якої групи відноситься Максим, якщо йому 55 років.Назву групи вивести на екран.

// const ageMax = 0;

// if (ageMax >= 0 && ageMax <= 16) {
//     console.log("діти");
// }
// else if (ageMax >= 17 && ageMax <= 60) {
//     console.log("дорослі");
// }
// else if (ageMax >= 61 && ageMax <= 100) {
//     console.log("пенсіонери");
// }
// else {
//     console.log("помер");
// }

//TODO: 4 ===================================
//Напишіть цикл, який виводить у консоль
// числа від max до min за спаданням
// Додайте усі парні числа від min до max

// const min = 1;
// const max = 5;
// let sum = 0;

// for (let i = max; i > min; i--){
// 	if (i % 2 !== 0) {
// 		continue;
// 	}
// 	sum += i;
// 	console.log("Парні числа", i);
// }
// console.log(sum);

//TODO: 5 ===================================
//* Конструкція switch
// Запитай користувача у модальному вікні, який з напоїв він бажає придбати - "Кава", "Чай" чи "Сік",
// та залежно від виду напою оголоси суму досплати.Використовувати switch.

// const drink = prompt('oberitj napij');
// function orderDrink(drink) {
//   let price = 0;
//   switch (drink) {
//     case 'kava':
//       price = 60;
//       break;
//     case 'chai':
//       price = 30;
//       break;
//     case 'sik':
//       price = 50;
//       break;
//     default:
//       alert('error');
//   }
//   return alert(`sum: ${price}UAH`);
// }
// orderDrink(drink);

/**
 *? Напиши скрипт для об'єкта user,
 *? послідовно:
 *? 1 додати поле mood зі значенням 'happy'
 *? 2 замінить hobby на 'skydiving'
 *? 3 замінить значення premium на false
 *? 4 виводить вміст об'єкта users у форматі
 *? ключ: значення використовуючи Object.keys() і for...of
 */

// const user = {
//   name: 'John',
//   age: 20,
//   hobby: 'tennis',
//   premium: true,
// };

// user.mood = 'happy';
// user.hobby = 'skydiving';
// user.premium = false;

// for (const item of Object.keys(user)) {
//   console.log(`${item} : ${user[item]}`);
// }

// У нас є об'єкт, у якому зберігаються зарплати
//    нашої команди
//    Напишіть код для підсумовування всіх зарплат і
//    збережіть його результат у змінній sum.
//    Якщо об'єкт salaries порожній, то результат має бути 0

// const salaries = {
//   Mango: 100,
//   Poly: 160,
//   Ajax: 1470,
// };
// function calcSalaries(obj) {
//   let total = 0;
//   const salariesColection = Object.values(obj);
//   for (const sum of salariesColection) {
//     total += sum;
//   }
//   return total;
// }
// console.log(calcSalaries(salaries));


/**
 *? Напишіть ф-цію calcTotalPrice(stones, stonesName),
 *? яка приймає масив об'єктів та
 *? рядок під назвою каменю.
 *? Функція сумує та повертає загальну вартість каменів
 *? з таким ім'ям, ціною та кількістю з об'єкта
 */

const stones = [
  { name: "Смарагд", price: 1300, quantity: 4 },
  { name: "Діамант", price: 2700, quantity: 6 },
  { name: "Сапфір", price: 400, quantity: 7 },
  { name: "Щебінь", price: 150, quantity: 100 },
];

function calcTotalPrice(stones, stonesName) {
	for (const stone of stones) {
		if (stone.name === stonesName) {
			return stone.price * stone.quantity;
		} 
	}
	return `Каменю ${stonesName} не існує!`;
}

console.log(calcTotalPrice(stones, "Діамант"));
console.log(calcTotalPrice(stones, "Гравій"));
