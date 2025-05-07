import iziToast from 'izitoast';
import SimpleLightbox from 'simplelightbox';

import { getImagesByQuery } from './js/pixabay-api';
import {
  galleryContainer,
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions';

const searchFormEl = document.querySelector('form');
console.log(searchFormEl);

const onFormSubmit = event => {
  event.preventDefault();

  // ключевое слово, которое ввел пользователь
  const searchedQuery =
    event.currentTarget.elements['search-text'].value.trim();

  clearGallery();

  if (searchedQuery === '') {
    iziToast.show({
      message: 'Please enter your request!',
      position: 'topRight',
    });
    return;
  }

  showLoader(); // показать loader перед запросом

  getImagesByQuery(searchedQuery)
    .then(response => {
      hideLoader();
      
      const images = response.data.hits;

      if (images.length === 0) {
        iziToast.show({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
          backgroundColor: '#EF4040',
          theme: 'dark',
        });

        searchFormEl.reset();

        return;
      }

      const galleryTemplate = images
        .map(image => createGallery(image))
        .join('');

      galleryContainer.innerHTML = galleryTemplate;

      searchFormEl.reset();

      // обновить lightbox после вставки новых элементов
      new SimpleLightbox('.gallery-link', {
        captions: true,
        captionsData: 'alt',
        captionDelay: 250,
      });
    })
    .catch(error => {
      hideLoader(); // скрыть loader независимо от результата

      iziToast.error({
        message: error.message,
        position: 'topRight',
      });
    });
};

searchFormEl.addEventListener('submit', onFormSubmit);
