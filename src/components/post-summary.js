import React from 'react';
import { Link } from 'react-router-dom';

const PostSummary = ({ title }) => (
  <div className='post-summary'>
    <Link to={`/posts/${encodeURI(title)}`}>
      <h2 className='post-title'>{title}</h2>
    </Link>
  </div>
)

export default PostSummary;