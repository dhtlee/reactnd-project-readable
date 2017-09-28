import React from 'react';

import Comment from './comment';

const CommentList = ({ comments }) => (
  <div>
    <div className='post-comments'>
      <h3 className='heading'>Comments</h3>
    </div>
    {comments.length === 0 ? 
      <p><em>Darn, looks like nobody cares about this post!</em></p>
      :
      comments.map(comment => <Comment key={comment.id} {...comment} />)
    }
  </div>
)

export default CommentList;