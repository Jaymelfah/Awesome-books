import bookData from './bookData.js';
import sendToLocal from './sendToLocal.js';
// Method to add books
const addBook = (bookItem) => {
  bookData.push(bookItem);
  // eslint-disable-next-line no-use-before-define
  sendToLocal('storageBooksData', bookData);
};

export default addBook;