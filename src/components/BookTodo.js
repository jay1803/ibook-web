import React from 'react';
import {
  Link
} from 'react-router-dom';
import _ from 'lodash';

const BookItem = ({ book }) => {
  const bookId = book.id;
  const progress = book.progress * 100;
  return (
      <p>** TODO {book.title}<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;:PROPERTIES:<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;:AUTHOR:   {book.author}<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;:END:
      </p>
  );
};

const BookList = ({ books }) => {
  return (
    <main>
      <h1>Books</h1>
          {_.isEmpty(books)
            ? <li>No books</li>
            : books.map(book => <BookItem key={book.id} book={book} />)}
    </main>
  );
};

export default BookList;
