import { ALERT_TIME } from './const.js';

const alertTemplate = document.querySelector('#data-error').content.querySelector('.data-error');
const body = document.body;

export const showAlert = ()=>{
  const alert = alertTemplate.cloneNode(true);
  body.append(alert);
  setTimeout(()=>{
    alert.remove();
  }, ALERT_TIME);
};
