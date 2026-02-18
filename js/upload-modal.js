import { isValid, resetValidation } from './validation.js';
import { resetScale } from './scale.js';
import { resetEffects } from './effects.js';
import { CAPTION_BUTTON, Popups } from './const.js';
import { showPopup } from './popups.js';
import { sendData } from './api.js';
import { removeEscapeControl, setEscapeControl } from './escape-control.js';

const formElement = document.querySelector('.img-upload__form');
const submitElement = formElement.querySelector('.img-upload__submit');
const uploadFileElement = formElement.querySelector('#upload-file');
const windowElement = formElement.querySelector('.img-upload__overlay');
const bodyElement = document.body;
const buttonCloseElement = formElement.querySelector('#upload-cancel');
const imageElement = document.querySelector('.img-upload__preview img');
const previewsRadioElements = formElement.querySelectorAll('.effects__preview');
const descriptionElement = formElement.querySelector('.text__description');
const hashtagElement = formElement.querySelector('.text__hashtags');

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

const disabledSubmit = (isDisabled = true) => {
  submitElement.disabled = isDisabled;
  submitElement.textContent = isDisabled ? CAPTION_BUTTON.SENDING : CAPTION_BUTTON.IDLE;
};

const renderPreview = () => {
  const fileImage = uploadFileElement.files[0];
  const imageURL = URL.createObjectURL(fileImage);
  imageElement.src = imageURL;
  previewsRadioElements.forEach((span) => {
    span.style.backgroundImage = `url(${imageURL})`;
  });
};

const canCloseWindow = () => !(document.activeElement === hashtagElement || document.activeElement === descriptionElement);

uploadFileElement.addEventListener('change', () => {
  showModal();
  renderPreview();
  setEscapeControl(closeModal, canCloseWindow);
});

buttonCloseElement.addEventListener('click', (evt) => {
  evt.preventDefault();
  closeModal();
  removeEscapeControl();
});

formElement.addEventListener('submit', (evt) => {
  evt.preventDefault();
  if (isValid()) {
    disabledSubmit();
    sendData(new FormData(formElement))
      .then((response) => {
        if (!response.ok) {
          throw new Error();
        }
        closeModal();
        removeEscapeControl();
        showPopup(Popups.SUCCESS);
      })
      .finally(() => {
        disabledSubmit(false);
      })
      .catch(() => {
        showPopup(Popups.ERROR);
      });
  }
});

