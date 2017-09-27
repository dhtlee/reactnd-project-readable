import React from 'react';
import { withRouter } from 'react-router-dom';

import Sorter from './sorter';
import Post from './post';

const PostList = ({ posts, location: { search } }) => {
  const params = new URLSearchParams(search);
  const sortBy = params.get('sort');
  if (!!search && posts.length !== 0) {
    posts.sort((post1, post2) => post2[sortBy] - post1[sortBy]);
  }
  
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

export default withRouter(PostList);