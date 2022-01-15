import React, { useState, useEffect } from 'react';
import _ from 'lodash';

import bookService from '../servers/bookServer';

const NoteItem = ({ annotation }) => {
  if (annotation.comment) {
  return (
    <div>
      <p className={'style-' + annotation.style}>
        {annotation.selectedText}
        &nbsp;
      </p>
      <p>
        #+begin_comment<br/>
        {annotation.comment}<br/>
        #+end_comment
      </p>
    </div>
  )} else {
    return (
      <p className={'style-' + annotation.style}>
        {annotation.selectedText}
      </p>
    )
  };
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
