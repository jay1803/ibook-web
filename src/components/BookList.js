import React from 'react';
import {
  Link
} from 'react-router-dom';
import _ from 'lodash';

const BookReport = ( {books} ) => {
  const bookCount = books.length;
  let finishedBook = [];
  let readingBooks = [];
  books.forEach(book => {
    if (book.progress === 1) {
      finishedBook.push(book);
    } else if (book.progress > 0) {
      readingBooks.push(book);
    }
  });
  const finishedBooksPercentage = finishedBook.length / bookCount * 100;
  const readingBooksPercentage = readingBooks.length / bookCount * 100;
  return (
    <div className="book-report">
      You have <strong>{bookCount}</strong> books in library. <br/>
      <strong>{finishedBook.length} ({finishedBooksPercentage.toFixed(0)}%)</strong> books are finished. <br/>
      <strong>{readingBooks.length} ({readingBooksPercentage.toFixed(0)}%)</strong> books are in reading.
    </div>
  )
}

const BookItem = ({ book }) => {
  const bookId = book.id;
  const progress = book.progress * 100;
  return (
    <tr>
      <td><img src={book.coverURL} alt={book.title} width="100" /></td>
      <td>
        <Link to={`/books/${bookId}`}>
          {book.title}
        </Link>
      </td>
      <td>{book.author}</td>
      <td>{progress.toFixed(0)}%</td>
    </tr>
  );
};

const BookList = ({ books }) => {
  return (
    <main>
      <h1>Books</h1>
      <BookReport books={books} />
      <table>
        <thead>
          <th>Cover</th>
          <th className="book-title">Book Title</th>
          <th>Author</th>
          <th>Progress</th>
        </thead>
        <tbody>
          books
          {_.isEmpty(books) ? <li>No books</li> : books.map(book => <BookItem key={book.id} book={book} />)}
        </tbody>
      </table>
    </main>
  );
};

export default BookList;
