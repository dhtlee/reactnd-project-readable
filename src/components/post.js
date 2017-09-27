import React from 'react';
import { Link } from 'react-router-dom';

import PostStats from './post-stats';

const Post = ({ showDetail, title, body, author, timestamp, voteScore }) => {
  const date = new Date(timestamp).toLocaleString();
  return (
    <div className='post'>
      <Link to={`/post/${encodeURI(title)}`}>
        <h2 className='post-title'>{title}</h2>
      </Link>
      {showDetail ?
        <div>
          <p className='post-author-date-time'>by <b>{author}</b> at {date}</p>
          <p className='post-body'>{body}</p>
          <PostStats voteScore={voteScore} />
        </div>
        :
        null
      }
    </div>
  )
}

export default Post;