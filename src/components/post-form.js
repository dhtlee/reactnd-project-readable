import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';

import { capitalizeFirst } from 'utils/helper';
import { createPost } from 'actions/posts';

const PostForm = (props) => {
  const { handleSubmit, pristine, submitting, categories, createPost, history } = props;
  return (
    <form className='form' onSubmit={handleSubmit(data => {
        createPost(data);
        history.push('/');
      })}>
      <div className='form-field'>
        <label>Title</label>
        <div className='form-field-input'>
          <Field
            name='title'
            component='input'
            type='text'
            placeholder='Super duper awesome title'
          />
        </div>
      </div>
      <div className='form-field'>
        <label>Author</label>
        <div className='form-field-input'>
          <Field
            name='author'
            component='input'
            type='text'
            placeholder='Name that is going to be famous!'
          />
        </div>
      </div>
      <div className='form-field'>
        <label>Category</label>
        <div className='form-field-input'>
          <Field name='category' component='select'>
            {categories.map((category, index) => 
              <option key={index} value={category.name}>{capitalizeFirst(category.name)}</option>
            )}
          </Field>
        </div>
      </div>
      <div className='form-field'>
        <label>Body</label>
        <div className='form-field-input'>
          <Field
            name='body'
            component='textarea'
            placeholder='Write your life story here'
          />
        </div>
      </div>
      <div className='form-field'>
        <button type='button' onClick={() => history.goBack()}>
          Back
        </button>
        <button type='submit' disabled={pristine || submitting}>
          Submit
        </button>
      </div>
    </form>
  )
}

const mapStateToProps = ({ categories }) => ({
  categories
})

const mapDispatchToProps = (dispatch) => ({
  createPost: (data) => dispatch(createPost(data))
})

export default reduxForm({ 
  form: 'post'
})(withRouter(connect(mapStateToProps, mapDispatchToProps)(PostForm)));