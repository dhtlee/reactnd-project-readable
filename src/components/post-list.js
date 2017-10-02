import React from 'react';

import { CONTENT_POSTS } from 'actions/constants';
import Sorter from './sorter';
import PostSummary from './post-summary';

const PostList = ({ posts }) => (
  <div className='post-list'>
    <Sorter content={CONTENT_POSTS} />
    {posts.length === 0 ? 
      <p><em>Whoops! There are no posts to display!</em></p>
      :
      posts.map(post => 
        <PostSummary key={post.id} {...post} />
      )
    }
  </div>
)

export default PostList;