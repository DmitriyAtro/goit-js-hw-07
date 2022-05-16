import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');

function createGaleryItems() {
  return galleryItems
    .map(
      ({ original, preview, description }) => `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`,
    )
    .join('');
}
galleryContainer.innerHTML = createGaleryItems(galleryItems);

galleryContainer.addEventListener('click', onGalleryItemClick);

function onGalleryItemClick(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== 'IMG') {
    return;
  }
  basicLightbox
    .create(
      `
		<img  src="${evt.target.getAttribute(['data-source'])}">
	`,
      {
        onShow: instance => {
          window.addEventListener('keydown', onEscKeyPress);
          function onEscKeyPress(evt) {
            if (evt.code === 'Escape') {
              instance.close();
              this.removeEventListener('keydown', onEscKeyPress);
            }
          }
        },
      },
    )
    .show();
}
