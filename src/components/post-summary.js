import React from 'react';
import { Link } from 'react-router-dom';

import { formatDate } from 'utils/helper';

const PostSummary = ({ id, title, author, timestamp }) => (
  <div className='post-summary'>
    <Link to={`/posts/${id}`}>
      <h2 className='post-title'>{title}</h2>
    </Link>
    <p className='author-date-time'>by <b>{author}</b> at {formatDate(timestamp)}</p>
  </div>
)

export default PostSummary;