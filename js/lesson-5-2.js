//TODO:====================01==========================
/**
 * Перероби функцію на проміс таким чином, щоб проміс повертав значення
 * через 2 секунди після виклику функції
 */

// function greet() {
//   return 'hello world';
// }

// console.log(greet());

function greet() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('Hello world!');
    }, 2000);
  });
}

greet()
  .then(response => {
    console.log(response, ' -- then');
  })
  .catch(error => {
    console.log(error, '--- catch');
  });

// setTimeout(() => {
//   console.log(1);
// }, 1000);

// console.log(2);

// setTimeout(() => {
//   console.log(3);
// }, 5000);

// console.log(4);
