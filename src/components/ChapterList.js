import React, { useState, useEffect } from 'react';
import {
  useRouteMatch
} from 'react-router-dom';
import _ from 'lodash';

import bookService from '../servers/bookServer';
import NoteList from './NoteList';

const ChapterItem = ({ bookId, chapter }) => {
  if (_.isEmpty(chapter.title)) {
    chapter.title = 'Untitled';
  }
  return (
    <section>
      <h3>* {chapter.title}</h3>
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
    <div>
      { _.isEmpty(chapters)
        ? <li>No notes found.</li>
        : chapters.map(chapter => <ChapterItem key={chapter.id} bookId={bookId} chapter={chapter} />)}
    </div>
  );
};

export default ChapterList;
