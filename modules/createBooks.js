import bookData from './bookData.js';

// Method to display books
const createBooks = () => {
  const booksContainer = document.querySelector('.books-container');
  const displayBooks = bookData.map((bookList) => `<div class="removed" id="remove"><p class="book-name">"${bookList.title}" By ${bookList.author}</p>
    <button type="button"  class="remove-books"  id="${bookList.id}">Remove</button><hr></div>
    `).join('');
  booksContainer.innerHTML = displayBooks;
};
const sendToLocal = (a, b) => {
  localStorage.setItem(a, JSON.stringify(b));
  createBooks();
};

// const del = () => {
//   deleteButton.forEach((btn) => {
//     btn.addEventListener('click', () => {
//       console.log('pray');
//       delBook(btn);
//     });
//   });
// };
export default createBooks;
export { sendToLocal };
// onclick="delBook(${bookList.id})"