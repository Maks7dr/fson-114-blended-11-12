export function addDataToLocalStorage(key, value) {
  try {
    const normalizeDate = JSON.stringify(value);
    localStorage.setItem(key, normalizeDate);
  } catch (error) {
    console.error('Помилка при записі', error.message);
  }
}

export function getDataFromLocalStorag(key) {
  try {
    const lsDate = localStorage.getItem(key);
    return lsDate === null ? undefined : JSON.parse(lsDate);
  } catch (error) {
    console.error('Помилка при зчитувані', error.message);
  }
}

export function removeDateFromLocalStorage(key) {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error('Помилка при видаленні', error.message);
  }
}

export function removeAllDate() {
  localStorage.clear();
}
