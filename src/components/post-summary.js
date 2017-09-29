import React from 'react';
import { Link } from 'react-router-dom';

import Stats from './stats';
import ContentControl from './content-control';
import { formatDate } from 'utils/helper';

const PostSummary = ({ id, title, author, timestamp, comments = [], voteScore, onUpvotePost, onDownvotePost }) => (
  <div className='content-container-post'>
    <Stats 
      id={id}
      onUpvote={onUpvotePost}
      onDownvote={onDownvotePost}
      voteScore={voteScore}
    />
    <div className='post-detail'>
      <Link to={`/posts/${id}`}>
        <h2 className='post-title'>{title}</h2>
      </Link>
      <p className='author-date-time'>by <b>{author}</b> at {formatDate(timestamp)}</p>
      <ContentControl commentsCount={comments.length}/>
    </div>
  </div>
)

export default PostSummary;