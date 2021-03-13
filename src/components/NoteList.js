import React, { useState, useEffect } from 'react';
import _ from 'lodash';

import bookService from '../servers/bookServer';

const NoteItem = ({ annotation }) => {
  return (
    <dl>
      <dt>
        {annotation.selectedText}
      </dt>
      <dd>
        {annotation.comment}
      </dd>
    </dl>
  );
};

const NoteList = ({ bookId, chapterId }) => {
  const [annotations, setAnnotations] = useState([]);

  useEffect(() => {
    bookService
      .getNotesByChapterId(bookId, chapterId)
      .then((annotations) => {
        setAnnotations(annotations);
      })
  }, []);

  return (
    <article>
      { _.isEmpty(annotations)
        ? <p>No notes found.</p>
        : annotations.map(annotation => <NoteItem key={annotation.id} annotation={annotation} />)}
    </article>
  );
};

export default NoteList;
