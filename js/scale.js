import { Scale } from './const.js';

const minElement = document.querySelector('.scale__control--smaller');
const maxElement = document.querySelector('.scale__control--bigger');
const imageElement = document.querySelector('.img-upload__preview img');
const inputElement = document.querySelector('.scale__control--value');

let currentScale = Scale.DEFAULT;

const render = () => {
  imageElement.style.transform = `scale(${currentScale}%)`;
  inputElement.value = `${currentScale}%`;
};

minElement.addEventListener('click', () => {
  currentScale = currentScale - Scale.STEP > Scale.MIN ? currentScale - Scale.STEP : Scale.MIN;
  render();
});

maxElement.addEventListener('click', () => {
  currentScale = currentScale + Scale.STEP < Scale.MAX ? currentScale + Scale.STEP : Scale.MAX;
  render();
});

export const resetScale = () => {
  currentScale = Scale.DEFAULT;
  render();
};

resetScale();
