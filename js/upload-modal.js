import { isValid, resetValidation } from './validation.js';
import { resetScale } from './scale.js';
import { resetEffects } from './effects.js';
import { CAPTION_BUTTON, Popups } from './const.js';
import { showPopup } from './popups.js';
import { sendData } from './api.js';

const formElement = document.querySelector('.img-upload__form');
const subminElement = formElement.querySelector('.img-upload__submit');
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

const disabledSubmit = (isDisabled = true) => {
  subminElement.disabled = isDisabled;
  subminElement.textContent = isDisabled ? CAPTION_BUTTON.SENDING : CAPTION_BUTTON.IDLE;
};

uploadFileElement.addEventListener('change', () => {
  showModal();
});

buttonCloseElement.addEventListener('click', (evt) => {
  evt.preventDefault();
  closeModal();
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

