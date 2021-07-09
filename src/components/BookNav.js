import React from 'react';
import _ from 'lodash';

const ChapterItem = ({title, id}) => {
  return (
    <li>
      <a href={'#' + id}>{title}</a>
    </li>
  )
}

const BookNav = ({chapters}) => {
  return (
    <aside className='book-nav'>
      <ul>
        {chapters.map(chapter => <ChapterItem title={chapter.title} id={chapter.id} />)}
      </ul>
    </aside>
  )
}

export default BookNav;