import React, { Component } from 'react';

import LineSeparator from './line-separator';
import PostStats from './post-stats';
import CommentList from './comment-list';

class Post extends Component {
  onShowComments(postId) {
    console.log(`Post id = ${postId}`);
  }

  render() {
    const { id, title, body, author, timestamp, voteScore, comments } = this.props;
    const date = new Date(timestamp).toLocaleString();
    return (
      <div>
        <div className='post-detail'>
          <h2 className='heading'>{title}</h2>
          <div>
            <p className='author-date-time'>by <b>{author}</b> at {date}</p>
            <p className='post-body'>{body}</p>
            <PostStats 
              postId={id}
              showComments={this.onShowComments}
              voteScore={voteScore}
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