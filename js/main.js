import { getPhotos } from './data.js';
import { renderCards } from './render-cards.js';

const photos = getPhotos();
renderCards(photos);