import React from 'react';

import { CONTENT_COMMENTS } from 'actions/constants';
import Sorter from './sorter';
import Comment from './comment';

const CommentList = ({ comments }) => (
  <div>
    <div className='post-comments'>
      <h3 className='heading'>Comments</h3>
    </div>
    <Sorter content={CONTENT_COMMENTS} />
    {comments.length === 0 ? 
      <p><em>Darn, looks like nobody cares about this post!</em></p>
      :
      comments.map(comment => <Comment key={comment.id} {...comment} />)
    }
  </div>
)

export default CommentList;