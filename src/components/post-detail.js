import React, { Component } from 'react';
import { connect } from 'react-redux';

import Api from 'api';
import { getAllCommentsSuccess } from 'actions';
import PostStats from './post-stats';

class Post extends Component {
  componentDidMount() {
  }

  onShowComments(postId) {
    console.log(`Post id = ${postId}`);
  }

  render() {
    const { id, title, body, author, timestamp, voteScore } = this.props;
    const date = new Date(timestamp).toLocaleString();
    return (
      <div className='post-detail'>
        <h2 className='post-title'>{title}</h2>
        <div>
          <p className='post-author-date-time'>by <b>{author}</b> at {date}</p>
          <p className='post-body'>{body}</p>
          <PostStats 
            postId={id}
            showComments={this.onShowComments}
            voteScore={voteScore}
          />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({
  loadComments: (comments) => dispatch(getAllCommentsSuccess(comments))
})

export default connect(mapStateToProps, mapDispatchToProps)(Post);