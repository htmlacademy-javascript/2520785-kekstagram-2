import { HASHTAG_FORMULA, MAX_DESCRIPTION, MAX_HASHTAGS } from './const.js';

const formElement = document.querySelector('.img-upload__form');
const descriptionElement = formElement.querySelector('.text__description');
const hashtagElement = formElement.querySelector('.text__hashtags');


const validation = new Pristine(formElement, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper--error'
});

const checkDescription = (value) => value.length <= MAX_DESCRIPTION;

validation.addValidator(
  descriptionElement,
  checkDescription,
  `Строка не должна привышать ${MAX_DESCRIPTION} символов`
);
const getHashtags = (text) => text.toLowerCase().split(' ').filter((item) => item.length);

const checkHashtag = (value) => {
  if (!value.trim().length) {
    return true;
  }
  const hashes = getHashtags(value);
  return hashes.every((item) => HASHTAG_FORMULA.test(item));
};

const checkHashtagsCount = (value) => {
  if (!value.trim().length) {
    return true;
  }
  const hashes = getHashtags(value);
  return hashes.length <= MAX_HASHTAGS;
};

const checkUnique = (value) => {
  if (!value.trim().length) {
    return true;
  }
  const hashes = getHashtags(value);
  const uniques = [...new Set(hashes)];
  return uniques.length === hashes.length;
};

validation.addValidator(
  hashtagElement,
  checkHashtag,
  'Не валидный хештег'
);

validation.addValidator(
  hashtagElement,
  checkHashtagsCount,
  `Количество хештегов не должно привышать ${MAX_HASHTAGS}`
);

validation.addValidator(
  hashtagElement,
  checkUnique,
  'Хештеги не должны повторяться'
);
export const isValid = () => validation.validate();
export const resetValidation = () => validation.reset();
