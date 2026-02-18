import { Filters } from './const.js';
import { renderCards } from './render-cards.js';
import { debounce } from './utils.js';

const filterElement = document.querySelector('.img-filters');
const formElement = document.querySelector('.img-filters__form');

let localPhotos;

const debouncedRender = debounce(renderCards);

export const initFilters = (photos) => {
  localPhotos = [...photos];
  filterElement.classList.remove('img-filters--inactive');
};

const filterActions = {
  [Filters.DEFAULT]: () => localPhotos,
  [Filters.RANDOM]: () => [...localPhotos].sort(() => Math.random() - 0.5).slice(0, 10),
  [Filters.DISCUSSED]: () => [...localPhotos].sort((a, b) => b.comments.length - a.comments.length),
};

const setActiveButton = (button) => {
  formElement.querySelector('.img-filters__button--active').classList.remove('img-filters__button--active');
  button.classList.add('img-filters__button--active');
};

formElement.addEventListener('click', ({ target }) => {
  const button = target.closest('.img-filters__button');
  if (button) {
    setActiveButton(button);
    const sortType = button.id;
    debouncedRender(filterActions[sortType]());
  }
});
