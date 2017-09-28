import React from 'react';

import Sorter from './sorter';
import PostSummary from './post-summary';

const PostList = ({ posts }) => {
  return (
    <div className='post-list'>
      <Sorter />
      {posts.length === 0 ? 
        <p><em>Whoops! There are no posts to display!</em></p>
        :
        posts.map(post => 
          <PostSummary key={post.id} id={post.id} title={post.title} />
        )
      }
    </div>
  )
}

export default PostList;