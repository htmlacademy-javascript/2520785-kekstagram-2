import { getData } from './api.js';
import { renderCards } from './render-cards.js';
import './upload-modal.js';
import { showAlert } from './utils.js';

getData()
  .then((photos) => {
    renderCards(photos);
  })
  .catch(() => {
    showAlert();
  });

