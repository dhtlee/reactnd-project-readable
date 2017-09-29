import React, { Component } from 'react';

import LineSeparator from './line-separator';
import PostStats from './post-stats';
import CommentList from './comment-list';
import { formatDate } from 'utils/helper';

class Post extends Component {
  render() {
    const { id, title, body, author, timestamp, voteScore, comments = [],
            onUpvotePost, onDownvotePost } = this.props;
    return (
      <div>
        <div className='post-detail'>
          <h2 className='heading'>{title}</h2>
          <div>
            <p className='author-date-time'>by <b>{author}</b> at {formatDate(timestamp)}</p>
            <p className='post-body'>{body}</p>
            <PostStats 
              postId={id}
              onUpvotePost={onUpvotePost}
              onDownvotePost={onDownvotePost}
              voteScore={voteScore}
              commentsCount={comments.length}
            />
          </div>
        </div>
        <LineSeparator />
        <CommentList comments={comments} />
      </div>
    )
  }
}

export default Post;