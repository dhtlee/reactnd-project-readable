import React from 'react';

import { formatDate } from 'utils/helper';

const Comment = ({ body, author, timestamp }) => {
  return (
    <div>
      <div className='post-comment-body'>
        {body}
      </div>
      <p className='author-date-time'>by <b>{author}</b> at {formatDate(timestamp)}</p>
    </div>
  )
}

export default Comment;