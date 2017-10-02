import React from 'react';
import { connect } from 'react-redux';

import { upvoteComment, downvoteComment } from 'actions/comments';
import Stats from './stats';
import ContentControl from './content-control';
import { formatDate } from 'utils/helper';

const Comment = ({ id, body, author, timestamp, voteScore,
  onUpvoteComment, onDownvoteComment }) => {
  return (
    <div className='content-container-comment'>
      <Stats
        voteScore={voteScore}
        onUpvote={() => onUpvoteComment(id)}
        onDownvote={() => onDownvoteComment(id)}
      />
      <div className='comment-detail'>
        <div className='comment-body'>{body}</div>
        <p className='author-date-time'>by <b>{author}</b> at {formatDate(timestamp)}</p>
        <ContentControl />
      </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  onUpvoteComment: (id) => dispatch(upvoteComment(id)),
  onDownvoteComment: (id) => dispatch(downvoteComment(id))
})

export default connect(undefined, mapDispatchToProps)(Comment);