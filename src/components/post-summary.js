import React from 'react';
import { Link } from 'react-router-dom';

const PostSummary = ({ id, title }) => (
  <div className='post-summary'>
    <Link to={`/posts/${id}`}>
      <h2 className='post-title'>{title}</h2>
    </Link>
  </div>
)

export default PostSummary;