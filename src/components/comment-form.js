import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import { createComment } from 'actions/comments';

const CommentForm = (props) => {
  const { postId, hideForm, handleSubmit, pristine, submitting, createComment } = props;
  return (
    <div className='content-container-comment'>
      <form className='form' onSubmit={handleSubmit(data => {
          createComment(postId, data);
          hideForm();
        })}>
        <div className='form-field'>
          <label>Author</label>
          <div className='form-field-input'>
            <Field
              name='author'
              component='input'
              type='text'
              placeholder='your nickname'
            />
          </div>
        </div>
        <div className='form-field'>
          <label>Body</label>
          <div className='form-field-input'>
            <Field
              name='body'
              component='textarea'
              placeholder='type in your crazy thoughts here'
            />
          </div>
        </div>
        <div className='form-field'>
          <button type='button' onClick={hideForm}>
            Cancel
          </button>
          <button type='submit' disabled={pristine || submitting}>
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  createComment: (postId, data) => dispatch(createComment(postId, data))
})

export default reduxForm({
  form: 'comment',
  enableReinitialize: true
})(connect(undefined, mapDispatchToProps)(CommentForm));