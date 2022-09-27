import bookData from './modules/bookData.js';
import Awesomebooks from './modules/class.js';
import createBooks from './modules/createBooks.js';
import addBook from './modules/addBook.js';
import { DateTime } from './modules/luxon.js';
import sendToLocal from './modules/sendToLocal.js';

// Add date
document.addEventListener('DOMContentLoaded', () => {
  const now = DateTime.now();
  document.querySelector('.date').innerHTML = now;
});
// Rendering various links
const link = document.getElementById('link-a');
const addNew = document.getElementById('add-new-a');
const contact = document.getElementById('contact-a');

const sectionBook = document.querySelector('.book-list-section');
const addNewBook = document.getElementById('add-book-form');
const sectionContact = document.querySelector('.contact-section');

link.addEventListener('click', () => {
  addNewBook.style.display = 'none';
  sectionContact.style.display = 'none';
  sectionBook.style.display = 'block';
});

addNew.addEventListener('click', () => {
  sectionBook.style.display = 'none';
  sectionContact.style.display = 'none';
  addNewBook.style.display = 'flex';
});

contact.addEventListener('click', () => {
  sectionBook.style.display = 'none';
  addNewBook.style.display = 'none';
  sectionContact.style.display = 'block';
});

document.addEventListener('DOMContentLoaded', () => {
  createBooks();
});

document.getElementById('add-book-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const bookObject = new Awesomebooks(bookData.length, document.getElementById('book-title').value, document.getElementById('book-author').value);
  addBook(bookObject);
  document.getElementById('book-title').value = '';
  document.getElementById('book-author').value = '';
});

document.addEventListener('click', (event) => {
  if (event.target.classList.contains('remove-books')) {
    console.log('remove');
    // bookData.splice(event.target.id, 1);
    event.target.parentElement.remove();
    console.log(event.target.id);
    const removeObjectWithId = (bookData, id) => {
      const objWithIdIndex = bookData.findIndex((obj) => obj.id === id);
      bookData.splice(objWithIdIndex, 1);
      return bookData;
    };
    removeObjectWithId(bookData, event.target.id);
    sendToLocal('storageBooksData', bookData);
  }
});
