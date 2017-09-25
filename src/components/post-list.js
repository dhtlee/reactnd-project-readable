import React from 'react';

import Post from './post';

const PostList = ({ posts }) => (
  <div className='post-list'>
    {posts.map(post => 
      <Post key={post.id} {...post} />
    )}
  </div>
)

export default PostList;