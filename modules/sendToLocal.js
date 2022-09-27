// eslint-disable-next-line import/no-cycle
import createBooks from './createBooks.js';
// function to send to local storage
const sendToLocal = (a, b) => {
  localStorage.setItem(a, JSON.stringify(b));
  createBooks();
};

export default sendToLocal;