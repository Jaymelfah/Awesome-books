import bookData from './modules/bookData.js';
import Awesomebooks from './modules/class.js';
import createBooks, { del } from './modules/createBooks.js';
import addBook from './modules/addBook.js';

// Add date
document.addEventListener('DOMContentLoaded', () => {
  const today = new Date();
  const date = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
  const time = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
  const dateTime = `${date} ${time}`;
  document.querySelector('.date').innerHTML = dateTime;
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
