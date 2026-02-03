import { openModal } from './modal.js';

const template = document.querySelector('#picture').content.querySelector('.picture');
const container = document.querySelector('.pictures');
export const renderCards = (photos) => {
  const fragment = document.createDocumentFragment('');
  photos.forEach((photo) => {
    const newCard = template.cloneNode(true);
    const image = newCard.querySelector('.picture__img');
    image.src = photo.url;
    newCard.querySelector('.picture__comments').textContent = photo.comments.length;
    newCard.querySelector('.picture__likes').textContent = photo.likes;
    image.alt = photo.description;
    newCard.addEventListener('click', ()=>{
      //call open modal function
      openModal(photo);
    })
    fragment.append(newCard);
  });
  container.append(fragment);
};
