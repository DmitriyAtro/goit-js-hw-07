import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');

function createGaleryItems() {
  return galleryItems
    .map(
      ({ original, preview, description }) => `<li>
      <a class="gallery__item" href="${original}">
	<img style="display: block;"
    class="gallery__image"
    src="${preview}"
    alt="${description}" />
    </a>
    </li>`,
    )
    .join('');
}
galleryContainer.innerHTML = createGaleryItems(galleryItems);

new SimpleLightbox('.gallery a', {
  captionDelay: '250ms',
  captionsData: 'alt',
});
