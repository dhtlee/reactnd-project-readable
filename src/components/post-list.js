import React from 'react';

import Sorter from './sorter';
import Post from './post';

const PostList = ({ posts }) => {
  return (
    <div className='post-list'>
      <Sorter />
      {posts.length === 0 ? 
        <p>Whoops! There are no posts to display!</p>
        :
        posts.map(post => 
          <Post key={post.id} showDetail={false} {...post} />
        )
      }
    </div>
  )
}

export default PostList;