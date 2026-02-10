import { getPhotos } from './data.js';
import { renderCards } from './render-cards.js';
import './upload-modal.js';

const photos = getPhotos();
renderCards(photos);