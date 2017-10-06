import React from 'react';
import { Field, reduxForm } from 'redux-form';

const CommentForm = (props) => {
  const { hideForm, handleSubmit, pristine, submitting } = props;
  return (
    <div className='content-container-comment'>
      <form className='form' onSubmit={handleSubmit}>
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

export default reduxForm({
  form: 'comment'
})(CommentForm);