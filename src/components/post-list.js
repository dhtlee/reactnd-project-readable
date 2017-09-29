import React from 'react';

import SorterDropdown from './sorter-dropdown';
import Sorter from './sorter';
import PostSummary from './post-summary';

const PostList = ({ posts, onUpvotePost, onDownvotePost }) => {
  return (
    <div className='post-list'>
      {/* <SorterDropdown /> */}
      <Sorter />
      {posts.length === 0 ? 
        <p><em>Whoops! There are no posts to display!</em></p>
        :
        posts.map(post => 
          <PostSummary
            key={post.id}
            {...post}
            onUpvotePost={onUpvotePost}
            onDownvotePost={onDownvotePost}
          />
        )
      }
    </div>
  )
}

export default PostList;