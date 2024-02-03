import _throttle from 'lodash.throttle';

// стала для зберігання ключа keyStorage

const keyStorage = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
const inputEmail = form.elements.email;
const inputMessage = form.elements.message;
const submitButton = document.querySelector('button');

// оператор, який буде справджати, чи є збережені дані користувача
// якщо ні, то пусте

const saveFeedbackForm =  JSON.parse(localStorage.getItem(keyStorage));
if(saveFeedbackForm) {
 inputEmail.value = saveFeedbackForm.email;
inputMessage.value = saveFeedbackForm.message;

}


// функція, яка буде зберігати дані в сховищі
// сховище має оновлюватись не частіше 0,5 секунди

form.addEventListener('input', _throttle(() => {
  localStorage.setItem(keyStorage, JSON.stringify({
    email: inputEmail.value,
message: inputMessage.value,
  }) 
);
submitButton.disabled = !(inputEmail.value && inputMessage.value);
}, 500)
);

// щоб не перезавантажувалась автоматично сторінка, використано preventDefault
// після висилання форми вичистити поле сховище

  form.addEventListener('submit', event => {
 
    event.preventDefault();
  
  console.log({
  email: inputEmail.value,
    message: inputMessage.value,  
  });
  
  form.reset();
  localStorage.removeItem(keyStorage);
  submitButton.disabled = true;
  });


