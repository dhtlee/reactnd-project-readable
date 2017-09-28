import React from 'react';
import FaHeartO from 'react-icons/lib/fa/heart-o';
import FaThumbsOUp from 'react-icons/lib/fa/thumbs-o-up';
import FaThumbsODown from 'react-icons/lib/fa/thumbs-o-down';
import FaCommentO from 'react-icons/lib/fa/comment-o';

import WhiteSpace from './white-space';

const PostStats = ({ postId, showComments, voteScore, commentsCount }) => (
  <div className='post-stats'>
    <div className='post-stats-item'>
      <span>{voteScore}</span>
      <WhiteSpace />
      <FaHeartO />
    </div>
    <div className='post-stats-item'>
      <button>
        <FaThumbsOUp />
      </button>
    </div>
    <div className='post-stats-item'>
      <button>
        <FaThumbsODown />
      </button>
    </div>
    <div className='post-stats-item'>
      <FaCommentO />
      <WhiteSpace />
      <span>{commentsCount}</span>
    </div>
  </div>
)

export default PostStats;