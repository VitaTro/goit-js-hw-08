import { galleryItems } from './gallery-items.js';
import SimpleLightbox from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css";

// Change code below this line
const gallery = document.querySelector('.gallery'); 

const items = galleryItems.map((galleryItem) => {
  return   `<div class="gallery__item">
  <a class="gallery__link" href="${galleryItem.original}">
    <img
      class="gallery__image"
      src="${galleryItem.preview}"
      data-source="${galleryItem.original}"
      alt="${galleryItem.description}"
    />
  </a>
</div>`;
 }).join(''); 
 gallery.innerHTML = items;



const lightboxElement = new SimpleLightbox('.gallery a', {
  captionsSelector: 'img',
  captionsType: 'attr',
  captionsData: "alt",
  captionDelay: 250,
}); 


console.log(galleryItems);