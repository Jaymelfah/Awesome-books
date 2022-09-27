import bookData from './modules/bookData.js';
import Awesomebooks from './modules/class.js';
import createBooks from './modules/createBooks.js';
import addBook from './modules/addBook.js';
import { DateTime } from './modules/luxon.js';
import sendToLocal from './modules/sendToLocal.js';

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
    let bookData = JSON.parse(localStorage.getItem('storageBooksData'))
      ? JSON.parse(localStorage.getItem('storageBooksData'))
      : [];

    const filter = bookData.filter((item) => item.id !== parseInt(event.target.id, 10));
    bookData = filter;
    sendToLocal('storageBooksData', bookData);
    createBooks();
    window.location.reload();
    // return bookData;
  }
});

// Add date
const currentDate = () => {
  const dt = DateTime.now();
  const date = dt.toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
  document.querySelector('.date').innerHTML = date;
  setTimeout(currentDate, 1000);
};
window.onload = currentDate();