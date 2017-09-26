import React from 'react';
import { Link } from 'react-router-dom';
import FaHeartO from 'react-icons/lib/fa/heart-o';

import WhiteSpace from './white-space';

const Post = ({ title, body, author, timestamp, voteScore }) => {
  const date = new Date(timestamp).toLocaleString();
  return (
    <div className='post'>
      <Link to={`/post/${encodeURI(title)}`}>
        <h2 className='post-title'>{title}</h2>
      </Link>
      <p className='post-author-date-time'>by <b>{author}</b> at {date}</p>
      <p className='post-body'>{body}</p>
      <div className='post-stats'>
        <div className='post-stats-score'>
          <span>{voteScore}</span>
          <WhiteSpace />
          <FaHeartO />
        </div>
      </div>
    </div>
  )
}

export default Post;