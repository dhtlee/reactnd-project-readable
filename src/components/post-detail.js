import React, { Component } from 'react';

import LineSeparator from './line-separator';
import Stats from './stats';
import ContentControl from './content-control';
import CommentList from './comment-list';
import { formatDate } from 'utils/helper';

class Post extends Component {
  render() {
    const { id, title, body, author, timestamp, voteScore, comments = [],
            onUpvotePost, onDownvotePost } = this.props;
    return (
      <div>
        <div className='content-container-post'>
          <Stats 
            id={id}
            onUpvotePost={onUpvotePost}
            onDownvotePost={onDownvotePost}
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
}

export default Post;