import { Popups } from './const.js';
import { removeEscapeControl, setEscapeControl } from './escape-control.js';

const successTemplate = document.querySelector('#success').content.querySelector('.success');
const errorTemplate = document.querySelector('#error').content.querySelector('.error');
const bodyElement = document.body;

const templates = {
  [Popups.SUCCESS]: successTemplate,
  [Popups.ERROR]: errorTemplate,
};

export const showPopup = (type) => {
  const popup = templates[type].cloneNode(true);
  bodyElement.append(popup);
  setEscapeControl(() => {
    popup.remove();
  });

  popup.addEventListener('click', ({ target }) => {
    if (target.classList.contains(type) || target.classList.contains(`${type}__button`)) {
      popup.remove();
      removeEscapeControl();
    }
  });
};
