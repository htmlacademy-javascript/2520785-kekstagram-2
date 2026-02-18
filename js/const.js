export const Filters = {
  DEFAULT: 'filter-default',
  RANDOM: 'filter-random',
  DISCUSSED: 'filter-discussed',
};

export const Popups = {
  SUCCESS: 'success',
  ERROR: 'error',
};

export const CAPTION_BUTTON = {
  IDLE: 'Опубликовать',
  SENDING: 'Публикую...',
};

export const ALERT_TIME = 5000;

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
};

export const MAX_HASHTAGS = 5;

export const HASHTAG_FORMULA = /^#[a-z0-9а-яё]{1,19}$/i;

export const MAX_DESCRIPTION = 140;

export const PART_COMMENTS = 5;
