document.addEventListener('DOMContentLoaded', function () {
  fetchBooks();
});

function fetchBooks() {
  return fetch("https://anapioficeandfire.com/api/books")
    .then((response) => response.json())
    .then((data) => renderBooks(data));
}


function renderBooks(booksData) {
  const booksList = document.getElementById('books');

  booksData.forEach((book) => {
    const bookTitle = document.createElement('li');
    bookTitle.innerText = book.name;
    booksList.appendChild(bookTitle);
  });
}
