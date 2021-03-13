import React from 'react';
import {
  Link
} from 'react-router-dom';
import _ from 'lodash';

const BookItem = ({ book }) => {
  const bookId = book.id;
  return (
    <li>
      <Link to={`/books/${bookId}`}>
        {book.title}
      </Link>
    </li>
  );
};

const BookList = ({ books }) => {
  return (
    <main>
      <h1>Books</h1>
      <ul>
        {_.isEmpty(books)
          ? <li>No books</li>
          : books.map(book => <BookItem key={book.id} book={book} />)}
      </ul>
    </main>
  );
};

export default BookList;
