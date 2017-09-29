import React from 'react';
import FaThumbsOUp from 'react-icons/lib/fa/thumbs-o-up';
import FaThumbsODown from 'react-icons/lib/fa/thumbs-o-down';

const Stats = ({ id, voteScore, onUpvote, onDownvote }) => (
  <div className='stats'>
    <div className='stats-item'>
      <FaThumbsOUp onClick={() => onUpvote(id)} />
    </div>
    <div className='stats-item'>
      <span>{voteScore}</span>
    </div>
    <div className='stats-item'>
      <FaThumbsODown onClick={() => onDownvote(id)} />
    </div>
  </div>
)

export default Stats;