import React from 'react';

import { CONTENT_POSTS } from 'actions';
import Sorter from './sorter';
import PostSummary from './post-summary';

const PostList = ({ posts, onUpvotePost, onDownvotePost, currentSortBy, onSelectSortBy }) => {
  return (
    <div className='post-list'>
      <Sorter 
        currentSelection={currentSortBy}
        onSelect={onSelectSortBy(CONTENT_POSTS)}
      />
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