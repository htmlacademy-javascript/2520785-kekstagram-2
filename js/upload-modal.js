import { isValid, resetValidation } from './validation.js';
import { resetScale } from './scale.js';
import { resetEffects } from './effects.js';

const formElement = document.querySelector('.img-upload__form');
const uploadFileElement = formElement.querySelector('#upload-file');
const windowElement = formElement.querySelector('.img-upload__overlay');
const bodyElement = document.body;
const buttonCloseElement = formElement.querySelector('#upload-cancel');

const showModal = (isShown = true) => {
  if (isShown) {
    windowElement.classList.remove('hidden');
    bodyElement.classList.add('modal-open');
  } else {
    windowElement.classList.add('hidden');
    bodyElement.classList.remove('modal-open');
  }
};

const closeModal = () => {
  showModal(false);
  formElement.reset();
  resetValidation();
  resetScale();
  resetEffects();
};

uploadFileElement.addEventListener('change', () => {
  showModal();
});

buttonCloseElement.addEventListener('click', (evt) => {
  evt.preventDefault();
  closeModal();
});

formElement.addEventListener('submit', (evt) => {
  if(!isValid()){
    evt.preventDefault();
  }
});

