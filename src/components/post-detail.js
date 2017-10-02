import React from 'react';
import { connect } from 'react-redux';

import { upvotePost, downvotePost } from 'actions/posts';
import LineSeparator from './line-separator';
import Stats from './stats';
import ContentControl from './content-control';
import CommentList from './comment-list';
import { formatDate } from 'utils/helper';

const PostDetail = (props) => {
  const { id, title, body, author, timestamp, voteScore, comments = [],
    onUpvotePost, onDownvotePost } = props;
  
  return (
    <div>
      <div className='content-container-post'>
        <Stats
          onUpvote={() => onUpvotePost(id)}
          onDownvote={() => onDownvotePost(id)}
          voteScore={voteScore}
        />
        <div className='post-detail'>
          <h2 className='heading'>{title}</h2>
          <p className='author-date-time'>by <b>{author}</b> at {formatDate(timestamp)}</p>
          <p className='post-body'>{body}</p>
          <ContentControl commentsCount={comments.length}/>
        </div>
      </div>
      <LineSeparator />
      <CommentList comments={comments} />
    </div>
  )
} 

const mapDispatchToProps = (dispatch) => ({
  onUpvotePost: (id) => dispatch(upvotePost(id)),
  onDownvotePost: (id) => dispatch(downvotePost(id))
})

export default connect(undefined, mapDispatchToProps)(PostDetail);