import React from 'react';
import FaCommentO from 'react-icons/lib/fa/comment-o';
import FaEdit from 'react-icons/lib/fa/edit';
import FaTrashO from 'react-icons/lib/fa/trash-o';

import WhiteSpace from './white-space';

const ContentControl = ({ commentsCount }) => (
  <div className='content-control'>
    { commentsCount !== undefined && 
      <div className='content-control-item'>
        <FaCommentO />
        <WhiteSpace />
        <span>{commentsCount} comments</span>
      </div>
    }
    <div className='content-control-item'>
      <FaEdit />
      <WhiteSpace />
      <a>Edit</a>
    </div>
    <div className='content-control-item'>
      <FaTrashO />
      <WhiteSpace />
      <a>Delete</a>
    </div>
  </div>
)

export default ContentControl;