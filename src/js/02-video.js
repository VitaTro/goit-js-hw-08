import Vimeo from '@vimeo/player' ;
import _throttle from 'lodash.throttle';

// стала для зберігання ключа keyStorage
const keyStorage = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');



// викликання події, як документ буде готовий

const player = new Vimeo(iframe);

// функція, яка буде виставляти поточний час відтворення (бере дані з локального сховища), або нульове значення, якщо не знайде
player.on('loaded', () => {
    const timeCurrent = localStorage.getItem(keyStorage) || 0;
    player.setCurrentTime(timeCurrent);
  });
  

// функція, яка буде записувать час відтворення в локальне сховище
const savePlaybackTime = () => {
    player.getCurrentTime().then((time) => {
localStorage.setItem(keyStorage, time);
    });
};
//функція, яка обмежуватиме оновлення часу у локальному сховищі (1 сек)
player.on(
    'timeupdate',
    _throttle(({ seconds }) => {
      localStorage.setItem(keyStorage, seconds);
    }, 1000)
  );

console.log(iframe);
