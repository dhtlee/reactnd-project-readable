import React from 'react';

const Post = ({ title, body, author, timestamp }) => {
  const date = new Date(timestamp).toLocaleString();
  return (
    <div className='post'>
      <h2 className='post-title'>{title}</h2>
      <p className='post-author-date-time'>by <b>{author}</b> at {date}</p>
      <p className='post-body'>{body}</p>
    </div>
  )
}

export default Post;