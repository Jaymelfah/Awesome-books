// eslint-disable-next-line import/no-cycle
import createBooks from './createBooks.js';
import sendToLocal from './sendToLocal.js';

// Method to delete books
// eslint-disable-next-line no-unused-vars
const delBook = (id) => {
  let bookData = JSON.parse(localStorage.getItem('storageBooksData'))
    ? JSON.parse(localStorage.getItem('storageBooksData'))
    : [];
  const filteredBooks = bookData.filter((item) => item.id !== id);
  bookData = filteredBooks;
  createBooks();
  // eslint-disable-next-line no-use-before-define
  sendToLocal('storageBooksData', filteredBooks);
};

export default delBook;
