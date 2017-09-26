import React from 'react';
import FaHeartO from 'react-icons/lib/fa/heart-o';
import FaThumbsOUp from 'react-icons/lib/fa/thumbs-o-up';
import FaThumbsODown from 'react-icons/lib/fa/thumbs-o-down';
import FaCommentO from 'react-icons/lib/fa/comment-o';

const PostStats = () => (
  <div className='post-stats'>
    <div className='post-score'>
      <span>{voteScore}</span>
      <WhiteSpace />
      <FaHeartO />
    </div>
    <button>
      <FaThumbsOUp />
    </button>
    <button>
      <FaThumbsODown />
    </button>
    <button>
      <FaCommentO />
    </button>
  </div>
)

export default PostStats;