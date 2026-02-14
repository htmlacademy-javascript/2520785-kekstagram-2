/*Для эффекта «Хром» — filter: grayscale(0..1) с шагом 0.1;
Для эффекта «Сепия» — filter: sepia(0..1) с шагом 0.1;
Для эффекта «Марвин» — filter: invert(0..100%) с шагом 1%;
Для эффекта «Фобос» — filter: blur(0..3px) с шагом 0.1px;
Для эффекта «Зной» — filter: brightness(1..3) с шагом 0.1;
Для эффекта «Оригинал» CSS-стили filter удаляются.*/
export const Effects = {
  CHROME: 'chrome',
  SEPIA: 'sepia',
  MARVIN: 'marvin',
  PHOBOS: 'phobos',
  HEAT: 'heat',
  NONE: 'none',
};

export const EffectsSettings = {
  [Effects.NONE]: {
    slider: {
      range: {
        min: 0,
        max: 100,
      },
      start: 80,
      step: 1
    },
    style: '',
    units: ''
  },
  [Effects.CHROME]: {
    slider: {
      range: {
        min: 0,
        max: 1,
      },
      start: 1,
      step: 0.1
    },
    style: 'grayscale',
    units: ''
  },
  [Effects.SEPIA]: {
    slider: {
      range: {
        min: 0,
        max: 1,
      },
      start: 1,
      step: 0.1
    },
    style: 'sepia',
    units: ''
  },
  [Effects.MARVIN]: {
    slider: {
      range: {
        min: 0,
        max: 100,
      },
      start: 100,
      step: 1
    },
    style: 'invert',
    units: '%'
  },
  [Effects.PHOBOS]: {
    slider: {
      range: {
        min: 0,
        max: 3,
      },
      start: 3,
      step: 0.1
    },
    style: 'blur',
    units: 'px'
  },
  [Effects.HEAT]: {
    slider: {
      range: {
        min: 1,
        max: 3,
      },
      start: 3,
      step: 0.1
    },
    style: 'brightness',
    units: ''
  }
};

export const Scale = {
  MAX: 100,
  MIN: 25,
  STEP: 25,
  DEFAULT: 100,
}

export const MAX_HASHTAGS = 5;

export const HASHTAG_FORMULA = /^#[a-z0-9а-яё]{1,19}$/i;

export const MAX_DESCRIPTION = 140;

export const PART_COMMENTS = 5;

export const DESCRIPTIONS = [
  'Утро',
  'Машина',
  'Природа',
  'Котик'
];

export const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

export const NAMES = [
  'Юрий',
  'Артем',
  'Иван',
  'Мария',
];

export const LIKES = {
  MIN: 15,
  MAX: 200
};

export const COMMENTS_COUNT = {
  MIN: 0,
  MAX: 30
};

export const COMMENTS_ID = {
  MIN: 10000,
  MAX: 100000
};

export const AVATAR = {
  MIN: 1,
  MAX: 6
};
