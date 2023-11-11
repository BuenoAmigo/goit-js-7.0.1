import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryList = document.querySelector('.gallery');

const markup = galleryItems.map(({ preview, original, description }) => `
<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`).join('');

galleryList.insertAdjacentHTML('afterbegin', markup);

galleryList.addEventListener('click', evt => { evt.preventDefault() });
const lightbox = new SimpleLightbox('.gallery a',
    {
        captionsData: 'alt',
        captionDelay: 250,
        captionPosition: 'top',
        navText: ['⇦', '⇨'],
        widthRatio: 0.7,
        heightRatio: 0.6,
        focus: false,
    });