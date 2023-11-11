import { galleryItems } from './gallery-items.js';
// Change code below this line
const photos = document.querySelector('.gallery');

const markup = galleryItems.map(({ preview, original, description }) => `
<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`).join('');

photos.insertAdjacentHTML('beforeend', markup);

photos.onclick = (evt) => {
    if (!evt.target.classList.contains('gallery__image')) {
        return;
    }
    evt.preventDefault();
    const instance = basicLightbox.create(`
           <img src="${evt.target.dataset.source}" width="800" height="600">
    `, {
        onShow: () => { document.addEventListener('keydown', closeGallery) },
        onClose: () => { document.removeEventListener('keydown', closeGallery) },
    });
    instance.show()

    function closeGallery(evt) {
        if (evt.code !== 'Escape') {
            return
        }
        instance.close()
    }

}


// // console.log(photos)
// console.log(galleryItems);
