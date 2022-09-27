import bookData from './bookData.js';
import delBook from './delBook.js';

const deleteButton = document.querySelectorAll('.remove-books');
// Method to display books
const createBooks = () => {
  const booksContainer = document.querySelector('.books-container');
  const displayBooks = bookData.map((bookList) => `<div class="removed" id="remove"><p class="book-name">"${bookList.title}" By ${bookList.author}</p>
    <button type="button"  class="remove-books"  id="remove-book">Remove</button><hr></div>
    `).join('');
  booksContainer.innerHTML = displayBooks;
};

const del = () => {
  deleteButton.forEach((btn) => {
    btn.addEventListener('click', () => {
      console.log('pray');
      delBook(btn);
    });
  });
};
export default createBooks;
export { del };

// onclick="delBook(${bookList.id})"