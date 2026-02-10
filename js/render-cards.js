import { openModal } from './modal.js';

const template = document.querySelector('#picture').content.querySelector('.picture');
const container = document.querySelector('.pictures');

let localPhotos;

export const renderCards = (photos) => {
  localPhotos = [...photos];
  const fragment = document.createDocumentFragment('');
  photos.forEach((photo) => {
    const newCard = template.cloneNode(true);
    const image = newCard.querySelector('.picture__img');
    image.src = photo.url;
    newCard.querySelector('.picture__comments').textContent = photo.comments.length;
    newCard.querySelector('.picture__likes').textContent = photo.likes;
    image.alt = photo.description;
    newCard.dataset.photoId = photo.id;
    fragment.append(newCard);
  });
  container.append(fragment);
};

container.addEventListener('click', (evt)=>{
  const card = evt.target.closest('.picture');
  if (card) {
    const currentId = Number(card.dataset.photoId);
    const photo = localPhotos.find((item) => item.id === currentId);
    openModal(photo);
  }
});
