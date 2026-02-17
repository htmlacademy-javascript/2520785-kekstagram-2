import { getData } from './api.js';
import { initFilters } from './filters.js';
import { renderCards } from './render-cards.js';
import './upload-modal.js';
import { showAlert } from './utils.js';


getData()
  .then((photos) => {
    renderCards(photos);
    initFilters(photos);
  })
  .catch(() => {
    showAlert();
  });

