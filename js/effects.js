import { Effects, EffectsSettings } from './const.js';

const listElement = document.querySelector('.effects__list');
const sliderElement = document.querySelector('.effect-level__slider');
const valueElement = document.querySelector('.effect-level__value');
const imageElement = document.querySelector('.img-upload__preview img');
const containerElement = document.querySelector('.effect-level');

let currentEffect = Effects.NONE;

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100,
  },
  start: 80,
  connect: 'lower',
});

const render = () => {
  const {style, units} = EffectsSettings[currentEffect];
  imageElement.style.filter = `${style}(${valueElement.value}${units})`;
};

sliderElement.noUiSlider.on('update', () => {
  valueElement.value = sliderElement.noUiSlider.get();
  render();
});

const updateSlider = () => {
  const { slider } = EffectsSettings[currentEffect];
  sliderElement.noUiSlider.updateOptions(slider);
};

const showSlider = (isVisible = true) => {
  if (isVisible) {
    containerElement.classList.remove('hidden');
  } else {
    containerElement.classList.add('hidden');
  }
}

export const resetEffects = () => {
  showSlider(false);
  currentEffect = Effects.NONE;
  imageElement.style.filter = '';
};

listElement.addEventListener('change', (evt) => {
  currentEffect = evt.target.value;
  if (currentEffect === Effects.NONE) {
    resetEffects();
  } else{
    showSlider();
    updateSlider();
  }
});

resetEffects();
