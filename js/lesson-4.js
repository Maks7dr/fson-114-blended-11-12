//TODO:=========task-01=================
// Створіть контейнер div (з класом numberContainer )в HTML-документі та динамічно створіть 100 блоків (з класом number) наповнивши їх рандомними числами від 1 до 100 і додайте їх до контейнера div(numberContainer). Парні числа повинні мати зелений фон (додати клас even), Непарні числа - жовтий фон (додати клас odd).

// const boxes = 100;

const bodyEl = document.querySelector('body');
const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');

buttonEl.addEventListener('click', event => {
  const randomNumber = () => Math.floor(Math.random() * inputEl.value) + 1;

  const divContainer = document.createElement('div');
  divContainer.classList.add('number-container');

  for (let i = 0; i < inputEl.value; i++) {
    const div = document.createElement('div');
    div.classList.add('number');
    div.textContent = randomNumber();
    if (div.textContent % 2 === 0) {
      div.classList.add('even');
    } else {
      div.classList.add('odd');
    }
    divContainer.appendChild(div);
  }
  buttonEl.after(divContainer);
});

// bodyEl.after(divContainer);
// bodyEl.before(divContainer);
// bodyEl.append(divContainer);
// bodyEl.prepend(divContainer);
// bodyEl.innerHTML = divContainer; не працює!!!!
