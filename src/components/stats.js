import React from 'react';
import FaThumbsOUp from 'react-icons/lib/fa/thumbs-o-up';
import FaThumbsODown from 'react-icons/lib/fa/thumbs-o-down';

const Stats = ({ id, voteScore, onUpvotePost, onDownvotePost }) => (
  <div className='stats'>
    <div className='stats-item'>
      <FaThumbsOUp onClick={() => onUpvotePost(id)} />
    </div>
    <div className='stats-item'>
      <span>{voteScore}</span>
    </div>
    <div className='stats-item'>
      <FaThumbsODown onClick={() => onDownvotePost(id)} />
    </div>
  </div>
)

export default Stats;