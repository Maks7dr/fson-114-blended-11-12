// //TODO:=========task-01=================
// Дано масив чисел [1, 2, 3, 4, 5]. Створіть новий масив, що містить квадрати кожного елементу вхідного масиву. Очікуваний результат: [1, 4, 9, 16, 25].

const array = [1, 2, 3, 4, 5];

const changeArray = arr => arr.map(number => Math.pow(number, 2));
// return arr.map(number => number ** 2);

//console.log(changeArray(array));

console.log('\n');

////TODO:=========task-02=================
// Дано масив об'єктів {id: 1, values: [1, 2, 3]}, {id: 2, values: [4, 5, 6]}, {id: 3, values: [7, 8, 9]}. Створіть новий масив, що містить всі значення з масивів values кожного об'єкту, збережених в одному масиві. Очікуваний результат: [1, 2, 3, 4, 5, 6, 7, 8, 9].

const data = [
  { id: 1, values: [1, 2, 3] },
  { id: 2, values: [4, 5, 6] },
  { id: 3, values: [7, 8, 9] },
];

const flatArray = arr => {
  return arr.flatMap(item => item.values);
};

//console.log(flatArray(data));

//TODO:=========task-03=================
// Дано масив об'єктів {name: "John", age: 27}, {name: "Jane", age: 31}, {name: "Bob", age: 19}. Перевірте, чи є хоча б один об'єкт з віком менше 20 років. Очікуваний результат: true.

const people = [
  { name: 'John', age: 27 },
  { name: 'Jane', age: 31 },
  { name: 'Bob', age: 19 },
];

const age = arr => arr.some(item => item.age < 20);

//console.log(age(people));

//TODO:=========task-04=================
//  Дано масив чисел [2, 4, 6, 8, 10]. Перевірте, чи є кожен елемент масиву парним. Очікуваний результат: true.

// const numbers = [2, 4, 6, 8, 10];
// const arrayNumbers = arr => arr.every(number => number % 2 === 0);
//console.log(arrayNumbers(numbers));

//TODO:=========task-05=================
// Знайдіть перше непарне число

const numbers = [2, 1, 6, 8, 9, 10, 12];

const firstFind = arr => arr.find(number => number % 2 !== 0); 

// console.log(firstFind(numbers));

//TODO:=========task-06=================
// Відсортуйте масив чисел [4, 2, 5, 1, 3] у порядку зростання. Очікуваний результат: [1, 2, 3, 4, 5].

const arrNum = [4, 2, 5, 1, 3];

const sorterArr = arr => arr.toSorted((a, b) => a - b);
// console.log(sorterArr(arrNum));
// console.log(arrNum);

//TODO:===============task-07===============================
// Відсортуйте масив рядків ["banana", "orange", "apple", "pear"] у порядку алфавіту. Очікуваний результат: ["apple", "banana", "orange", "pear"].

const fruits = ["banana", "orange", "apple", "pear"];

const fruitSort = array => array.toSorted((a, b) => a.localeCompare(b));

// console.log(fruitSort(fruits));

