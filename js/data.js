import { AVATAR, COMMENTS_COUNT, COMMENTS_ID, DESCRIPTIONS, LIKES, MESSAGES, NAMES } from './const.js';
import { getRandomElement, getRandomInteger } from './utils.js';

const getComment = () => ({
  id: getRandomInteger(COMMENTS_ID.MIN, COMMENTS_ID.MAX),
  avatar: `img/avatar-${getRandomInteger(AVATAR.MIN, AVATAR.MAX)}.svg`,
  message: getRandomElement(MESSAGES),
  name: getRandomElement(NAMES),
});

const getComments = () => {
  const count = getRandomInteger(COMMENTS_COUNT.MIN, COMMENTS_COUNT.MAX);
  const comments = [];
  for (let i = 1; i <= count; i++) {
    comments.push(getComment());
  }
  return comments;
};

const getPhoto = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: getRandomElement(DESCRIPTIONS),
  likes: getRandomInteger(LIKES.MIN, LIKES.MAX),
  comments: getComments()
});

export const getPhotos = () => Array.from({ length: 25 }, (_, i) => getPhoto(i + 1));
