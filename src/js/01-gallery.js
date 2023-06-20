// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);
const gallery = document.querySelector('.gallery');
function galleryMarkup(items) {
  return items
    .map(
      ({ preview, original, description }) => `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
       <img class="gallery__image" src="${preview}" alt="${description}" >
    </a>
 </li>`
    )
    .join('');
}
const makupElement = galleryMarkup(galleryItems);
gallery.innerHTML = makupElement;
gallery.addEventListener('click', onClick);
function onClick(event) {
  event.preventDefault();
}
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
