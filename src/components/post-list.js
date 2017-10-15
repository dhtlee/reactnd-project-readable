import React from 'react';
import { Link } from 'react-router-dom';

import { CONTENT_POSTS } from 'actions/constants';
import Sorter from './sorter';
import PostSummary from './post-summary';

const withPostListEmpty = (WrappedComponent) => (props) => (
  props.posts.length === 0 ?
  <p><em>Whoops! There are no posts to display!</em></p>
  :
  <WrappedComponent {...props} />
)

const PostList = ({ posts }) => (
  <div className='post-list'>
    <div className='post-submenu'>
      <Link to='/posts/new'>New Post</Link>
      <Sorter content={CONTENT_POSTS} />
    </div>
    {posts.map(post => 
        <PostSummary key={post.id} {...post} />
      )
    }
  </div>
)

export default withPostListEmpty(PostList);