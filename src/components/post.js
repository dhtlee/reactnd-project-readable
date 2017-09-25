import React from 'react';

const Post = ({ title, body, author, timestamp }) => {
  const date = new Date(timestamp).toLocaleString();
  return (
    <div className='post'>
      <h2>{title}</h2>
      <p className='post-author-date-time'>by <b>{author}</b> at {date}</p>
      <p>{body}</p>
    </div>
  )
}

export default Post;