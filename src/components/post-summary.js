import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { deletePost, upvotePost, downvotePost } from 'actions/posts';
import Stats from './stats';
import ContentControlPost from './content-control-post';
import { formatDate } from 'utils/helper';

const PostSummary = ({ id, title, author, timestamp, comments = [], voteScore, onUpvotePost, onDownvotePost, deletePost }) => (
  <div className='content-container-post'>
    <Stats
      onUpvote={() => onUpvotePost(id)}
      onDownvote={() => onDownvotePost(id)}
      voteScore={voteScore}
    />
    <div className='post-summary'>
      <Link to={`/posts/${id}`}>
        <h2 className='heading'>{title}</h2>
      </Link>
      <p className='author-date-time'>by <b>{author}</b> at {formatDate(timestamp)}</p>
      <ContentControlPost id={id} commentsCount={comments.length} />
    </div>
  </div>
)

const mapDispatchToProps = (dispatch) => ({
  onUpvotePost: (id) => dispatch(upvotePost(id)),
  onDownvotePost: (id) => dispatch(downvotePost(id)),
  deletePost: (id) => dispatch(deletePost(id))
})

export default connect(undefined, mapDispatchToProps)(PostSummary);