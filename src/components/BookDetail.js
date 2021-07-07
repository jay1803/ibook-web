import React, { useState, useEffect } from 'react';
import {
  useRouteMatch
} from 'react-router-dom';

import bookService from '../servers/bookServer';
import ChapterList from './ChapterList';
import BookNav from './BookNav';

const BookDetail = () => {
  const match = useRouteMatch('/books/:bookId');
  const bookId = match.params.bookId;

  const [book, setBook] = useState('');

  useEffect(() => {
    bookService
      .getBookById(bookId)
      .then((book) => {
        setBook(book);
      });
  }, []);

  return (
    <main>
      <h1>{book.title}</h1>
      <ChapterList bookId={bookId} />
    </main>
  );
};

export default BookDetail;
