import _throttle from 'lodash.throttle';

// стала для зберігання ключа keyStorage

const keyStorage = 'feedback-form-state';
const form = document.querySelector('.feedback-form');


// оператор, який буде справджати, чи є збережені дані користувача
// якщо ні, то пусте

form.elements.message.value = localStorage.getItem(keyStorage) || "";

// функція, яка буде зберігати дані в сховищі

const saveData = (e) => {
    localStorage.setItem(keyStorage, e.target.value);
}
// після висилання форми вичистити поле сховище, видати в консоль результат

form.addEventListener("input", (e) => {
  localStorage.setItem(keyStorage, e.target.value);
});
form.addEventListener("submit", (e) => {
  e.preventDefault();
  localStorage.removeItem(keyStorage);
  form.reset();
});
// сховище має оновлюватись не частіше 0,5 секунди

const throttleSaveData = _throttle(saveData, 500);

//  обробник події input, який використовує створену функцію
form.addEventListener("input", throttleSaveData);



console.log(form);