import { PART_COMMENTS } from './const.js';
import { removeEscapeControl, setEscapeControl } from './escape-control.js';

const modalElement = document.querySelector('.big-picture');
const closeButtonElement = modalElement.querySelector('#picture-cancel');
const bodyElement = document.body;
const imageElement = modalElement.querySelector('.big-picture__img img');
const likesElement = modalElement.querySelector('.likes-count');
const totalCommentElement = modalElement.querySelector('.social__comment-total-count');
const commentTemplate = modalElement.querySelector('.social__comment');
const commentsElement = modalElement.querySelector('.social__comments');
const loaderElement = modalElement.querySelector('.social__comments-loader');
const commentCountElement = modalElement.querySelector('.social__comment-shown-count');

let renderedCommentsCount;
let localComments;

const showModal = (isShown = true) => {
  if (isShown) {
    modalElement.classList.remove('hidden');
    bodyElement.classList.add('modal-open');
  } else {
    modalElement.classList.add('hidden');
    bodyElement.classList.remove('modal-open');
  }
};

const renderStatistic = () => {
  commentCountElement.textContent = renderedCommentsCount;
};

const renderLoader = () => {
  if (!localComments.length) {
    loaderElement.classList.add('hidden');
  } else {
    loaderElement.classList.remove('hidden');
  }
};
const renderComments = () => {
  const fragment = document.createDocumentFragment();
  localComments.splice(0, PART_COMMENTS).forEach((comment) => {
    const newComment = commentTemplate.cloneNode(true);
    const avatar = newComment.querySelector('.social__picture');
    avatar.src = comment.avatar;
    avatar.alt = comment.name;
    newComment.querySelector('.social__text').textContent = comment.message;
    renderedCommentsCount++;
    fragment.append(newComment);
  });
  commentsElement.append(fragment);
  renderStatistic();
  renderLoader();
};

const render = (picture) => {
  imageElement.src = picture.url;
  likesElement.textContent = picture.likes;
  totalCommentElement.textContent = picture.comments.length;
  localComments = [...picture.comments];
  commentsElement.innerHTML = '';
  renderedCommentsCount = 0;
  renderComments();
};

export const openModal = (photo) => {
  showModal();
  render(photo);
  setEscapeControl(() => {
    showModal(false);
  });
};

closeButtonElement.addEventListener('click', () => {
  showModal(false);
  removeEscapeControl();
});

loaderElement.addEventListener('click', () => {
  renderComments();
});
