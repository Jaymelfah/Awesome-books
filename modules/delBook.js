// eslint-disable-next-line import/no-cycle
import sendToLocal from './sendToLocal.js';

let bookData = JSON.parse(localStorage.getItem('storageBooksData'))
  ? JSON.parse(localStorage.getItem('storageBooksData'))
  : [];

// Method to delete books
// eslint-disable-next-line no-unused-vars
const delBook = (id) => {
  const filteredBooks = bookData.filter((item) => item.id !== id);
  bookData = filteredBooks;
  // eslint-disable-next-line no-use-before-define
  sendToLocal('storageBooksData', filteredBooks);
};
export default delBook;
