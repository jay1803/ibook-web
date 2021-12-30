import React, { useState, useEffect } from 'react';
import _ from 'lodash';

import bookService from '../servers/bookServer';
import NoteList from './NoteList';
import BookNav from './BookNav';

const ChapterItem = ({ bookId, chapter }) => {
  if (_.isEmpty(chapter.title)) {
    chapter.title = 'Untitled';
  }
  return (
    <section id={chapter.id}>
      <NoteList bookId={bookId} chapterId={chapter.id} />
    </section>
  );
};

const ChapterList = ({bookId}) => {
  const [chapters, setChapters] = useState([]);

  useEffect(() => {
    bookService
      .getChaptersByBookId(bookId)
      .then((chapters) => {
        setChapters(chapters);
      });
  }, []);

  return (
    <div className='book-details'>
      <div className='book-annotations'>
        { _.isEmpty(chapters)
          ? <li>No notes found.</li>
          : chapters.map(chapter => <ChapterItem key={chapter.id} bookId={bookId} chapter={chapter} />)}
      </div>
      <BookNav key={chapters.id} className='book-nav' chapters={chapters} />
    </div>
  );
};

export default ChapterList;
