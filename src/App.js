import './App.css';
import {
  BrowserRouter as Router,
  Switch, Route, Link
} from 'react-router-dom';
import React, { useState, useEffect } from 'react';

import bookService from './servers/bookServer';

import BookList from './components/BookList';
import BookDetail from './components/BookDetail';

const App = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    bookService
      .getBooks()
      .then(books => {
        setBooks(books);
      });
  }, []);

  return (
    <Router>
      <div className="App">
        <Link to="/books">All books</Link>
        <Switch>
          <Route exact path='/books'>
            <BookList books={books} />
          </Route>
          <Route exact path='/books/:bookId'>
            <BookDetail />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
