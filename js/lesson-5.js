import refs from './refs.js';
import {
  addDataToLocalStorage,
  getDataFromLocalStorag,
} from './localstorage-api.js';

document.addEventListener('DOMContentLoaded', () => {
  renderPage();
});

refs.checkBox.addEventListener('click', () => {
  if (refs.checkBox.checked) {
    refs.body.classList.replace('light', 'dark');
    addDataToLocalStorage('switch', 'dark');
  } else {
    refs.body.classList.replace('dark', 'light');
    addDataToLocalStorage('switch', 'light');
  }
});

function renderPage() {
  const lsData = getDataFromLocalStorag('switch');
  if (lsData === 'dark') {
    refs.body.classList.replace('light', 'dark');
    refs.checkBox.checked = true;
  } else {
    refs.body.classList.replace('dark', 'light');
  }
}
