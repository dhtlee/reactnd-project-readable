import React from 'react';

import Post from './post';

const PostList = ({ posts }) => (
  posts.length === 0 ? 
    <p>Whoops! There are no posts to display!</p>
    :
    <div className='post-list'>
      {posts.map(post => 
        <Post key={post.id} {...post} />
      )}
    </div>
)

export default PostList;