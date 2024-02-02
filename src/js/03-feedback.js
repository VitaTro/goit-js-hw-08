import _throttle from 'lodash.throttle';

// стала для зберігання ключа keyStorage

const keyStorage = 'feedback-form-state';

const form = document.querySelector('.feedback-form');

// оператор, який буде справджати, чи є збережені дані користувача
// якщо ні, то пусте

let save = {};
if(localStorage.getItem(keyStorage)) {
  let saveLocal = JSON.parse(localStorage.getItem(keyStorage));

  if(saveLocal.email) form.email.value = saveLocal.email;
  if(saveLocal.message) form.message.value = saveLocal.message;
}

// функція, яка буде зберігати дані в сховищі
// сховище має оновлюватись не частіше 0,5 секунди

form.addEventListener('input', _throttle((event) => {
  if(localStorage.getItem(keyStorage)) save = JSON.parse(localStorage.getItem(keyStorage));

  save[event.target.value] = event.target.value;
  localStorage.setItem(keyStorage, JSON.stringify(save));
}, 500));

// щоб не перезавантажувалась автоматично сторінка, використано preventDefault
// після висилання форми вичистити поле сховище

form.addEventListener('submit', (event) => {
  event.preventDefault();


if(form.email.value && form.message.value) {
  form.email.value = "";
  form.message.value = "";
  console.log(JSON.parse(localStorage.getItem(keyStorage)));
  localStorage.clear();
  save = {}; 
}

});

