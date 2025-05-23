import axios from 'axios';

export const getImagesByQuery = query => {
  return axios.get('https://pixabay.com/api/', {
    params: {
      key: '49208970-c1347c58b4866d3d505700044',
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
    },
  });
};
