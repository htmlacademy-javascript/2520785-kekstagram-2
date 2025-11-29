const DESCRIPTIONS = [
  'Утро',
  'Машина',
  'Природа',
  'Котик'
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const NAMES = [
  'Юрий',
  'Артем',
  'Иван',
  'Мария',
];

const LIKES = {
  MIN: 15,
  MAX: 200
};

const COMMENTS_COUNT = {
  MIN: 0,
  MAX: 30
};

const COMMENTS_ID = {
  MIN: 10000,
  MAX: 100000
};

const AVATAR = {
  MIN: 1,
  MAX: 6
};

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomElement = (items) => items[getRandomInteger(0, items.length - 1)];

const getComment = () => ({
  id: getRandomInteger(COMMENTS_ID.MIN, COMMENTS_ID.MAX),
  avatar: `img/avatar-${getRandomInteger(AVATAR.MIN, AVATAR.MAX)}.svg`,
  message: getRandomElement(MESSAGES),
  name: getRandomElement(NAMES),
})

const getComments = () => {
  const count = getRandomInteger(COMMENTS_COUNT.MIN, COMMENTS_COUNT.MAX);
  const comments = [];
  for (let i = 1; i <= count; i++) {
    comments.push(getComment())
  }
  return comments;
}

const getPhoto = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: getRandomElement(DESCRIPTIONS),
  likes: getRandomInteger(LIKES.MIN, LIKES.MAX),
  comments: getComments()
})

// const getPhotos = () => {
//   const pictures = [];
//   for (let i = 1; i <= 25; i++) {
//     pictures.push(getPhoto(i))
//   }
//   return pictures;
// };

const getPhotos = () => Array.from({length: 25}, ( _, i) => getPhoto(i + 1));

console.log(getPhotos());