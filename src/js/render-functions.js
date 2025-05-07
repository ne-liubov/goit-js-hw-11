export const galleryContainer = document.querySelector('.img-list');
const loaderEl = document.querySelector('.loader');
console.log(loaderEl);

export const createGallery = images => {
  const {
    largeImageURL,
    webformatURL,
    tags,
    likes,
    views,
    comments,
    downloads,
  } = images;
  return `
    <li class="img-list-item">
        <a href="${largeImageURL}" class="gallery-link">
        <img class="img" src="${webformatURL}" alt="${tags}" width="360"/>
      </a>
      <div class="info-wrapper">
        <div class="img-info">
          <p class="label">Likes</p>
          <p class="value">${likes}</p>
        </div>
        <div class="img-info">
          <p class="label">Views</p>
          <p class="value">${views}</p>
        </div>
        <div class="img-info">
          <p class="label">Comments</p>
          <p class="value">${comments}</p>
        </div>
        <div class="img-info">
          <p class="label">Downloads</p>
          <p class="value">${downloads}</p>
        </div>
      </div>
    </li>`;
};

// Очистка галереи
export const clearGallery = () => {
  galleryContainer.innerHTML = '';
};

// Показ лоадера
export const showLoader = () => {
  console.log('Показать лоадер');
  loaderEl.classList.remove('is-hidden');
};

// Скрытие лоадера
export const hideLoader = () => {
  console.log('Скрыть лоадер');
  loaderEl.classList.add('is-hidden');
};
