import React from 'react';

import Stats from './stats';
import ContentControl from './content-control';
import { formatDate } from 'utils/helper';

const Comment = ({ id, body, author, timestamp, voteScore,
  onUpvoteComment, onDownvoteComment }) => {
  return (
    <div className='content-container-comment'>
      <Stats 
        id={id}
        voteScore={voteScore}
        onUpvote={onUpvoteComment}
        onDownvote={onDownvoteComment}
      />
      <div className='comment-detail'>
        <div className='comment-body'>{body}</div>
        <p className='author-date-time'>by <b>{author}</b> at {formatDate(timestamp)}</p>
        <ContentControl />
      </div>
    </div>
  )
}

export default Comment;