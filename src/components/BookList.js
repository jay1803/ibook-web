import React from 'react';
import {
  Link
} from 'react-router-dom';
import _ from 'lodash';

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
      <table>
        <thead>
          <th>Cover</th>
          <th className="book-title">Book Title</th>
          <th>Author</th>
          <th>Progress</th>
        </thead>
        <tbody>
          {_.isEmpty(books)
            ? <li>No books</li>
            : books.map(book => <BookItem key={book.id} book={book} />)}
        </tbody>
      </table>
    </main>
  );
};

export default BookList;
