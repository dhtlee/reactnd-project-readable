import React from 'react';

const Comment = ({ author, timestamp, body }) => {
  const date = new Date(timestamp).toLocaleString();
  return (
    <div>
      <div className='post-comment-body'>
        {body}
      </div>
      <p className='author-date-time'>by <b>{author}</b> at {date}</p>
    </div>
  )
}

export default Comment;