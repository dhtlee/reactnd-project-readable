import React, { Component } from 'react';

import { CONTENT_COMMENTS } from 'actions/constants';
import Sorter from './sorter';
import Comment from './comment';
import CommentForm from './comment-form';

class CommentList extends Component {
  constructor (props) {
    super(props);
    this.state = {
      displayForm: false
    }
    this.showNewCommentForm = this.showNewCommentForm.bind(this);
    this.hideNewCommentForm = this.hideNewCommentForm.bind(this);
  }

  showNewCommentForm() {
    this.setState({ displayForm: true });
  }

  hideNewCommentForm() {
    this.setState({ displayForm: false });
  }

  render() {
    const { postId, comments } = this.props;
    const { displayForm } = this.state;
    return (
      <div>
        <div className='post-comments'>
          <h3 className='heading'>Comments</h3>
        </div>
        <div className='post-submenu'>
          <a className='fake-link' onClick={(event) => {
            event.preventDefault();
            this.showNewCommentForm();
            }}>New Comment</a>
          <Sorter content={CONTENT_COMMENTS} />
        </div>
        {displayForm && 
        <CommentForm 
          hideForm={this.hideNewCommentForm}
          postId={postId}
        />}
        {comments.length === 0 ? 
          <p><em>Darn, looks like nobody cares about this post!</em></p>
          :
          comments.map(comment => <Comment key={comment.id} {...comment} />)
        }
      </div>
    )
  }
}

export default CommentList;